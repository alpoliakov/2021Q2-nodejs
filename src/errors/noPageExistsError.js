const { StatusCodes } = require('http-status-codes');

const noPageExistsError = (req, res) =>
  res.status(StatusCodes.NOT_FOUND).send('No such page exists!');

module.exports = noPageExistsError;
