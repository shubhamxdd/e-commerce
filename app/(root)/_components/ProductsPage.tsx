import ProductCard from "./ProductCard";

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
      <div className="flex gap-4 max-md:flex-row max-md:justify-center max-md:items-center justify-between">
        <h2 className="max-sm:text-2xl text-3xl font-bold">{"Title"}</h2>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 place-items-center my-4">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPageComp;
