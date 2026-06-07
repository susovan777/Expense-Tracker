import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import StatCard from '../components/ui/StatCard';
import Badge from '../components/ui/Badge';
import { transactions, fmtSmall } from '../data/mockData';

export default function Expenses() {
  const [filter, setFilter] = useState('All');
  const categories = [
    'All',
    'Income',
    'Investment',
    'Groceries',
    'Utilities',
    'Entertainment',
    'Housing',
    'Transport',
    'Health',
  ];

  const filteredData =
    filter === 'All'
      ? transactions
      : transactions.filter((t) => t.category === filter);

  return (
    <div>
      <SectionTitle
        title="Transactions"
        sub="All financial activity — December 2024"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-6">
        <StatCard
          label="Total Credits"
          value="+$12,988"
          sub="4 transactions"
          subColor="text-teal-accent"
          accent
        />
        <StatCard
          label="Total Debits"
          value="-$2,624"
          sub="8 transactions"
          subColor="text-red-accent"
        />
        <StatCard
          label="Net Cash Flow"
          value="+$10,364"
          sub="This month"
          subColor="text-teal-accent"
        />
        <StatCard
          label="Avg Transaction"
          value="$1,080"
          sub="Per transaction"
        />
      </div>

      <div className="bg-card-bg border border-gold/18 rounded-2xl p-[22px] overflow-hidden">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-[18px]">
          <p className="text-sm font-semibold text-[#F0EAD6]">
            All Transactions
          </p>
          <div className="flex gap-1.5 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1 rounded-full text-[11px] font-medium border cursor-pointer transition-all ${
                  filter === cat
                    ? 'border-gold bg-gold/15 text-gold font-semibold'
                    : 'border-gold/18 bg-transparent text-muted-grey hover:text-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs md:text-sm">
            <thead>
              <tr className="border-b border-gold/18">
                <th className="p-3 text-muted-grey font-medium text-[11px] uppercase tracking-wider">
                  Date
                </th>
                <th className="p-3 text-muted-grey font-medium text-[11px] uppercase tracking-wider">
                  Description
                </th>
                <th className="p-3 text-muted-grey font-medium text-[11px] uppercase tracking-wider">
                  Category
                </th>
                <th className="p-3 text-muted-grey font-medium text-[11px] uppercase tracking-wider">
                  Type
                </th>
                <th className="p-3 text-right text-[11px] uppercase tracking-wider text-muted-grey font-medium">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gold/5">
              {filteredData.map((tx) => (
                <tr key={tx.id} className="hover:bg-white/2 transition-colors">
                  <td className="p-3 text-muted-grey text-[12px]">{tx.date}</td>
                  <td className="p-3 text-[#E8E3D5] font-medium">{tx.desc}</td>
                  <td className="p-3">
                    <span className="text-[11px] px-2.5 py-0.5 rounded-md bg-white/6 text-muted-grey">
                      {tx.category}
                    </span>
                  </td>
                  <td className="p-3">
                    <Badge type={tx.type} />
                  </td>
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
