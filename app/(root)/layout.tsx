import { Metadata } from "next";
import CustomerHeader from "./_components/CustomerHeader";
// import IsOnline from "@/components/IsOnline";
import dynamicC from "next/dynamic";

const IsOnline = dynamicC(() => import("@/components/IsOnline"), {
  ssr: false,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <CustomerHeader />
      <div className="md:px-20 lg:px-40 px-6">
        <IsOnline />
        {children}
      </div>
    </>
  );
}

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: {
    template: "%s | Ecom",
    default: "Ecom",
  },
  description: "Admin dashboard",
};
