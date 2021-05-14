const { StatusCodes } = require('http-status-codes');
const { NOT_FOUND_ERROR } = require('./notFoundError');

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
