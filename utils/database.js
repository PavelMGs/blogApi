const Sequelize = require('sequelize')


const DB_NAME = 'blog';
const USER_NAME = 'admin';
const PASSWORD = '12345678';

// 12345678-Qwerty


const sequelize = new Sequelize('mysql://b54afa87289859:6f8139f1@eu-cdbr-west-01.cleardb.com/heroku_2ac31d881f3efc4?reconnect=true', {
    host: 'eu-cdbr-west-01.cleardb.com',
    dialect: 'mysql',
});

// const sequelize = new Sequelize( DB_NAME, USER_NAME, PASSWORD, {
//     host: 'localhost',
//     dialect: 'mysql',
// });

module.exports = sequelize;