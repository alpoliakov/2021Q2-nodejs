const { StatusCodes } = require('http-status-codes');

const pageExistsError = (req, res) =>
  res.status(StatusCodes.NOT_FOUND).send('No such page exists!');

module.exports = pageExistsError;
