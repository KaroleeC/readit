const posts = require('../../db/models/Posts');

const postsController = {
  createPosts: (req, res) => {
    console.log('createpost req body', req.body);
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
        console.log(req.body);
        res.status(201).send('post created');
      })
      .catch(err => console.error('postsController create', err));
  },
  getPosts: (req, res) => {
    console.log('GETPOST REQ.BODY ', req.body);
    posts
      .findAll({ where:{ pageid: req.query.pageid, type: 0 } })
      .then(data => {
        res.status(200).send(data);
      })
      .catch(err => console.error('postsController get', err));
  },
};

module.exports = postsController;
