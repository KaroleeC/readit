const Sequelize = require('sequelize');
const database = require('../index');

const users = database.define('users', {
  userid: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
});

module.exports = users;
