/**
 * Controlador de vendedores
 *
 * @author Jose Duin <josemiguelduin@gmail.com>
 * @verion 0.1
 * @see ExtJs4 <http://www.sencha.com>
 */

/**
 * @class AM.controller.Seller
 * @extends Ext.app.Controller
 */
Ext.define('AM.controller.Seller', {
    extend: 'Ext.app.Controller',
	stores: [
        'seller.Seller',
    ],
    models: [
        'seller.Seller'
    ],

    init: function() {
        this.control({
            
        });
    },

});