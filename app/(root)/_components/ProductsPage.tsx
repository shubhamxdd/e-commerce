import ProductGrid from "../products/_components/ProductGrid";

interface ProductsPageProps {
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

const ProductsPageComp = async ({ fetchFn }: ProductsPageProps) => {
  const products = await fetchFn();
  return (
    <div className="space-y-4 my-4">
      <div className="flex gap-4 max-md:flex-row max-md:justify-center max-md:items-center">
        <h2 className="max-sm:text-2xl text-3xl font-bold">All Products🐼</h2>
      </div>
      <ProductGrid products={products} />
    </div>
  );
};

export default ProductsPageComp;
