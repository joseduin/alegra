/**
 * Controlador de la vista de contactos
 *
 * Este controlador permite la gestion de los contactos:
 *  - Agregar/Editar contactos
 *  - Agregar cotactos internos
 *
 * La contraparte en el BackEnd es:
 *      FileName : controllers/IndexController.php
 *      ClassName: IndexController
 *
 * @author Jose Duin <josemiguelduin@gmail.com>
 * @verion 0.1
 * @see ExtJs4 <http://www.sencha.com>
 */

/**
 * @class AM.controller.Clients
 * @extends Ext.app.Controller
 */
Ext.define('AM.controller.Clients', {
    extend: 'Ext.app.Controller',
	stores: [
        'client.Clients', 
        'client.InternalClient',
    ],
    models: [
        'client.Client',
        'client.InternalClient'
    ],
    views: [
        'client.List',
        'client.ClientForm',
        'client.FormInternalClient',
        'client.ListInternalClient',
        'client.Edit',
        'buttons.SubmitCreateClient',
        'buttons.SubmitEditClient',
        'buttons.MoreActionsButton',
        'client.GridTransactions',
        'client.GridInvoices',
        'client.GridBills',
        'client.GridCreditNotes',
        'client.GridDebitNotes',
        'client.GridEstimates',
        'client.GridRemissions',
        'client.GridPurchaseOrder',
        'client.GridJournals',
    ],

    /**
     * Inicializa el controlador de clientes
     */
    init: function() {
        this.control({
            /** view.client.Add: agrega un nuevo cliente **/
            'button[action=saveClient]': {
                click: this.saveClient
            },
            /** view.client.Add: agrega un nuevo cliente  y vuelve al formulario **/
            'button[action=saveCreateClient]': {
                click: this.saveClientAndSaveAnotherOne
            },
             /** view.client.FormInternalClient: agregar un nuevo cliente interno **/
            'button[action=inernalcontact]': {
                click: this.addInernalcontact
            },
            /** view.client.Add: cancela el proceso de creación de un nuevo cliente **/
            'button[action=cancelar]': {
                click: this.cancelarSubmitClient
            },
            'button[action=saveClientEdit]': {
                click: this.editClient
            },
            /** view.client.Edit: cancela el proceso de creación de un nuevo cliente **/
            'button[action=cancelarEdit]': {
                click: this.cancelarSubmitClient
            },
        });
    },

    /**
     * Guardar un contacto
     *
     * @param {Ext.button.Button} button
     */
    saveClient: function(button) {
        this.saveClientGlobal(button, 'addContact', '/index/view/id/', undefined);
    }, 

    /**
     * Guardar un contacto y crear uno nuevo
     *
     * @param {Ext.button.Button} button
     */
    saveClientAndSaveAnotherOne(button) {
        this.saveClientGlobal(button, 'addContact', 'add', undefined);
    },

    /**
     * Editar un contacto
     *
     * @param {Ext.button.Button} button
     */
    editClient: function(button) {
        this.saveClientGlobal(button, 'editContact', '/index/view/id/', GLOBAL_PARAMS);
    },

    /**
     * Guardar/Editar un Contacto
     *
     * @param {Ext.button.Button} button
     * @param {String} action
     * @param {String} location
     * @param {String} param
     */
    saveClientGlobal: function(button, action, location, param) {
        var form = Ext.ComponentQuery.query('#clientForm')[0],
            values = form.getValues(),
            gridInternal = Ext.widget('listInternalClient');

        if (this.isValidForm(form)) {
            return;
        }

        var internals = [];
        for (var i = 0; i < gridInternal.getStore().data.length; i++) { 
            var record = gridInternal.getStore().getAt(i);

            var internal = this.getInternalClient(record.data);
            internals.push( internal );
        }

        var client = this.getClient(values, internals);
        if (param !== undefined) client['id'] = param;

        this.progress('Guardando Contacto');
        Ext.Ajax.request( {
            url     : GLOBAL_PATH,
            method  : 'POST',
            params  : {
                _action : action,
                _param  : JSON.stringify( client )
            },
            success: function(data) {
                var json = JSON.parse(data.responseText);

                if (location === 'add') {
                    window.location = location;
                } else {
                    window.location = location + json.result.id;
                }
            },
            failure: function() {
                Ext.Msg.alert('Oops!', 'Error al guardar el contacto');
            }
        });
    },

    /**
     * Guardar un contacto interno
     *
     * @param {Ext.button.Button} button
     */
    addInernalcontact: function(button) {
        var grid = Ext.widget('listInternalClient'),
            form = button.up('formInternalClient'),
            values = form.getValues();

        if (this.isValidForm(form)) {
            return;
        }

        form.getForm().reset(true);
        var internal = this.getInternalClient(values);

        grid.getStore().add( internal );  
    },

    /**************************************************************************\
    | Metodos de Soporte
    \**************************************************************************/

    /**
     * Contrucimos un contacto mediante los parametros
     *
     * @param {Object} val
     * @param {Array} internals
     * @return {Object} client
     */
    getClient: function(val, internals) {
        var typeClient = [];
        if ( val.client == 'on' ) {
            typeClient.push('client');
        } 
        if ( val.provider == 'on' ) {
            typeClient.push('provider');  
        }

        var client = {
                name            : this.isFieldEmpty(val.name),
                identification  : this.isFieldEmpty(val.identification),
                phonePrimary    : this.isFieldEmpty(val.phonePrimary),
                phoneSecondary  : this.isFieldEmpty(val.phoneSecondary),
                fax             : this.isFieldEmpty(val.fax),
                mobile          : this.isFieldEmpty(val.mobile),
                observations    : this.isFieldEmpty(val.observations),
                email           : this.isFieldEmpty(val.email),
                priceList       : this.isFieldEmpty(val.priceList),
                seller          : this.isFieldEmpty(val.seller),
                term            : this.isFieldEmpty(val.term),
                address         : {
                    address : this.isFieldEmpty(val.address),
                    city    : this.isFieldEmpty(val.city), 
                },
                type            : typeClient,
                internalContacts: internals
        }
        return client;
    },

    /**
     * Contrucimos un contacto interno mediante el parametro
     *
     * @param {Object} val
     * @return {Object} internal
     */
    getInternalClient: function(val) {
        var email = this.isFieldEmpty(val.email);
            internal = {
                name               : val.name,
                lastName           : this.isFieldEmpty(val.lastName),
                email              : email,
                phone              : this.isFieldEmpty(val.phone),
                mobile             : this.isFieldEmpty(val.mobile),
                sendNotifications  : val.sendNotifications == "on" && email
            }
        return internal;
    },

    /**
     * Validamos si el valor esta vacio
     *
     * @param {String} val
     * @return {String}
     */    
    isFieldEmpty: function(val) {
        return val == '' ? null : val;
    },

    /**
     * Validamos si el formulario tiene campos obligatorios
     * que el usuario no ha llenado aun.
     *
     * @param {Ext.form.Panel} form
     * @return {Boolean}
     */ 
    isValidForm: function(form) {
        if ( !form.isValid() ) {
                Ext.MessageBox.alert(
                    'Error', 
                    'Debes verificar los campos marcados en rojo para continuar', 
                );
            }
        return !form.isValid();
    },

    /**
     * Generamos un mensaje en pantalla tipo Progress
     *
     * @param {String} mensaje
     */     
    progress: function(mensaje) {
        Ext.MessageBox.show({
            msg   : mensaje,
            width : 300,
            wait  : true,
            waitConfig : 
            {
                increment : 5,
                scope     : this,
            }
        }, this);
    },

    /**
     * Redireccionamos al index de la aplicacion
     */   
    cancelarSubmitClient: function() {
        window.location = '/';
    },

});








