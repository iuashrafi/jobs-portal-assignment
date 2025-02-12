import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { NavLinkType } from "./types";
import { IconBriefcase2, IconBuilding, IconStack2 } from "@tabler/icons-react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Navbar links
 */

export const NavLinkData: NavLinkType[] = [
  {
    id: "1",
    href: "/",
    label: "Dashboard",
    Icon: IconStack2,
  },
  {
    id: "2",
    href: "/company/jobs",
    label: "Company",
    Icon: IconBuilding,
  },
  {
    id: "3",
    href: "/candidate/jobs",
    label: "Candidate",
    Icon: IconBriefcase2,
  },
];

export const truncateText = (text: string, maxLength: number) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
};
