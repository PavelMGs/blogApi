const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

const comments = sequelize.define("Comments", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER
    },
    body: {
        type: Sequelize.STRING,
        allowNull: false
    },
    postId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        
    }
})

module.exports = comments;  