<?php

class Bootstrap extends Zend_Application_Bootstrap_Bootstrap
{

    /**
     * Configuracion de la aplicación
     *
     * @var Zend_Config_Ini
     * @access protected
     */
    protected $_config;

    /**
     * Constante que indica la url base de los recursos 
     * alojados en alegra
     *
     * @var string
     */
    const ALEGRA_PATH = 'https://cdn1.alegra.com/';

    /**
     * Inicializa la configuracion de la aplicación, usando como referencia
     * la ruta donde se encuentra el controlador responsable de gestionar
     * las peticiones, logrando conectar ExtJs con Zend Framework
     */
    public function _initAppConfig()
    {        
        $path = APPLICATION_PATH . '/configs/';
        Zend_Registry::set('appConfigPath', $path);

        $this->_config = new Zend_Config_Ini(Zend_Registry::get('appConfigPath') . 'alegra.ini');
    }

    /**
     * Inicializa los recursos de la vista
     * 
     * @return Zend_View
     */
	protected function _initView()
    {
        // Initialize view
        $view = new Zend_View();
        $view->doctype('XHTML1_STRICT');
        $view->headTitle('Alegra Test | Jose Duin');
        $view->headLink(array(  'rel'  => 'shortcut icon', 
                                'href' => self::ALEGRA_PATH . 'images/favicon.ico', 
                                'type' => 'image/x-icon'), 'PREPEND');
        // Stylesheet
        $view->headLink()->appendStylesheet('/css/style1.css');
        $view->headLink()->appendStylesheet(self::ALEGRA_PATH . 'long-term/compressed/ext-theme-gray-all2.css');
        $view->headLink()->appendStylesheet(self::ALEGRA_PATH . 'public/5af60dda9db509a49077ebe9b67289f7/compressed/styles-min.css');
        // Javascript
        $view->headScript()->appendFile('/js/translate.js');
        $view->headScript()->appendFile(self::ALEGRA_PATH . 'long-term/compressed/Big.min.js');
        // ExtJs
        $view->headScript()->appendFile(self::ALEGRA_PATH . 'long-term/compressed/ext-all.js');
        $view->headScript()->appendFile(self::ALEGRA_PATH . 'public/5af60dda9db509a49077ebe9b67289f7/compressed/app-all.js');
        $view->headScript()->appendFile(self::ALEGRA_PATH . 'long-term/compressed/ext-lang-es.js');

        // Default Body Style
        $view->body = '';
        // ExtJs -> Zend Framework
        $view->userConfig = $this->_config->path->requests;
        $view->alegraPath = self::ALEGRA_PATH;

        // Add it to the ViewRenderer
        $viewRenderer = Zend_Controller_Action_HelperBroker::getStaticHelper(
            'ViewRenderer'
        );
        $viewRenderer->setView($view);
 
        // Return it, so that it can be stored by the bootstrap
        return $view;
    }

}

