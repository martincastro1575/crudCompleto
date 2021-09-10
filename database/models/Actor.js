module.exports = function(sequelize, DataTypes){
    let alias = "Actor"

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name:{
            type: DataTypes.STRING,
        },
        last_name:{
            type: DataTypes.STRING,
        }
    }

    let config = {
        tableName: "actors",
        timestamps: false
    }

    //Creo el modelo
    let Actor = sequelize.define(alias, cols, config);
    //Creo las asociaciones o relaciones
    Actor.associate = function(models){
        Actor.belongsToMany(models.Pelicula, {
            as: "peliculas",
            through: "actor_movie",
            foreignKey: "actor_id",
            other_key: "movie_id",
            timestamps: false,
        });
    }   
    return Actor
}