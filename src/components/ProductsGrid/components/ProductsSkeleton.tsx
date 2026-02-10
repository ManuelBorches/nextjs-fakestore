export function ProductsSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="h-80 bg-zinc-200 animate-pulse rounded-xl" />
      ))}
    </div>
  );
}
