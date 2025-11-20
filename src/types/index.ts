export * from "./sponsor";
export * from "./team";

export interface NavItem {
  label: string;
  href?: string;
  dropdown?: {
    label: string;
    href: string;
  }[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon?: string; // Optional - not used by SocialLinks component (uses react-icons instead)
}
