import express from 'express';
import {paginaInicio, paginaNosotros, paginaViajes, paginaTestimoniales, paginaDetalleViaje} from '../controllers/paginasController.js';
import { guardarTestimonial } from '../controllers/testimonialController.js';

const router = express.Router();

//creando una ruta
/**
 * req: request - Lo que el usuario envia al servidor
 * res: response - Lo que el servidor responde al usuario
 */
 router.get( '/', paginaInicio );

//Creando una ruta nosotros
router.get( '/nosotros', paginaNosotros );

//Creando la ruta de viajes
router.get( '/viajes', paginaViajes );

//crear las rutas de los distintos viajes
router.get( '/viajes/:slug', paginaDetalleViaje );


//Creando la ruta de testimoniales
router.get( '/testimoniales', paginaTestimoniales );

//post a testimoniales
router.post( '/testimoniales', guardarTestimonial );


export default router;