import { TbMenuDeep } from "react-icons/tb";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import NavItem from "@/components/NavItem";
import { adminNavLinks } from "./CustomerHeader";
import { ModeToggle } from "@/components/ModeToggle";

const CustomerMobileNav = () => {
  return (
    <nav className="md:hidden bg-primary">
      <Sheet>
        <SheetTrigger className="align-middle">
          <TbMenuDeep size={28} className="bg-slate-900" />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-3 md:hidden">
          <p className="px-4 text-[20px] md:text-[22px] font-bold">LogoHere</p>
          <Separator className="border border-gray-200" />
          {adminNavLinks.map((link) => (
            <NavItem key={link.name} href={link.href} name={link.name} />
          ))}
          <li className="list-none px-3">
            <ModeToggle />
          </li>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default CustomerMobileNav;
