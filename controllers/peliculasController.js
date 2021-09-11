const { signedCookie } = require('cookie-parser');
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
    },
    detalle: function(req,res){
        db.Pelicula.findByPk(req.params.id,
            {
                include:[
                    {association:"actores"},
                    {association:"genero"},
                ]
            })
        .then((detalle)=>{
            return res.render('detallePelicula',{
                pelicula: detalle,
            })
        })
    },

    editar: function(req, res){
        
        let pedidoPelicula = db.Pelicula.findByPk(req.params.id)
        let pedidoGenero = db.Genero.findAll()

        Promise.all([pedidoPelicula, pedidoGenero])
        .then(([pelicula,generos])=>{
            
            res.render("editarPelicula",{
                pelicula: pelicula,
                generos: generos,
            })
        })
    },

    actualizar:function(req,res){
        db.Pelicula.update({
            title: req.body.titulo,
            awards: req.body.premio,
            release_date: req.body.fecha_lanzamiento,
            genre_id: req.body.genero,
            length: req.body.duracion,
            rating: req.body.rating,
        }, {
            where: {
                id:req.params.id
            }
        });

        
        res.redirect('/peliculas/detalle/' + req.params.id)
    },
    borrar: function(req,res){
        db.Pelicula.destroy({
            where:{
                id: req.params.id,
            }
        });

        res.redirect('/peliculas')
    }

}

module.exports = peliculasController