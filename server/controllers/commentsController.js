// const comments = require('../../db/models/Comments');

// const commentsController = {
//   createComments: (req, res) => {
//     comments
//       .create({})
//       .then(comments.findAll({}))
//       .then(data => {
//         console.log('new sub creates');
//         res.status(201).send(data);
//       })
//       .catch(err => console.log('commentsController create', err));
//   },
//   getComments: (req, res) => {
//     comments
//       .findAll({})
//       .then(data => {
//         res.status(201).send(data);
//       })
//       .catch(err => console.log('commentsController get', err));
//   },
// };

// module.exports = commentsController;
