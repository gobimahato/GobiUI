import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

interface UserNavProps {
  email: string;
  name: string;
  userImage: string | undefined;
}

export default async function UserNav({
  email,
  name,
  userImage,
}: UserNavProps) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const firstName = user.given_name || "Guest";
  const lastName = user.family_name || "";
  const userEmail = user.email || "No email provided";
  const userPicture = user.picture || "";

  // Capitalize the first letter of firstName and lastName
  const capitalizeFirstLetter = (name: string) => {
    if (!name) return "";
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  };

  const capitalizedFirstName = capitalizeFirstLetter(firstName);
  const capitalizedLastName = capitalizeFirstLetter(lastName);

  // Avatar fallback initials (First two letters of First Name)
  const getInitials = () => {
    return capitalizedFirstName.slice(0, 2).toUpperCase();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full p-0">
          <Avatar className="h-10 w-10">
            <AvatarImage
              src={userPicture}
              alt={`${capitalizedFirstName} ${capitalizedLastName}'s profile picture`}
              className="object-cover"
            />
            <AvatarFallback>{getInitials()}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56" align="end" forceMount>
        {/* User Info */}
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-base leading-none font-medium">
              {capitalizedFirstName} {capitalizedLastName}
            </p>
            <p className="text-muted-foreground text-sm leading-none">
              {userEmail}
            </p>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        {/* Menu Items */}
        <DropdownMenuGroup>
          <DropdownMenuItem asChild className="cursor-pointer">
            <Link href="/sell">Sell your products</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">Item 2</DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">Item 3</DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">Item 4</DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        {/* Logout */}
        <DropdownMenuItem
          asChild
          className="focus:bg-destructive/10 cursor-pointer"
        >
          <LogoutLink className="text-destructive hover:text-destructive/90 w-full">
            Log out
          </LogoutLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
