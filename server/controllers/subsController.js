const subs = require('../../db/models/Subs');

const subsController = {
  createSubs: (req, res) => {
    subs
      .create({
        name: req.name,
      })
      .then(subs.findAll({}))
      .then(data => {
        console.log('new sub creates');
        res.status(201).send(data);
      })
      .catch(err => console.log('subsController create', err));
  },
  getSubs: (req, res) => {
    subs
      .findAll({})
      .then(data => {
        res.status(201).send(data);
      })
      .catch(err => console.log('subsController get', err));
  },
};

module.exports = subsController;
