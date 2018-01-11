/**
 * Listado Cotizaciones
 *
 * @author Jose Duin <josemiguelduin@gmail.com>
 * @verion 0.1
 * @see ExtJs4 <http://www.sencha.com>
 */

/**
 * @class AM.view.client.GridEstimates
 * @extends Ext.grid.Panel
 */
Ext.define('AM.view.client.GridEstimates' ,{
    extend      : 'Ext.grid.Panel',
    alias       : 'widget.GridEstimates',
    initComponent: function() {
        this.columns = [
            { header: 'Código', flex: .6 },
            { header: 'Cliente', flex: 3.5 },
            { header: 'Creación', flex: .6 },
            { header: 'Total', flex: .6 },
            { header: 'Acciones', flex: .6 },
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