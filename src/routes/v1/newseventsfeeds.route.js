const express = require('express');
const multer = require('multer');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const newsEventsFeedsValidation = require('../../validations/newseventsfeeds.validation');
const newsEventsFeedsController = require('../../controllers/newsEventsFeeds.controller');

const upload = multer();
const router = express.Router();

router
  .route('/newseventsfeeds')
  .get(auth('newseventsfeeds'), validate(newsEventsFeedsValidation.new), newsEventsFeedsController.createNewsEventsFeedsRequest)
  .post(
    auth('newsEventsFeeds'),
    validate(newsEventsFeedsValidation.newsEventsFeeds),
    newsEventsFeedsController.createNewsEventsFeedsRequest
  );

module.exports = router;
