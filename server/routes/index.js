const express = require('express');
const userController = require('../controllers/usersController');
const postsController = require('../controllers/postsController');
const subsController = require('../controllers/subsController');

const router = express.Router();

router
  .route('/user')
  .get(userController.getUser)
  .post(userController.createUser);
router
  .route('/subs')
  .get(subsController.getSubs)
  .post(subsController.createSubs);
router
  .route('/posts')
  .get(postsController.getPosts)
  .post(postsController.createPosts);

module.exports = router;
