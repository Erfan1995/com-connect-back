const httpStatus = require('http-status');
const { Comment } = require('../models');
const ApiError = require('../utils/ApiError');

const createComment = async (body) => {
  return Comment.create({ ...body });
};

const getCommentById = async (id) => {
  return Comment.findByPk(id);
};

const updateComment = async (id, userId, updateBody) => {
  const comment = await getCommentById(id);
  if (!comment) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Comment not found');
  }

  if (Number(comment.userId) !== Number(userId)) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Author not found');
  }
  comment.content = updateBody.content;
  await comment.save();

  return comment;
};

const getCommentsByPost = async (postId) => {
  const comments = await Comment.findAndCountAll({
    where: {
      postId,
    },
  });

  return comments;
};

const deleteComment = async (id) => {
  const deletedComment = await Comment.destroy({
    where: {
      id,
    },
  });
  if (!deletedComment) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Comment not found');
  }
  return deletedComment;
};

module.exports = {
  createComment,
  getCommentById,
  updateComment,
  getCommentsByPost,
  deleteComment,
};
