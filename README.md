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

--------------------------------------------------------------------------------------------

Post review:

1. Se corrigieron todos los warnings (en rojo), que habia hasta el momento, a excepcion de los del componente `ProductCard`.
2. Las carpetas se movieron de lugar en base a la review. Pero aun faltan agruparlas en grupos mas grandes.
3. Controller para busqueda de ordenes y rutas.
4. Al ingresar a la pagina, se comprueba que el usuario este logeado.
    No logeado: Se muestran los enlaces a: HOME - ADMIN - LOGIN - REGISTER
    Logeado: Se muestra HOME - ADMIN - Logout (aunque falta crear la ruta tanto para front como para back, y su interaccion)
    y el icono del Carrito
5. Al clikear en el carro se muestra el cartID y las respectivas ordersID
