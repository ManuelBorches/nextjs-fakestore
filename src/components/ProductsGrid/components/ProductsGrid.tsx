import { getProducts } from "@/lib/api";
import ProductsNotFound from "./ProductsNotFound";
import ProductCard from "./ProductCard";

export async function ProductsGrid({ category }: { category?: string }) {
  const products = await getProducts(category);

  if (!products || !products.length) {
    return <ProductsNotFound category={category} />;
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} />
      ))}
    </div>
  );
}
