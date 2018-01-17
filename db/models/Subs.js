const Sequelize = require('sequelize');
const database = require('../index');

const subPages = database.define('subPages', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
  },
});

module.exports = subPages;
