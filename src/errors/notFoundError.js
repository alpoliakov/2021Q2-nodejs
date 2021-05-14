const { StatusCodes } = require('http-status-codes');

class NotFoundError extends Error {
  constructor(message = 'Not Found') {
    super(message);
    this.status = StatusCodes.NOT_FOUND;
  }
}

module.exports = { NOT_FOUND_ERROR: NotFoundError };
