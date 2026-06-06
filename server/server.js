import app from './app.js';
import { configDotenv } from 'dotenv';

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log('🛜 Server started on port:', port);
  console.log(`🔗 API base: http://localhost:${port}`);
});
