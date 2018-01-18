const subs = require('../../db/models/Subs');

const subsController = {
  createSubs: (req, res) => {
    console.log('***********', req.body);
    subs
      .create({
        name: req.body.name,
      })
      .then(() => {
        console.log('New sub created');
        res.status(201).send('New sub created');
      })
      .catch(err => console.error('subsController create', err));
  },
  getSubs: (req, res) => {
    subs
      .findAll()
      .then(data => {
        res.status(200).send(data);
      })
      .catch(err => console.error('subsController get', err));
  },
};

module.exports = subsController;
