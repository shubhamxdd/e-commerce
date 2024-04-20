import { Metadata } from "next";
import HomePageProducts from "./_components/HomePageProducts";
import { getLatestProducts, getPopularProducts } from "./_actions/action";

const RootPage = () => {
  return (
    <div className="space-y-12">
      <HomePageProducts title="Most Popular 🔥" fetchFn={getPopularProducts} />
      <HomePageProducts
        title="Newest Arrivals 🆕"
        fetchFn={getLatestProducts}
      />
    </div>
  );
};

export default RootPage;

export const metadata: Metadata = {
  title: "Home | Ecom",
  description: "Homepage",
};
