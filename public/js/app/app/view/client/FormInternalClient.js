/**
 * Formulario para Agregrar/Editar Contactos Internos
 *
 * @author Jose Duin <josemiguelduin@gmail.com>
 * @verion 0.1
 * @see ExtJs4 <http://www.sencha.com>
 */

/**
 * @class AM.view.client.FormInternalClient
 * @extends Ext.form.Panel
 */
Ext.define('AM.view.client.FormInternalClient', {
    extend  : 'Ext.form.Panel',
    alias   : 'widget.formInternalClient',
    itemId  : 'formInternalClient',

    initComponent: function() {

    	this.items = [ 
    		{
                items   : [ {
                    xtype   : 'form',
                    layout  : 'hbox',
                    items: [ {
                            xtype       : 'textfield',
                            name        : 'name',
                            emptyText   : 'Nombre',  
                            allowBlank  : false,
                            style       : 'margin: 7px 5px;',  
                            flex        : 1,         
                        }, {
                            xtype       : 'textfield',
                            name        : 'lastName',
                            emptyText   : 'Apellido',    
                            style       : 'margin: 7px 5px;',   
                            flex        : 1.1,           
                        }, {
                            xtype       : 'textfield',
                            name        : 'email',
                            vtype       : 'email',
                            emptyText   : 'Correo Electrónico', 
                            style       : 'margin: 7px 5px;',  
                            flex        : 1.5,               
                        }, {
                            xtype       : 'textfield',
                            name        : 'phone',
                            emptyText   : 'Teléfono',  
                            style       : 'margin: 7px 5px;', 
                            flex        : 1,               
                        }, {
                            xtype       : 'textfield',
                            name        : 'mobile',
                            emptyText   : 'Celular', 
                            style       : 'margin: 7px 5px;',
                            flex        : .9,                 
                        }, {
                            xtype       : 'checkbox',
                            name        : 'sendNotifications',
                            style       : 'text-align: center;',
                            flex        : 1,        
                        }, 
                    ]
                }, 
                    Ext.create('AM.view.client.ListInternalClient')
                ]
    		}
    	];

        this.buttons = [
            {
                text    : 'Asociar Persona',
                action  : 'inernalcontact',
                scale   : 'large'
            },
        ];

    	this.callParent(arguments);
    }
});