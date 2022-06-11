//Configurando express
import express from 'express';
import router from './routes/index.routes.js';
import db from './config/db.js';
import dotenv from 'dotenv';

//Obteniendo variables de entorno
dotenv.config( { path: '.env' } );

//Funcion para ejecutar express
const app = express();

//conectar la base de datos
db.authenticate()
    .then(() => console.log('Conectado a la base de datos'))
    .catch(err => console.log(err));


//Configurando el puerto
const PORT = process.env.PORT || 4000;

//Habilitar PUG
app.set( 'view engine', 'pug' );

//crear middleware para obtener el año actual
app.use( ( req, res, next ) => {
    res.locals.year = new Date().getFullYear();
    res.locals.nombreSitio = 'Agencia de viajes';
    next();
} );

//Agregar body parser para leer los datos del formulario
app.use( express.urlencoded( { extended: true } ) );

//Definir la carpeta publica con los archivos estaticos
app.use( express.static( 'public' ) );

//Agregar router
app.use( '/', router );

//Arranque del servidor
app.listen( PORT ,() => {
    console.log(`Server is running on port ${PORT}`);
} );

