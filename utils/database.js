const Sequelize = require('sequelize')

const DB_NAME = 'mg-blog-db-connection';
const USER_NAME = 'b54afa87289859';
const PASSWORD = '6f8139f1';
// 12345678-Qwerty
// mysql://b54afa87289859:6f8139f1@eu-cdbr-west-01.cleardb.com/heroku_2ac31d881f3efc4?reconnect=true


const sequelize = new Sequelize('mysql://b54afa87289859:6f8139f1@eu-cdbr-west-01.cleardb.com/heroku_2ac31d881f3efc4?reconnect=true', {
    host: 'eu-cdbr-west-01.cleardb.com',
    dialect: 'mysql',
});

module.exports = sequelize;