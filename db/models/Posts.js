const Sequelize = require('sequelize');
const database = require('../index');
// combined posts and comments
const Posts = database.define('Posts', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  link: {
    type: Sequelize.TEXT,
    required: true,
  },
  title: {
    type: Sequelize.TEXT,
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
    type: Sequelize.INTEGER,
    required: false,
  },
  postid: {
    type: Sequelize.INTEGER,
    required: true,
  },
});

module.exports = Posts;
