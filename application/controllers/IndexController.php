<?php
/**
 * IndexController
 * 
 * Listar/Mostrar/Agregar/Editar Contacto
 *
 * @author Jose Duin <josemiguelduin@gmail.com>
 * @verion 0.1
 * @package controllers
 * @see Zend Framework <http://framework.zend.com>
 */

/**
 * @class IndexController
 * @extends Zend_Controller_Action
 */
class IndexController extends Zend_Controller_Action
{

    /**
     * Método inicial
     *
     * @access public
     */
    public function init()
    {
        // Item del header activado por defecto
        $this->view->item_header_active = 'todos';
    }

    /**
     * Listado de todos los contactos
     *
     * @view /views/scripts/index/index.phtml
     * @access public
     */
    public function indexAction()
    {
        $this->view->userConfigAction = 'getAllContacts';  
        $this->view->body = 'contact-index'; 
    }

    /**
     * Listado de todos los contactos tipo cliente
     *
     * @view /views/scripts/index/view-clients.phtml
     * @access public
     */
    public function viewClientsAction()
    {
        $this->view->userConfigAction = 'getContactsByType';   
        $this->view->userConfigParams = 'client';   
        $this->view->item_header_active = 'client';
        $this->view->body = 'contact-index';
    }

    /**
     * Listado de todos los contactos tipo proveedor
     *
     * @view /views/scripts/index/view-providers.phtml
     * @access public
     */
    public function viewProvidersAction()
    {
        $this->view->userConfigAction = 'getContactsByType';   
        $this->view->userConfigParams = 'provider';   
        $this->view->item_header_active = 'provider';
        $this->view->body = 'contact-index';
    }

    /**
     * Agregar contacto
     *
     * @view /views/scripts/index/add.phtml
     * @access public
     */
    public function addAction()
    {
        $this->view->body = 'contact-create';
    }

    /**
     * Editar contacto
     * Obtenemos el parametro id directamente de la url
     *
     * @view /views/scripts/index/edit.phtml
     * @access public
     */
    public function editAction()
    {
        $id = $this->getRequest()->getParam('id');
        $this->view->userConfigAction = 'getContactsById';   
        $this->view->userConfigParams = $id;   
    }

    /**
     * Visualizar un contacto
     * Obtenemos el parametro id directamente de la url
     *
     * @view /views/scripts/index/view.phtml
     * @access public
     */
    public function viewAction()
    {
        $id = $this->getRequest()->getParam('id');
        $service = new Service_Alegra();
        $this->view->client = Zend_Json::decode( $service->getContactsById( $id ) );
    }

    /**
     * preDispatch - Método ejecutado despues de init
     *
     * Obtenemos el nombre del metodo que se esta efectuando
     * cargamos el archivo ExtJs correspondiente con la metodo
     *
     * @access public
     */    
    public function preDispatch()
    {
        parent::preDispatch();
        $layout = new Zend_Layout();

        switch ( $this->getRequest()->getActionName() ) {
            case 'add':
                $js = 'clientAdd';
                break;
            case 'edit':
                $js = 'clientEdit';
                break;
            case 'view':
                $js = 'clientView';
                break;
            default:
                $js = 'clientList';
                break;
        }

        $layout->getView()->headScript()->appendFile('/js/app/' . $js . '.js');
    }

}

