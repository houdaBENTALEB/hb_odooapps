# -*- coding: utf-8 -*-
# Copyright (C)  Houda BENTALEB

from odoo import models, _


class PosSession(models.Model):
    _inherit = 'pos.session'

    def try_cash_in_out(self, _type, amount, reason, extras):
        sign = 1 if _type == 'in' else -1
        self.env['cash.box.out'] \
            .with_context({'active_model': 'pos.session', 'active_ids': self.ids}) \
            .create({'amount': sign * amount, 'name': reason}) \
            .run()
        message_content = [f"Cash {extras['translatedType']}", f'- Amount: {extras["formattedAmount"]}']
        if reason:
            message_content.append(f'- Reason: {reason}')
        self.message_post(body='<br/>\n'.join(message_content))

    def show_cash_register(self):
        return {
            'name': _('Cash register for %s') % (self.cash_register_id.name,),
            'type': 'ir.actions.act_window',
            'res_model': 'account.bank.statement',
            'view_mode': 'form',
            'res_id': self.cash_register_id.id,
        }
