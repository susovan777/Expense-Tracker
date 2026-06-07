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
export const getExpensesService = async (category) => {
  return prisma.expense.findMany({
    where: category ? { category } : {},
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

// SEARCH
export const searchExpensesService = async (searchTerm) => {
  return prisma.expense.findMany({
    where: {
      OR: [
        { title: { contains: searchTerm, mode: 'insensitive' } },
        { description: { contains: searchTerm, mode: 'insensitive' } },
      ],
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
};
