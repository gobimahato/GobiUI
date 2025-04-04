import { ChefHat, Globe, PartyPopper } from "lucide-react";
import type { ReactNode } from "react";

interface iAppProps {
  name: string;
  title: string;
  image: ReactNode;
  id: number;
}

export const categoryItems: iAppProps[] = [
  {
    id: 0,
    name: "Template",
    title: "Templete",
    image: <Globe />,
  },
  {
    id: 1,
    name: "uikit",
    title: "UI Kit",
    image: <ChefHat />,
  },
  {
    id: 2,
    name: "icon",
    title: "Icon",
    image: <PartyPopper />,
  },
];
