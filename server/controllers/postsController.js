const posts = require('../../db/models/Subs');

const postsController = {
  createPosts: (req, res) => {
    posts
      .create({
        link: req.body.link,
        title: req.body.title,
        votes: req.body.votes,
        type: req.body.type,
        pageid: req.body.pageid,
        userid: req.body.userid,
        postid: req.body.postid,
      })
      .then(() => {
        console.log('New posts creates');
        res.status(201).send('New post created');
      })
      .catch(err => console.error('postsController create', err));
  },
  getPosts: (req, res) => {
    posts
      .findAll({})
      .then(data => {
        res.status(200).send(data);
      })
      .catch(err => console.error('postsController get', err));
  },
};

module.exports = postsController;
