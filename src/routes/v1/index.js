const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const utilRoute = require('./util.route');
const docsRoute = require('./docs.route');
const postRoute = require('./post.route');
const mentorshipRoute = require('./mentorship.route');
const commentRoute = require('./comment.route');
const commentReplyRoute = require('./comment-reply.route');
const groupmentorshipeventRoute = require('./groupmentorshipevent.route');
const newseventsfeedsRoute = require('./newseventsfeeds.route');
const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/mentorship',
    route: mentorshipRoute,
  },
  {
    path: '/utils',
    route: utilRoute,
  },
  {
    path: '/posts',
    route: postRoute,
  },
  {
    path: '/comments',
    route: commentRoute,
  },
  {
    path: '/comment-replies',
    route: commentReplyRoute,
  },
  {
    path: '/groupmentorshipevent',
    route: groupmentorshipeventRoute,
  },
  {
    path: '/newseventsfeeds',
    route: newseventsfeedsRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
