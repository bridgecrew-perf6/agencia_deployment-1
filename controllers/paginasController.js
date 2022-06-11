import { Viaje } from "../models/Viaje.js";
import { Testimonial } from "../models/Testimoniales.js";

const paginaInicio = async ( req, res ) => {

    //Consultar 3 viajes del modelo Viaje
    //Consultar 3 testimoniales del modelo Testimoniales

    //Resolver multiples await con promise.all
    const promiseDB = [];
    promiseDB.push( Viaje.findAll( { limit: 3 } ) );
    promiseDB.push( Testimonial.findAll( { limit: 3 } ) );


    try {
        //Resolvemos las consultas al mismo tiempo
        const respuesta = await Promise.all( promiseDB );
        const [ viajes, testimoniales ] = respuesta

        res.render( 'inicio', {
            title: 'Inicio',
            clase: 'home',
            viajes,
            testimoniales
        } );
        
    } catch (error) {
        console.log(error);
    }
        
     
    
}

const paginaNosotros = ( req, res ) => {
    res.render( 'nosotros', {
        title: 'Nosotros',
    } );
}

const paginaViajes = async( req, res ) => {
    try {
        //Consultar los datos de viaje de la base de datos
        const viajes = await Viaje.findAll();

        res.render( 'viajes', {
            title: 'Próximos Viajes',
            viajes
        } );
        
    } catch (error) {
        console.log(error);
    }
        
    
}

const paginaTestimoniales = async ( req, res ) => {
    //Consultar los datos de testimoniales de la base de datos
    try {
        const testimoniales = await Testimonial.findAll();

        res.render( 'testimoniales', {
            title: 'Testimoniales',
            testimoniales
        } );
        
    } catch (error) {
        console.log(error);
    }

}

//Mostrar un viaje por su slug
const paginaDetalleViaje = async ( req, res ) => {
    
    const { slug } = req.params;

    try {
        //Consultar el viaje de la base de datos
        const viaje = await Viaje.findOne( {
            where: {
                slug
            }
        } );

        res.render( 'viaje', {
            title: 'Viaje',
            viaje
        } );
        
    } catch (error) {
        console.log(error);
    }

};

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}