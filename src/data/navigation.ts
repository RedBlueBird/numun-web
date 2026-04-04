import { NavItem } from "@/types";

export const navigationItems: NavItem[] = [
  { label: "HOME", href: "/" },
  {
    label: "NUMUN 2026",
    dropdown: [
      { label: "OVERVIEW", href: "/numun" },
      { label: "RULES OF PROCEDURE", href: "/rop" },
    ]
  },
  {
    label: "SPONSOR & PARTNERS",
    dropdown: [
      { label: "CURRENT SPONSORS", href: "/current-sponsors" },
      { label: "PAST SPONSORS", href: "/past-sponsors" },
      { label: "PARTNER WITH US", href: "/partnership" },
    ]
  },
  { label: "GALLERY", href: "/gallery" },
  {
    label: "ABOUT US",
    dropdown: [
      { label: "ABOUT NUMUN", href: "/about" },
      { label: "OUR TEAM", href: "/team" },
    ]
  },
  { label: "CONTACT US", href: "/contact" },
];
