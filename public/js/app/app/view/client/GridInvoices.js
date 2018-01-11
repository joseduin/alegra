/**
 * Listado Factura de Venta
 *
 * @author Jose Duin <josemiguelduin@gmail.com>
 * @verion 0.1
 * @see ExtJs4 <http://www.sencha.com>
 */

/**
 * @class AM.view.client.GridInvoices
 * @extends Ext.grid.Panel
 */
Ext.define('AM.view.client.GridInvoices' ,{
    extend      : 'Ext.grid.Panel',
    alias       : 'widget.GridInvoices',
    selModel    : Ext.create('Ext.selection.CheckboxModel'),
    initComponent: function() {
        this.columns = [
            { header: 'Número', flex: .7 },
            { header: 'Cliente', flex: 1.6 },
            { header: 'Creación', flex: .6 },
            { header: 'Vencimiento', flex: .6 },
            { header: 'Total', flex: .6 },
            { header: 'Pagado', flex: .6 },
            { header: 'Por Pagar', flex: .6 },
            { header: 'Estado', flex: .5 },
            { header: 'Acciones', flex: 1.5 },
        ];

        this.dockedItems = [ {
                xtype       : 'pagingtoolbar',
                dock        : 'bottom',
                displayInfo : true,
                displayMsg  : 'Mostrando {0} - {1} de {2}',
                emptyMsg    : "Sin datos para mostrar"
            }
        ];

        this.callParent(arguments);
    }
});