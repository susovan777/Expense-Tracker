export default function SectionTitle({ title, sub }) {
  return (
    <div className="mb-[22px]">
      <h2 className="text-2xl font-bold text-[#F0EAD6] mb-1 font-display">
        {title}
      </h2>
      {sub && <p className="text-sm text-muted-grey">{sub}</p>}
    </div>
  );
}
