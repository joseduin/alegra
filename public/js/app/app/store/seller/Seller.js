/**
 * Store de Seller
 *
 * @author Jose Duin <josemiguelduin@gmail.com>
 * @verion 0.1
 * @subpackage client
 * @see ExtJs4 <http://www.sencha.com>
 */

/**
 * @class AM.store.seller.Seller
 * @extends Ext.data.Store
 */
Ext.define('AM.store.seller.Seller', {
    extend  : 'Ext.data.Store',
    model   : 'AM.model.seller.Seller',
    autoLoad: true,
    proxy   : {
        type        : 'ajax',
        url         : GLOBAL_PATH,
        extraParams : {
            _action : 'getAllListSeller'
        },
        reader      : {
            type            : 'json',
            root            : 'result',
            successProperty : 'success'
        },
    }
});