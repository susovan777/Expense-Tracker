export default function StatCard({
  label,
  value,
  sub,
  subColor = 'text-teal-accent',
  accent,
}) {
  return (
    <div
      className={`bg-card-bg rounded-xl p-[18px] px-[22px] relative overflow-hidden border border-gold/18 transition-all duration-300 ${
        accent ? 'border-gold/35 shadow-lg shadow-gold/5' : ''
      }`}
    >
      {accent && (
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-linear-to-r from-gold to-gold-light" />
      )}
      <p className="text-[11px] text-muted-grey uppercase tracking-wider mb-2 font-medium">
        {label}
      </p>
      <p className="text-2xl font-bold text-[#F0EAD6] mb-1.5 font-display">
        {value}
      </p>
      {sub && <p className={`text-xs ${subColor}`}>{sub}</p>}
    </div>
  );
}
