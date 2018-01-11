/**
 * Contiene los configuraciones y componentes globales
 * de la vista, gestionando lo referente a listar los contactos 
 *
 * La contraparte en el BackEnd es:
 *      FileName  : controllers/IndexController.php
 *      ClassName : IndexController
 *      ActionName: Index
 *      ActionName: ViewClients
 *      ActionName: ViewProviders

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
        Ext.create('AM.view.client.List',{
            renderTo: 'gridClients',
            title: ''
        });
    }
});