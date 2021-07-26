const Sequelize = require('sequelize')


const sequelize = new Sequelize('mysql://b54afa87289859:6f8139f1@eu-cdbr-west-01.cleardb.com/heroku_2ac31d881f3efc4?reconnect=true', {
    host: 'eu-cdbr-west-01.cleardb.com',
    dialect: 'mysql',
});



module.exports = sequelize;