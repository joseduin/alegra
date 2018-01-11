/**
 * Controlador de listado de precios
 *
 * @author Jose Duin <josemiguelduin@gmail.com>
 * @verion 0.1
 * @see ExtJs4 <http://www.sencha.com>
 */

/**
 * @class AM.controller.PriceList
 * @extends Ext.app.Controller
 */
Ext.define('AM.controller.PriceList', {
    extend: 'Ext.app.Controller',
	stores: [
        'pricelist.PriceList',
    ],
    models: [
        'pricelist.PriceList'
    ],

    init: function() {
        this.control({
            
        });
    },

});