module.exports = function(sequelize, DataTypes){
    let alias = "Genero"

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: DataTypes.STRING,
        }
    }

    let config = {
        tableName: "genres",
        timestamps: false
    }

    //Creo el modelo
    let Genero = sequelize.define(alias, cols, config);

    //Creo las asociaciones o relaciones
    Genero.associate = function(models){
        Genero.hasMany(models.Pelicula, {
            as: "peliculas",
            foreignKey: "genre_id",
            

        });
    }

    return Genero
}