const { StatusCodes } = require('http-status-codes');
const { NOT_FOUND_ERROR } = require('./notFoundError');

/** @module handlerError */

/**
 * My handler error Middleware
 * @function
 * @param {Object} err - Express error object
 * @param {number} err.status - The status error from express.error
 * @param {String} err.message - The message error from express.error
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} res.status - The status function from response
 * @param {Function} res.sendStatus - The sendStatus function from response
 * @param {Function} next - Express next middleware function
 * @returns {undefined} Handling errors and returning nothing
 */

const handlerError = (err, req, res, next) => {
  console.error(err);
  if (err instanceof NOT_FOUND_ERROR) {
    res.status(err.status).send(err.message);
  } else if (err) {
    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
  next();
};

module.exports = handlerError;
