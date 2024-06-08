"use client";

import { Button } from "@/components/ui/button";
import { IoCart } from "react-icons/io5";
import { cartStore } from "../cart/cartStore";
import { Product } from "@prisma/client";

interface Props {
  product: Product;
}

const RemoveFromCartButton = ({ product }: Props) => {
  const { removeFromCart } = cartStore();
  return (
    <Button
      variant={"secondary"}
      asChild
      className="group"
      onClick={() => {
        removeFromCart(product);
      }}
    >
      <Button>
        Add to cart
        <IoCart
          className="transition-all duration-300 group-hover:translate-x-2 group-focus:translate-x-2 group-focus-within:translate-x-2 mx-[2px]"
          size={20}
        />
      </Button>
    </Button>
  );
};

export default RemoveFromCartButton;
