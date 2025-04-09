'use client';

import ProductCard from "./ProductCard";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { getProducts } from "@/lib/actions/actions";
import { useTranslation } from "@/lib/hooks/useTranslation";

function ProductListContent({ products }: { products: ProductType[] }) {
  const { isArabic } = useTranslation();

  return (
    <div className="flex flex-col items-center gap-10 py-20 px-5 bg-gray-50">
      <p className="text-heading2-bold">{isArabic ? "أحدث الوصولات" : "Latest Arrivals"}</p>
      {!products || products.length === 0 ? (
        <p className="text-body-bold">{isArabic ? "لا توجد منتجات" : "No products found"}</p>
      ) : (
        <div className="w-full max-w-7xl relative">
          <Carousel className="w-full">
            <CarouselContent className="-ml-4 select-none">
              {products.map((product: ProductType) => (
                <CarouselItem
                  key={product._id}
                  className="basis-full md:basis-1/2 lg:basis-1/3 pl-4 select-none"
                >
                  <div className="flex justify-center">
                    <ProductCard product={product} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 transform select-none" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 transform select-none" />
          </Carousel>
        </div>
      )}
    </div>
  );
}

const ProductList = async () => {
  const products = await getProducts();
  
  return <ProductListContent products={products} />;
};

export default ProductList;