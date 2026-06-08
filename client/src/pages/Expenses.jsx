import { useEffect, useState } from 'react';
import { Pencil, Trash2 } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import useExpenses from '../hooks/useExpense.js';
import useCategories from '../hooks/useCategories.js';
import {
  createExpense,
  deleteExpense,
  updateExpense,
} from '../api/expenseApi.js';
import ExpenseModal from '../components/expenses/ExpenseModal.jsx';
import ExpenseForm from '../components/expenses/ExpenseForm.jsx';

export default function Expenses() {
  const { expenses, loading, fetchExpenses } = useExpenses();
  const [selectedExpense, setSelectedExpense] = useState(null);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const categories = useCategories();

  const filteredData =
    filter === 'All'
      ? expenses
      : expenses.filter((expense) => expense.category === filter);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchExpenses(search);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [fetchExpenses, search]);

  const handleSubmitExpense = async (formData) => {
    try {
      if (selectedExpense) {
        await updateExpense(selectedExpense.id, formData);
      } else {
        await createExpense(formData);
      }

      await fetchExpenses();

      setSelectedExpense(null);
      setIsModalOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteExpense = async (id) => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this expense?'
    );

    if (!confirmed) return;

    try {
      await deleteExpense(id);

      await fetchExpenses();
    } catch (error) {
      console.error(error);
    }
  };

  const closeModal = () => {
    setSelectedExpense(null);
    setIsModalOpen(false);
  };

  if (loading) {
    return <div className="text-center py-10">Loading expenses...</div>;
  }

  return (
    <div>
      <div className="flex justify-between items-center">
        <SectionTitle
          title="Transactions"
          sub="All financial activity — May 2026"
        />

        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-gold px-4 py-2 rounded-lg"
        >
          Add Expense
        </button>
      </div>

      <div className="bg-card-bg border border-gold/18 rounded-2xl p-[22px] overflow-hidden">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-[18px]">
          <p className="text-md font-semibold text-[#F0EAD6]">
            All Transactions
          </p>

          <div className="flex gap-4">
            <input
              type="text"
              value={search}
              placeholder="Search..."
              onChange={(e) => setSearch(e.target.value)}
              className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-1 flex-1"
            />

            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-1"
            >
              <option value="All">All Categories</option>
              {categories.map((c) => (
                <option key={c.category} value={c.category}>
                  {c.category}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          {expenses.length === 0 ? (
            <div className="text-center py-10 text-muted-grey">
              No expenses found.
            </div>
          ) : (
            <table className="w-full text-left border-collapse text-xs md:text-sm">
              <thead>
                <tr className="border-b border-gold/18">
                  <th className="p-3 text-muted-grey font-medium text-[11px] uppercase tracking-wider">
                    Title
                  </th>
                  <th className="p-3 text-muted-grey font-medium text-[11px] uppercase tracking-wider">
                    Description
                  </th>
                  <th className="p-3 text-muted-grey font-medium text-[11px] uppercase tracking-wider">
                    Type
                  </th>
                  <th className="p-3 text-muted-grey font-medium text-[11px] uppercase tracking-wider">
                    Date
                  </th>
                  <th className="p-3 text-right text-[11px] uppercase tracking-wider text-muted-grey font-medium">
                    Amount
                  </th>
                  <th className="p-3 text-right text-[11px] uppercase tracking-wider text-muted-grey font-medium"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gold/5">
                {filteredData.map((tx) => (
                  <tr
                    key={tx.id}
                    className="hover:bg-white/2 transition-colors"
                  >
                    <td className="p-3 text-[#E8E3D5] font-medium">
                      {tx.title}
                    </td>
                    <td className="p-3 text-muted-grey text-[12px]">
                      {tx.description || '-'}
                    </td>
                    <td className="p-3">
                      <span className="text-xs bg-slate-700 px-2 py-1 rounded">
                        {tx.category}
                      </span>
                    </td>
                    <td className="p-3 text-muted-grey text-[12px]">
                      {new Date(tx.createdAt).toLocaleDateString()}
                    </td>
                    <td
                      className={`p-3 text-right font-semibold text-base ${
                        tx.type === 'credit'
                          ? 'text-teal-accent'
                          : 'text-red-accent'
                      }`}
                    >
                      {tx.type === 'credit' ? '+' : '-'}₹
                      {Number(tx.amount).toLocaleString()}
                    </td>
                    <td className="p-3 flex gap-4">
                      <Pencil
                        size={17}
                        className="cursor-pointer"
                        onClick={() => {
                          setSelectedExpense(tx);
                          setIsModalOpen(true);
                        }}
                      />
                      <Trash2
                        size={17}
                        className="cursor-pointer text-red-400"
                        onClick={() => handleDeleteExpense(tx.id)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      <ExpenseModal
        title={selectedExpense ? 'Edit Expense' : 'Add Expense'}
        open={isModalOpen}
        onClose={closeModal}
      >
        <ExpenseForm
          initialData={selectedExpense}
          onSubmit={handleSubmitExpense}
        />
      </ExpenseModal>
    </div>
  );
}
