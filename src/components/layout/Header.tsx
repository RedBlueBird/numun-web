"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { navigationItems } from "@/data/navigation";
import SocialLinks from "@/components/ui/SocialLinks";
import LanguageToggle from "@/components/ui/LanguageToggle";
import Button from "@/components/ui/Button";
import { sections, spacing, layout, components, tokens, utils } from "@/config/styles";
import { FaPen } from "react-icons/fa";
import { fonts } from "@/config/fonts";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  const navLabels = [
    t.navigation.home,
    t.navigation.about,
    t.navigation.numun2026,
    t.navigation.team,
    t.navigation.sponsors,
    t.navigation.gallery,
    t.navigation.contact,
  ];

  return (
    <header className={`sticky top-0 ${utils.zIndex.header} ${tokens.shadow.lg}`}>
      {/* Row 1: Logo + INQUIRE HERE + Social Icons */}
      <div className={sections.heroDark}>
        <div className={spacing.container}>
          <div className={`${layout.flex.spaceBetween} py-4 px-20`}>
            {/* Logo */}
            <Link href="/" className={`${layout.flex.row} items-center ${spacing.gap.sm}`}>
              <div className="relative w-16 h-16 flex items-center">
                <Image
                  src="/images/logos/numun_logo.png"
                  alt="NUMUN Logo"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <div className={layout.flex.column}>
                <span className="text-2xl font-bold tracking-wider">{t.common.numun}</span>
                <span className="text-xs text-numun-gold uppercase">{t.common.nagoyaUniversity}</span>
              </div>
            </Link>

            {/* Desktop Actions */}
            <div className={`hidden lg:flex ${layout.flex.centerVertical} ${spacing.gap.md}`}>
              <Button href="/contact" variant="primary" icon={<FaPen />} className="text-sm">
                {t.common.inquireHere}
              </Button>
              <SocialLinks />
              <LanguageToggle />
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden ${spacing.padding.sm}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className={`w-6 h-5 ${layout.flex.column} justify-between`}>
                <span className={`block h-0.5 w-full bg-white ${tokens.transition.all} ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                <span className={`block h-0.5 w-full bg-white ${mobileMenuOpen ? "opacity-0" : ""}`}></span>
                <span className={`block h-0.5 w-full bg-white ${tokens.transition.all} ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Row 2: Navigation Links (Desktop only) */}
      <div className={`${sections.hero} hidden lg:block`}>
        <div className={spacing.container}>
          <nav className={`${layout.flex.spaceBetween} py-5 px-25`}>
            {navigationItems.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium hover:text-numun-gold ${tokens.transition.colors} ${fonts.cerebri} uppercase ${
                    isActive ? "text-numun-gold-light" : "text-white"
                  }`}
                >
                  {navLabels[index]}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`lg:hidden ${sections.heroDark} py-4 border-t border-numun-green`}>
          <div className={spacing.container}>
            <nav className={`${layout.flex.column} ${spacing.gap.md}`}>
              {navigationItems.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm font-medium hover:text-numun-gold ${tokens.transition.colors} ${fonts.cerebri} py-2 ${
                      isActive ? "text-numun-gold" : "text-white"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {navLabels[index]}
                  </Link>
                );
              })}
            </nav>
            <div className={`mt-6 ${layout.flex.column} ${spacing.gap.md}`}>
              <LanguageToggle />
              <Button href="/contact" variant="primary" icon={<FaPen />}>
                {t.common.inquireHere}
              </Button>
              <SocialLinks />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
