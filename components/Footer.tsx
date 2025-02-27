"use client";

import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <a href="/" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="/products" className="hover:text-white transition-colors">
                  Shop
                </a>
              </li>
              <li className="mb-2">
                <a href="/orders" className="hover:text-white transition-colors">
                  Orders
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Customer Support</h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <Dialog>
                  <DialogTrigger className="hover:text-white transition-colors">FAQ</DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Frequently Asked Questions</DialogTitle>
                      <DialogDescription>
                        <strong>1. What products do you offer?</strong>  
                        <br />
                        We specialize in high-quality hijabs and modest wear. Our collections include a variety of colors, styles, and fabrics.
                        <br /><br />
                        <strong>2. Do you offer international shipping?</strong>  
                        <br />
                        Currently, we only ship within Palestine, including the West Bank and 48 lands.
                        <br /><br />
                        <strong>3. How can I track my order?</strong>  
                        <br />
                        After placing an order, you will receive a confirmation message with tracking details once your package is dispatched.
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </li>

              <li className="mb-2">
                <Dialog>
                  <DialogTrigger className="hover:text-white transition-colors">Shipping & Returns</DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Shipping & Returns Policy</DialogTitle>
                      <DialogDescription>
                        <strong>Shipping:</strong>  
                        <br />
                        We deliver across Palestine, with orders typically arriving within 3-5 business days. Delivery fees may vary depending on the location.
                        <br /><br />
                        <strong>Returns:</strong>  
                        <br />
                        Due to the nature of our products, returns are only accepted if the item is damaged upon arrival. If you receive a faulty product, please contact us within 3 days with photos of the item.
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </li>

              <li className="mb-2">
                <Dialog>
                  <DialogTrigger className="hover:text-white transition-colors">Privacy Policy</DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Privacy Policy</DialogTitle>
                      <DialogDescription>
                        We respect your privacy and ensure that all personal data provided to us remains confidential.  
                        <br /><br />
                        <strong>What Information Do We Collect?</strong>  
                        <br />
                        We collect essential information such as your name, email, and shipping address only for order processing.
                        <br /><br />
                        <strong>How Is Your Data Used?</strong>  
                        <br />
                        Your information is used solely for processing orders and customer support. We do not share or sell your data to third parties.
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </li>

              <li className="mb-2">
                <Dialog>
                  <DialogTrigger className="hover:text-white transition-colors">Terms & Conditions</DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Terms & Conditions</DialogTitle>
                      <DialogDescription>
                        By using our services, you agree to comply with the following terms:
                        <br /><br />
                        <strong>1. Orders & Payments:</strong>  
                        <br />
                        All orders must be paid cash on delivery.
                        <br /><br />
                        <strong>2. Product Availability:</strong>  
                        <br />
                        We strive to keep all products in stock, but availability is subject to change without prior notice.
                        <br /><br />
                        <strong>3. Abuse & Misuse:</strong>  
                        <br />
                        Any misuse of our website, fraudulent orders, or abusive behavior towards our staff will not be tolerated.
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400 mb-2">
              Email: 
              <a href="mailto:bufanda@gmail.com" className="text-blue-400 hover:underline ml-1">
                bufanda@gmail.com
              </a>
            </p>
            <p className="text-gray-400 mb-2">Phone: +123 456 7890</p>
            <p className="text-gray-400 mb-2">Address:<p></p>
              نابلس مقابل الاكادمية مجمع الحسين التجاري</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
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
            &copy; {new Date().getFullYear()} Bufanda. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
