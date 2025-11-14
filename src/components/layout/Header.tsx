"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { navigationItems } from "@/data/navigation";
import SocialLinks from "@/components/ui/SocialLinks";
import LanguageToggle from "@/components/ui/LanguageToggle";
import Button from "@/components/ui/Button";
import Logo from "@/components/layout/Logo";
import { sections, spacing, layout, components, tokens, utils } from "@/config/styles";
import { headerAnimations, transitions } from "@/config/animations";
import { FaPen, FaChevronDown } from "react-icons/fa";
import { fonts } from "@/config/fonts";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showTopRow, setShowTopRow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [row1Height, setRow1Height] = useState(0);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<number | null>(null);
  const row1Ref = React.useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const { t, locale } = useLanguage();

  useEffect(() => {
    // Measure Row 1 height
    if (row1Ref.current) {
      setRow1Height(row1Ref.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show top row when at the very top of the page
      if (currentScrollY < 10) {
        setShowTopRow(true);
      }
      // If scrolling down, hide top row
      else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowTopRow(false);
      }
      // If scrolling up, show top row
      else if (currentScrollY < lastScrollY) {
        setShowTopRow(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const getNavLabel = (item: typeof navigationItems[0]) => {
    if (item.label === "HOME") return t.navigation.home;
    if (item.label === "ABOUT US") return t.navigation.about;
    if (item.label === "TEAM") return t.navigation.team;
    if (item.label === "SPONSOR & PARTNERS") return t.navigation.sponsors;
    if (item.label === "GALLERY") return t.navigation.gallery;
    if (item.label === "CONTACT US") return t.navigation.contact;
    return item.label;
  };

  const getDropdownLabel = (label: string) => {
    if (label === "PARTNER WITH US") return t.navigation.partnerWithUs;
    if (label === "PAST SPONSORS") return t.navigation.pastSponsors;
    return label;
  };

  return (
    <header className={`sticky top-0 ${utils.zIndex.header}`}>
      {/* Row 1: Logo + INQUIRE HERE + Social Icons */}
      <motion.div
        ref={row1Ref}
        animate={headerAnimations.row1(showTopRow)}
        transition={transitions.smooth}
        className={`${sections.heroDark} overflow-hidden`}
      >
        <div className={spacing.container}>
          <div className={`${layout.flex.spaceBetween} py-4 px-20`}>
            {/* Logo */}
            <Logo />

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
      </motion.div>

      {/* Row 2: Navigation Links (Desktop only) */}
      <motion.div
        animate={headerAnimations.row2(showTopRow, row1Height)}
        transition={transitions.smooth}
        className={`${sections.hero} ${tokens.shadow.lg} hidden lg:block`}
      >
        <div className={spacing.container}>
          <nav className={`${layout.flex.spaceBetween} py-5 px-25`}>
            {navigationItems.map((item, index) => {
              const isActive = item.href ? pathname === item.href : false;
              const isDropdownActive = item.dropdown?.some(d => pathname === d.href);

              if (item.dropdown) {
                return (
                  <div
                    key={index}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(index)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className={`text-sm font-medium hover:text-numun-gold ${tokens.transition.colors} ${fonts.cerebri} uppercase flex items-center gap-1 ${
                        isDropdownActive ? "text-numun-gold-light" : "text-white"
                      }`}
                    >
                      {getNavLabel(item)}
                      <FaChevronDown className="text-xs" />
                    </button>
                    <AnimatePresence>
                      {openDropdown === index && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={transitions.quick}
                          className={`absolute top-full left-0 mt-2 ${sections.heroDark} ${tokens.shadow.lg} rounded-md overflow-hidden min-w-[200px]`}
                        >
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.href}
                              href={dropdownItem.href}
                              className={`block px-4 py-3 text-sm font-medium hover:bg-numun-green hover:text-numun-gold ${tokens.transition.colors} ${fonts.cerebri} uppercase ${
                                pathname === dropdownItem.href ? "text-numun-gold-light" : "text-white"
                              }`}
                            >
                              {getDropdownLabel(dropdownItem.label)}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href!}
                  className={`text-sm font-medium hover:text-numun-gold ${tokens.transition.colors} ${fonts.cerebri} uppercase ${
                    isActive ? "text-numun-gold-light" : "text-white"
                  }`}
                >
                  {getNavLabel(item)}
                </Link>
              );
            })}
          </nav>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          className={`lg:hidden ${sections.heroDark} ${tokens.shadow.lg} py-4 border-t border-numun-green`}
          animate={{
            y: showTopRow ? 0 : -row1Height
          }}
          transition={transitions.smooth}
        >
          <div className={spacing.container}>
            <nav className={`${layout.flex.column} ${spacing.gap.md}`}>
              {navigationItems.map((item, index) => {
                const isActive = item.href ? pathname === item.href : false;
                const isDropdownActive = item.dropdown?.some(d => pathname === d.href);

                if (item.dropdown) {
                  return (
                    <div key={index}>
                      <button
                        onClick={() => setMobileOpenDropdown(mobileOpenDropdown === index ? null : index)}
                        className={`text-sm font-medium hover:text-numun-gold ${tokens.transition.colors} ${fonts.cerebri} py-2 flex items-center justify-between w-full ${
                          isDropdownActive ? "text-numun-gold" : "text-white"
                        }`}
                      >
                        {getNavLabel(item)}
                        <FaChevronDown className={`text-xs ${tokens.transition.all} ${mobileOpenDropdown === index ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {mobileOpenDropdown === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={transitions.quick}
                            className="pl-4 mt-2 space-y-2"
                          >
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.href}
                                href={dropdownItem.href}
                                className={`block text-sm font-medium hover:text-numun-gold ${tokens.transition.colors} ${fonts.cerebri} py-2 ${
                                  pathname === dropdownItem.href ? "text-numun-gold" : "text-white"
                                }`}
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {getDropdownLabel(dropdownItem.label)}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href!}
                    className={`text-sm font-medium hover:text-numun-gold ${tokens.transition.colors} ${fonts.cerebri} py-2 ${
                      isActive ? "text-numun-gold" : "text-white"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {getNavLabel(item)}
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
        </motion.div>
      )}
    </header>
  );
}
