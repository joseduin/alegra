/**
 * Definicion del modelo Term
 *
 * @author Jose Duin <josemiguelduin@gmail.com>
 * @verion 0.1
 * @subpackage client
 * @see ExtJs4 <http://www.sencha.com>
 */
/**
 * @class AM.model.term.Term
 * @extends Ext.data.Model
 */
Ext.define('AM.model.term.Term',{
	extend: 'Ext.data.Model',
	idProperty: 'id',
	fields : [
		'id',
		'name',
	],
});