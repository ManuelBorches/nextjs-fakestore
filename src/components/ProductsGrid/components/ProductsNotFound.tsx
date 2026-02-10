import { PackageSearch } from "lucide-react";

export default function ProductsNotFound({ category }: { category?: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 w-full text-center bg-zinc-50/50">
      <PackageSearch className="w-12 h-12 text-zinc-400 mb-4" />
      <h3 className="text-lg font-semibold text-zinc-900">No products found</h3>
      <p className="text-zinc-500 max-w-xs mx-auto">
        We couldn&apos;t find any products in the{" "}
        <span className="font-medium">&quot;{category}&quot;</span> category.
        Try checking your spelling or reset the filters.
      </p>
    </div>
  );
}
