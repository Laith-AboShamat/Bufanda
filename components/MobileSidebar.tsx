'use client';

import { CircleUserRound, ShoppingCart, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { useTranslation } from "@/lib/hooks/useTranslation";

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
  const { t, isArabic } = useTranslation();

  // Function to get translated category label
  const getTranslatedCategory = (category: string) => {
    switch(category) {
      case 'Abaya': return t('abaya');
      case 'Hijab': return t('hijab');
      case 'Clothes': return t('clothes');
      case 'Offers': return t('offers');
      default: return category;
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-[100] lg:hidden"
        onClick={onClose}
      />
      
      <div 
        className={`fixed top-0 ${isArabic ? 'right-0' : 'left-0'} h-full w-4/5 max-w-sm bg-white shadow-lg z-[110] flex flex-col p-4 overflow-y-auto lg:hidden ${isArabic ? 'text-right' : 'text-left'}`}
        dir={isArabic ? 'rtl' : 'ltr'}
      >
        <div className={`flex justify-between items-center mb-4 ${isArabic ? 'flex-row-reverse' : ''}`}>
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
            className={`hover:text-red-1 py-2 border-b ${isArabic ? 'text-right' : 'text-left'}`}
            onClick={onClose}
          >
            {t('home')}
          </Link>

          <div className={`relative border-b pb-2 ${isArabic ? 'text-right' : 'text-left'}`}>
            <button
              className={`hover:text-red-1 w-full py-2 flex justify-between items-center ${isArabic ? 'flex-row-reverse' : ''}`}
              onClick={() => setProductsDropdown(!productsDropdown)}
            >
              {t('products')}
              <span>{productsDropdown ? "−" : "+"}</span>
            </button>
            {productsDropdown && (
              <div className={`mt-2 bg-white ${isArabic ? 'pr-4' : 'pl-4'} z-[120]`}>
                <Link
                  href="/products"
                  className={`block px-4 py-2 hover:bg-gray-100 font-semibold rounded ${isArabic ? 'text-right' : 'text-left'}`}
                  onClick={() => {
                    setProductsDropdown(false);
                    onClose();
                  }}
                >
                  {t('filter')}
                </Link>

                <div className="border-t border-gray-200 my-1"></div>

                {categories.map((category) => (
                  <div key={category} className="mb-1">
                    <button
                      className={`px-4 py-2 hover:bg-gray-100 w-full rounded flex justify-between items-center ${isArabic ? 'flex-row-reverse' : ''}`}
                      onClick={() => toggleCategoryDropdown(category)}
                    >
                      {getTranslatedCategory(category)}
                      <span>{categoryDropdowns[category] ? "−" : "+"}</span>
                    </button>
                    {categoryDropdowns[category] && (
                      <div className={isArabic ? 'mr-0' : 'ml-0'}>
                        {collections
                          .filter((collection) =>
                            collection.category.includes(category)
                          )
                          .map((collection) => (
                            <Link
                              key={collection._id}
                              href={`/collections/${collection._id}`}
                              className={`block px-4 py-2 hover:bg-gray-100 text-sm rounded ${isArabic ? 'text-right' : 'text-left'}`}
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
            className={`hover:text-red-1 py-2 border-b ${isArabic ? 'text-right' : 'text-left'}`}
            onClick={onClose}
          >
            {t('wishlist')}
          </Link>
          <Link
            href={user ? "/orders" : "/sign-in"}
            className={`hover:text-red-1 py-2 border-b ${isArabic ? 'text-right' : 'text-left'}`}
            onClick={onClose}
          >
            {t('orders')}
          </Link>
          <Link
            href="/cart"
            className={`flex items-center gap-3 border rounded-lg px-2 py-1 hover:bg-black hover:text-white mt-2 ${isArabic ? 'flex-row-reverse justify-end' : ''}`}
            onClick={onClose}
          >
            <ShoppingCart />
            <p className="text-base-bold">({cartItemsLength})</p>
          </Link>

          <div className={`mt-4 ${isArabic ? 'text-right' : 'text-left'}`}>
            {user ? (
              <div className={`flex items-center gap-2 ${isArabic ? 'flex-row-reverse justify-end' : ''}`}>
                <UserButton afterSignOutUrl="/sign-in" />
                <span>{t('account')}</span>
              </div>
            ) : (
              <Link
                href="/sign-in"
                className={`flex items-center gap-2 hover:text-red-1 ${isArabic ? 'flex-row-reverse justify-end' : ''}`}
                onClick={onClose}
              >
                <CircleUserRound />
                <span>{t('signIn')}</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileSidebar;