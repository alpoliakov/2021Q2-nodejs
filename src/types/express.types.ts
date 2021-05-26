import { NextFunction, Request, Response } from 'express';

export type TypeExpressFunction = (req: Request, res: Response, next: NextFunction) => void;

export type TypeHandlerError = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => void;
