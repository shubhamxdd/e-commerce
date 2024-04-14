import { Metadata } from "next";
import AdminHeader from "./_components/AdminHeader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AdminHeader />
      <div className="md:px-20 lg:px-40 px-6">{children}</div>
    </>
  );
}

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: {
    template: "%s | Admin",
    default: "Admin",
  },
  description: "Admin dashboard",
};
