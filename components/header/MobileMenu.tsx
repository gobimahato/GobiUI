"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { navbarLinks } from "./NavbarLinks";

export default function MobileMenu() {
  const pathname = usePathname();

  return (
    <Sheet>
      {/* Menu Button */}
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>

      {/* Menu Content */}
      <SheetContent>
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <SheetDescription className="sr-only">
          Main navigation links for the website
        </SheetDescription>

        {/* Navigation Links */}
        <nav className="mt-12 flex flex-col space-y-1 px-4">
          {navbarLinks.map(({ id, href, name }) => (
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

        {/* Authentication Buttons */}
        <div className="px-4 pt-4">
          <div className="flex gap-2">
            <Button size="sm" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link href="/register">Register</Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
