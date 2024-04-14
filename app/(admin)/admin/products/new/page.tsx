import CreateProductForm from "@/app/(admin)/_components/CreateProductForm";
import { Metadata } from "next";
import React from "react";

const CreateProductPage = () => {
  return (
    <>
      <h1 className="text-xl md:text-4xl font-bold my-4 text-center">
        Create a new product
      </h1>
      <CreateProductForm />
    </>
  );
};

export default CreateProductPage;

export const metadata: Metadata = {
  title: "Create Product",
  description: "Create a new product",
};
