const path = require('path');
const Sequlize = require('sequelize');

const sequelize = new Sequlize('mydatabase', null, null, {
  dialect: 'sqlite',
  storage: path.join(__dirname, './dbstorage.sqlite'),
});

sequelize
  .authenticate()
  .then(console.log('database is up'))
  .catch(err => {
    console.log('db err', err);
  });

module.exports = sequelize;
