import { NavItem } from "@/types";

export const navigationItems: NavItem[] = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  { label: "TEAM", href: "/team" },
  {
    label: "SPONSOR & PARTNERS",
    dropdown: [
      { label: "PARTNER WITH US", href: "/partnership" },
      { label: "PAST SPONSORS", href: "/past-sponsors" },
    ]
  },
  { label: "GALLERY", href: "/gallery" },
  { label: "CONTACT US", href: "/contact" },
];
