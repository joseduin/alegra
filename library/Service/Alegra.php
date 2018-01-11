<?php
/**
 * Alegra API
 * 
 * Listar/Mostrar/Agregar/Editar Contacto
 *
 * @author Jose Duin <josemiguelduin@gmail.com>
 * @verion 0.1
 * @package controllers
 * @see Zend Framework <http://framework.zend.com>
 */

/**
 * @class Service_Alegra
 * @extends Zend_Rest_Client
 * @todo lo ideal es tener una clase similar a esta como base para 
 *          las peticiones, teniendo metodos generales que se puedan
 *          reusar en el Crud: [getAll, getById, Add, Edit, Delete],
 *          en modulos apartes, cada seccion tendria su modulo 
 *          [Contactos, Precios, ...]
 */

class Service_Alegra extends Zend_Rest_Client
{

     /**
     * Constante que define la URL de la API de Alegra
     *
     * @var string
     */
    const URI = 'https://app.alegra.com/';

    /**
     * Constante que define la version de la API
     *
     * @var string
     */
    const API = '/api/v1/';

    /**
     * Guarda los parametros para realizar la peticion
     *
     * @var array
     * @access protected
     */
    protected $_params = array();

    /**
     * Guarda los parametros en bruto para ser usados en 
     * las peticiones que necesiten un formato application/json
     *
     * @var string
     * @access protected
     */
    protected $_paramsRaw;

    /**
     * Variable para configurar las peticiones
     *
     * @var Zend_Http_Client
     * @access protected
     */
    protected $_client;

    /**
     * Contructor - Metodo que se crea al instanciar la clase
     *
     * Configuramos las peticiones
     *
     * @access public
     */
    public function __construct()
    {
        $this->setUri( self::URI );
        $this->_client = self::getHttpClient();
        // API Key Auth
        $auth = new Service_Auth();
        $this->_client->setHeaders('Authorization', 'Basic ' . $auth->getAccessAuth());
    }

    /**
     * Asignamos los parametros de la peticion
     *
     * @param object $params
     * @access public
     */
    public function setParams($params)
    {
        foreach ($params as $key => $value) {

            switch (strtolower($key)) {
                case 'typeraw':
                    $this->_paramsRaw = Zend_Json::encode($value);
                    break;
                default:
                    $this->_params[$key] = $value;
                    break;
            }
        }

        return $this;
    }

    /**
     * Obtenemos los parametros de la peticion
     *
     * @return object
     * @access public
     */
    public function getParams()
    {
    	return !empty($this->_params) ? $this->_params : $this->_paramsRaw;
    }

    /**
     * Ejecutamos las peticiones
     *
     * @param string $requestType
     * @param string $path
     * @return array
     * @access public
     */
    public function sendRequest($requestType, $path)
    {
        $requestType = ucfirst(strtolower($requestType));
        if ($requestType !== 'Post' && $requestType !== 'Get' && $requestType !== 'Put' && $requestType !== 'Delete') {
            throw new Service_Alegra_Exception('Invalid request type: ' . $requestType);
        }

        try {
            $requestMethod = 'rest' . $requestType;
            $response = $this->{$requestMethod}(self::API . $path, $this->getParams());
            return $response->getBody();
        } catch (Zend_Http_Client_Exception $e) {
            throw new Service_Alegra_Exception( Zend_Json::decode($e->getMessage() ) );
        }
    }

    /**
     * Obtenemos un listado de todos los contactos
     *
     * @return array
     * @access public
     */
    public function getAllContacts()
    {
    	return $this->sendRequest('GET', 'contacts');
    }

    /**
     * Obtenemos un listado de los contactos por tipo
     *
     * @return array
     * @access public
     */
    public function getContactsByType($type)
    {
        $this->setParams( array('type' => $type) );  
        return $this->sendRequest('GET', 'contacts'); 
    }

    /**
     * Obtenemos un contacto por su ID
     *
     * @param string $id
     * @return array
     * @access public
     */
    public function getContactsById($id)
    {
        return $this->sendRequest('GET', 'contacts/' . $id); 
    }

    /**
     * Eliminamos un contacto por su ID
     *
     * @param string $id
     * @return array
     * @access public
     */
    public function deteleContact($id)
    {
        return $this->sendRequest('DELETE', 'contacts/' . $id);
    }

    /**
     * Agregamos un contacto
     *
     * @param object $client
     * @return array
     * @access public
     */
    public function addContact($client)
    {
        $this->setParams( array( "typeraw" => $client ) );
        return $this->sendRequest('POST', 'contacts');
    }

    /**
     * Editamos un contacto
     *
     * @param object $client
     * @return array
     * @access public
     */
    public function editContact($client)
    {
        $json = Zend_Json::decode( $client );
        $id = $json["id"];
        unset($json['id']);
        $this->setParams( array( "typeraw" => $json ) );
        return $this->sendRequest('PUT', 'contacts/' . $id);
    }

    /**
     * Obtenemos un listado de los precios
     *
     * @return array
     * @access public
     */
    public function getAllListPrice()
    {
        $arr = Zend_Json::decode( $this->sendRequest('GET', 'price-lists'), true);
        $empty = array("id" => "0","name" => "Ninguna","status" => "active","type" => "amount");
        array_unshift($arr, $empty);
        return Zend_Json::encode($arr);
    }

    /**
     * Obtenemos un listado de los vendedores
     *
     * @return array
     * @access public
     */
    public function getAllListSeller()
    {
        $arr = Zend_Json::decode( $this->sendRequest('GET', 'sellers/'), true);
        $empty = array("id" => "0","name" => "Ninguno","status" => "active","type" => "amount");
        array_unshift($arr, $empty);
        return Zend_Json::encode($arr);
    }

    /**
     * Obtenemos un listado de los terminos
     *
     * @return array
     * @access public
     * @todo averiguar donde se almacenan estos datos, para realizar la peticion
     */
    public function getAllListTerm()
    {
        $arr = array();
        $arr[] = array("id" => "0","name" => "Vencimiento manual","status" => "active","type" => "amount");
        $arr[] = array("id" => "1","name" => "De contado","status" => "active","type" => "amount");
        $arr[] = array("id" => "2","name" => "8 días","status" => "active","type" => "amount");
        $arr[] = array("id" => "3","name" => "15 días","status" => "active","type" => "amount");
        $arr[] = array("id" => "4","name" => "30 días","status" => "active","type" => "amount");
        $arr[] = array("id" => "5","name" => "60 días","status" => "active","type" => "amount");

        return Zend_Json::encode($arr);
    }

}
