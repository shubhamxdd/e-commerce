"use client";

import { Product } from "@prisma/client";
import ProductCard from "../../_components/ProductCard";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface ProductGridProps {
  products: Product[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  // TODO pagination and fix search accordingly then AND implement more filters

  return (
    <>
      <div className="">
        <Input
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
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
        {products
          .filter((product) =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .sort((a, b) =>
            sortOrder === "asc" ? a.price - b.price : b.price - a.price
          )

          .map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>
    </>
  );
};

export default ProductGrid;
