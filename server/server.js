import app from './app.js';
import { configDotenv } from 'dotenv';

const port = process.env.PORT || 8080;
const api_base = process.env.BACKEND_URL || `http://localhost:${port}`;

app.listen(port, () => {
  console.log('🛜 Server started on port:', port);
  console.log(`🔗 API base: ${api_base}`);
});
