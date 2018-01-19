const express = require('express');
const userController = require('../controllers/usersController');
const postsController = require('../controllers/postsController');
const subsController = require('../controllers/subsController');
const commentsController = require('../controllers/commentsController');

const router = express.Router();

router
  .route('/users')
  .get(userController.getUsers)
  .post(userController.createUser);
router
  .route('/subs')
  .get(subsController.getSubs)
  .post(subsController.createSubs);
router
  .route('/posts')
  .get(postsController.getPosts)
  .post(postsController.createPosts);
router
  .route('/comments')
  .get(commentsController.getComment)
  .post(commentsController.createComment);

module.exports = router;
