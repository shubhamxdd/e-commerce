import React from "react";
import CartPage from "./CartPage";
import { Metadata } from "next";

const Cart = () => {
  return (
    <div>
      <h1 className="text-2xl text-center">Cart</h1>
      <CartPage />
    </div>
  );
};

export default Cart;

export const metadata: Metadata = {
  title: "Cart 🛒",
  description: "Here are the items in your cart.",
};
