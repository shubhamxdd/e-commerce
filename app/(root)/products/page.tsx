import { Suspense } from "react";
import { Metadata } from "next";
import ProductsPageSkeleton from "../_components/ProductsPageSkeleton";
import ProductsPageComp from "../_components/ProductsPage";
import { getAllProducts } from "../_actions/action";

const ProductsPage = async () => {
  return (
    <Suspense fallback={<ProductsPageSkeleton />}>
      <ProductsPageComp fetchFn={getAllProducts} />
    </Suspense>
  );
};

export default ProductsPage;

export const metadata: Metadata = {
  title: "Products",
  description: "Check out our latest products",
};
