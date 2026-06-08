import { ArrowDown, ArrowUp } from 'lucide-react';
import SectionTitle from '../components/SectionTitle.jsx';
import useDashboard from '../hooks/useDashboard.js';

export default function Dashboard() {
  const { dashboard, loading } = useDashboard();

  if (loading) {
    return <div className="text-center py-10">Loading dashboard...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="bg-linear-to-br from-surface-bg via-[#1A2240] to-surface-bg border border-gold/18 rounded-2xl p-8 relative overflow-hidden">
        <div className="absolute -top-15 -right-15 w-60 h-60 rounded-full bg-radial from-gold/8 to-transparent" />
        <div className="absolute -bottom-10 left-24 w-40 h-40 rounded-full bg-radial from-teal-accent/6 to-transparent" />

        <SectionTitle
          title="Dashboard"
          sub="Complete overview of your finances for May 2026"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/4 rounded-xl p-4 border border-gold/12">
            <p className="text-[11px] text-muted-grey uppercase tracking-wider mb-1.5">
              Total Expenses
            </p>
            <p className="text-2xl font-bold text-gold font-display">
              ₹{Number(dashboard?.totalExpenses || 0).toLocaleString()}
            </p>
          </div>
          <div className="bg-white/4 rounded-xl p-4 border border-teal-accent/12">
            <p className="text-[11px] text-muted-grey uppercase tracking-wider mb-1.5">
              Monthly Expenses
            </p>
            <p className="text-2xl font-bold text-amber-600 font-display">
              ₹{Number(dashboard?.monthlyExpenses || 0).toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-card-bg border border-gold/18 rounded-2xl p-[22px]">
        <p className="text-md font-semibold text-[#F0EAD6] mb-4">
          Recent Transactions
        </p>
        <div className="divide-y divide-gold/18">
          {dashboard?.recentTransactions?.slice(0, 5).map((tx) => {
            const isCredit = tx.type === 'credit';
            const date = new Date(tx.createdAt);

            const formattedDate = date.toLocaleDateString('en-US', {
              month: 'short', // "Jun"
              day: 'numeric', // "26"
            });

            return (
              <div
                key={tx.id}
                className="flex items-center justify-between py-2.5 first:pt-0 last:pb-0"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm ${
                      isCredit
                        ? 'bg-teal-accent/12 text-teal-accent'
                        : 'bg-red-accent/10 text-red-accent'
                    }`}
                  >
                    {isCredit ? <ArrowDown size={14} /> : <ArrowUp size={14} />}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#E8E3D5]">
                      {tx.title}
                    </p>
                    <p className="text-xs text-muted-grey">
                      {formattedDate} · {tx.category}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
