const httpStatus = require('http-status');
const { newsEventsFeeds } = require('../models');
const ApiError = require('../utils/ApiError');

const createNewsEventsFeedsRequest = async (body) => {
  const createdAt = new Date();
  const updatedAt = new Date();

  return newsEventsFeeds.create({ ...body, createdAt, updatedAt });
};

module.exports = {
  createNewsEventsFeedsRequest
};
