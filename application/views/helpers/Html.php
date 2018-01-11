<?php
/**
 * Html Helper
 * 
 * Listar/Mostrar/Agregar/Editar Contacto
 *
 * @author Jose Duin <josemiguelduin@gmail.com>
 * @verion 0.1
 * @package views/helpers
 * @see Zend Framework <http://framework.zend.com>
 */

/**
 * @class Zend_View_Helper_Html
 * @extends Zend_View_Helper_Abstract
 */
class Zend_View_Helper_Html extends Zend_View_Helper_Abstract 
{
	/**
     * Devolvemos una intencia de la misma clase
     * para posteriormente usar un metodo de la clase
     *
     * @access public
     */
	public function html() 
  	{
        return $this;
    }

    /**
     * Validamos el el item activo en el header
     *
     * @param string $active
     * @param string $item
     * @return string
     * @access public
     */
	public function is_header_active($active, $item) 
  	{
        return strcmp($active, $item) == 0 ? ' class="active"' : null;
    }  

}
