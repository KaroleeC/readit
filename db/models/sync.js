// require models
const users = require('./Users');
const subPages = require('./Subs');
const comments = require('./Comments');
const posts = require('./Posts');

// set associations
users.hasMany(posts);
posts.belongsTo(users);

users.hasMany(comments);
comments.belongsTo(users);

users.belongsToMany(subPages, { through: 'userSubs' } );
subPages.belongsToMany(users, { through: 'userSubs' });

subPages.hasMany(posts);
posts.belongsTo(subPages);

posts.hasMany(comments);
comments.belongsTo(posts);

// sync
users
  .sync()
  .then(
    subPages
      .sync()
      .then(
        posts
          .sync()
          .then(() => {
            console.log('Connected posts table');
          })
          .catch(err => {
            console.log('Error connecting posts table: ', err);
          })
      )
      .then(() => {
        console.log('Connected subpages table');
      })
      .catch(err => {
        console.log('Error connecting subpages table: ', err);
      })
  )
  .then(() => {
    console.log('Connected Users table');
  })
  .catch(err => {
    console.log('Error connecting Users table: ', err);
  });

module.exports = { users, subPages, posts, comments };
