import express from 'express';
import cors from 'cors';
import testRoutes from './src/routes/test.routes.js';

const app = express();

// ___MIDDLEWARES
app.use(cors());
app.use(express.json());

// ___ROUTES
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: '🌐 Server is running...',
    timestamp: new Date().toISOString(),
  });
});

app.use('/api/test', testRoutes);

export default app;
