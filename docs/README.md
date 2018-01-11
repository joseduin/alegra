## Requisitos para la Autentificación en la API de Alegra

* Crear una cuenta [aqui](https://www.alegra.com/)
* Generar un token [aqui ](https://app.alegra.com/configuration/api)

En el archivo **library/Service/Auth.php** debes configurar las siguientes variables:
```
const EMAIL = 'YOUR_EMAIL';
const TOKEN = 'TOKEN_KEY';
```

## Instalación

- Instalar composer
- Entrar en la raiz del proyecto e instalar las dependencias con **composer install**
- Configurar un **VHost**
```
<VirtualHost *:80>
   DocumentRoot "C:/xampp/htdocs/alegra/public"
   ServerName .local

   # This should be omitted in the production environment
   SetEnv APPLICATION_ENV development

   <Directory "C:/xampp/htdocs/alegra/public">
       Options Indexes MultiViews FollowSymLinks
       AllowOverride All
       Order allow,deny
       Allow from all
   </Directory>
</VirtualHost>
```


## API Alegra Documentación

* [Api de alegra](https://developer.alegra.com/docs/) 