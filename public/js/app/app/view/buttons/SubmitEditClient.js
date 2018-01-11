/**
 * Botones del formulario de editar un contacto
 *
 * @author Jose Duin <josemiguelduin@gmail.com>
 * @verion 0.1
 * @see ExtJs4 <http://www.sencha.com>
 */

/**
 * @class AM.view.buttons.SubmitEditClient
 * @extends Ext.form.Panel
 */
Ext.define('AM.view.buttons.SubmitEditClient', {
    extend  : 'Ext.form.Panel',
    alias   : 'widget.SubmitEditClient',
    style   : 'background: #f1f1f1;padding: 9px;',

    initComponent: function() {

    	this.buttons = [
            {
                text    : 'Cancelar',
                action  : 'cancelarEdit',
                scale   : 'large'
            },
            {
                text    : 'Guardar',
                action  : 'saveClientEdit',
                scale   : 'large'
            },
        ];

    	this.callParent(arguments);
    }
});