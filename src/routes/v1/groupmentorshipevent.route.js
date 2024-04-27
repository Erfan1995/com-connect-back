const express = require('express');
const multer = require('multer');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const groupmentorshipeventValidation = require('../../validations/groupmentorshipevent.validation');
const groupmentorshipeventController = require('../../controllers/groupmentorshipevent.controller');

const upload = multer();
const router = express.Router();

router
  .route('/groupmentorshipevent')
  .get(auth('groupmentorshipevent'), validate(groupmentorshipeventValidation.groupmentorshipevent), groupmentorshipeventController.createGroupMentorshipRequest)
  .post(
    auth('groupmentorshipevent'),
    validate(groupmentorshipeventValidation.groupmentorshipevent),
    groupmentorshipeventController.createGroupMentorshipRequest
  );

module.exports = router;
