const httpStatus = require('http-status');
const { CommentReply } = require('../models');
const ApiError = require('../utils/ApiError');

const createCommentReply = async (body) => {
  return CommentReply.create({ ...body });
};

const getCommentReplyById = async (id) => {
  return CommentReply.findByPk(id);
};

const updateCommentReply = async (id, userId, updateBody) => {
  const reply = await getCommentReplyById(id);
  if (!reply) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Comment not found');
  }

  if (Number(reply.userId) !== Number(userId)) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Author not found');
  }
  reply.content = updateBody.content;
  await reply.save();

  return reply;
};

const getRepliesByComment = async (commentId) => {
  const commentReplies = await CommentReply.findAndCountAll({
    where: {
      commentId,
    },
  });

  return commentReplies;
};

const deleteCommentReply = async (id) => {
  const deletedCommentReply = await CommentReply.destroy({
    where: {
      id,
    },
  });
  if (!deletedCommentReply) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Comment Reply not found');
  }
  return deletedCommentReply;
};

module.exports = {
  createCommentReply,
  getCommentReplyById,
  updateCommentReply,
  getRepliesByComment,
  deleteCommentReply,
};
