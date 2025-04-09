"use client";

import useCart from "@/lib/hooks/useCart";
import { useUser } from "@clerk/nextjs";
import { MinusCircle, PlusCircle, Trash } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTranslation } from "@/lib/hooks/useTranslation";

const Cart = () => {
  const router = useRouter();
  const { user } = useUser();
  const cart = useCart();
  const { isArabic } = useTranslation();

  const [shippingAddress, setShippingAddress] = useState({
    street: "",
    city: "",
    phoneNumber: "",
  });

  const total = cart.cartItems.reduce(
    (acc, cartItem) => acc + cartItem.item.price * cartItem.quantity,
    0
  );
  const totalRounded = parseFloat(total.toFixed(2));

  const customer = {
    clerkId: user?.id,
    email: user?.emailAddresses[0]?.emailAddress,
    name: user?.fullName,
  };

  const handleCheckout = async () => {
    try {
      if (!user) {
        router.push("sign-in");
      } else if (
        !shippingAddress.street ||
        !shippingAddress.city ||
        !shippingAddress.phoneNumber
      ) {
        alert(isArabic ? "الرجاء ملء عنوان الشحن" : "Please fill out the shipping address.");
        return;
      } else {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
          method: "POST",
          body: JSON.stringify({ cartItems: cart.cartItems, customer, shippingAddress }),
        });
        const data = await res.json();
        if (res.ok) {
          router.push(`/payment_success`);
        } else {
          console.error("Checkout failed:", data);
        }
      }
    } catch (err) {
      console.log("[checkout_POST]", err);
    }
  };

  return (
    <div className={`flex gap-20 py-16 px-10 max-lg:flex-col max-sm:px-3 ${isArabic ? 'text-right' : 'text-left'}`}>
      <div className="w-2/3 max-lg:w-full">
        <p className="text-heading3-bold">{isArabic ? "سلة التسوق" : "Shopping Cart"}</p>
        <hr className="my-6" />

        {cart.cartItems.length === 0 ? (
          <p className="text-body-bold">{isArabic ? "لا توجد عناصر في السلة" : "No item in cart"}</p>
        ) : (
          <div>
            {cart.cartItems.map((cartItem) => (
              <div
                key={cartItem.item._id}
                className={`w-full flex max-sm:flex-col max-sm:gap-3 hover:bg-grey-1 px-4 py-3 items-center max-sm:items-start justify-between ${isArabic ? 'flex-row-reverse' : ''}`}
              >
                <div className={`flex items-center ${isArabic ? 'flex-row-reverse' : ''}`}>
                  <Image
                    src={cartItem.item.media[0]}
                    width={100}
                    height={100}
                    className="rounded-lg w-32 h-32 object-cover"
                    alt="product"
                  />
                  <div className={`flex flex-col gap-3 ${isArabic ? 'mr-4' : 'ml-4'}`}>
                    <p className="text-body-bold">{cartItem.item.title}</p>
                    {cartItem.color && (
                      <p className="text-small-medium">{cartItem.color}</p>
                    )}
                    {cartItem.material && (
                      <p className="text-small-medium">{cartItem.material}</p>
                    )}
                    {cartItem.size && (
                      <p className="text-small-medium">{cartItem.size}</p>
                    )}
                    <p className="text-small-medium">₪{cartItem.item.price}</p>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <MinusCircle
                    className="hover:text-red-1 cursor-pointer"
                    onClick={() => cart.decreaseQuantity(cartItem.item._id)}
                  />
                  <p className="text-body-bold">{cartItem.quantity}</p>
                  <PlusCircle
                    className="hover:text-red-1 cursor-pointer"
                    onClick={() => cart.increaseQuantity(cartItem.item._id)}
                  />
                </div>

                <Trash
                  className="hover:text-red-1 cursor-pointer"
                  onClick={() => cart.removeItem(cartItem.item._id)}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="w-1/3 max-lg:w-full flex flex-col gap-8 bg-grey-1 rounded-lg px-4 py-5">
        <p className="text-heading4-bold pb-4">
          {isArabic ? "ملخص" : "Summary"}{" "}
          <span>{`(${cart.cartItems.length} ${
            isArabic 
              ? cart.cartItems.length > 1 ? "عناصر" : "عنصر"
              : cart.cartItems.length > 1 ? "items" : "item"
          })`}</span>
        </p>

        <div className="space-y-4">
          <p className="text-body-bold">{isArabic ? "عنوان الشحن" : "Shipping Address"}</p>
          <div>
            <Label htmlFor="street">{isArabic ? "الشارع" : "Street"}</Label>
            <Input
              id="street"
              value={shippingAddress.street}
              onChange={(e) =>
                setShippingAddress({ ...shippingAddress, street: e.target.value })
              }
              required
              className={isArabic ? 'text-right' : ''}
            />
          </div>
          <div>
            <Label htmlFor="city">{isArabic ? "المدينة" : "City"}</Label>
            <Input
              id="city"
              value={shippingAddress.city}
              onChange={(e) =>
                setShippingAddress({ ...shippingAddress, city: e.target.value })
              }
              required
              className={isArabic ? 'text-right' : ''}
            />
          </div>
          <div>
            <Label htmlFor="phoneNumber">{isArabic ? "رقم الهاتف" : "Phone Number"}</Label>
            <Input
              id="phoneNumber"
              value={shippingAddress.phoneNumber}
              onChange={(e) =>
                setShippingAddress({ ...shippingAddress, phoneNumber: e.target.value })
              }
              required
              className={isArabic ? 'text-right' : ''}
            />
          </div>
          <div className="flex align-middle justify-end">
            <p>
              {isArabic 
                ? "التوصيل للضفة وقراها ₪20 و للداخل المحتل ₪70"
                : "Delivery: West Bank ₪20, 48 lands ₪70"}
            </p>
          </div>
        </div>

        <div className="flex justify-between text-body-semibold">
          <span>{isArabic ? "المبلغ الإجمالي" : "Total Amount"}</span>
          <span>₪ {totalRounded}</span>
        </div>
        <button
          className="border rounded-lg text-body-bold bg-white py-3 w-full hover:bg-black hover:text-white"
          onClick={handleCheckout}
        >
          {isArabic ? "إتمام الشراء" : "Proceed to Checkout"}
        </button>
      </div>
    </div>
  );
};

export default Cart;