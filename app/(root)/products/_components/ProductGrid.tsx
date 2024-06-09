"use client";

import { Product } from "@prisma/client";
import ProductCard from "../../_components/ProductCard";
import { ChangeEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";

interface ProductGridProps {
  products: Product[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  const params = useSearchParams();
  console.log(params.get("query"));

  const [searchQuery, setSearchQuery] = useState(params.get("query") || "");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const router = useRouter();

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    router.push(`/products?query=${searchQuery}`);
  };

  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) =>
      sortOrder === "asc" ? a.price - b.price : b.price - a.price
    );

  return (
    <>
      <div className="">
        <Input
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearchChange}
          // onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="my-3">
          <Button
            onClick={() => {
              setSortOrder(sortOrder === "asc" ? "desc" : "asc");
            }}
          >
            Sort by Price {sortOrder === "asc" ? "⬇️" : "⬆️"}
          </Button>
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 place-items-center my-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))
        ) : (
          <p className="text-2xl font-semibold">Nothing found!</p>
        )}
      </div>
    </>
  );
};

export default ProductGrid;
