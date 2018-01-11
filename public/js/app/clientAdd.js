/**
 * Variable usada para almacenar un ToolTip
 */
var tip =   Ext.create('Ext.tip.ToolTip', {
                target: 'tooltip_notifications',
                html: 'Press this button to clear the form'
            });

/**
 * Contiene los configuraciones y componentes globales
 * de la vista, gestionando lo referente a agregar un 
 * nuevo contacto
 *
 * La contraparte en el BackEnd es:
 *      FileName  : controllers/IndexController.php
 *      ClassName : IndexController
 *      ActionName: Add
 *
 * @author Jose Duin <josemiguelduin@gmail.com>
 * @verion 0.1
 * @see ExtJs4 <http://www.sencha.com>
 */
Ext.application({
    name        : 'AM',
    appFolder   : '/js/app/app',
    controllers : ['Clients', 'PriceList', 'Seller', 'Term'],

    launch: function() {
        
        var formPanel = Ext.create('AM.view.client.ClientForm',{
            renderTo            : 'addClient',
            clientType          : null,
            country             : 'other',
            hideSettingStatement: true,
            title               : '',
            mxStampVersion      : ''
        });

        formPanel.getForm().setValues({
            term : '1'
        });

        Ext.create('Ext.panel.Panel', {
            id      : 'addContactPanel',
            renderTo: 'addContact',
            alias   : 'contactsSoldPanel',
            items   : [{
                    xtype : 'box',
                    height: 24,
                    html  : '<div  id="headersTable"><table><tr><td class="tbName">Nombre</td><td class="tbLastName">Apellido</td><td class="tbEmail">Correo electrónico</td><td class="tbPhone">Teléfono</td><td class="tbMobile">Celular</td><td class="tbSendNotifications" style="width:133px">Enviar notificaciones<img style="position:absolute; top:3px; margin-left:4px" id="tooltip_notifications" src="https://cdn1.alegra.com/images/icons/help.png" /> </td></tr></table></div>',
                    style : 'background: #eee'
                },
                Ext.create('AM.view.client.FormInternalClient')
            ]
        });

        Ext.create('AM.view.buttons.SubmitCreateClient', {
            renderTo: 'buttonsHolder',
        });

        var tip = Ext.create('Ext.tip.ToolTip', {
            target  : 'tooltip_notifications',
            html    : 'Marque esta opción cuando necesite que esta persona reciba correos con alertas sobre facturas disponibles y/o vencidas'
        });

    }
});