import { useState, useEffect } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { ArrowDown, ArrowUp } from 'lucide-react';

// Mock data structures are inherited directly from your source context configuration
import {
  netWorthData,
  portfolioAlloc,
  transactions,
  fmt,
  fmtSmall,
  tt,
  GOLD,
} from '../data/mockData.js';

export default function Dashboard() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const hour = time.getHours();
  const greeting =
    hour < 12 ? 'Good Morning' : hour < 17 ? 'Good Afternoon' : 'Good Evening';

  return (
    <div className="space-y-6">
      <div className="bg-linear-to-br from-surface-bg via-[#1A2240] to-surface-bg border border-gold/18 rounded-2xl p-8 relative overflow-hidden">
        <div className="absolute -top-15 -right-15 w-60 h-60 rounded-full bg-radial from-gold/8 to-transparent" />
        <div className="absolute -bottom-10 left-24 w-40 h-40 rounded-full bg-radial from-teal-accent/6 to-transparent" />

        <p className="text-xs text-gold tracking-widest uppercase font-medium mb-2">
          {time.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
          })}
        </p>
        <h1 className="text-3xl font-bold text-[#F0EAD6] mb-1.5 font-display">
          {greeting}, Alexander
        </h1>
        <p className="text-sm text-muted-grey mb-7">
          Your portfolio is performing well. Here's your daily overview.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/4 rounded-xl p-4 border border-gold/12">
            <p className="text-[11px] text-muted-grey uppercase tracking-wider mb-1.5">
              Net Worth
            </p>
            <p className="text-2xl font-bold text-gold font-display">
              $204,500
            </p>
            <p className="text-xs text-teal-accent mt-1">↑ 8.7% this year</p>
          </div>
          <div className="bg-white/4 rounded-xl p-4 border border-teal-accent/12">
            <p className="text-[11px] text-muted-grey uppercase tracking-wider mb-1.5">
              Monthly Savings
            </p>
            <p className="text-2xl font-bold text-teal-accent font-display">
              $3,100
            </p>
            <p className="text-xs text-muted-grey mt-1">37.8% save rate</p>
          </div>
          <div className="bg-white/4 rounded-xl p-4 border border-blue-accent/12">
            <p className="text-[11px] text-muted-grey uppercase tracking-wider mb-1.5">
              Portfolio Today
            </p>
            <p className="text-2xl font-bold text-blue-accent font-display">
              +$892
            </p>
            <p className="text-xs text-blue-accent mt-1">↑ 1.63% today</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[18px]">
        <div className="bg-card-bg border border-gold/18 rounded-2xl p-[22px]">
          <p className="text-xs text-muted-grey uppercase tracking-wider mb-1">
            Net Worth Trend
          </p>
          <p className="text-lg font-bold text-[#F0EAD6] mb-[18px] font-display">
            2024 Overview
          </p>
          <ResponsiveContainer width="100%" height={150}>
            <AreaChart
              data={netWorthData}
              margin={{ top: 4, right: 4, left: 4, bottom: 0 }}
            >
              <defs>
                <linearGradient id="goldGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={GOLD} stopOpacity={0.25} />
                  <stop offset="95%" stopColor={GOLD} stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="month"
                tick={{ fontSize: 10, fill: '#8A8F9E' }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip {...tt} formatter={(v) => [fmt(v), 'Net Worth']} />
              <Area
                type="monotone"
                dataKey="value"
                stroke={GOLD}
                strokeWidth={2}
                fill="url(#goldGrad)"
                dot={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-card-bg border border-gold/18 rounded-2xl p-[22px]">
          <p className="text-xs text-muted-grey uppercase tracking-wider mb-1">
            Asset Allocation
          </p>
          <p className="text-lg font-bold text-[#F0EAD6] mb-3.5 font-display">
            Portfolio Mix
          </p>
          <div className="flex items-center gap-4">
            <ResponsiveContainer width={120} height={120}>
              <PieChart>
                <Pie
                  data={portfolioAlloc}
                  cx="50%"
                  cy="50%"
                  innerRadius={34}
                  outerRadius={54}
                  dataKey="value"
                  strokeWidth={0}
                >
                  {portfolioAlloc.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="flex-1 space-y-1.5">
              {portfolioAlloc.map((item) => (
                <div
                  key={item.name}
                  className="flex justify-between items-center text-xs"
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="w-2 h-2 rounded-xs shrink-0"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-muted-grey">{item.name}</span>
                  </div>
                  <span className="font-semibold text-[#D4C89A]">
                    {item.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-card-bg border border-gold/18 rounded-2xl p-[22px]">
        <p className="text-sm font-semibold text-[#F0EAD6] mb-4">
          Recent Transactions
        </p>
        <div className="divide-y divide-gold/18">
          {transactions.slice(0, 5).map((tx) => {
            const isCredit = tx.type === 'credit';
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
                      {tx.desc}
                    </p>
                    <p className="text-xs text-muted-grey">
                      {tx.date} · {tx.category}
                    </p>
                  </div>
                </div>
                <span
                  className={`text-sm font-bold ${
                    isCredit ? 'text-teal-accent' : 'text-red-accent'
                  }`}
                >
                  {isCredit ? '+' : '-'}
                  {fmtSmall(tx.amount)}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
