import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IProduct } from "@/types";
import Image from "next/image";

export default function ProductCard({
  product,
  index,
}: {
  product: IProduct;
  index: number;
}) {
  return (
    <Card className="flex flex-col justify-between overflow-hidden transition-all hover:shadow-md group">
      <CardHeader className="p-4 bg-white flex items-center justify-center h-48">
        <div className="relative w-full h-full aspect-square">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            priority={index < 4}
            className="object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </CardHeader>

      <CardContent className="p-4">
        <CardTitle className="text-sm line-clamp-2 mb-2 font-medium">
          {product.title}
        </CardTitle>
        <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">
          {product.category}
        </p>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
      </CardFooter>
    </Card>
  );
}
