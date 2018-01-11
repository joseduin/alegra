<?php
/**
 * API Controller
 * 
 * El comportamiento de esta clase es de intermediario entre el frontend
 * y el backend, recibiendo las peticiones realizadas en el frontend (request),
 * para ser redireccionadas a Service/Alegra (request), por medio de los 
 * parametros _action y _param sabemos que peticion debemos redirigirnos.
 * Finalmente devolviendo ambos response al frontend.
 *
 * @author Jose Duin <josemiguelduin@gmail.com>
 * @verion 0.1
 * @package controllers
 * @see Zend Framework <http://framework.zend.com>
 */

/**
 * @class ApiController
 * @extends Zend_Controller_Action
 */
class ApiController extends Zend_Controller_Action
{

    /**
     * Constante que define la petición a realizar
     *
     * @var string
     */
    const CALL_PARAM_ACTION = '_action';

    /**
     * Constante que define el parametro de la peticion 
     *
     * @var string
     */
    const CALL_PARAM_PARAMS = '_param';

    /**
     * Constante que define el codigo de error en las peticiones
     *
     * @var int
     */
    const REQUEST_ERROR_PRECONDITION = 412;

    /**
     * Conexion con los servicios REST de Alegra
     *
     * @var Service_Alegra
     * @access protected
     */
    protected $_service;

    /**
     * Método inicial - ejecutada despues del constructor
     * inicializa la configuracion que tendra el controlador
     *
     * @access public
     */
    public function init()
    {        
        // Desactiva el layout y render, porqué es soló un controlador de API
        $this->_helper->layout()->disableLayout();
        $this->_helper->viewRenderer->setNoRender( true );

        $this->_service = new Service_Alegra();
    }

    /**
     * Metodo principal de petición.
     *
     * Todas las peticiones Front/Back pasarán por este método.
     * Las peticiones se hacen de manera dinamica, metiante los 
     * parametros _action y _param, redireccionando la petición 
     * hacia los servicios.
     *  
     * @return array
     * @access public
     */
    public function requestAction()
    {
        $action = $this->getRequest()->getParam( self::CALL_PARAM_ACTION) ;

        if ( $action == 'addContact' ) {
            $param = Zend_Json::decode( $this->getRequest()->getParam( self::CALL_PARAM_PARAMS ) );  
        } else {
            $param = $this->getRequest()->getParam( self::CALL_PARAM_PARAMS );
        }
        
        if ( empty( $action ) ) {
            return $this->defaultResponses();  
        }

        if ( isset( $param ) && !empty( $param ) ) {
            $return = $this->_service->{$action}($param);
        } else {
            $return = $this->_service->{$action}();
        }
        $return = Zend_Json::decode( $return, true );
        return $this->responseSuccess( $return );  
    }

    /**
     * Metodo que retorna la respuesta generada por el servicio
     * 
     * @param array
     * @access private
     * @todo Transformamos la respuesta siguiendo los estandares de ExtJs
     */
    private function responseSuccess($data = array())
    {
        if ( !is_array( $data ) ) {
            $data = array( $data );
        }
        $this->_helper->json->sendJson( array( 'success' => true, 'result' => $data ) );
    }

    /**
     * Metodo que retorna una respuesta por defecto
     * 
     * @param string $msg
     * @param int $code
     * @access private
     * @todo La petición necesita atención: algo entre el FrontEnd y el BackEnd salio mal,
     *          revisar los parametros enviados
     */
    private function defaultResponses($type = 'invalid', $code = self::REQUEST_ERROR_PRECONDITION)
    {
        $this->_helper->json->sendJson( array(
            'success' => false,
            'code' => $code,
            'msg' => $type
        ));
    }

}
