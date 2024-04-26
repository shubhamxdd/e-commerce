import NavItem from "@/components/NavItem";
import Link from "next/link";
import AdminMobileNav from "./AdminMobileNav";
import { ModeToggle } from "@/components/ModeToggle";

export const adminNavLinks = [
  {
    name: "Dashboard",
    href: "/admin",
  },
  {
    name: "Products",
    href: "/admin/products",
  },
  {
    name: "Queries",
    href: "/admin/contact",
  },
  {
    name: "Orders",
    href: "/admin/orders",
  },
  {
    name: "Users",
    href: "/admin/users",
  },
];
const AdminHeader = () => {
  return (
    <div className="w-full backdrop-blur-3xl p-2 flex items-center justify-between md:px-20 px-6 lg:px-40 sticky top-0 z-[11]">
      <h1 className="text-[20px] md:text-[22px] font-semibold my-1">
        <Link href={"/admin"}>LogoHere</Link>
      </h1>
      <ul className="md:flex gap-2 hidden">
        {adminNavLinks.map((link) => (
          <NavItem key={link.name} href={link.href} name={link.name} />
        ))}
        <li className="">
          <ModeToggle />
        </li>
      </ul>
      <div className="flex md:hidden">
        <AdminMobileNav />
      </div>
    </div>
  );
};

export default AdminHeader;
