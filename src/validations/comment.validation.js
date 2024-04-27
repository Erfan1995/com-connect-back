const Joi = require('joi');

const addComment = {
  body: Joi.object().keys({
    content: Joi.string().required(),
  }),
};

module.exports = {
  addComment,
};
