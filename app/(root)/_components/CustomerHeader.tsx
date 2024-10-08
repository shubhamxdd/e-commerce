import NavItem from "@/components/NavItem";
import Link from "next/link";
import { ModeToggle } from "@/components/ModeToggle";
import CustomerMobileNav from "./CustomerMobileNav";
import CustomerNavLinkAdmin from "@/components/CustomerNavLinkAdmin";
import LoginLogout from "./LoginLogout";
import { FiShoppingCart } from "react-icons/fi";

export const customerNavLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Products",
    href: "/products",
  },
  {
    name: "My orders",
    href: "/orders",
  },
  {
    name: "Cart",
    href: "/cart",
  },
  {
    name: "Contact Us",
    href: "/contact",
  },
];
const CustomerHeader = () => {
  return (
    <div className="w-full backdrop-blur-3xl  p-2 flex items-center justify-between md:px-20 px-6 lg:px-40 sticky top-0 z-[11]">
      <h1 className="text-[20px] md:text-[22px] font-semibold my-1 group">
        <Link href={"/"}>
          NextBuy <FiShoppingCart size={26} className="inline mr-2 group-hover:translate-x-2 duration-300 transition-all" />
        </Link>
      </h1>
      <ul className="md:flex gap-2 hidden">
        {customerNavLinks.map((link) => (
          <NavItem key={link.name} href={link.href} name={link.name} />
        ))}
        <li>
          <CustomerNavLinkAdmin />
        </li>
        <li className="">
          <LoginLogout />
        </li>
        <li className="">
          <ModeToggle />
        </li>
      </ul>
      <div className="flex md:hidden">
        <CustomerMobileNav />
      </div>
    </div>
  );
};

export default CustomerHeader;
