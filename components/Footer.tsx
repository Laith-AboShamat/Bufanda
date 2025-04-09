"use client";

import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useTranslation } from "@/lib/hooks/useTranslation";

const Footer = () => {
  const { t, isArabic } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className={isArabic ? "text-right" : "text-left"}>
            <h3 className="text-xl font-semibold mb-4">
              {isArabic ? "روابط سريعة" : "Quick Links"}
            </h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <a href="/" className="hover:text-white transition-colors">
                  {isArabic ? "الرئيسية" : "Home"}
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/products"
                  className="hover:text-white transition-colors"
                >
                  {isArabic ? "تسوق" : "Shop"}
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/orders"
                  className="hover:text-white transition-colors"
                >
                  {isArabic ? "الطلبات" : "Orders"}
                </a>
              </li>
            </ul>
          </div>

          <div className={isArabic ? "text-right" : "text-left"}>
            <h3 className="text-xl font-semibold mb-4">
              {isArabic ? "خدمة العملاء" : "Customer Support"}
            </h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <Dialog>
                  <DialogTrigger className="hover:text-white transition-colors">
                    {isArabic ? "الأسئلة الشائعة" : "FAQ"}
                  </DialogTrigger>
                  <DialogContent
                    className={isArabic ? "text-right" : "text-left"}
                  >
                    <DialogHeader>
                      <DialogTitle>
                        {isArabic
                          ? "الأسئلة الشائعة"
                          : "Frequently Asked Questions"}
                      </DialogTitle>
                      <DialogDescription>
                        <strong>
                          {isArabic
                            ? "1. ما هي المنتجات التي تقدمونها؟"
                            : "1. What products do you offer?"}
                        </strong>
                        <br />
                        {isArabic
                          ? "نحن متخصصون في الحجابات والملابس المحتشمة عالية الجودة. تشمل مجموعتنا مجموعة متنوعة من الألوان والأنسجة."
                          : "We specialize in high-quality hijabs and modest wear. Our collections include a variety of colors, styles, and fabrics."}
                        <br />
                        <br />
                        <strong>
                          {isArabic
                            ? "2. هل تقدمون شحنًا دوليًا؟"
                            : "2. Do you offer international shipping?"}
                        </strong>
                        <br />
                        {isArabic
                          ? "حاليًا، نقوم بالشحن فقط داخل فلسطين، بما في ذلك الضفة الغربية وأراضي الـ48."
                          : "Currently, we only ship within Palestine, including the West Bank and 48 lands."}
                        <br />
                        <br />
                        <strong>
                          {isArabic
                            ? "3. كيف يمكنني تتبع طلبي؟"
                            : "3. How can I track my order?"}
                        </strong>
                        <br />
                        {isArabic
                          ? "بعد تقديم الطلب، ستتلقى رسالة تأكيد مع تفاصيل التتبع بمجرد شحن طردك."
                          : "After placing an order, you will receive a confirmation message with tracking details once your package is dispatched."}
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </li>

              <li className="mb-2">
                <Dialog>
                  <DialogTrigger className="hover:text-white transition-colors">
                    {isArabic ? "الشحن والإرجاع" : "Shipping & Returns"}
                  </DialogTrigger>
                  <DialogContent
                    className={isArabic ? "text-right" : "text-left"}
                  >
                    <DialogHeader>
                      <DialogTitle>
                        {isArabic
                          ? "سياسة الشحن والإرجاع"
                          : "Shipping & Returns Policy"}
                      </DialogTitle>
                      <DialogDescription>
                        <strong>{isArabic ? "الشحن:" : "Shipping:"}</strong>
                        <br />
                        {isArabic
                          ? "نحن نقدم التوصيل في جميع أنحاء فلسطين، مع وصول الطلبات عادة خلال 3-5 أيام عمل. قد تختلف رسوم التوصيل حسب الموقع."
                          : "We deliver across Palestine, with orders typically arriving within 3-5 business days. Delivery fees may vary depending on the location."}
                        <br />
                        <br />
                        <strong>{isArabic ? "الإرجاع:" : "Returns:"}</strong>
                        <br />
                        {isArabic
                          ? "نظرًا لطبيعة منتجاتنا، يتم قبول المرتجعات فقط إذا كان المنتج تالفًا عند الوصول. إذا تلقيت منتجًا معيبًا، يرجى الاتصال بنا خلال 3 أيام مع صور للمنتج."
                          : "Due to the nature of our products, returns are only accepted if the item is damaged upon arrival. If you receive a faulty product, please contact us within 3 days with photos of the item."}
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </li>

              <li className="mb-2">
                <Dialog>
                  <DialogTrigger className="hover:text-white transition-colors">
                    {isArabic ? "سياسة الخصوصية" : "Privacy Policy"}
                  </DialogTrigger>
                  <DialogContent
                    className={isArabic ? "text-right" : "text-left"}
                  >
                    <DialogHeader>
                      <DialogTitle>
                        {isArabic ? "سياسة الخصوصية" : "Privacy Policy"}
                      </DialogTitle>
                      <DialogDescription>
                        {isArabic
                          ? "نحن نحترم خصوصيتك ونضمن أن تظل جميع البيانات الشخصية المقدمة إلينا سرية."
                          : "We respect your privacy and ensure that all personal data provided to us remains confidential."}
                        <br />
                        <br />
                        <strong>
                          {isArabic
                            ? "ما المعلومات التي نجمعها؟"
                            : "What Information Do We Collect?"}
                        </strong>
                        <br />
                        {isArabic
                          ? "نقوم بجمع المعلومات الأساسية مثل اسمك وبريدك الإلكتروني وعنوان الشحن فقط لمعالجة الطلب."
                          : "We collect essential information such as your name, email, and shipping address only for order processing."}
                        <br />
                        <br />
                        <strong>
                          {isArabic
                            ? "كيف يتم استخدام بياناتك؟"
                            : "How Is Your Data Used?"}
                        </strong>
                        <br />
                        {isArabic
                          ? "يتم استخدام معلوماتك فقط لمعالجة الطلبات ودعم العملاء. نحن لا نشارك أو نبيع بياناتك لأطراف ثالثة."
                          : "Your information is used solely for processing orders and customer support. We do not share or sell your data to third parties."}
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </li>

              <li className="mb-2">
                <Dialog>
                  <DialogTrigger className="hover:text-white transition-colors">
                    {isArabic ? "الشروط والأحكام" : "Terms & Conditions"}
                  </DialogTrigger>
                  <DialogContent
                    className={isArabic ? "text-right" : "text-left"}
                  >
                    <DialogHeader>
                      <DialogTitle>
                        {isArabic ? "الشروط والأحكام" : "Terms & Conditions"}
                      </DialogTitle>
                      <DialogDescription>
                        {isArabic
                          ? "باستخدام خدماتنا، فإنك توافق على الالتزام بالشروط التالية:"
                          : "By using our services, you agree to comply with the following terms:"}
                        <br />
                        <br />
                        <strong>
                          {isArabic
                            ? "1. الطلبات والمدفوعات:"
                            : "1. Orders & Payments:"}
                        </strong>
                        <br />
                        {isArabic
                          ? "يجب دفع جميع الطلبات نقدًا عند الاستلام."
                          : "All orders must be paid cash on delivery."}
                        <br />
                        <br />
                        <strong>
                          {isArabic
                            ? "2. توفر المنتج:"
                            : "2. Product Availability:"}
                        </strong>
                        <br />
                        {isArabic
                          ? "نسعى جاهدين للحفاظ على جميع المنتجات في المخزون، ولكن التوفر عرضة للتغيير دون إشعار مسبق."
                          : "We strive to keep all products in stock, but availability is subject to change without prior notice."}
                        <br />
                        <br />
                        <strong>
                          {isArabic
                            ? "3. الإساءة وسوء الاستخدام:"
                            : "3. Abuse & Misuse:"}
                        </strong>
                        <br />
                        {isArabic
                          ? "أي إساءة استخدام لموقعنا الإلكتروني، أو طلبات احتيالية، أو سلوك مسيء تجاه موظفينا لن يتم التسامح معه."
                          : "Any misuse of our website, fraudulent orders, or abusive behavior towards our staff will not be tolerated."}
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </li>
            </ul>
          </div>

          <div className={isArabic ? "text-right" : "text-left"}>
            <h3 className="text-xl font-semibold mb-4">
              {isArabic ? "اتصل بنا" : "Contact Us"}
            </h3>
            <p className="text-gray-400 mb-2">
              {isArabic ? "البريد الإلكتروني:" : "Email:"}
              <a
                href="mailto:bufanda@gmail.com"
                className="text-blue-400 hover:underline ml-1"
              >
                bufanda@gmail.com
              </a>
            </p>
            <p className="text-gray-400 mb-2">
              {isArabic ? "الهاتف:" : "Phone:"} (+970)59-508-3234
            </p>
            <p className="text-gray-400 mb-2">
              {isArabic ? "العنوان:" : "Address:"} نابلس مقابل الاكادمية مجمع
              الحسين التجاري
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-center">
              {isArabic ? "تابعنا" : "Follow Us"}
            </h3>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.instagram.com/bufanda.hijab"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.facebook.com/bufanda.hijabb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.threads.net/@bufanda.hijab"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaThreads size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Bufanda.{" "}
            {isArabic ? "جميع الحقوق محفوظة." : "All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
