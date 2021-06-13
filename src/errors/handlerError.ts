import { getStatusText, StatusCodes } from 'http-status-codes';

import Logger from '../lib/logger';
import { TypeHandlerError } from '../ts/types/express.types';
import { NOT_FOUND_ERROR } from './notFoundError';

const handlerError: TypeHandlerError = (err, req, res, next): void => {
  console.error(err);
  const { body, query, url, method } = req;

  if (err instanceof NOT_FOUND_ERROR) {
    Logger.error({
      status: err.message,
      code: err.status,
      method,
      statusText: err.name,
      message: JSON.stringify({ url, body, query }),
    });

    res.status(err.status).send(err.message);
  } else if (err) {
    Logger.error({
      status: `${StatusCodes.INTERNAL_SERVER_ERROR}`,
      code: StatusCodes.INTERNAL_SERVER_ERROR,
      method,
      message: getStatusText(StatusCodes.INTERNAL_SERVER_ERROR),
      description: err.message,
    });

    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send(getStatusText(StatusCodes.INTERNAL_SERVER_ERROR));
  }
  next();
};

export default handlerError;
