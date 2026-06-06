import express from 'express';
import cors from 'cors';

const app = express();

// ___MIDDLEWARES
app.use(cors());
app.use(express.json());

// ___ROUTES
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: '👋 Hello from server',
    timestamp: new Date().toISOString(),
  });
});

export default app;
