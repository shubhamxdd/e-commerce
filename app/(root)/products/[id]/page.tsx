import { getProductById } from "@/app/(admin)/_actions/actions";
import { Metadata, ResolvingMetadata } from "next";
import ProductPage from "../../_components/ProductPage";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { getThreeProducts } from "../../_actions/action";
import ProductCard from "../../_components/ProductCard";

interface PerProductPageProps {
  params: {
    id: string;
  };
}

const PerProductPage = async ({ params: { id } }: PerProductPageProps) => {
  const product = await getProductById(id);
  const products = await getThreeProducts();
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-12 md:grid-cols-12 gap-6 mt-3 mb-10">
        <ProductPage product={product} />
      </div>
      <div className="flex gap-4 max-md:flex-row max-md:justify-center max-md:items-center justify-between">
        <h2 className="max-sm:text-2xl text-3xl font-bold">
          See related products
        </h2>
        <Button asChild variant={"secondary"} className="group">
          <Link href={"/products"} className="space-x-2">
            <span>View More</span>
            <FaArrowRightLong
              size={20}
              className="group-hover:translate-x-2  group-focus-within:translate-x-2 group-focus:translate-x-2 transition-all duration-300"
            />
          </Link>
        </Button>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 place-items-center my-4">
        {products.map((iProd) => (
          <ProductCard product={iProd} key={iProd.id} />
        ))}
      </div>
    </>
  );
};

export default PerProductPage;

export async function generateMetadata(
  { params: { id } }: PerProductPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const prodData = await getProductById(id);
  return {
    title: prodData.name,
    description: `The product name is ${prodData.name} and ${prodData.description} and it costs ${prodData.price} `,
  };
}
