El proyecto blog, esta creado en Angular y php, con conexión a una base de datos simple en mysql. En Angular el proyecto corre en la consola con el comando ng serve -o y PHP en un servidor (local) que cuenta con php, apache y mysql, el script de la base de datos se encuentra en el repositorio, consta de (por el momento) 2 tablas, cada una con su respectiva clave primaria

El backend (test) se conecta a la base de datos mediante la funcion de mysqli de php, y la comunicación entre el frontend (Blog) y backend se realiza a traves de solicitudes http

por el momento el proyecto solo funciona de manera local, para correr el proyecto rontend se usa el comando ng serve -o
