import { StatusCodes } from 'http-status-codes';

import { TypeHandlerError } from '../ts/types/express.types';
import { NOT_FOUND_ERROR } from './notFoundError';

const handlerError: TypeHandlerError = (err, _req, res, next): void => {
  console.error(err);
  if (err instanceof NOT_FOUND_ERROR) {
    res.status(err.status).send(err.message);
  } else if (err) {
    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
  next();
};

export default handlerError;
