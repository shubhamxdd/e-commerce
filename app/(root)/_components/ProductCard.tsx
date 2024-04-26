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
import { MdOutlineDoubleArrow } from "react-icons/md";

interface ProductCard {
  product: Product;
}

const ProductCard = ({ product }: ProductCard) => {
  return (
    <Card className="flex flex-col overflow-hidden min-h-[380px] w-full max-w-[400px] md:min-h-[438px]">
      <CardHeader>
        <CardTitle className="">
          <div className="relative w-full h-72">
            <Link href={`/products/${product.id}`}>
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="rounded-lg"
                style={{ objectFit: "cover" }}
              />
            </Link>
          </div>
        </CardTitle>
        <CardDescription>
          <div className="flex gap-2 my-2">
            <p className="text-[14px] font-semibold rounded-full line-clamp-1 bg-purple-500/10 px-4 py-1 text-purple-700 capitalize">
              {"Tag 1"}
            </p>
            <p className="text-[14px] font-semibold rounded-full line-clamp-1 bg-green-500/10 px-4 py-1 text-green-700 capitalize">
              {"Tag 2"}
            </p>
            <p className="text-[14px] font-semibold rounded-full line-clamp-1 bg-sky-500/10 px-4 py-1 text-sky-700 capitalize">
              {"Tag 3"}
            </p>
          </div>
          <Link href={`/products/${product.id}`}>
            <h2 className="my-1 text-xl font-semibold capitalize text-primary">
              {product.name}
            </h2>
          </Link>
        </CardDescription>
      </CardHeader>
      <CardContent className="-my-3">
        <p className="line-clamp-3 text-sm text-muted-foreground">
          {product.description.length > 40
            ? product.description.slice(0, 40) + "..."
            : product.description}
        </p>
        <p className="text-[16px]">{formatCurrency(product.price)}</p>
      </CardContent>
      <CardFooter>
        <div className="flex gap-2 w-full">
          <Button className="w-full group" asChild>
            <Link href={`/products/${product.id}/purchase`}>
              <span>Buy it now</span>
              <MdOutlineDoubleArrow
                className="transition-all duration-300 group-hover:translate-x-2 group-focus:translate-x-2 group-focus-within:translate-x-2 mx-[2px]"
                size={20}
              />
            </Link>
          </Button>
          <Button
            className="w-full group flex flex-row items-center"
            variant={"outline"}
            asChild
          >
            <Link href={`/products/${product.id}`}>
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
