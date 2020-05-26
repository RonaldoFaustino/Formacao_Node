const Sequelize = require('sequelize');

const connection = new Sequelize('quiaperguntas','root','admin', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection;