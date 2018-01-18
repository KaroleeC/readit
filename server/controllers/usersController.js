const users = require('../../db/models/Users');

const usersController = {
  createUser: (req, res) => {
    console.log('***********');
    users
      .create({
        name: req.body.name,
        password: req.body.password,
      })
      .then(() => {
        console.log('new user creates');
        res.status(201).send('user created');
      })
      .catch(err => console.error('usersController create', err));
  },
  getUsers: (req, res) => {
    users
      .findAll({})
      .then(data => {
        res.status(200).send(data);
      })
      .catch(err => console.error('usersController get', err));
  },
};

module.exports = usersController;
