export default function Badge({ type }) {
  const isCredit = type === 'credit';
  return (
    <span
      className={`text-[10px] px-2.5 py-1 rounded-full font-semibold tracking-wide uppercase ${
        isCredit
          ? 'bg-teal-accent/12 text-teal-accent'
          : 'bg-red-accent/12 text-red-accent'
      }`}
    >
      {isCredit ? 'Credit' : 'Debit'}
    </span>
  );
}
