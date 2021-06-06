import app from './app';
import { PORT } from './common/config';

app.listen(PORT || 4000, () =>
  console.log(`🚀 App is running on http://localhost:${PORT || 8080}`),
);
