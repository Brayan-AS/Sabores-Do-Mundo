const { Model, DataTypes } = require ('sequelize');
const sequelize = require('../config/connection');

class Food extends Model {}

Food.init(
    {
        id :{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name :{
            type: DataTypes.STRING,
            allowNull: false
        },
        description :{
            type: DataTypes.TEXT('long'),
            allowNull: false
        },
        food_image :{
            type: DataTypes.STRING,
            allowNull: false
        },
        country_id :{
            type: DataTypes.INTEGER,
            references:{
                model: 'country',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        timestamps : false,
        modelName: 'food'
        
    }
)

module.exports = Food;