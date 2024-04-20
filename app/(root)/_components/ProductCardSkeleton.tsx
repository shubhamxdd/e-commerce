import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const ProductCardSkeleton = () => {
  return (
    <>
      <Card className="flex flex-col overflow-hidden min-h-[380px] w-full max-w-[400px] md:min-h-[438px] p-2">
        <div>
          <Skeleton className="">
            <div className="relative w-full h-72">
              <Skeleton className="rounded-lg" />
            </div>
          </Skeleton>
          <div>
            <div className="flex gap-2 my-2">
              <Skeleton className="h-7 w-20 rounded-full" />
              <Skeleton className="h-7 w-20 rounded-full" />
              <Skeleton className="h-7 w-20 rounded-full" />
            </div>
            <Skeleton className="h-4 w-72 my-2" />
          </div>
        </div>
        <div className="my-2">
          <p className="flex flex-col gap-2">
            <Skeleton className="h-2 w-72 my-2" />
            <Skeleton className="h-2 w-64 my-2" />
            <Skeleton className="h-2 w-80 my-2" />
          </p>
          <p className="my-2 mt-3 ">
            <Skeleton className="h-6 w-24" />
          </p>
        </div>
        <div>
          <div className="flex gap-2 w-full">
            <Skeleton className="w-full ">
              <Skeleton>
                <Skeleton className="w-full h-8" />
              </Skeleton>
            </Skeleton>
            <Skeleton className="w-full ">
              <Skeleton>
                <Skeleton />
              </Skeleton>
            </Skeleton>
          </div>
        </div>
      </Card>
    </>
  );
};

export default ProductCardSkeleton;
