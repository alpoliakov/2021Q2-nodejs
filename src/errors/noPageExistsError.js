const { StatusCodes } = require('http-status-codes');

/** @module noPageExistsError */

/**
 * My No Page Exists Error Middleware
 * @function
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} res.status - The status function from response
 * @param {Function} next - Express next middleware function
 * @returns {Object<number, string>} Returning an error object for a non-exists page
 */
const noPageExistsError = (req, res) =>
  res.status(StatusCodes.NOT_FOUND).send('No such page exists!');

module.exports = noPageExistsError;
