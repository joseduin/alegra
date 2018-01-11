/**
 * Contiene los configuraciones y componentes globales
 * de la vista, gestionando lo referente a mostrar un contacto 
 *
 * La contraparte en el BackEnd es:
 *      FileName  : controllers/IndexController.php
 *      ClassName : IndexController
 *      ActionName: View

 *
 * @author Jose Duin <josemiguelduin@gmail.com>
 * @verion 0.1
 * @see ExtJs4 <http://www.sencha.com>
 */
Ext.application({
    name: 'AM',
    appFolder: '/js/app/app',
    controllers: ['Clients'],
    launch: function() {
        
        Ext.create('AM.view.buttons.MoreActionsButton', {
            renderTo : 'moreActionsButton',
            alias : 'moreActionsButton',
        });

        Ext.create('Ext.button.Button', {
            renderTo: 'statementLink',
            baseCls: 'btn-view',
            style: 'text-decoration: underline; cursor: pointer;',
            width: 45,
            text: 'Generar',
            name: 'viewLinkStatement',
            client: {
                email: 'ful@ito.com',
                linkStatement: 'https://app.alegra.com/client/statement/1982952-112/ZnVsQGl0by5jb20=-993e8c875540172e8ed880ddf2720bb3e590c27e0158eb1ba78466b8cbae0fa3',
            }
        });

        var panel = Ext.create('Ext.tab.Panel', {
            width: 1022,
            height: 615,
            renderTo: 'client-tabPanel',
            plain: true,
            items: [

                Ext.create('AM.view.client.GridTransactions', {
                    title: 'Transacciones',
                    
                }),
               
                Ext.create('AM.view.client.GridInvoices', {
                        title: 'Factura de Venta',
                        
                }),
                                                
                Ext.create('AM.view.client.GridBills', {
                    title: 'Facturas de compra',
                      
                }),
                
                Ext.create('AM.view.client.GridCreditNotes', {
                    title: 'Notas de crédito',
                        
                }),
                
                Ext.create('AM.view.client.GridDebitNotes', {
                    title: 'Notas débito',
                    
                }),

                Ext.create('AM.view.client.GridEstimates', {
                    title: 'Cotizaciones',
                   
                }),

                Ext.create('AM.view.client.GridRemissions', {
                    title: 'Remisiones',
                    
                }),
                           
                Ext.create('AM.view.client.GridPurchaseOrder', {
                    title: 'Órdenes de compra',
                    
                }),
                
                Ext.create('AM.view.client.GridJournals', {
                    title: 'Ajustes categorías',
                    
                })
                                                     
            ]
        });

    }
});