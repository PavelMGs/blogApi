const Sequelize = require('sequelize')

const DB_NAME = 'blog';
const USER_NAME = 'admin';
const PASSWORD = '12345678';


const sequelize = new Sequelize(DB_NAME, USER_NAME, PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;