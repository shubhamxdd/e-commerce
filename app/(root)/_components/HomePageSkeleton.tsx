import { Skeleton } from "@/components/ui/skeleton";
import ProductCardSkeleton from "./ProductCardSkeleton";

const HomePageSkeleton = () => {
  return (
    <>
      <div className="flex items-center justify-between my-4 ">
        <Skeleton className="h-12 w-32" />
        <Skeleton className="h-12 w-24" />
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 place-items-center my-4">
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
      </div>
    </>
  );
};

export default HomePageSkeleton;
