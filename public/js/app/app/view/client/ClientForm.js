/**
 * Formulario para agregar/editar un contacto
 *
 * @author Jose Duin <josemiguelduin@gmail.com>
 * @verion 0.1
 * @see ExtJs4 <http://www.sencha.com>
 */

/**
 * @class AM.view.client.ClientForm
 * @extends Ext.form.Panel
 */
Ext.define('AM.view.client.ClientForm', {
    extend  : 'Ext.form.Panel',
    alias   : 'widget.clientForm',
    itemId  : 'clientForm',

    initComponent: function() {
        
        this.items = [ {
                xtype       : 'form',
                bodyStyle   : 'padding:30px;border-width: 0px;',
                layout : { type    : 'hbox', pack    : 'start', align   : 'middle' },
                items: [ {
                        flex        : 1,
                        bodyStyle   :'border-width: 0px;padding:0px 80px 0px 30px;',
                        items: [ 
                            /** Nombre **/
                            this.createCol( {},
                                this.createField( {
                                    name        : 'name',
                                    maxLength   : 90,
                                    fieldLabel  : 'Nombre',
                                    allowBlank  : false,
                                })
                            ),
                            /** Identificacion **/
                            this.createCol( {},
                                this.createField( {
                                    name        : 'identification',
                                    maxLength   : 45,
                                    fieldLabel  : 'Identificación',
                                })
                            ),
                            /** Dirección **/
                            this.createCol( {
                                    flex: .04,
                                    bodyStyle   : 'border-width: 0px;padding: 0px 5px 0px 0px;'
                                },[
                                {
                                    xtype       : 'label',
                                    text        : 'Dirección',
                                    flex        : .75,
                                    cls         : 'x-form-item-label x-unselectable x-form-item-label-right',
                                    style       : 'margin-right: 15px;',
                                },
                                this.createField( {
                                    name        : 'address',
                                    maxLength   : 45,
                                    flex        : .89,
                                    emptyText   : 'Dirección',
                                    style       : 'margin-right: 5px;',
                                }),
                                this.createField( {
                                    name        : 'city',
                                    maxLength   : 45,
                                    flex        : .89,
                                    emptyText   : 'Ciudad',
                                })
                             ]),
                            /** Correo **/
                            this.createCol( {
                                    bodyStyle   : 'border-width: 0px;padding: 0px 5px 0px 0px;'
                                },
                                this.createField( {
                                    name        : 'email',
                                    maxLength   : 100,
                                    fieldLabel  : 'Correo electrónico',
                                    vtype       : 'email',
                                })
                            ),
                            /** Telefono 1 **/
                            this.createCol( {},
                                this.createField( {
                                    name        : 'phonePrimary',
                                    maxLength   : 45,
                                    fieldLabel  : 'Teléfono 1',
                                })
                            ),
                            /** Telefono 2 **/
                            this.createCol( {},
                                this.createField( {
                                    name        : 'phoneSecondary',
                                    maxLength   : 45,
                                    fieldLabel  : 'Teléfono 2',
                                })
                            ),
                            /** Fax **/
                            this.createCol( {},
                                this.createField( {
                                    name        : 'fax',
                                    maxLength   : 45,
                                    fieldLabel  : 'Fax',
                                })
                           ),
                             /** Celular **/
                            this.createCol( {}, 
                                this.createField( {
                                    name        : 'mobile',
                                    maxLength   : 45,
                                    fieldLabel  : 'Ceular',
                                })
                            )
                        ]
                    }, {
                        flex        : 1,
                        bodyStyle   :'border-width: 0px;padding:0px 90px 0px 0px;',
                        items: [ 
                             /** Lista de Precios **/
                            this.createCol({},[
                                this.createCombo({
                                    name        : 'priceList',
                                    fieldLabel  : 'Lista de precios',
                                    store       : 'pricelist.PriceList',
                                }),
                                this.createTip( {
                                    label       : 'Selecciona la lista de precios que deseas asociar a este cliente'
                                })
                            ]),
                             /** Vendedor **/
                            this.createCol({
                                    bodyStyle   : 'border-width: 0px;padding: 0px 5px 0px 0px;'
                                }, [
                                this.createCombo({
                                    name        : 'seller',
                                    fieldLabel  : 'Vendedor',
                                    store       : 'seller.Seller',
                                }),
                                this.createTip( {
                                    label       : 'Selecciona el vendedor que deseas asociar a este cliente'
                                })
                            ]),
                             /** Terminos de Pago **/
                            this.createCol( {}, [
                                this.createCombo( {
                                    name        : 'term',
                                    fieldLabel  : 'Términos de pago',
                                    store       : 'term.Term',
                                }),
                                {
                                    xtype       : 'container',
                                    flex        : .1,
                                }
                            ]),
                            /** Check Cliente **/
                            this.createCol( {},
                                this.createCheck( {
                                    name        : 'client',
                                    fieldLabel  : 'Cliente', 
                                }),
                            ),
                            /** Check Proveedor **/
                            this.createCol( {},
                                this.createCheck( {
                                    name        : 'provider',
                                    fieldLabel  : 'Proveedor', 
                                }),
                            ),
                            /** Check Observaciones **/
                            this.createCol({}, [
                                this.createField({
                                    xtype       : 'textareafield',
                                    name        : 'observations',
                                    fieldLabel  : 'Observaciones',
                                    maxLength   : 500,
                                }),
                                {
                                    xtype       : 'container',
                                    flex        : .1,
                                }
                            ]),
                            /** Check Estado de Cuenta **/
                            this.createCol( {}, [
                                this.createCheck({
                                    name        : 'checkboxfield',
                                    fieldLabel  : 'Incluir estado de cuenta', 
                                    checked     : true,
                                }),
                                this.createTip( {
                                    label       : 'Tu cliente recivirá en cada factura su estado de cuenta'
                                })
                            ]),
                        ]
                    }
                ]
            }
        ];

        this.callParent(arguments);
    },

    /**
     * Crear un Hbox Layout
     *
     * @param {Object} json
     * @param {Object} items
     * @return {Ext.layout.container.HBox}
     */
    createCol: function(json, items) {
        var item = [];
        item.push( this.createContainer(json) );
        if ( items instanceof Array ) {
            items.forEach(function(i) {
                item.push(i);
            });
        } else {
            item.push( items );
        }
        var col = {
                layout    : { type : 'hbox', pack : 'start', align : 'middle' },
                bodyStyle : this.hasProperty(json, 'bodyStyle' ,'border-width: 0px;padding: 0px 5px 5px 0px;'),
                items     : item             
            }
        return col;
    }, 

    /**
     * Crear un Container
     *
     * @param {Object} json
     * @return {Ext.container.Container}
     */
    createContainer: function(json) {
        var container = {
            xtype       : 'container',
            flex        : this.hasProperty(json, 'flex', .05),
        }
        return container;
    },

    /**
     * Crear un TextField O TextArea
     *
     * @param {Object} json
     * @return {Ext.form.field.Text || Ext.form.field.TextArea}
     */
    createField: function(json) {
        var field = {
            xtype       : 'textfield',
            name        : json['name'],
            maxLength   : json['maxLength'],
            autoCreate  : { 
                tag         : 'input', 
                type        : 'text', 
                size        : '20', 
                autocomplete: 'off', 
                maxlength   : "'" + json['maxLength'] + "'" 
            },
            allowBlank  : this.hasProperty(json, 'allowBlank', true),
            flex        : this.hasProperty(json, 'flex', 1),
            labelCls    : 'x-form-item-label x-unselectable x-form-item-label-right',
            labelStyle  : this.hasProperty(json, 'labelStyle', 'padding-right: 10px;'),
        }
        this.validateProperty(field, json, 'fieldLabel');
        this.validateProperty(field, json, 'emptyText');
        this.validateProperty(field, json, 'style');
        this.validateProperty(field, json, 'vtype');

        // Condicion Especial -> TexArea
        this.validateProperty(field, json, 'xtype');
      
        return field;
    },

    /**
     * Crear un CheckBox
     *
     * @param {Object} json
     * @return {Ext.form.field.Checkbox}
     */
    createCheck: function(json) {
        var check = {
            xtype       : 'checkbox',
            name        : json['name'],
            fieldLabel  : json['fieldLabel'], 
            flex        : 1,
            labelCls    : 'x-form-item-label x-unselectable x-form-item-label-right',
            labelStyle  : 'padding-right: 10px;',
        }
        this.validateProperty(check, json, 'checked');

        return check;
    },

    /**
     * Crear un ComboBox
     *
     * @param {Object} json
     * @return {Ext.form.field.ComboBox}
     */
    createCombo: function(json) {
        var combo = {
            xtype       : 'combo',
            name        : json['name'],
            fieldLabel  : json['fieldLabel'],
            labelCls    : 'x-form-item-label x-unselectable x-form-item-label-right',
            labelStyle  : 'padding-right: 10px;',
            emptyText   : 'Seleccionar',
            editable    : false,
            queryMode   : 'local',  
            flex        : 1,
            store       : json['store'],
            valueField  : 'id',
            displayField: 'name',
        }

        return combo;
    },

    /**
     * Crear un Help Icon
     *
     * @param {Object} json
     * @return {Ext.container.Container}
     */
    createTip: function(json) {
        var tip = {
            xtype       : 'container',
            html        : '<span class="icon-help" style="cursor: help;width: 21px;padding: 10px;margin-left: 10px;"></span>',
            flex        : .1,
            autoEl: {
                tag         : 'label',
                'data-qtip' : json['label']
            }
        }
        return tip;
    },

    /**
     * De existir la clave en el json se le agrega
     * la clave y el valor a dictionary
     *
     * @param {Object} dictionary
     * @param {Object} json
     * @param {String} property
     */
    validateProperty: function(dictionary, json, property) {
        if (this.hasProperty(json, property, undefined) !== undefined)
            dictionary[property] = json[property]
    },

    /**
     * Valida la existencia de una clave en el json
     * sino retorna el parametro por defecto
     *
     * @param {Object} json
     * @param {String} property
     * @param {String} defecto
     * @return {String}
     */
    hasProperty: function(json, property, defecto) {
        if (json == undefined) {
            return defecto;
        } else {
            return json.hasOwnProperty(property) ? json[property] : defecto;
        }
    }

});