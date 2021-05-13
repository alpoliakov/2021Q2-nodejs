const { NOT_FOUND_ERROR } = require('./notFoundError');

const handlerError = (err, req, res, next) => {
  console.error(err);
  if (err instanceof NOT_FOUND_ERROR) {
    res.status(err.status).send(err.message);
  } else if (err) {
    res.sendStatus(500);
  }
  next();
};

module.exports = handlerError;
