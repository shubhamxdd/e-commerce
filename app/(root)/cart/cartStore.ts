import { create } from "zustand";
import { type Product } from "@prisma/client";
import toast from "react-hot-toast";

interface cartState {
  cart: Product[] | [];
  addToCart: (item: Product) => void;
  removeFromCart: (item: Product) => void;
  clearCart: () => void;
}

const getLocalStorage = () => {
  if (typeof window !== "undefined") {
    try {
      const item = localStorage.getItem("cart");
      return item ? JSON.parse(item) : [];
    } catch (error) {
      console.log(error);
    }
  }
  return [];
};

export const cartStore = create<cartState>((set) => ({
  cart: getLocalStorage(),
  addToCart: (item) => {
    set((state) => {
      const existingItem = state.cart.find(
        (cartItem) => cartItem.id === item.id
      );

      if (!existingItem) {
        const newCart = [...state.cart, { ...item }];
        window.localStorage.setItem("cart", JSON.stringify(newCart));
        toast.success("Item added to cart");
        return {
          cart: newCart,
        };
      } else {
        toast.error("Item already in cart");
        return state;
      }
    });
  },
  removeFromCart: (itemm) => {
    set((state) => {
      const newCart = state.cart.filter((item) => item.id !== itemm.id);
      window.localStorage.setItem("cart", JSON.stringify(newCart));
      return {
        cart: newCart,
      };
    });
  },
  clearCart: () => {
    localStorage.removeItem("cart");
    set({ cart: [] });
  },
}));
