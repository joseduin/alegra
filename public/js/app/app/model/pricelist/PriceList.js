/**
 * Definicion del modelo PriceList
 *
 * @author Jose Duin <josemiguelduin@gmail.com>
 * @verion 0.1
 * @subpackage client
 * @see ExtJs4 <http://www.sencha.com>
 */
/**
 * @class AM.model.pricelist.PriceList
 * @extends Ext.data.Model
 */
Ext.define('AM.model.pricelist.PriceList',{
	extend: 'Ext.data.Model',
	idProperty: 'id',
	fields : [
		'id',
		'name',
	],
});