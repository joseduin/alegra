/**
 * Controlador de terminos de pago
 *
 * @author Jose Duin <josemiguelduin@gmail.com>
 * @verion 0.1
 * @see ExtJs4 <http://www.sencha.com>
 */

/**
 * @class AM.controller.Term
 * @extends Ext.app.Controller
 */
Ext.define('AM.controller.Term', {
    extend: 'Ext.app.Controller',
	stores: [
        'term.Term',
    ],
    models: [
        'term.Term'
    ],

    init: function() {
        this.control({
            
        });
    },

});