"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

interface NavItemProps {
  href: string;
  name: string;
}

const NavItem = ({ href, name }: NavItemProps) => {
  const pathname = usePathname();
  return (
    <li
      className={`list-none capitalize ${
        pathname === href
          ? "md:border-b md:rounded-lg md:border-slate-400 md:bg-white/10"
          : ""
      }`}
    >
      <Button asChild variant={"ghost"}>
        <Link href={href}>{name}</Link>
      </Button>
    </li>
  );
};

export default NavItem;
