import { Testimonial } from "../models/Testimoniales.js";

const guardarTestimonial = async (req, res) => {
    //validar que el usuario haya enviado los datos
    const { nombre, correo, mensaje } = req.body;
    const errores = [];

    if (nombre.trim() === '') {
        errores.push({ mensaje: 'El nombre esta vacio' });
    }
    if( correo.trim() === '') {
        errores.push({ mensaje: 'El correo esta vacio' });
    }
    if( mensaje.trim() === '') {
        errores.push({ mensaje: 'El mensaje esta vacio' });
    }

    if( errores.length > 0 ) {

        //Consultar los datos de testimoniales de la base de datos
        const testimoniales = await Testimonial.findAll();

        //Mostrar la vista con errorres
        res.render('testimoniales', {
            title: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        });
    }else {
        //Almacenar el la base de datos
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            });
            res.redirect('/testimoniales');
        } catch (error) {
            console.log(error);
            res.status(500).send('Hubo un error');
        }       
    }
}

export {
    guardarTestimonial
}