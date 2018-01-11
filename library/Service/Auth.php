<?php
/**
 * Service_Auth
 * 
 * Configuramos las variables necesarias para
 * la conexion con los servicios de alegra
 *
 * @author Jose Duin <josemiguelduin@gmail.com>
 * @verion 0.1
 * @package Service
 * @see Zend Framework <http://framework.zend.com>
 * @see Alegra Api <https://developer.alegra.com/docs/autenticacion>
 */

/**
 * @class Service_Auth
 */
class Service_Auth 
{

	/**
     * Constante que define el correo electonico de un usuario 
     * registrado en la plataforma de alegra
     *
     * @var string
     */
	const EMAIL = 'YOUR_EMAIL';

	/**
     * Constante que define el token otorgado a un usuario 
     * registrado en la plataforma de alegra
     *
     * @var string
     */
	const TOKEN = 'TOKEN_KEY';

	/**
     * Preparamos los parametros de autentificacion
     *
     * @return string
     * @access public
     */
	public function getAccessAuth() 
	{
		return base64_encode( self::EMAIL . ':' . self::TOKEN );
	}
	
}