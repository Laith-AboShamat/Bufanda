'use client';

import Image from "next/image";
import { useTranslation } from "@/lib/hooks/useTranslation";

const AboutUs = () => {
  const { isArabic } = useTranslation();

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${isArabic ? 'rtl' : 'ltr'}`}>
          <div className={`relative h-96 w-full rounded-lg overflow-hidden shadow-lg ${isArabic ? 'md:order-2' : ''}`}>
            <Image
              src="/hijab-about.png"
              alt={isArabic ? "معلومات عنا" : "About Us"}
              fill
              className="object-cover"
            />
          </div>

          <div className={`space-y-6 ${isArabic ? 'text-right' : 'text-left'}`}>
            <h2 className="text-heading1-bold font-bold text-gray-900">
              {isArabic ? "عن بوفاندا" : "About Bufanda"}
            </h2>
            <p className="text-gray-600">
              {isArabic ? (
                <>
                  مرحبًا بكم في <span className="font-semibold">بوفاندا</span>، وجهتكم المفضلة للحجابات الأنيقة والمحتشمة. نحن نقدم حجابات عالية الجودة تجمع بين الأناقة والراحة وبأسعار معقولة.
                </>
              ) : (
                <>
                  Welcome to <span className="font-semibold">Bufanda</span>, your
                  premier destination for stylish and modest hijabs. We are passionate
                  about providing high-quality hijabs that combine elegance, comfort,
                  and affordability.
                </>
              )}
            </p>
            <p className="text-gray-600">
              {isArabic ? (
                <>
                  مهمتنا هي تمكين المرأة من خلال تقديم مجموعة واسعة من الحجابات المناسبة لكل مناسبة، من الملابس اليومية إلى المناسبات الخاصة. نؤمن أن العفة والموضة يمكن أن يسيرا جنبًا إلى جنب، ونحن ملتزمون بمساعدتك في التعبير عن أسلوبك الفريد.
                </>
              ) : (
                <>
                  Our mission is to empower women by offering a wide range of hijabs
                  that suit every occasion, from everyday wear to special events. We
                  believe that modesty and fashion can go hand in hand, and we are
                  dedicated to helping you express your unique style.
                </>
              )}
            </p>
            <button className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
              {isArabic ? "تعرف المزيد" : "Learn More"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;