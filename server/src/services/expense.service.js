import prisma from '../config/prisma.js';

// CREATE
export const createExpenseService = async ({
  title,
  amount,
  category,
  description,
}) => {
  return prisma.expense.create({
    data: { title, amount, category, description },
  });
};

// GET LIST
export const getExpensesService = async () => {
  return prisma.expense.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
};

// GET SINGLE LIST
export const getExpenseByIdService = async (id) => {
  return prisma.expense.findUnique({ where: { id: id } });
};

// UPDATE
export const updateExpenseService = async (id, data) => {
  return prisma.expense.update({
    where: { id: id },
    data,
  });
};

// DELETE
export const deleteExpenseService = async (id) => {
  return prisma.expense.delete({
    where: { id: id },
  });
};
