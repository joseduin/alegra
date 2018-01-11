/**
 * Listado Transacciones
 *
 * @author Jose Duin <josemiguelduin@gmail.com>
 * @verion 0.1
 * @see ExtJs4 <http://www.sencha.com>
 */

/**
 * @class AM.view.client.GridTransactions
 * @extends Ext.grid.Panel
 */
Ext.define('AM.view.client.GridTransactions' ,{
    extend      : 'Ext.grid.Panel',
    alias       : 'widget.gridTransactions',

    initComponent: function() {
        this.columns = [
            { header: 'Fecha', flex: .5 },
            { header: 'Estado' , flex: .5 },
            { header: 'Detalle',  flex: 3 },
            { header: 'Salidas', flex: .6},
            { header: 'Entradas', flex: .6 },
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