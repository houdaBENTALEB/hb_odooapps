# -*- coding: utf-8 -*-
# Copyright (C)  Houda BENTALEB
{
    'name': 'Cash In/Out',

    'author': 'Houda BENTALEB',

    'version': '14.0.1.0.0',

    'category': 'Sales/Point of Sale',

    'summary': 'This module allows to add cash In/Out popup.',

    'description': "Cach In/Out popup",

    'depends': [
        'point_of_sale',
    ],

    'data': [
        'views/pos_session_view.xml',
        'views/asset_pos_common.xml',
    ],

    'qweb': [
        'static/src/xml/Chrome.xml',
        'static/src/xml/CashMoveButton.xml',
        'static/src/xml/CashMovePopup.xml',
        'static/src/xml/CashMoveReceipt.xml',
        'static/src/xml/HbPosCashNotification.xml',

    ],

    'images': ['static/description/background.png'],

    'installable': True,

    'auto_install': False,

    'application': False,

}
