const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { commentService } = require('../services');

const createComment = catchAsync(async (req, res) => {
  await commentService.createComment({ ...req.body, postId: req.params.postId, userId: req.params.userId });
  res.status(httpStatus.CREATED).send();
});

const updateComment = catchAsync(async (req, res) => {
  const updatedComment = await commentService.updateComment(req.params.commentId, req.params.userId, req.body);
  res.send(updatedComment);
});

const getComments = catchAsync(async (req, res) => {
  const comments = await commentService.getCommentsByPost(req.params.postId);
  res.send(comments);
});

const deleteComment = catchAsync(async (req, res) => {
  const deletedComment = await commentService.deleteComment(req.params.id);
  res.status(httpStatus.OK).send(deletedComment.toString());
});

module.exports = {
  createComment,
  updateComment,
  getComments,
  deleteComment,
};
