"use client";

import useCart from "@/lib/hooks/useCart";
import Link from "next/link";
import { useEffect, useRef } from "react";

const SuccessfulPayment = () => {
  const cart = useCart();
  const isCartCleared = useRef(false); // Flag to track if cart is cleared

  useEffect(() => {
    if (!isCartCleared.current) {
      console.log("Clearing cart...");
      cart.clearCart();
      isCartCleared.current = true; // Set the flag to true after clearing
    }
  }, [cart]);

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-5">
      <p className="text-heading4-bold text-red-1">Order Placed Successfully!</p>
      <p>Thank you for your purchase.</p>
      <Link
        href="/"
        className="p-4 border text-base-bold hover:bg-black hover:text-white"
      >
        CONTINUE SHOPPING
      </Link>
    </div>
  );
};

export default SuccessfulPayment;