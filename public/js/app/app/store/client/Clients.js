/**
 * Store de Clients
 *
 * @author Jose Duin <josemiguelduin@gmail.com>
 * @verion 0.1
 * @subpackage client
 * @see ExtJs4 <http://www.sencha.com>
 */

/**
 * @class AM.store.client.Clients
 * @extends Ext.data.Store
 */
Ext.define('AM.store.client.Clients', {
    extend  : 'Ext.data.Store',
    model   : 'AM.model.client.Client',
    autoLoad: true,
    proxy   : {
        type        : 'ajax',
        url         : GLOBAL_PATH,
        extraParams : {
            _action : GLOBAL_ACTION,
            _param  : GLOBAL_PARAMS
        },
        reader      : {
            type            : 'json',
            root            : 'result',
            successProperty : 'success'
        }
    }
});