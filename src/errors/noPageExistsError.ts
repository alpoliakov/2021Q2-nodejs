import { TypeExpressFunction } from '../ts/types/express.types';

const { StatusCodes } = require('http-status-codes');

const noPageExistsError: TypeExpressFunction = (_req, res) =>
  res.status(StatusCodes.NOT_FOUND).send('No such page exists!');

export default noPageExistsError;
