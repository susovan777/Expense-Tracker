import Sidebar from './Sidebar.jsx';
import Header from './Header.jsx';

export default function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-surface-bg text-gray-100 font-sans">
      <Sidebar />

      {/* Primary Dashboard Content Area */}
      <div className="flex-1 flex flex-col overflow-auto">
        <Header />

        <main className="p-7 flex-1 max-w-[1400px] w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
