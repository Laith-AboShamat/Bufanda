'use client';

import { useState, useEffect } from 'react';

const translations = {
  en: {
    home: "Home",
    products: "Products",
    filter: "Filter",
    wishlist: "Wishlist",
    orders: "Orders",
    account: "Account",
    signIn: "Sign In",
    search: "Search...",
    collections: "Collections",
    noCollections: "No collections found",
    explore: "Explore now →",
    abaya: "Abaya",
    hijab: "Hijab",
    clothes: "Clothes",
    offers: "Offers",
    relatedProducts: "Related Products"
  },
  ar: {
    home: "الرئيسية",
    products: "المنتجات",
    filter: "تصفية",
    wishlist: "المفضلة",
    orders: "الطلبات",
    account: "الحساب",
    signIn: "تسجيل الدخول",
    search: "بحث...",
    collections: "المجموعات",
    noCollections: "لا توجد مجموعات",
    explore: "استكشف الآن →",
    abaya: "عبايات",
    hijab: "حجاب",
    clothes: "ملابس",
    offers: "عروض",
    relatedProducts: "منتجات ذات صلة"
  }
} as const;

export function useTranslation() {
  const [lang, setLang] = useState<'en' | 'ar'>('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('lang') as 'en' | 'ar' | null;
    if (savedLang) setLang(savedLang);
  }, []);

  const toggleLanguage = () => {
    const newLang = lang === 'en' ? 'ar' : 'en';
    setLang(newLang);
    localStorage.setItem('lang', newLang);
    return newLang;
  };

  return {
    t: (key: keyof typeof translations.en) => translations[lang][key],
    isArabic: lang === 'ar',
    toggleLanguage,
    lang
  };
}