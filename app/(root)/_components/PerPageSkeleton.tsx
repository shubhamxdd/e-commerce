import { Skeleton } from "@/components/ui/skeleton";
import ProductCardSkeleton from "./ProductCardSkeleton";

const PerPageSkeleton = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-12 md:grid-cols-12 gap-6 mt-3 mb-10">
        <div className="col-span-1 sm:col-span-5 md:col-span-5 container w-full">
          <div className="transition-all duration-300 -mx-2">
            <Skeleton />
          </div>
          <Skeleton className="top-0 sticky mx-auto my-3 " />
        </div>
        <div className="main col-span-1 sm:col-span-6 md:col-span-6 mx-4">
          <div className="sticky top-0 pt-2 pb-2">
            <Skeleton className=" " />
            <div className="mt-2">
              <Skeleton />
            </div>
          </div>
          <div className="mt-2">
            <Skeleton className="h-60 w-full" />
            <Skeleton className="h-80 w-full" />
          </div>
          <div className="my-5">
            <Skeleton>Buy Now</Skeleton>
          </div>
        </div>
      </div>
      <div className="flex gap-4 max-md:flex-row max-md:justify-center max-md:items-center justify-between">
        <Skeleton className="max-sm:text-2xl text-3xl font-bold h-10 w-32" />
        <div>
          <div className="space-x-2">
            <Skeleton>View More</Skeleton>
            <Skeleton />
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 place-items-center my-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    </>
  );
};

export default PerPageSkeleton;
