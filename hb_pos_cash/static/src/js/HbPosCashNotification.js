odoo.define('hb_pos_cash.HbPosCashNotification', function (require) {
    'use strict';

    const { useListener } = require('web.custom_hooks');
    const PosComponent = require('point_of_sale.PosComponent');
    const Registries = require('point_of_sale.Registries');

    class HbPosCashNotification extends PosComponent {


        constructor() {
            super(...arguments)
            useListener('click', this.hbCloseNotification);
        }

        hbShowNotification(message, duration = 2000) {
            this.trigger('hb-show-notification', { message, duration });
        }
        hbCloseNotification() {
            this.trigger('hb-close-notification');
        }

        mounted() {
            setTimeout(() => {
                this.hbCloseNotification();
            }, this.props.duration)
        }
    }
    Notification.template = 'HbPosCashNotification';

    Registries.Component.add(HbPosCashNotification);

    return HbPosCashNotification;
});
