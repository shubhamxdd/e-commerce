import { Metadata } from "next";
import HomePageProducts from "./_components/HomePageProducts";
import { getLatestProducts, getPopularProducts } from "./_actions/action";
import { Suspense } from "react";
import HomePageSkeleton from "./_components/HomePageSkeleton";
import LoginModal from "./_components/LoginModal";
import RegisterModal from "./_components/RegisterModal";
// import { getServerSession } from "next-auth";

const RootPage = async () => {
  // const session = await getServerSession();
  return (
    <>
      {/* <LoginModal /> */}
      <RegisterModal />
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
    </>
  );
};

export default RootPage;

export const metadata: Metadata = {
  title: "Home | Ecom",
  description: "Homepage",
};
