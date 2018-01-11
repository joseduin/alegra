/**
 * Listado Contactos Internos
 *
 * @author Jose Duin <josemiguelduin@gmail.com>
 * @verion 0.1
 * @see ExtJs4 <http://www.sencha.com>
 */

/**
 * @class AM.view.client.ListInternalClient
 * @extends Ext.grid.Panel
 */
Ext.define('AM.view.client.ListInternalClient' ,{
    extend      : 'Ext.grid.Panel',
    alias       : 'widget.listInternalClient',
    store       : 'client.InternalClient',
    hideHeaders : true,
    height      : 200,
    stripeRows  : true,

    initComponent: function() {
        this.columns = [
            { dataIndex: 'name', flex: 1 },
            { dataIndex: 'lastName', flex: 1.1 },
            { dataIndex: 'email', flex: 1.5 },
            { dataIndex: 'phone', flex: 1 },
            { dataIndex: 'mobile', flex: .9 },
            { dataIndex: 'sendNotifications', flex: .6,
                renderer: function(value, meta, record) {
                    return value ? "Si" : "No" ;
                }
            },
            { align: 'center', flex: .3, xtype: 'actioncolumn',
                items: [ {
                    icon   : ALEGRA_PATH + 'images/icons/page_edit.png', 
                    handler: function(view, rowIndex, colIndex, item, e, record, row) {
                        var form = Ext.ComponentQuery.query('#formInternalClient')[0];

                        form.getForm().setValues({
                            name             : record.data.name,
                            lastName         : record.data.lastName,
                            email            : record.data.email,
                            phone            : record.data.phone,
                            mobile           : record.data.mobile,
                            sendNotifications: record.data.sendNotifications,
                        });
                        view.getStore().removeAt(rowIndex);
                    }
                }, {
                    icon   : ALEGRA_PATH + 'images/icons/delete.png', 
                    cls    : 'algo',
                    handler: function(view, rowIndex, colIndex, item, e, record, row) {
                        view.getStore().removeAt(rowIndex);
                    }
                }, ]
            }
        ];

        this.callParent(arguments);
    }
});