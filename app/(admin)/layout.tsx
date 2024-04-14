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
