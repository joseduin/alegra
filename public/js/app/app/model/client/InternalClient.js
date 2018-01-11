/**
 * Definicion del modelo InternalClient
 *
 * @author Jose Duin <josemiguelduin@gmail.com>
 * @verion 0.1
 * @subpackage client
 * @see ExtJs4 <http://www.sencha.com>
 */
/**
 * @class AM.model.client.InternalClient
 * @extends Ext.data.Model
 */
Ext.define('AM.model.client.InternalClient',{
	extend: 'Ext.data.Model',
	fields : [
		'id',
		'name',
		'email',
		'phone',
		'mobile',
		'lastName',
		'sendNotifications',
	],

	validations: [ { 
	    	type: 'presence', 
			name: 'name', 
			message: 'Es necesario asignarle nombre al cliente interno' 
		}, { 
			type: 'format',   
			name: 'email', 
			matcher: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, 
			message:"Este campo debe ser una dirección de correo electrónico con el formato \"usuario@dominio.com\"" 
		}
	],
});