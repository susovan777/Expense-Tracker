export default function Header() {
  const date = new Date();

  const formattedDate = date.toLocaleDateString('en-US', {
    weekday: 'long', // "Sunday"
    month: 'short', // "Jun"
    day: 'numeric', // "26"
  });

  const hour = date.getHours();
  const greeting =
    hour < 12 ? 'Good Morning' : hour < 17 ? 'Good Afternoon' : 'Good Evening';

  return (
    <header className="h-16 border-b border-slate-700 px-6 flex items-center justify-between">
      <div>
        <h2 className="font-semibold text-lg">{greeting}, Raj 👋</h2>

        <p className="text-sm text-slate-400">{formattedDate}</p>
      </div>

      <div className="w-10 h-10 rounded-full bg-linear-to-br from-gold to-gold-light flex items-center justify-center text-sm font-bold text-surface-bg cursor-pointer shadow-md shadow-gold/10">
        R
      </div>
    </header>
  );
}
