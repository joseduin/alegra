/**
 * Listado Ajustes Categoria
 *
 * @author Jose Duin <josemiguelduin@gmail.com>
 * @verion 0.1
 * @see ExtJs4 <http://www.sencha.com>
 */

/**
 * @class AM.view.client.GridJournals
 * @extends Ext.grid.Panel
 */
Ext.define('AM.view.client.GridJournals' ,{
    extend      : 'Ext.grid.Panel',
    alias       : 'widget.GridJournals',
    initComponent: function() {
        this.columns = [
            { header: 'Fecha', flex: .7 },
            { header: 'Contacto', flex: 1 },
            { header: 'Referencia', flex: .7 },
            { header: 'Observaciones', flex: 3 },
            { header: 'Total', flex: .7 },
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