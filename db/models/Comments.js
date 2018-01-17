//* ** not in use combine with Posts
const Sequelize = require('sequelize');
const database = require('../index');

const Comments = database.define('Comments', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  text: {
    type: Sequelize.TEXT,
    required: true,
  },
  username: {
    type: Sequelize.STRING,
    required: true,
  },
});

module.exports = Comments;
