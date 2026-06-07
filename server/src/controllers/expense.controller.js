import {
  createExpenseService,
  deleteExpenseService,
  getExpenseByIdService,
  getExpensesService,
  searchExpensesService,
  updateExpenseService,
} from '../services/expense.service.js';

// Create a expense record
export const createExpense = async (req, res) => {
  try {
    const expense = await createExpenseService(req.body);

    res.status(201).json({ success: true, data: expense });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: '❌ Failed to create expense' });
  }
};

// Get all expenses
export const getExpenses = async (req, res) => {
  try {
    const { category } = req.query;
    const expenses = await getExpensesService(category);
    res
      .status(200)
      .json({ success: true, count: expenses.length, data: expenses });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: '❌ Failed to get expenses' });
  }
};

// Get expense by Id
export const getExpenseById = async (req, res) => {
  try {
    const expense = await getExpenseByIdService(req.params.id);

    if (!expense) {
      return res.status(404).json({
        success: false,
        message: 'Expense not found',
      });
    }

    res.status(200).json({ success: true, data: expense });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: '❌ Failed to fetch expense' });
  }
};

// Update expense
export const updateExpense = async (req, res) => {
  try {
    const expense = await updateExpenseService(req.params.id, req.body);

    if (!expense) {
      return res.status(404).json({
        success: false,
        message: 'Expense not found',
      });
    }

    res.status(200).json({ success: true, data: expense });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: '❌ Failed to update expense' });
  }
};

// Delete expense
export const deleteExpense = async (req, res) => {
  try {
    const expense = await deleteExpenseService(req.params.id);

    if (!expense) {
      return res.status(404).json({
        success: false,
        message: 'Expense not found',
      });
    }

    res.status(200).json({
      success: true,
      message: '✅ Expense record deleted successfullly',
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: '❌ Failed to delete expense' });
  }
};

// Search expenses
// GET /api/expenses/search?q=pizza
export const searchExpense = async (req, res) => {
  try {
    const { q } = req.query;

    if (!q.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Search query is required',
      });
    }

    const expenses = await searchExpensesService(q);

    res.status(200).json({
      success: true,
      count: expenses.length,
      data: expenses,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: 'Failed to search expenses',
    });
  }
};
