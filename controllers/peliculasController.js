let db = require('../database/models')

let peliculasController = {
    crear: function(req, res){
        db.Genero.findAll()
            .then((generos)=>{
                return res.render('crearPeliculas', {
                    generos: generos,
                })
            })
    },
    guardar: function(req,res){
        db.Pelicula.create({
            title: req.body.titulo,
            awards: req.body.premio,
            release_date: req.body.fecha_lanzamiento,
            genre_id: req.body.genero,
            length: req.body.duracion,
            rating: req.body.rating,
        });
        // res.send(req.body)
        res.redirect('/peliculas')
    },
    listado: function(req,res){
        db.Pelicula.findAll()
        .then((peliculas)=>{
            return res.render('listadoPeliculas', {
                peliculas: peliculas
            })
        })
    }

}

module.exports = peliculasController