const Country = require ('./Country');
const Food = require ('./Food');
const Receipe = require ('./Receipe');
const User = require('./User')

User.hasMany(Food, {
    foreignKey: "user_id",
    onDelete: 'CASCADE'
});

Food.belongto(User, {
    foreignKey: "user_id",
});

Country.hasMany(Food, {
    foreignKey: "country_id",
    onDelete: 'CASCADE'
});

Food.belongto(Country, {
    foreignKey: "country_id",
    onDelete: 'CASCADE'
});

Food.hasOne(Receipe, {
    foreignKey: "food_id",
    onDelete: 'CASCADE'
});

Receipe.belongsto(Food, {
    foreignKey: "food_id",
    onDelete: 'CASCADE'
});

module.exports = { Country, Food, Receipe, User }
