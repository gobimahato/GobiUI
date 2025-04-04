"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const navbarLinks = [
  { id: 0, name: "Home", href: "/" },
  { id: 1, name: "Templates", href: "#" },
  { id: 2, name: "UI Kits", href: "#" },
  { id: 3, name: "Icons", href: "#" },
];

export default function NavbarLinks() {
  const pathname = usePathname();

  return (
    <nav className="col-span-6 hidden items-center justify-center gap-x-2 md:flex">
      {navbarLinks.map(({ id, name, href }) => (
        <Link
          key={id}
          href={href}
          className={cn(
            "group flex items-center rounded-md px-2 py-2 font-medium transition-colors",
            pathname === href
              ? "bg-muted text-foreground"
              : "text-muted-foreground hover:bg-muted hover:text-foreground",
          )}
        >
          {name}
        </Link>
      ))}
    </nav>
  );
}
