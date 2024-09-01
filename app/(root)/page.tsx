import { Metadata } from "next";
import HomePageProducts from "./_components/HomePageProducts";
import { getLatestProducts, getPopularProducts } from "./_actions/action";
import { Suspense } from "react";
import HomePageSkeleton from "./_components/HomePageSkeleton";

const RootPage = async () => {
  return (
    <Suspense
      fallback={
        <>
          <HomePageSkeleton />
          <HomePageSkeleton />
        </>
      }
    >
      <div className="space-y-12">
        <HomePageProducts
          title="Most Popular 🔥"
          fetchFn={getPopularProducts}
        />
        <HomePageProducts
          title="Newest Arrivals 🆕"
          fetchFn={getLatestProducts}
        />
      </div>
    </Suspense>
  );
};

export default RootPage;

export const metadata: Metadata = {
  title: "Home | NextBuy",
  description: "Homepage",
};
