import Sequelize from 'sequelize';
import db from '../config/db.js';

//Definir la tabla de testimoniales
export const Testimonial = db.define('testimoniales', {
    nombre: {
        type: Sequelize.STRING
    },
    correo: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.TEXT
    }
});
