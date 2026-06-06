import express from 'express';
import prisma from '../config/prisma.js';

const router = express.Router();

router.get('/db', async (req, res) => {
  try {
    const expenses = await prisma.expense.findMany();
    res.status(200).json({
      success: true,
      count: expenses.length,
      data: expenses,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Database connection failed',
    });
  }
});

export default router;
