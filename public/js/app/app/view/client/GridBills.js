/**
 * Listado Facturas de Compras
 *
 * @author Jose Duin <josemiguelduin@gmail.com>
 * @verion 0.1
 * @see ExtJs4 <http://www.sencha.com>
 */

/**
 * @class AM.view.client.GridBills
 * @extends Ext.grid.Panel
 */
Ext.define('AM.view.client.GridBills' ,{
    extend      : 'Ext.grid.Panel',
    alias       : 'widget.GridBills',
    initComponent: function() {
        this.columns = [
            { header: 'Factura', flex: .7 },
            { header: 'Proveedor', flex: 1.5 },
            { header: 'Creación', flex: .6 },
            { header: 'Vencimiento', flex: .6 },
            { header: 'Total', flex: .6 },
            { header: 'Pagado', flex: .6 },
            { header: 'Por Pagar', flex: .6 },
            { header: 'Estado', flex: .6 },
            { header: 'Acciones', flex: 1 },
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