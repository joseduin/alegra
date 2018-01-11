/**
 * Listado Ordenes de Compras
 *
 * @author Jose Duin <josemiguelduin@gmail.com>
 * @verion 0.1
 * @see ExtJs4 <http://www.sencha.com>
 */

/**
 * @class AM.view.client.GridPurchaseOrder
 * @extends Ext.grid.Panel
 */
Ext.define('AM.view.client.GridPurchaseOrder' ,{
    extend      : 'Ext.grid.Panel',
    alias       : 'widget.GridPurchaseOrder',
    initComponent: function() {
        this.columns = [
            { header: 'Código', flex: .6 },
            { header: 'Cliente', flex: 2.5 },
            { header: 'Fecha', flex: .6 },
            { header: 'Fecha de entrega', flex: .7 },
            { header: 'Estado', flex: .6 },
            { header: 'Total', flex: .6 },
            { header: 'Acciones', flex: .8 },
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