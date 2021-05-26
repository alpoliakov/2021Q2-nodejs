import dotenv from 'dotenv';

const path = require('path');

dotenv.config({
  path: path.join(__dirname, '../../.env'),
});

const { PORT, NODE_ENV, MONGO_CONNECTION_STRING, JWT_SECRET_KEY, AUTH_MODE } = process.env;
const AUTHORIZATION = AUTH_MODE === 'true';

export { AUTHORIZATION, JWT_SECRET_KEY, MONGO_CONNECTION_STRING, NODE_ENV, PORT };
