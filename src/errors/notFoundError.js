const { StatusCodes } = require('http-status-codes');

/**
 * Class to create Not Found Error object
 * @extends Error
 */
class NotFoundError extends Error {
  /**
   * @param {String} message - Informational error message
   */
  constructor(message = 'Not Found') {
    super(message);
    /**
     * @property {number} status Status code
     */
    this.status = StatusCodes.NOT_FOUND;
  }
}

module.exports = { NOT_FOUND_ERROR: NotFoundError };
