import { Metadata } from "next";

const RootPage = () => {
  return (
    <div>
      <h1 className="text-2xl">Homepage</h1>
    </div>
  );
};

export default RootPage;

export const metadata: Metadata = {
  title: "Home | Ecom",
  description: "Homepage",
};
