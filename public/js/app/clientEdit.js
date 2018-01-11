/**
 * Variable usada para almacenar un ToolTip
 */
var tip =   Ext.create('Ext.tip.ToolTip', {
                target: 'tooltip_notifications',
                html: 'Press this button to clear the form'
            });

/**
 * Contiene los configuraciones y componentes globales
 * de la vista, gestionando lo referente a editar un 
 * nuevo contacto
 *
 * La contraparte en el BackEnd es:
 *      FileName  : controllers/IndexController.php
 *      ClassName : IndexController
 *      ActionName: Edd
 *
 * @author Jose Duin <josemiguelduin@gmail.com>
 * @verion 0.1
 * @see ExtJs4 <http://www.sencha.com>
 */
Ext.application({
    name: 'AM',
    appFolder: '/js/app/app',
    controllers: ['Clients', 'PriceList', 'Seller', 'Term'],

    launch: function() {
        
        var formPanel = Ext.create('AM.view.client.Edit',{
            renderTo: 'addClient',
            title: '',
        });

        Ext.create('Ext.panel.Panel', {
            id: 'addContactPanel',
            renderTo : 'addContact',
            alias : 'contactsSoldPanel',
            items: [{
                    xtype: 'box',
                    height: 24,
                    html: '<div  id="headersTable"><table><tr><td class="tbName">Nombre</td><td class="tbLastName">Apellido</td><td class="tbEmail">Correo electrónico</td><td class="tbPhone">Teléfono</td><td class="tbMobile">Celular</td><td class="tbSendNotifications" style="width:133px">Enviar notificaciones<img style="position:absolute; top:3px; margin-left:4px" id="tooltip_notifications" src="https://cdn1.alegra.com/images/icons/help.png" /> </td></tr></table></div>',
                    style: 'background: #eee'
                },
                Ext.create('AM.view.client.FormInternalClient')
            ]
        });

        Ext.Ajax.request( {
            url     : GLOBAL_PATH,
            method  : 'POST',
            params  : {
                _action : GLOBAL_ACTION,
                _param  : GLOBAL_PARAMS
            },
            success: function(data) {
                var json = JSON.parse(data.responseText);

                console.log(json);
                
                formPanel.getForm().setValues({
                    name            : json.result.name, 
                    identification  : json.result.identification,
                    phonePrimary    : json.result.phonePrimary,
                    phoneSecondary  : json.result.phoneSecondary,
                    fax             : json.result.fax,
                    mobile          : json.result.mobile,
                    observations    : json.result.observations,
                    email           : json.result.email,
                    priceList       : json.result.priceList  == null ? '0' : json.result.priceList.id,
                    seller          : json.result.seller == null ? '0' : json.result.seller.id,
                    term            : json.result.term == null ? '1' : json.result.term.id,
                    address         : json.result.address.address,
                    city            : json.result.address.city,
                    client          : json.result.type.indexOf( 'client' ) != -1,
                    provider        : json.result.type.indexOf( 'provider' ) != -1, 
                });

                grid = Ext.widget('listInternalClient');
                for (var i = 0; i < json.result.internalContacts.length; i++) { 
                    var val = json.result.internalContacts[i],
                        internal = { 
                            name               : val.name,
                            lastName           : val.lastName,
                            email              : val.email,
                            phone              : val.phone,
                            mobile             : val.mobile,
                            sendNotifications  : val.sendNotifications
                        };
                    grid.getStore().add( internal );
                }
                
            },
            failure: function() {
                Ext.Msg.alert('Oops!', 'Error al cargar el contacto');
            }
        });

        Ext.create('AM.view.buttons.SubmitEditClient', {
            renderTo: 'buttonsHolder',
        });

        var tip = Ext.create('Ext.tip.ToolTip', {
            target: 'tooltip_notifications',
            html: 'Marque esta opción cuando necesite que esta persona reciba correos con alertas sobre facturas disponibles y/o vencidas'
        });

    },

});