import { TbMenuDeep } from "react-icons/tb";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import NavItem from "@/components/NavItem";
import { customerNavLinks } from "./CustomerHeader";
import { ModeToggle } from "@/components/ModeToggle";
import CustomerNavLinkAdmin from "@/components/CustomerNavLinkAdmin";
import LoginLogout from "./LoginLogout";
import { FiShoppingCart } from "react-icons/fi";

const CustomerMobileNav = () => {
  return (
    <nav className="md:hidden bg-primary z-[12]">
      <Sheet>
        <SheetTrigger className="align-middle bg-zinc-100 p-1 dark:bg-slate-800">
          <TbMenuDeep size={28} className="bg-zinc-100 dark:bg-slate-800" />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-3 md:hidden">
          <p className="px-4 text-[20px] md:text-[22px] font-bold">
            E-Store{" "}
            <FiShoppingCart
              size={26}
              className="inline mr-2 group-hover:translate-x-2 duration-300 transition-all"
            />
          </p>
          <Separator className="border border-gray-200" />
          {customerNavLinks.map((link) => (
            <NavItem key={link.name} href={link.href} name={link.name} />
          ))}
          <li className="list-none">
            <CustomerNavLinkAdmin />
          </li>
          <li className="list-none">
            <LoginLogout />
          </li>
          <li className="list-none px-3">
            <ModeToggle />
          </li>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default CustomerMobileNav;
