/**
 * Store de InternalClients
 *
 * @author Jose Duin <josemiguelduin@gmail.com>
 * @verion 0.1
 * @subpackage client
 * @see ExtJs4 <http://www.sencha.com>
 */

/**
 * @class AM.store.client.InternalClients
 * @extends Ext.data.Store
 */
Ext.define('AM.store.client.InternalClient',{
	extend 	: 'Ext.data.Store',
    model 	: 'AM.model.client.InternalClient',
	autoLoad: false,
	autoSync: false,
	data  	: []
});