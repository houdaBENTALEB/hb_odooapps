odoo.define('hb_pos_cash.chrome', function (require) {
    'use strict';
    const { useState } = owl;


    const Chrome = require('point_of_sale.Chrome');
    const Registries = require('point_of_sale.Registries');
    const { useListener } = require('web.custom_hooks');


    const HbPosCashChrome = (Chrome) =>
        class extends Chrome {

        constructor() {
            super(...arguments);

            useListener('hb-show-notification', this._onHbShowNotification);
            useListener('hb-close-notification', this._onHbCloseNotification);
            this.state = useState({
                uiState: 'LOADING', // 'LOADING' | 'READY' | 'CLOSING'
                debugWidgetIsShown: true,
                hasBigScrollBars: false,
                sound: { src: null },
                notification: {
                    isShown: false,
                    message: '',
                    duration: 2000,
                }
            });
            }


        showCashMoveButton() {
            return this.env.pos && this.env.pos.config && this.env.pos.config.cash_control;
        }


        _onHbShowNotification({ detail: { message, duration } }) {
            this.state.notification.isShown = true;
            this.state.notification.message = message;
            this.state.notification.duration = duration;
        }
        _onHbCloseNotification() {
            this.state.notification.isShown = false;
            this.state.notification.message = '';
        }
        };

    Registries.Component.extend(Chrome, HbPosCashChrome);

    return Chrome;
});
