'use client';

import useCart from "@/lib/hooks/useCart";
import { getCollections } from "@/lib/actions/actions";
import { UserButton, useUser } from "@clerk/nextjs";
import { CircleUserRound, Menu, Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import MobileSidebar from "./MobileSidebar";
import { useTranslation } from "@/lib/hooks/useTranslation";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useUser();
  const cart = useCart();
  const { t, toggleLanguage, isArabic } = useTranslation();

  const [dropdownMenu, setDropdownMenu] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);
  const [query, setQuery] = useState("");
  const [collections, setCollections] = useState<CollectionType[]>([]);
  const [categoryDropdowns, setCategoryDropdowns] = useState<{
    [key: string]: boolean;
  }>({});

  useEffect(() => {
    const fetchCollections = async () => {
      const data = await getCollections();
      setCollections(data);
    };
    fetchCollections();
  }, []);

  const categories = ["Abaya", "Hijab", "Clothes", "Offers"];

  const getTranslatedCategory = (category: string) => {
    switch(category) {
      case 'Abaya': return t('abaya');
      case 'Hijab': return t('hijab');
      case 'Clothes': return t('clothes');
      case 'Offers': return t('offers');
      default: return category;
    }
  };

  const toggleCategoryDropdown = (category: string) => {
    setCategoryDropdowns((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleLanguageToggle = () => {
    const newLang = toggleLanguage();
    window.location.reload();
  };

  return (
    <div className={`sticky top-0 z-[50] py-2 px-10 flex gap-2 justify-between items-center bg-white max-sm:px-2 ${isArabic ? 'rtl' : 'ltr'}`} dir={isArabic ? 'rtl' : 'ltr'}>
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={130} height={100} />
      </Link>

      <div className="flex gap-4 text-base-bold max-lg:hidden">
        <Link
          href="/"
          className={`hover:text-red-1 ${pathname === "/" && "text-red-1"}`}
        >
          {t('home')}
        </Link>

        <div className="relative">
          <button
            className={`hover:text-red-1 ${
              pathname === "/products" && "text-red-1"
            }`}
            onClick={() => setProductsDropdown(!productsDropdown)}
          >
            {t('products')}
          </button>
          {productsDropdown && (
            <div className={`absolute bg-white border border-gray-200 rounded-lg shadow-lg mt-2 w-48 z-[60] ${isArabic ? 'right-0 text-right' : 'left-0 text-left'}`}>
              <Link
                href="/products"
                className={`block px-4 py-2 hover:bg-gray-100 font-semibold ${isArabic ? 'text-right' : 'text-left'}`}
                onClick={() => setProductsDropdown(false)}
              >
                {t('filter')}
              </Link>

              <div className="border-t border-gray-200 my-1"></div>

              {categories.map((category) => (
                <div key={category}>
                  <button
                    className={`block px-4 py-2 hover:bg-gray-100 w-full ${isArabic ? 'text-right' : 'text-left'}`}
                    onClick={() => toggleCategoryDropdown(category)}
                  >
                    {getTranslatedCategory(category)}
                  </button>
                  {categoryDropdowns[category] && (
                    <div className={`${isArabic ? 'pr-4 text-right' : 'ml-4 text-left'}`}>
                      {collections
                        .filter((collection) =>
                          collection.category.includes(category)
                        )
                        .map((collection) => (
                          <Link
                            key={collection._id}
                            href={`/collections/${collection._id}`}
                            className={`block px-4 py-2 hover:bg-gray-100 text-sm ${isArabic ? 'text-right' : 'text-left'}`}
                            onClick={() => setProductsDropdown(false)}
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
          className={`hover:text-red-1 ${
            pathname === "/wishlist" && "text-red-1"
          }`}
        >
          {t('wishlist')}
        </Link>
        <Link
          href={user ? "/orders" : "/sign-in"}
          className={`hover:text-red-1 ${
            pathname === "/orders" && "text-red-1"
          }`}
        >
          {t('orders')}
        </Link>
      </div>

      <div className="flex gap-3 border border-grey-2 px-3 py-1 items-center rounded-lg">
        <input
          className="outline-none max-sm:max-w-[120px]"
          placeholder={t('search')}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          disabled={query === ""}
          onClick={() => router.push(`/search/${query}`)}
        >
          <Search className="cursor-pointer h-4 w-4 hover:text-red-1" />
        </button>
      </div>

      <div className="relative flex gap-3 items-center">
        <Link
          href="/cart"
          className="flex items-center gap-3 border rounded-lg px-2 py-1 hover:bg-black hover:text-white max-md:hidden"
        >
          <ShoppingCart />
          <p className="text-base-bold">({cart.cartItems.length})</p>
        </Link>

        <button
          onClick={handleLanguageToggle}
          className="border rounded-lg px-2 py-1 text-sm text-body-semibold hover:bg-gray-100"
        >
          {isArabic ? 'EN' : 'عربي'}
        </button>

        <Menu
          className="cursor-pointer lg:hidden z-[50]"
          onClick={() => setDropdownMenu(true)}
        />

        <MobileSidebar
          isOpen={dropdownMenu}
          onClose={() => setDropdownMenu(false)}
          user={user}
          cartItemsLength={cart.cartItems.length}
          categories={categories}
          collections={collections}
          productsDropdown={productsDropdown}
          setProductsDropdown={setProductsDropdown}
          categoryDropdowns={categoryDropdowns}
          toggleCategoryDropdown={toggleCategoryDropdown}
        />

        {user ? (
          <UserButton afterSignOutUrl="/sign-in" />
        ) : (
          <Link href="/sign-in">
            <CircleUserRound />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;