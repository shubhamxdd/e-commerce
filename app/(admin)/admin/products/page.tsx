import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import ProductsTable from "./ProductsTable";

const AdminProductsPage = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-xl md:text-4xl font-bold my-4">Products page</h1>
        <Button asChild variant={"secondary"}>
          <Link href={"/admin/products/new"}>
            <FaPlus size={18} className="mr-2" />
            Create new product
          </Link>
        </Button>
      </div>
      <ProductsTable />
    </>
  );
};

export default AdminProductsPage;

export const metadata: Metadata = {
  title: "Products",
  description: "Admin dashboard",
};
