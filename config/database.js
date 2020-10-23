
const { Sequelize } = require('sequelize');

module.exports = new Sequelize('sequeldb', 'root', '', {
    host: 'localhost',
    dialect:'mysql'
  });