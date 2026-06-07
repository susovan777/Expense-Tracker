import { z } from 'zod';

const categories = [
  'Food',
  'Travel',
  'Bills',
  'Shopping',
  'Health',
  'Entertainment',
  'Others',
];

export const createExpenseSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, 'Title must be atleast 3 characters')
    .max(100, 'Title cannot exceed 100 characters'),
  amount: z.coerce.number().positive('Amount must be greater than 0'),
  category: z.enum(categories),
  description: z.string().trim().max(500, 'Description too long').optional(),
});

export const updateExpenseSchema = createExpenseSchema.partial();
