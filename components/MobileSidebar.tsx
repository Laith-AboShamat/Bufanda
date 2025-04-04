"use client";

import { CircleUserRound, ShoppingCart, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  user: any;
  cartItemsLength: number;
  categories: string[];
  collections: CollectionType[];
  productsDropdown: boolean;
  setProductsDropdown: (value: boolean) => void;
  categoryDropdowns: { [key: string]: boolean };
  toggleCategoryDropdown: (category: string) => void;
}

const MobileSidebar = ({
  isOpen,
  onClose,
  user,
  cartItemsLength,
  categories,
  collections,
  productsDropdown,
  setProductsDropdown,
  categoryDropdowns,
  toggleCategoryDropdown,
}: MobileSidebarProps) => {
  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-[100] lg:hidden"
        onClick={onClose}
      />
      
      <div className="fixed top-0 left-0 h-full w-4/5 max-w-sm bg-white shadow-lg z-[110] flex flex-col p-4 overflow-y-auto lg:hidden">
        <div className="flex justify-between items-center mb-4">
          <Link href="/" onClick={onClose}>
            <Image src="/logo.png" alt="logo" width={130} height={100} />
          </Link>
          <button onClick={onClose}>
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex flex-col gap-4">
          <Link
            href="/"
            className="hover:text-red-1 py-2 border-b"
            onClick={onClose}
          >
            Home
          </Link>

          <div className="relative border-b pb-2">
            <button
              className="hover:text-red-1 w-full text-left py-2 flex justify-between items-center"
              onClick={() => setProductsDropdown(!productsDropdown)}
            >
              Products
              <span>{productsDropdown ? "−" : "+"}</span>
            </button>
            {productsDropdown && (
              <div className="mt-2 bg-white pl-4 z-[120]">
                <Link
                  href="/products"
                  className="block px-4 py-2 hover:bg-gray-100 font-semibold rounded"
                  onClick={() => {
                    setProductsDropdown(false);
                    onClose();
                  }}
                >
                  Filter
                </Link>

                <div className="border-t border-gray-200 my-1"></div>

                {categories.map((category) => (
                  <div key={category} className="mb-1">
                    <button
                      className="px-4 py-2 hover:bg-gray-100 w-full text-left rounded flex justify-between items-center"
                      onClick={() => toggleCategoryDropdown(category)}
                    >
                      {category}
                      <span>{categoryDropdowns[category] ? "−" : "+"}</span>
                    </button>
                    {categoryDropdowns[category] && (
                      <div className="ml-0">
                        {collections
                          .filter((collection) =>
                            collection.category.includes(category)
                          )
                          .map((collection) => (
                            <Link
                              key={collection._id}
                              href={`/collections/${collection._id}`}
                              className="block px-4 py-2 hover:bg-gray-100 text-sm rounded"
                              onClick={() => {
                                setProductsDropdown(false);
                                onClose();
                              }}
                            >
                              {collection.title}
                            </Link>
                          ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link
            href={user ? "/wishlist" : "/sign-in"}
            className="hover:text-red-1 py-2 border-b"
            onClick={onClose}
          >
            Wishlist
          </Link>
          <Link
            href={user ? "/orders" : "/sign-in"}
            className="hover:text-red-1 py-2 border-b"
            onClick={onClose}
          >
            Orders
          </Link>
          <Link
            href="/cart"
            className="flex items-center gap-3 border rounded-lg px-2 py-1 hover:bg-black hover:text-white mt-2"
            onClick={onClose}
          >
            <ShoppingCart />
            <p className="text-base-bold">({cartItemsLength})</p>
          </Link>

          <div className="mt-4">
            {user ? (
              <div className="flex items-center gap-2">
                <UserButton afterSignOutUrl="/sign-in" />
                <span>Account</span>
              </div>
            ) : (
              <Link
                href="/sign-in"
                className="flex items-center gap-2 hover:text-red-1"
                onClick={onClose}
              >
                <CircleUserRound />
                <span>Sign In</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileSidebar;