const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

const post = sequelize.define('Post', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT('long'),
        allowNull: false
    },
})

module.exports = post;