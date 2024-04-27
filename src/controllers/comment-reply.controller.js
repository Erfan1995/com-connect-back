const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { commentReplyService } = require('../services');

const createCommentReply = catchAsync(async (req, res) => {
  await commentReplyService.createCommentReply({ ...req.body, commentId: req.params.commentId, userId: req.params.userId });
  res.status(httpStatus.CREATED).send();
});

const updateCommentReply = catchAsync(async (req, res) => {
  const updatedReply = await commentReplyService.updateCommentReply(req.params.replyId, req.params.userId, req.body);
  res.send(updatedReply);
});

const getCommentReplies = catchAsync(async (req, res) => {
  const replies = await commentReplyService.getCommentReplyById(req.params.commentId);
  res.send(replies);
});

const deleteCommentReply = catchAsync(async (req, res) => {
  const deletedReply = await commentReplyService.deleteCommentReply(req.params.id);
  res.status(httpStatus.OK).send(deletedReply.toString());
});

module.exports = {
  createCommentReply,
  updateCommentReply,
  getCommentReplies,
  deleteCommentReply,
};
