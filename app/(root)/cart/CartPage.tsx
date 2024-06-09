"use client";

import { cartStore } from "./cartStore";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatCurrency } from "@/lib/currencyFormatter";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ImageLink from "./_components/ImageLink";
import RemoveItemFromCart from "./_components/RemoveItemFromCart";

const CartPage = () => {
  const { cart, clearCart, removeFromCart } = cartStore();

  const cartArr = cart.map((item) => ({ ...item, quantity: 1 }));

  return (
    <>
      <Table>
        <TableCaption>Cart.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead className="">Name</TableHead>
            <TableHead className="text-right">Quantity</TableHead>
            <TableHead className="text-right">Price</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cart.length === 0 ? (
            <h1>No items in cart!</h1>
          ) : (
            cartArr.map((item, index) => (
              <TableRow>
                <TableCell>
                  <ImageLink item={item} />
                </TableCell>
                <TableCell className="font-medium underline">
                  <Link href={`/products/${item.id}`}>{item.name}</Link>
                </TableCell>
                <TableCell className="text-right">
                  {/* <div className="flex items-center gap-4">
                    <Button size={"icon"} className="font-semibold text-xl">
                      +
                    </Button> */}
                  <p>{item.quantity}</p>
                  {/* <Button size={"icon"} className="font-semibold text-xl">
                      -
                    </Button>
                  </div> */}
                </TableCell>
                <TableCell className="text-right">
                  {formatCurrency(item.price)}
                </TableCell>
                <TableCell className="text-right">
                  <RemoveItemFromCart onClick={() => removeFromCart(item)} />
                </TableCell>
              </TableRow>
            ))
          )}
          <TableRow>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell className="text-right text-lg">
              {cart.length === 0 ? (
                ""
              ) : (
                <>
                  Total:{" "}
                  {formatCurrency(
                    cart.reduce((acc, item) => acc + item.price, 0)
                  )}
                </>
              )}
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className="flex gap-4 items-center">
        {cart.length === 0 ? (
          ""
        ) : (
          <>
            <Button variant={"destructive"} onClick={clearCart}>
              Clear cart
            </Button>
            <Button>Checkout</Button>
          </>
        )}
      </div>
    </>
  );
};

export default CartPage;
