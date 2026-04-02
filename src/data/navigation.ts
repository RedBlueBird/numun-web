import { NavItem } from "@/types";

export const navigationItems: NavItem[] = [
  { label: "HOME", href: "/" },
  { label: "NUMUN 2026", href: "/numun" },
  { label: "ABOUT US", href: "/about" },
  { label: "TEAM", href: "/team" },
  {
    label: "SPONSOR & PARTNERS",
    dropdown: [
      { label: "CURRENT SPONSORS", href: "/current-sponsors" },
      { label: "PAST SPONSORS", href: "/past-sponsors" },
      { label: "PARTNER WITH US", href: "/partnership" },
    ]
  },
  { label: "GALLERY", href: "/gallery" },
  { label: "CONTACT US", href: "/contact" },
];
