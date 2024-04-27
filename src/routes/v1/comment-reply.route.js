const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const commentValidation = require('../../validations/comment.validation');
const commentReplyController = require('../../controllers/comment-reply.controller');

const router = express.Router();

router
  .route('/:commentId/:userId')
  .post(auth(), validate(commentValidation.addComment), commentReplyController.createCommentReply);

router
  .route('/:replyId/:userId')
  .put(auth(), validate(commentValidation.addComment), commentReplyController.updateCommentReply);

router.route('/:commentId').get(auth(), commentReplyController.getCommentReplies);

router.route('/:id').delete(auth(), commentReplyController.deleteCommentReply);

module.exports = router;
