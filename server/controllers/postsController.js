const posts = require('../../db/models/Subs');

const postsController = {
  createPosts: (req, res) => {
    posts
      .create({
        link: req.link,
        title: req.title,
        votes: 0,
        type: req.type,
        pageid: req.pageid,
        userid: req.userid,
        postid: req.postid,
      })
      .then(posts.findAll({}))
      .then(data => {
        console.log('new posts creates');
        res.status(201).send(data);
      })
      .catch(err => console.log('postsController create', err));
  },
  getPosts: (req, res) => {
    posts
      .findAll({})
      .then(data => {
        res.status(201).send(data);
      })
      .catch(err => console.log('postsController get', err));
  },
};

module.exports = postsController;
