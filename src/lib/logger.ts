import { createLogger, format, transports } from 'winston';

const Logger = createLogger({
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.uncolorize(),
    format.json(),
    format.prettyPrint(),
  ),
  transports: [
    new transports.Console({
      level: 'error',
    }),
    new transports.File({
      filename: './src/logs/all.log',
      level: 'info',
      maxsize: 5242880,
      maxFiles: 1,
    }),
    new transports.File({
      filename: './src/logs/errors.log',
      level: 'error',
      maxsize: 5242880,
      maxFiles: 1,
    }),
  ],
});

export default Logger;
