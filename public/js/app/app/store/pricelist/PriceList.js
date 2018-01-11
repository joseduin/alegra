/**
 * Store de PriceList
 *
 * @author Jose Duin <josemiguelduin@gmail.com>
 * @verion 0.1
 * @subpackage client
 * @see ExtJs4 <http://www.sencha.com>
 */

/**
 * @class AM.store.pricelist.PriceList
 * @extends Ext.data.Store
 */
Ext.define('AM.store.pricelist.PriceList', {
    extend  : 'Ext.data.Store',
    model   : 'AM.model.pricelist.PriceList',
    autoLoad: true,
    proxy   : {
        type        : 'ajax',
        url         : GLOBAL_PATH,
        extraParams : {
            _action : 'getAllListPrice'
        },
        reader      : {
            type            : 'json',
            root            : 'result',
            successProperty : 'success'
        }
    }
});