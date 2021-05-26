import { NextFunction, Request, RequestHandler, Response } from 'express';

type AsyncRequestHandler = (req: Request, res: Response, next: NextFunction) => Promise<void>;

const wrapAsyncFunc = (func: AsyncRequestHandler): RequestHandler => (req, res, next) => {
  func(req, res, next).catch(next);
};

export default wrapAsyncFunc;
