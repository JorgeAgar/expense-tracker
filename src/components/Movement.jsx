export function Movement({ expense, value }) {
  return (
    <div className="inline-flex flex-col items-start justify-start border border-gray-700 text-gray-700 rounded-2xl p-2 bg-gray-200 shadow-sm max-w-max">
      <p className="text-xs font-medium">{expense}</p>
      <p className="mt-1 text-sm font-semibold">{value}</p>
    </div>
  );
}
