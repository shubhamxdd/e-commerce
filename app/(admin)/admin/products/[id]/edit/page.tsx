import { getProductById } from "@/app/(admin)/_actions/actions";
import ProductForm from "@/app/(admin)/_components/ProductForm";
import { Metadata } from "next";
import React from "react";

interface ProductEditPageProps {
  params: { id: string };
}

const ProductEditPage = async ({ params }: ProductEditPageProps) => {
  const product = await getProductById(params.id);
  //   console.log(product);
  return (
    <>
      <h1 className="text-xl md:text-4xl font-bold my-4 text-center">
        Edit product details
      </h1>
      <ProductForm product={product} />
    </>
  );
};

export default ProductEditPage;

export const metadata: Metadata = {
  title: "Edit Product",
  description: "Edit product details",
};
