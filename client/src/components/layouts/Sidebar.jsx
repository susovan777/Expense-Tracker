import {
  ArrowLeftRight,
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
} from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`bg-card-bg border-r border-gold/18 flex flex-col transition-all duration-300 shrink-0 ${
        collapsed ? 'w-16' : 'w-[220px]'
      }`}
    >
      <div
        className={`p-6 border-b border-gold/18 flex items-center ${
          collapsed ? 'justify-center' : 'justify-between'
        }`}
      >
        {!collapsed && (
          <div>
            <p className="text-lg font-bold text-gold font-display tracking-wide">
              Expense Tracker
            </p>
            <p className="text-[10px] text-muted-grey tracking-widest uppercase">
              Finance
            </p>
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="border border-gold/18 rounded-md p-1.5 text-muted-grey hover:text-gold transition-colors cursor-pointer"
        >
          {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
        </button>
      </div>

      <nav className="flex-1 py-4 space-y-1">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `w-full flex items-center gap-3 py-3 transition-all cursor-pointer ${
              collapsed ? 'justify-center' : 'px-[22px] justify-start'
            } ${
              isActive
                ? 'bg-gold/10 border-l-3 border-gold text-gold font-semibold'
                : 'border-l-3 border-transparent text-muted-grey hover:text-gray-200'
            }`
          }
        >
          <LayoutDashboard size={18} />
          {!collapsed && <span className="text-sm">Dashboard</span>}
        </NavLink>

        <NavLink
          to="/expenses"
          className={({ isActive }) =>
            `w-full flex items-center gap-3 py-3 transition-all cursor-pointer ${
              collapsed ? 'justify-center' : 'px-[22px] justify-start'
            } ${
              isActive
                ? 'bg-gold/10 border-l-3 border-gold text-gold font-semibold'
                : 'border-l-3 border-transparent text-muted-grey hover:text-gray-200'
            }`
          }
        >
          <ArrowLeftRight size={18} />
          {!collapsed && <span className="text-sm">Expenses</span>}
        </NavLink>
      </nav>
    </aside>
  );
}
