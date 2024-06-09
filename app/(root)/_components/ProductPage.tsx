import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/currencyFormatter";
import { Product } from "@prisma/client";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { ImageComp } from "./PerProductImageInsideGrid";
import { Suspense } from "react";
import PerPageSkeleton from "./PerPageSkeleton";
import Link from "next/link";
import AddToCartButton from "./AddToCartButton";

interface ProductPageProps {
  fetchFn: () => Promise<Product>;
}

const ProductPage = async ({ fetchFn }: ProductPageProps) => {
  const product = await fetchFn();
  return (
    <>
      <Suspense fallback={<PerPageSkeleton />}>
        <ImageComp product={product} />
        <DescComp product={product} />
      </Suspense>
      {/* <ButtonComp product={product} /> */}
    </>
  );
};

export default ProductPage;

const DescComp = ({
  product,
}: {
  product: {
    name: string;
    price: number;
    id: string;
    description: string;
  };
}) => {
  return (
    <div className="main col-span-1 sm:col-span-6 md:col-span-6 mx-4">
      <div className="flex gap-2 my-2">
        {product.tag1 && (
          <p className="text-[14px] font-semibold rounded-full line-clamp-1 bg-purple-500/10 px-4 py-1 text-purple-700 capitalize">
            {product?.tag1}
          </p>
        )}
        {product.tag2 && (
          <p className="text-[14px] font-semibold rounded-full line-clamp-1 bg-green-500/10 px-4 py-1 text-green-700 capitalize">
            {product?.tag2}
          </p>
        )}
        {product.tag3 && (
          <p className="text-[14px] font-semibold rounded-full line-clamp-1 bg-sky-500/10 px-4 py-1 text-sky-700 capitalize">
            {product?.tag3}
          </p>
        )}
      </div>
      <div className="sticky top-[54px] dark:bg-slate-950 bg-white pt-2 pb-2">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <div className="text-lg font-semibold mt-2">
          {formatCurrency(product.price)}
        </div>
      </div>
      <div className="mt-2">
        <p className="capitalize text-[16px]">{product.description}</p>
        {/* <p className="text-[14px]">
          {`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio enim
          officiis adipisci sapiente laudantium veniam nobis natus alias ipsum
          facilis hic aperiam, blanditiis nesciunt commodi itaque. Quibusdam,
          nemo reiciendis vero beatae iure debitis ex deleniti officia quod
          expedita sapiente sequi, inventore illo eos voluptatem totam natus
          libero eligendi cumque molestias! Illum laudantium sunt porro,
          praesentium recusandae blanditiis officiis enim voluptatibus officia
          assumenda corrupti autem iusto, accusamus quo unde id. Nostrum iure
          placeat fugiat perspiciatis suscipit accusamus, natus aliquam quae.
          Impedit non maxime exercitationem commodi magni esse consequatur
          blanditiis explicabo facilis debitis porro, repellat, iure, neque
          dolor? Nulla voluptates saepe nam. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Odio enim officiis adipisci sapiente
          laudantium veniam nobis natus alias ipsum facilis hic aperiam,
          blanditiis nesciunt commodi itaque. Quibusdam, nemo reiciendis vero
          beatae iure debitis ex deleniti officia quod expedita sapiente sequi,
          inventore illo eos voluptatem totam natus libero eligendi cumque
          molestias! Illum laudantium sunt porro, praesentium recusandae
          blanditiis officiis enim voluptatibus officia assumenda corrupti autem
          iusto, accusamus quo unde id. Nostrum iure placeat fugiat perspiciatis
          suscipit accusamus, natus aliquam quae. Impedit non maxime
          exercitationem commodi magni esse consequatur blanditiis explicabo
          facilis debitis porro, repellat, iure, neque dolor? Nulla voluptates
          saepe nam.`}
        </p> */}
      </div>
      <div className="my-5 flex gap-4">
        <Button variant={"outline"} asChild className="group">
          <Link href={`/products/${product.id}/purchase`}>
            Buy Now
            <MdOutlineDoubleArrow
              className="transition-all duration-300 group-hover:translate-x-2 group-focus:translate-x-2 group-focus-within:translate-x-2 mx-[2px]"
              size={20}
            />
          </Link>
        </Button>
        <AddToCartButton product={product} />
      </div>
    </div>
  );
};
