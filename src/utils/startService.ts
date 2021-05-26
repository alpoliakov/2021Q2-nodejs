import { TypeExpressFunction } from '../types/express.types';

const startService: TypeExpressFunction = (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
};

export default startService;
