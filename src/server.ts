import app from './app';

const { PORT } = process.env;

app.listen(PORT, () => console.log(`🚀 App is running on http://localhost:${PORT}`));
