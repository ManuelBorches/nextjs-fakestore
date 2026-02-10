import { ProductsGrid, ProductsSkeleton } from "@/components/ProductsGrid";
import { ProductsSearch } from "@/components/ProductsSearch";
import { Suspense } from "react";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const category =
    typeof params.category === "string" ? params.category : undefined;

  return (
    <div className="min-h-screen bg-zinc-50 p-8 md:p-16">
      <main className="max-w-7xl mx-auto">
        <ProductsSearch />
        <Suspense key={category} fallback={<ProductsSkeleton />}>
          <ProductsGrid category={category} />
        </Suspense>
      </main>
    </div>
  );
}
