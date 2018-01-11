/**
 * Listado Contactos
 *
 * @author Jose Duin <josemiguelduin@gmail.com>
 * @verion 0.1
 * @see ExtJs4 <http://www.sencha.com>
 */

/**
 * @class AM.view.client.GridTransactions
 * @extends Ext.grid.Panel
 */
Ext.define('AM.view.client.List' ,{
    extend      : 'Ext.grid.Panel',
    alias       : 'widget.clientlist',
    store       : 'client.Clients',
    height      : 390,
    stripeRows  : true,
    selModel    : Ext.create('Ext.selection.CheckboxModel'),
    initComponent: function() {
        this.columns = [
            { header: 'Nombre',  dataIndex: 'name',  flex: 1.6,
                 renderer  : function(myValue, myDontKnow, myRecord) {
                            return '<a href="'+'/index/view/id/' + myRecord.data.id +'">'+myRecord.data.name+'</a>';
                        }
             },
            { header: 'Identificación', dataIndex: 'identification', flex: 1 },
            { header: 'Teléfono 1', dataIndex: 'phonePrimary', flex: 0.9 },
            { header: 'Observaciones', dataIndex: 'observations', flex: 0.9 },
            { header: 'Acciones', align: 'center', flex: 0.65, xtype: 'actioncolumn',
                items: [{
                    icon   : ALEGRA_PATH + 'images/icons/zoom.png', 
                    baseCls: 'epale',  
                    handler: function(view, rowIndex, colIndex, item, e, record, row) {
                        location.href = '/index/view/id/' + record.data.id;
                    } 
                }, {
                    icon   : ALEGRA_PATH + 'images/icons/page_edit.png', 
                    handler: function(view, rowIndex, colIndex, item, e, record, row) {
                        var url_path = GLOBAL_PARAMS == '' ? 'index/edit/id/' : '/index/edit/id/';
                        location.href = '/index/edit/id/' + record.data.id;
                    }
                }, {
                    icon   : ALEGRA_PATH + 'images/icons/delete.png', 
                    handler: function(view, rowIndex, colIndex, item, e, record, row) {

                        Ext.Msg.show( {
                            title   :'Eliminar cliente',
                            msg     : '¿Estás seguro de que deseas eliminar el cliente? Esta operación no se puede deshacer.',
                            buttons : Ext.Msg.YESNOCANCEL,
                            icon    : Ext.MessageBox.QUESTION,
                            fn: function showResult(btn) {
                                if (btn == 'yes') {
                                    Ext.Ajax.request( {
                                        url     : GLOBAL_PATH,
                                        method  : 'POST',
                                        params  : {
                                            _action : 'deteleContact',
                                            _param  : record.data.id
                                        },
                                        success: function() {
                                            location.reload();
                                        },
                                        failure: function() {
                                            Ext.Msg.alert('Oops!', 'Error al borrar el contacto');
                                        }
                                    });
                                }
                            },                            
                        }, this);
                    }
                }]
            }
        ];

        this.dockedItems = [ {
                xtype       : 'pagingtoolbar',
                dock        : 'bottom',
                store       : 'client.Clients',
                displayInfo : true,
                displayMsg  : 'Mostrando {0} - {1} de {2}',
                emptyMsg    : "Sin datos para mostrar"
            }
        ];

        this.callParent(arguments);
    }
});