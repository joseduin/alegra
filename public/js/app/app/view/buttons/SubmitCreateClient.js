/**
 * Botones del formulario de agregar un contactos
 *
 * @author Jose Duin <josemiguelduin@gmail.com>
 * @verion 0.1
 * @see ExtJs4 <http://www.sencha.com>
 */

/**
 * @class AM.view.buttons.SubmitCreateClient
 * @extends Ext.form.Panel
 */
Ext.define('AM.view.buttons.SubmitCreateClient', {
    extend  : 'Ext.form.Panel',
    alias   : 'widget.SubmitCreateClient',
    style   : 'background: #f1f1f1;padding: 9px;',

    initComponent: function() {

    	this.buttons = [
            {
                text    : 'Cancelar',
                action  : 'cancelar',
                scale   : 'large'
            },
            {
                text    : 'Guardar y crear otro',
                action  : 'saveCreateClient',
                scale   : 'large'
            },
            {
                text    : 'Guardar',
                action  : 'saveClient',
                scale   : 'large'
            },
        ];

    	this.callParent(arguments);
    }
});