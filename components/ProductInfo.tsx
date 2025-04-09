"use client";

import { useState } from "react";
import HeartFavorite from "./HeartFavorite";
import { MinusCircle, PlusCircle } from "lucide-react";
import useCart from "@/lib/hooks/useCart";
import { useTranslation } from "@/lib/hooks/useTranslation";

const ProductInfo = ({ productInfo }: { productInfo: ProductType }) => {
  const [selectedColor, setSelectedColor] = useState<string>(productInfo.colors[0]);
  const [selectedSize, setSelectedSize] = useState<string>(productInfo.sizes[0]);
  const [selectedMaterial, setSelectedMaterial] = useState<string>(productInfo.material[0]);
  const [quantity, setQuantity] = useState<number>(1);
  const { isArabic } = useTranslation();

  const cart = useCart();

  return (
    <div className={`max-w-[400px] flex flex-col gap-4 ${isArabic ? 'text-right' : 'text-left'}`}>
      <div className="flex justify-between items-center">
        <p className="text-heading3-bold">{productInfo.title}</p>
        <HeartFavorite product={productInfo} />
      </div>

      <div className="flex gap-2">
        <p className="text-base-medium text-grey-2">{isArabic ? "الفئة" : "Category:"}</p>
        <p className="text-base-bold">{productInfo.category}</p>
      </div>

      <p className="text-heading3-bold">₪ {productInfo.price}</p>

      <div className="flex flex-col gap-2">
        <p className="text-base-medium text-grey-2">{isArabic ? "الوصف" : "Description:"}</p>
        <p className="text-small-medium">{productInfo.description}</p>
      </div>

      {productInfo.colors.length > 0 && (
        <div className="flex flex-col gap-2">
          <p className="text-base-medium text-grey-2">{isArabic ? "الألوان" : "Colors:"}</p>
          <div className="flex gap-2">
            {productInfo.colors.map((color, index) => (
              <button
                key={index}
                onClick={() => setSelectedColor(color)}
                className={`w-8 h-8 rounded-full border-2 transition-all ${
                  selectedColor === color ? "border-blue-500" : "border-gray-300 hover:border-gray-500"
                }`}
                style={{ backgroundColor: color }}
                title={color}
              />
            ))}
          </div>
        </div>
      )}

      {productInfo.sizes.length > 0 && (
        <div className="flex flex-col gap-2">
          <p className="text-base-medium text-grey-2">{isArabic ? "المقاسات" : "Sizes:"}</p>
          <div className="flex gap-2">
            {productInfo.sizes.map((size, index) => (
              <p
                key={index}
                className={`border border-black px-2 py-1 rounded-lg cursor-pointer ${
                  selectedSize === size && "bg-black text-white"
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </p>
            ))}
          </div>
        </div>
      )}

      {productInfo.material.length > 0 && (
        <div className="flex flex-col gap-2">
          <p className="text-base-medium text-grey-2">{isArabic ? "المادة" : "Material:"}</p>
          <div className="flex gap-2">
            {productInfo.material.map((material, index) => (
              <p
                key={index}
                className={`border border-black px-2 py-1 rounded-lg cursor-pointer ${
                  selectedMaterial === material && "bg-black text-white"
                }`}
                onClick={() => setSelectedMaterial(material)}
              >
                {material}
              </p>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-col gap-2">
        <p className="text-base-medium text-grey-2">{isArabic ? "الكمية" : "Quantity:"}</p>
        <div className="flex gap-4 items-center">
          <MinusCircle
            className="hover:text-red-1 cursor-pointer"
            onClick={() => quantity > 1 && setQuantity(quantity - 1)}
          />
          <p className="text-body-bold">{quantity}</p>
          <PlusCircle
            className="hover:text-red-1 cursor-pointer"
            onClick={() => setQuantity(quantity + 1)}
          />
        </div>
      </div>

      <button
        className="outline text-base-bold py-3 rounded-lg hover:bg-black hover:text-white"
        onClick={() => {
          cart.addItem({
            item: productInfo,
            quantity,
            color: selectedColor,
            size: selectedSize,
            material: selectedMaterial,
          });
        }}
      >
        {isArabic ? "أضف إلى السلة" : "Add To Cart"}
      </button>
    </div>
  );
};

export default ProductInfo;