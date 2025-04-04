import Link from "next/link";

import { Button } from "@/components/ui/button";
import NavbarLinks from "./NavbarLinks";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <nav className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-7 md:grid md:grid-cols-12 md:gap-4 md:px-8">
      {/* Logo */}
      <div className="md:col-span-3">
        <Link href="/">
          <h1 className="text-2xl font-bold">
            Gobi<span className="text-primary">UI</span>
          </h1>
        </Link>
      </div>

      {/* Navigation Links */}
      <NavbarLinks />

      {/* Desktop Authentication Buttons */}
      <div className="hidden md:col-span-3 md:flex md:items-center md:justify-end md:gap-x-2">
        <Button asChild>
          <Link href="/login">Login</Link>
        </Button>
        <Button variant="secondary" asChild>
          <Link href="/register">Register</Link>
        </Button>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <MobileMenu />
      </div>
    </nav>
  );
}
