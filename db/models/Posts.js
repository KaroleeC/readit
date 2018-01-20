const Sequelize = require('sequelize');
const database = require('../index');
// combined posts and comments
const posts = database.define('Posts', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  link: {
    type: Sequelize.STRING,
    required: true,
  },
  title: {
    type: Sequelize.STRING,
    required: true,
  },
  votes: {
    type: Sequelize.INTEGER,
    required: true,
  },
  type: {
    type: Sequelize.INTEGER,
    required: true,
  },
  pageid: {
    type: Sequelize.STRING,
    required: false,
  },
  username: {
    type: Sequelize.STRING,
    required: false,
  },
  postid: {
    type: Sequelize.INTEGER,
    required: true,
  },
});

module.exports = posts;
