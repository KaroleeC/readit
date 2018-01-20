const posts = require('../../db/models/Posts');

const postsController = {
  createPosts: (req, res) => {
    console.log('createpost req body', req.payload);
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
    //  where: { pageid: req.query.pageid, type: 0 } 
    posts
      .findAll({where: { pageid: req.query.pageid, type: 0 } })
      .then(data => {
        res.status(200).send(data);
      })
      .catch(err => console.error('postsController get', err));
  },
  changeVote: (req, res) => {
    console.log('Change posts RAN', req.body);

    posts
      .findById(req.body.id)
      .then(post => post.update({ votes: req.body.votes }))
      .then(data => {
        console.log('PUT SUCCESS');
        res.status(200).send(data);
      })
      .catch(err => {
        console.log('PUT FAIL');
        res.status(500).send(err);
      });
  },
};

module.exports = postsController;
