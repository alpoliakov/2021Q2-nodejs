/** @module startService */

/**
 * My start service Middleware
 * @function
 * @param {Object} req - Express request object
 * @param {String} req.originalUrl - The original URL
 * @param {Object} res - Express response object
 * @param {Function} res.send - The send function from response
 * @param {Function} next - Express next middleware function
 * @returns {undefined}
 */
const startService = (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
};

module.exports = startService;
