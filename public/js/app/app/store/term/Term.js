/**
 * Store de Term
 *
 * @author Jose Duin <josemiguelduin@gmail.com>
 * @verion 0.1
 * @subpackage client
 * @see ExtJs4 <http://www.sencha.com>
 */

/**
 * @class AM.store.term.Term
 * @extends Ext.data.Store
 */
Ext.define('AM.store.term.Term', {
    extend  : 'Ext.data.Store',
    model   : 'AM.model.term.Term',
    autoLoad: true,
    proxy   : {
        type        : 'ajax',
        url         : GLOBAL_PATH,
        extraParams : {
            _action : 'getAllListTerm'
        },
        reader      : {
            type            : 'json',
            root            : 'result',
            successProperty : 'success'
        }
    }
});