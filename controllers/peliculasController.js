let db = require('../database/models')

let peliculasController = {
    crear:(req, res)=>{
        db.Genero.findAll()
            .then((generos)=>{
                return res.render('listadoPeliculas', {
                    generos: generos,
                })
            })
    }

}

module.exports = peliculasController