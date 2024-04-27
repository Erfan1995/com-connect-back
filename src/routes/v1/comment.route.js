const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const commentValidation = require('../../validations/comment.validation');
const commentController = require('../../controllers/comment.controller');

const router = express.Router();

router.route('/:postId/:userId').post(auth(), validate(commentValidation.addComment), commentController.createComment);

router.route('/:commentId/:userId').put(auth(), validate(commentValidation.addComment), commentController.updateComment);

router.route('/:postId').get(auth(), commentController.getComments);

router.route('/:id').delete(auth(), commentController.deleteComment);

module.exports = router;
