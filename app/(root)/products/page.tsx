"use client";

import { useEffect, useState } from "react";
import { getProducts } from "@/lib/actions/actions";
import ProductCard from "@/components/ProductCard";
import { Sliders, X } from "lucide-react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const Products = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 300]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const allCategories = products.map((product: ProductType) => product.category);
  const uniqueCategories = Array.from(new Set(allCategories));

  const allColors = products.flatMap((product: ProductType) => product.colors || []);
  const uniqueColors = Array.from(new Set(allColors));

  const allSizes = products.flatMap((product: ProductType) => product.sizes || []);
  const uniqueSizes = Array.from(new Set(allSizes));

  const filteredProducts = products.filter((product: ProductType) => {
    const categoryMatch = selectedCategory ? product.category === selectedCategory : true;
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
    const colorMatch = selectedColors.length === 0 || (product.colors && product.colors.some((color) => selectedColors.includes(color)));
    const sizeMatch = selectedSizes.length === 0 || (product.sizes && product.sizes.some((size) => selectedSizes.includes(size)));
    return categoryMatch && priceMatch && colorMatch && sizeMatch;
  });

  const handleColorChange = (color: string) => {
    setSelectedColors((prev) => (prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]));
  };

  const handleSizeChange = (size: string) => {
    setSelectedSizes((prev) => (prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]));
  };

  return (
    <div className="flex flex-col lg:flex-row gap-10 py-8 px-5">
      <div className={`w-full lg:w-80 bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ${isFiltersOpen ? "block" : "hidden lg:block"}`}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Sliders className="w-6 h-6 text-gray-700" />
            <h2 className="text-xl font-semibold">Filters</h2>
          </div>
          <button onClick={() => setIsFiltersOpen(false)} className="lg:hidden p-2 rounded-full bg-gray-100 hover:bg-gray-200">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-medium mb-3">Category</h3>
          <div className="flex flex-wrap gap-2">
            {uniqueCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
            <button
              onClick={() => setSelectedCategory(null)}
              className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200"
            >
              <X className="w-4 h-4 inline-block" />
            </button>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-medium mb-3">Price Range</h3>
          <div className="px-2">
            <Slider
              range
              min={0}
              max={300}
              value={priceRange}
              onChange={(value) => setPriceRange(value as [number, number])}
              trackStyle={[{ backgroundColor: "#3b82f6" }]}
              handleStyle={[
                { borderColor: "#3b82f6", backgroundColor: "#fff" },
                { borderColor: "#3b82f6", backgroundColor: "#fff" },
              ]}
              railStyle={{ backgroundColor: "#e5e7eb" }}
            />
            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <span>₪{priceRange[0]}</span>
              <span>₪{priceRange[1]}</span>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-medium mb-3">Colors</h3>
          <div className="flex flex-wrap gap-2">
            {uniqueColors.map((color, index) => (
              <button
                key={index}
                onClick={() => handleColorChange(color)}
                className={`w-8 h-8 rounded-full border-2 transition-all ${
                  selectedColors.includes(color) ? "border-blue-500" : "border-gray-300 hover:border-gray-500"
                }`}
                style={{ backgroundColor: color }}
                title={color}
              />
            ))}
            <button
              onClick={() => setSelectedColors([])}
              className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200"
            >
              <X className="w-4 h-4 inline-block" />
            </button>
          </div>
        </div>

        <div className="mb-6 mt-6">
          <h3 className="text-lg font-medium mb-3">Sizes</h3>
          <div className="flex flex-wrap gap-2">
            {uniqueSizes.map((size, index) => (
              <button
                key={index}
                onClick={() => handleSizeChange(size)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedSizes.includes(size) ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {size}
              </button>
            ))}
            <button
              onClick={() => setSelectedSizes([])}
              className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200"
            >
              <X className="w-4 h-4 inline-block" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <button
          onClick={() => setIsFiltersOpen(true)}
          className="lg:hidden mb-6 p-2 rounded-full bg-gray-100 hover:bg-gray-200"
        >
          <Sliders className="w-6 h-6" />
        </button>

        {!filteredProducts || filteredProducts.length === 0 ? (
          <p className="text-body-bold">No products found</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredProducts.map((product: ProductType) => (
              <div key={product._id} className="w-full sm:w-48 md:w-56">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;

export const dynamic = "force-dynamic";