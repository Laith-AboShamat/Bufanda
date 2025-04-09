'use client';

import { getCollections } from "@/lib/actions/actions";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { useTranslation } from "@/lib/hooks/useTranslation";

function CollectionsContent({ collections }: { collections: CollectionType[] }) {
  const { t, isArabic } = useTranslation();

  return (
    <div className="flex flex-col items-center gap-10 py-20 px-5 bg-gray-50">
      <p className="text-heading2-bold">{isArabic ? "المجموعات" : "Collections"}</p>
      {!collections || collections.length === 0 ? (
        <p className="text-body-bold">{isArabic ? "لا توجد مجموعات" : "No collections found"}</p>
      ) : (
        <>
          <div className="w-full grid grid-cols-3 gap-4 md:hidden">
            {collections.map((collection) => (
              <Link
                key={collection._id}
                href={`/collections/${collection._id}`}
                className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={collection.image}
                  alt={collection.title}
                  width={350}
                  height={200}
                  className="w-full h-32 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-2 left-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-sm font-semibold line-clamp-1">
                    {collection.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

          <div className="w-full max-w-7xl relative hidden md:block">
            <Carousel className="w-full">
              <CarouselContent className="-ml-4 select-none">
                {collections.map((collection) => (
                  <CarouselItem
                    key={collection._id}
                    className="basis-full md:basis-1/2 lg:basis-1/3 pl-4 select-none"
                  >
                    <div className="flex justify-center">
                      <Link href={`/collections/${collection._id}`}>
                        <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                          <Image
                            src={collection.image}
                            alt={collection.title}
                            width={350}
                            height={200}
                            className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h3 className="text-xl font-semibold">
                              {collection.title}
                            </h3>
                            <p className="text-sm">{isArabic ? "استكشف الآن →" : "Explore now →"}</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 transform select-none" />
              <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 transform select-none" />
            </Carousel>
          </div>
        </>
      )}
    </div>
  );
}
const Collections = async () => {
  const collections = await getCollections();
  
  return <CollectionsContent collections={collections} />;
};

export default Collections;