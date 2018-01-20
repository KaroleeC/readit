const posts = require('../../db/models/Posts');

const commentsController = {
  createComment: (req, res) => {
    console.log('createcomment req body', req.body);
    posts
      .create({
        title: req.body.title,
        votes: req.body.votes,
        type: req.body.type,
        username: req.body.username,
        postid: req.body.postid,
      })
      .then(() => {
        console.log(req.body);
        res.status(201).send('comment created');
      })
      .catch(err => console.error('commentsController create', err));
  },
  getComment: (req, res) => {
    console.log('GETCOM REQ.BODY ', req.body);
    posts
      .findAll({ where:{ type: 1, postid: req.query.postid } })
      .then(data => {
        res.status(200).send(data);
      })
      .catch(err => console.error('postsController get', err));
  },
};

module.exports = commentsController;
