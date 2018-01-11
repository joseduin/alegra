/**
 * Formulario para Editar Contactos
 *
 * @author Jose Duin <josemiguelduin@gmail.com>
 * @verion 0.1
 * @see ExtJs4 <http://www.sencha.com>
 */

/**
 * @class AM.view.client.Edit
 * @extends AM.view.client.ClientForm
 */
Ext.define('AM.view.client.Edit', {
    extend: 'AM.view.client.ClientForm',
    alias: 'widget.clientedit',
    initialConfig : {
        reader : Ext.create('Ext.data.reader.Json', {
            model: 'AM.model.client.Client',
            root : 'result'
        }),
    },

    initComponent: function() {
       
        this.callParent(arguments);
    }
});