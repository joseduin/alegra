/**
 * Definicion del modelo Seller
 *
 * @author Jose Duin <josemiguelduin@gmail.com>
 * @verion 0.1
 * @subpackage client
 * @see ExtJs4 <http://www.sencha.com>
 */
/**
 * @class AM.model.seller.Seller
 * @extends Ext.data.Model
 */
Ext.define('AM.model.seller.Seller',{
	extend: 'Ext.data.Model',
	idProperty: 'id',
	fields : [
		'id',
		'name',
	],
});