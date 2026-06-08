export default function ExpenseModal({ title, open, onClose, children }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
      <div className="bg-card-bg border border-gold/18 rounded-2xl w-full max-w-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">{title}</h2>

          <button onClick={onClose} className="text-muted-grey">
            ✕
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}
