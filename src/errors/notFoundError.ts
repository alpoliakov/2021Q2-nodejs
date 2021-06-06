import { StatusCodes } from 'http-status-codes';

interface INotFoundError {
  status: number;
}

class NotFoundError extends Error implements INotFoundError {
  status: number;

  constructor(message = 'Not Found') {
    super(message);
    this.status = StatusCodes.NOT_FOUND;
  }
}

export { NotFoundError as NOT_FOUND_ERROR };
