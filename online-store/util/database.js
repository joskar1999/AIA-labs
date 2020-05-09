const Sequelize = require('sequelize');

const sequelize = new Sequelize('aia_online_store', 'admin', 'admin', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql'
});

module.exports = sequelize;