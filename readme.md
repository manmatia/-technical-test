Server
Tecnologías
El proyecto utiliza las siguientes tecnologías y dependencias:

Express: Framework de Node.js para la creación de aplicaciones web rápidas y escalables.
Axios: Librería para realizar peticiones HTTP desde el servidor.
Cookie-parser: Middleware para analizar cookies HTTP.
CORS: Middleware para manejar la política de control de acceso HTTP.
dotenv: Manejo de variables de entorno en archivos .env.
Morgan: Middleware para registrar solicitudes HTTP.
Nodemon: Herramienta para reiniciar automáticamente el servidor cuando se detectan cambios en el código.
pg: Librería de Node.js para conectarse a bases de datos PostgreSQL.
pg-hstore: Librería para manejar datos tipo hstore con PostgreSQL.
Sequelize: ORM (Object-Relational Mapping) para trabajar con bases de datos SQL.

.env
PORT=3001
USER=postgres
PASSWORD="password"
DB_DEPLOY=postgres://postgres:password@localhost:5432/vvt

------------------------------------------------

Client
Este proyecto fue creado utilizando Create React App.

Tecnologías
El proyecto utiliza las siguientes tecnologías y dependencias:

React: Librería principal para la creación de la interfaz de usuario.
Redux Toolkit: Librería para manejar el estado global de la aplicación de manera más eficiente.
React Redux: Conexión entre React y Redux.
React Router DOM: Manejo de rutas en la aplicación.
Redux Thunk: Middleware para manejar acciones asíncronas en Redux.
Axios: Librería para realizar peticiones HTTP.
Bootstrap: Framework para el diseño de la interfaz de usuario.
SweetAlert2: Biblioteca para mostrar alertas y notificaciones personalizadas.


Instalar las dependencias:
Usa el siguiente comando para instalar todas las dependencias del proyecto especificadas en el archivo package.json:


npm install