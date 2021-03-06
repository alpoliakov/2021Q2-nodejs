import app from './app';
import { PORT } from './common/config';
import Logger from './lib/logger';

process
  .on('uncaughtException', (err) => {
    Logger.error({
      name: 'uncaughtException',
      message: err.message,
    });
    const { exit } = process;
    Logger.on('finish', () => exit(1));
  })
  .on('unhandledRejection', (err) => {
    if (!err) return;
    Logger.error({
      name: 'unhandledRejection',
      message: err,
    });
    const { exit } = process;
    Logger.on('finish', () => exit(1));
  });

app.listen(PORT || 4000, () =>
  console.log(`🚀 App is running on http://localhost:${PORT || 8080}`),
);
