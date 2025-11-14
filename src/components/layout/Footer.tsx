"use client";

import Link from "next/link";
import { navigationItems } from "@/data/navigation";
import SocialLinks from "@/components/ui/SocialLinks";
import LanguageToggle from "@/components/ui/LanguageToggle";
import Logo from "@/components/layout/Logo";
import { contactEmail } from "@/data/socialLinks";
import { sections, spacing, layout, components, tokens } from "@/config/styles";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t, locale } = useLanguage();

  const getNavLabel = (item: typeof navigationItems[0]) => {
    if (item.label === "HOME") return t.navigation.home;
    if (item.label === "ABOUT US") return t.navigation.about;
    if (item.label === "TEAM") return t.navigation.team;
    if (item.label === "SPONSOR & PARTNERS") return t.navigation.sponsors;
    if (item.label === "GALLERY") return t.navigation.gallery;
    if (item.label === "CONTACT US") return t.navigation.contact;
    return item.label;
  };

  return (
    <footer className={`${sections.heroDark} pt-12 pb-6`}>
      <div className={spacing.container}>
        <div className={`${layout.grid.threeColumn} ${spacing.gap.xl} mb-8`}>
          {/* Logo and Description */}
          <div>
            <Logo className="mb-4" />
            <p className="text-sm text-gray-300">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-numun-gold font-bold mb-4">{t.footer.quickLinks}</h3>
            <nav className={`${layout.flex.column} ${spacing.gap.xs}`}>
              {navigationItems.filter(item => item.href).slice(0, 4).map((item) => (
                <Link
                  key={item.href}
                  href={item.href!}
                  className={`text-sm hover:text-numun-gold ${tokens.transition.colors}`}
                >
                  {getNavLabel(item)}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-numun-gold font-bold mb-4">{t.footer.contactUs}</h3>
            <div className={`${layout.flex.column} ${spacing.gap.sm}`}>
              <a
                href={`mailto:${contactEmail}`}
                className={`text-sm hover:text-numun-gold ${tokens.transition.colors}`}
              >
                {contactEmail}
              </a>
              <SocialLinks />
              <div className="mt-4">
                <LanguageToggle />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-numun-green pt-6 text-center text-sm text-gray-400">
          <p>{t.footer.copyright.replace('{year}', new Date().getFullYear().toString())}</p>
        </div>
      </div>
    </footer>
  );
}
