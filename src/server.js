require('dotenv').config();

const { PORT } = process.env;
const app = require('./app');

app.listen(PORT, () =>
  console.log(`🚀 App is running on http://localhost:${PORT}`)
);
