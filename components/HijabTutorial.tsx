'use client';

import { useTranslation } from "@/lib/hooks/useTranslation";

const HijabTutorial = () => {
  const { isArabic } = useTranslation();

  return (
    <section className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <div className={`text-center ${isArabic ? 'rtl' : 'ltr'}`}>
          <h2 className="text-heading1-bold mb-6">
            {isArabic ? "كيفية ارتداء الحجاب" : "How to Dress Hijab"}
          </h2>
          <p className="text-gray-600 mb-8">
            {isArabic 
              ? "تعلمي كيفية تنسيق حجابك مع فيديو الشرح خطوة بخطوة" 
              : "Learn how to style your hijab with our step-by-step tutorial video."}
          </p>
        </div>

        <div className="max-w-4xl w-full h-[500px] mx-auto rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/12khdDu3WZY"
            title={isArabic ? "كيفية ارتداء الحجاب" : "How to Dress Hijab"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HijabTutorial;