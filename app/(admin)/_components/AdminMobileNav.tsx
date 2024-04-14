import { TbMenuDeep } from "react-icons/tb";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import NavItem from "@/components/NavItem";
import { adminNavLinks } from "./AdminHeader";
import { ModeToggle } from "@/components/ModeToggle";

const AdminMobileNav = () => {
  return (
    <nav className="md:hidden bg-primary">
      <Sheet>
        <SheetTrigger className="align-middle">
          <TbMenuDeep size={28} className="bg-slate-900" />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-3 md:hidden">
          <p className="px-4">LogoHere</p>
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

export default AdminMobileNav;
