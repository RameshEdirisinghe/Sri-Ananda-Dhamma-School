export default function SmartSuggestions({ related }: { related: string[] }) {
  if (!related.length) return null;

  return (
    <div className="mt-12">
      <h2 className="text-lg font-semibold mb-3">🧠 You may also like...</h2>
      <div className="flex overflow-x-auto gap-4 pb-2">
        {related.map((title, i) => (
          <div
            key={i}
            className="min-w-[200px] bg-muted px-4 py-3 rounded-md shadow-sm text-sm text-textPrimary"
          >
            📘 {title}
          </div>
        ))}
      </div>
    </div>
  );
}
