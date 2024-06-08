"use client";

import { cartStore } from "./cartStore";
import { RxCross1 } from "react-icons/rx";

const CartPage = () => {
  const { cart, clearCart, removeFromCart } = cartStore();
  return (
    <div>
      {cart.map((item, index) => {
        return (
          <div className="flex items-center">
            <p>{item.name}</p>
            <RxCross1 className="hover:cursor-pointer" size={20} onClick={()=>removeFromCart(item)} />
          </div>
        );
      })}
    </div>
  );
};

export default CartPage;
