/**
 * Listado Notas de Credito
 *
 * @author Jose Duin <josemiguelduin@gmail.com>
 * @verion 0.1
 * @see ExtJs4 <http://www.sencha.com>
 */

/**
 * @class AM.view.client.GridCreditNotes
 * @extends Ext.grid.Panel
 */
Ext.define('AM.view.client.GridCreditNotes' ,{
    extend      : 'Ext.grid.Panel',
    alias       : 'widget.GridCreditNotes',
    initComponent: function() {
        this.columns = [
            { header: 'Código', flex: .7 },
            { header: 'Cliente', flex: 2.5 },
            { header: 'Creación', flex: .6 },
            { header: 'Total', flex: .6 },
            { header: 'Por aplicar', flex: .6 },
            { header: 'Acciones', flex: .7 },
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