import app from './app';
import { PORT } from './common/config';

app.listen(PORT, () => console.log(`🚀 App is running on http://localhost:${PORT}`));
