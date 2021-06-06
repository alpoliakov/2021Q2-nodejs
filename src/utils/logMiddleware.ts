import { NextFunction, Request, Response } from 'express';

import Logger from '../lib/logger';

const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { body, query, url, method } = req;
  const { statusCode } = res;
  Logger.info({
    method,
    statusCode,
    message: JSON.stringify({ url, body, query }),
  });
  next();
};

export default logMiddleware;
