const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { newsEventsFeedsService } = require('../services');

const createNewsEventsFeedsRequest = catchAsync(async (req, res) => {
    
    await newsEventsFeedsService.createNewsEventsFeedsRequest({ ...req.body });
    res.status(httpStatus.CREATED).send();
  });

  module.exports = {    
    createNewsEventsFeedsRequest,
  };
  