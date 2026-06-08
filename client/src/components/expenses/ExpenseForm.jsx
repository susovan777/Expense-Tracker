import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const categories = [
  'Food',
  'Travel',
  'Bills',
  'Shopping',
  'Health',
  'Entertainment',
  'Others',
];

export default function ExpenseForm({ initialData, onSubmit }) {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: initialData || {},
  });

  useEffect(() => {
    reset(initialData || {});
  }, [initialData, reset]);

  const submitHandler = (data) => {
    onSubmit(data);

    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
      <input
        {...register('title')}
        placeholder="Title"
        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2"
      />

      <input
        {...register('amount')}
        type="number"
        placeholder="Amount"
        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2"
      />

      <select
        {...register('category')}
        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2"
      >
        <option value="">Select Category</option>

        {categories.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      <textarea
        {...register('description')}
        rows={4}
        placeholder="Description"
        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2"
      />

      <button type="submit" className="w-full bg-gold py-2 rounded-lg">
        Save Expense
      </button>
    </form>
  );
}
