const Joi = require('joi');

const groupmentorshipevent = {
  body: Joi.object().keys({
    eventTitle: Joi.string().required(),
    eventDescription: Joi.string().required(),
    eventDate: Joi.date().required(),
    eventUrl: Joi.string().required(),
  }),
};

module.exports = {
    groupmentorshipevent,
};
