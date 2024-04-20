import { getProductById } from "@/app/(admin)/_actions/actions";
import { Metadata, ResolvingMetadata } from "next";
import ProductPage from "../../_components/ProductPage";

interface PerProductPageProps {
  params: {
    id: string;
  };
}

const PerProductPage = async ({ params: { id } }: PerProductPageProps) => {
  const product = await getProductById(id);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-12 md:grid-cols-12 gap-6 mt-3">
      <ProductPage product={product} />
    </div>
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
