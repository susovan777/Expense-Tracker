import express from 'express';
import {
  createExpense,
  deleteExpense,
  getExpenseById,
  getExpenses,
  searchExpense,
  updateExpense,
} from '../controllers/expense.controller.js';
import { validate } from '../middlewares/validate.middleware.js';
import { createExpenseSchema, updateExpenseSchema } from '../validations/expense.validation.js';

const router = express.Router();

router.post('/', validate(createExpenseSchema), createExpense);
router.get('/', getExpenses);
router.get('/search', searchExpense)
router.get('/:id', getExpenseById);
router.put('/:id', validate(updateExpenseSchema), updateExpense);
router.delete('/:id', deleteExpense);

export default router;
