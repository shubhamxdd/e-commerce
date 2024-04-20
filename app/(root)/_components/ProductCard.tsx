import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatCurrency } from "@/lib/currencyFormatter";
import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { IoArrowRedoSharp } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";

interface ProductCard {
  product: Product;
}

const ProductCard = ({ product }: ProductCard) => {
  return (
    <Card className="flex flex-col overflow-hidden min-h-[380px] w-full max-w-[400px] md:min-h-[438px]">
      <CardHeader>
        <CardTitle className="text-xl font-semibold capitalize">
          <div className="relative w-full h-72">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="rounded-lg"
              style={{ objectFit: "cover" }}
            />
          </div>
          <h2>{product.name}</h2>
        </CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-[15px] my-2">{formatCurrency(product.price)}</p>
        <p className="line-clamp-3">
          {/* {product.description} */}
          {product.description.length > 40
            ? product.description.slice(0, 40) + "..."
            : product.description}
        </p>
      </CardContent>
      <CardFooter>
        <div className="flex gap-2 w-full">
          <Button className="w-full group" asChild>
            <Link href={"/"}>
              <span>Add to cart</span>
              <FiShoppingCart
                // todo fix  this
                className="transition-all duration-300 group-hover:translate-x-2 group-focus:translate-x-2 group-focus-within:translate-x-2 mx-[2px]"
                size={20}
              />

              {/* todo implement add to cart */}
            </Link>
          </Button>
          <Button
            className="w-full group flex flex-row items-center"
            variant={"outline"}
            asChild
          >
            <Link href={"/"}>
              <span>Read More</span>
              <IoArrowRedoSharp
                size={20}
                className="transition-all duration-300 group-hover:translate-x-2 group-focus:translate-x-2 group-focus-within:translate-x-2  mx-[2px]"
              />
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
