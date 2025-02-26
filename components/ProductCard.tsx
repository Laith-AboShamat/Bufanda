"use client";

import Image from "next/image";
import Link from "next/link";
import HeartFavorite from "./HeartFavorite";
import { useState } from "react";

interface ProductCardProps {
  product: ProductType;
  updateSignedInUser?: (updatedUser: UserType) => void;
}

const ProductCard = ({ product, updateSignedInUser }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={`/products/${product._id}`}
      className="w-[220px] flex flex-col gap-2 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
    >
      <div
        className="relative h-[250px] rounded-t-lg overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={product.media[0]}
          alt="product"
          fill
          className="object-cover transition-opacity duration-1000"
          style={{ opacity: isHovered ? 0 : 1 }}
        />
        <Image
          src={product.media[1]}
          alt="product"
          fill
          className="object-cover transition-opacity duration-1000"
          style={{ opacity: isHovered ? 1 : 0 }}
        />
      </div>
      <div className="p-2 flex flex-col gap-1">
        <p className="text-base-bold truncate">{product.title}</p>
        <p className="text-small-medium text-gray-500">{product.category}</p>
        <div className="flex justify-between items-center">
          <p className="text-body-bold">₪{product.price}</p>
          <HeartFavorite product={product} updateSignedInUser={updateSignedInUser} />
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;