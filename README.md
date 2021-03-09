
ESTRUCTURA DE PROYECTO: 

-BACK (carpetas y contenido)

-server.js: 
1) archivo principal de conexión hacia las carpetas del back (rutas, modelos, middleware y controllers)
2) config de uso de express, bodyparser, middlewares, etc. 
3) sincronización con la db y listening en el puerto del server. 

-config:
1) index.js: conexión a base de datos y sequelize.
2) seed.js: data de prueba para testear rutas.

-routes:
1) index.js: archivo de conexión a rutas modularizadas (carrito, productos y usuarios, auth).
2) archivos específicos con rutas para cada modelo.

-controllers:
1) archivos controladores de rutas por cada modelo. 

-models: 
1) index.js conexión a archivos de modelos específicos y conexión con la base de datos.
2) archivos por cada modelo del proyecto (carrito, productos, usuarios).

-middleware: 
1) archivo para configuración de framework de autenticación --> JWT

///////////////////////////////////////////////////////////////////////////////////////////////////

FRONT (carpetas y contenido)
-public: archivos estáticos e index.html 

-src: 












