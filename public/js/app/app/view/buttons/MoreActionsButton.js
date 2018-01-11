/**
 * Boton en mostrar un contacto
 *
 * @author Jose Duin <josemiguelduin@gmail.com>
 * @verion 0.1
 * @see ExtJs4 <http://www.sencha.com>
 */

/**
 * @class AM.view.buttons.MoreActionsButton
 * @extends Ext.Button
 * @todo colocarle las acciones a los botones
 */
Ext.define('AM.view.buttons.MoreActionsButton', {
    extend  : 'Ext.Button',
    text    : 'Más acciones',
    style: 'padding: 1px 5px 8px 5px;',
    baseCls : 'x-btn',
    cls  : 'button2',

    initComponent: function() {

    	this.menu = [ {
                text: 'Adjuntar Archivo'
            }, {
                text: 'Ver estado de cuenta cliente'
            },
        ];

    	this.callParent(arguments);
    }
});