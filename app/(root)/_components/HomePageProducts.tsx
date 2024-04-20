import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import ProductCard from "./ProductCard";

interface HomePageProductsProps {
  title: string;
  fetchFn: () => Promise<
    {
      id: string;
      name: string;
      description: string;
      price: number;
      image: string;
      isAvailable: boolean;
      createdAt: Date;
      updatedAt: Date;
    }[]
  >;
}

const HomePageProducts = async ({ title, fetchFn }: HomePageProductsProps) => {
  const products = await fetchFn();
  return (
    <div className="space-y-4 my-4">
      <div className="flex gap-4 max-md:flex-row max-md:justify-center max-md:items-center justify-between">
        <h2 className="text-3xl font-bold">{title}</h2>
        <Button asChild variant={"secondary"} className="group">
          <Link href={"/products"} className="space-x-2">
            <span>View All</span>
            <FaArrowRightLong
              size={20}
              className="group-hover:translate-x-2  group-focus-within:translate-x-2 group-focus:translate-x-2 transition-all duration-300"
            />
          </Link>
        </Button>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 place-items-center my-4">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default HomePageProducts;
