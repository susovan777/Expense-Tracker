import { useState } from 'react';
import Badge from '../components/ui/Badge';
import { Pencil, Trash2 } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { transactions, fmtSmall } from '../data/mockData';

export default function Expenses() {
  const [filter, setFilter] = useState('All');
  const categories = [
    'Food',
    'Travel',
    'Bills',
    'Shopping',
    'Health',
    'Entertainment',
    'Others',
  ];

  const filteredData =
    filter === 'All'
      ? transactions
      : transactions.filter((t) => t.category === filter);

  return (
    <div>
      <div className="flex justify-between items-center">
        <SectionTitle
          title="Transactions"
          sub="All financial activity — May 2026"
        />

        <button className="bg-violet-500 px-4 py-2 rounded-lg">
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
              placeholder="Search..."
              className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-1 flex-1"
            />

            <select className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-1">
              <option>All Categories</option>
              {categories.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
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
                <tr key={tx.id} className="hover:bg-white/2 transition-colors">
                  <td className="p-3 text-[#E8E3D5] font-medium">{tx.title}</td>
                  <td className="p-3 text-muted-grey text-[12px]">{tx.desc}</td>
                  <td className="p-3">
                    <Badge type={tx.type} />
                  </td>
                  <td className="p-3 text-muted-grey text-[12px]">{tx.date}</td>
                  <td
                    className={`p-3 text-right font-semibold text-base ${
                      tx.type === 'credit'
                        ? 'text-teal-accent'
                        : 'text-red-accent'
                    }`}
                  >
                    {tx.type === 'credit' ? '+' : '-'}
                    {fmtSmall(tx.amount)}
                  </td>
                  <td className="p-3 flex gap-4">
                    <Pencil size={17} className="cursor-pointer" />
                    <Trash2 size={17} className="cursor-pointer text-red-400" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
