/**
 * Definicion del modelo Client
 *
 * @author Jose Duin <josemiguelduin@gmail.com>
 * @verion 0.1
 * @subpackage client
 * @see ExtJs4 <http://www.sencha.com>
 */
/**
 * @class AM.model.client.Client
 * @extends Ext.data.Model
 */
Ext.define('AM.model.client.Client', {
    extend: 'Ext.data.Model',
    idProperty:'id',
    fields : [
				'id', 
				'fax', 
				'name', 
				'term',
				'city', 
				'type', 
				'email',
				'mobile', 
				'client', 
				'seller', 
				'address',
				'provider', 
				'priceList',
				'phonePrimary', 
				'observations', 
				'phoneSecondary', 
				'identification', 
				'internalContacts', 	
			],
    validations: [ { 
	    	type: 'presence', 
			name: 'name', 
			message: 'Es necesario asignarle nombre al cliente nuevo' 
		}, { 
			type: 'format',   
			name: 'email', 
			matcher: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, 
			message:"Este campo debe ser una dirección de correo electrónico con el formato \"usuario@dominio.com\"" 
		}
	],
});