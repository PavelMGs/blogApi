const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

// const comments = sequelize.define("Comments", {
//     id: {
//         primaryKey: true,
//         autoIncrement: true,
//         allowNull: false,
//         type: Sequelize.INTEGER
//     },
//     body: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
// })

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
        type: Sequelize.STRING,
        allowNull: false
    },
})

module.exports = post;