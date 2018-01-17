const users = require('../../db/models/Users');

const usersController = {
  createUser: (req, res) => {
    users
      .create({
        name: req.name,
        password: req.password,
      })
      .then(users.findAll({ where: { name: req.name } }))
      .then(data => {
        console.log('new user creates');
        res.status(201).send(data);
      })
      .catch(err => console.log('usersController create', err));
  },
  getUser: (req, res) => {
    users
      .findAll({ where: { id: req.userid } })
      .then(data => {
        res.status(201).send(data);
      })
      .catch(err => console.log('usersController get', err));
  },
};

module.exports = usersController;
