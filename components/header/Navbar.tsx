import Link from "next/link";

import { Button } from "@/components/ui/button";
import NavbarLinks from "./NavbarLinks";
import MobileMenu from "./MobileMenu";

import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import UserNav from "./UserNav";

export default async function Navbar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

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
        {user ? (
          <UserNav
            email={user.email as string}
            name={user.given_name as string}
            userImage={
              user.picture ?? `https://avatar.vercel.sh/${user.given_name}`
            }
          />
        ) : (
          <div>
            <Button asChild>
              <LoginLink>Login</LoginLink>
            </Button>
            <Button variant="secondary" asChild>
              <RegisterLink>Register</RegisterLink>
            </Button>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <MobileMenu />
      </div>
    </nav>
  );
}
