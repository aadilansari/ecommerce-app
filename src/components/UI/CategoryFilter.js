export default function CategoryFilter({ categories, onSelect }) {
  return (
    <div className="mb-6 flex gap-2 flex-wrap">
      <button onClick={() => onSelect(null)} className="border px-3 py-1 rounded">All</button>
      {categories.map((c) => (
        <button
          key={c}
          onClick={() => onSelect(c)}
          className="border px-3 py-1 rounded capitalize"
        >
          {c}
        </button>
      ))}
    </div>
  );
}