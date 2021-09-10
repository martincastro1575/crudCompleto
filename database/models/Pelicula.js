module.exports = function(sequelize, DataTypes){
    let alias = "Pelicula"

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title:{
            type: DataTypes.STRING,
        },
        awards:{
            type: DataTypes.INTEGER,
        },
        rating:{
            type: DataTypes.DOUBLE,
        },
        length:{
            type: DataTypes.INTEGER,
        },
        genre_id:{
            type: DataTypes.INTEGER,
        },
        release_date:{
            type: DataTypes.DATE,
        }
    }

    let config = {
        tableName: "movies",
        timestamps: false
    }

    let Pelicula = sequelize.define(alias, cols, config);
    //Creo las asociaciones o relaciones
    Pelicula.associate = function(models){
        Pelicula.belongsTo(models.Genero, {
            as: "genero",
            foreignKey: "genre_id",
        });

        Pelicula.belongsToMany(models.Actor, {
            as: "actores",
            through: "actor_movie",
            foreignKey: "movie_id",
            other_key: "actor_id",
            timestamps: false,
        });
        
    } 
    return Pelicula
}