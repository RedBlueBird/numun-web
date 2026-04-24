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
        <div className={`flex flex-col items-center text-center ${spacing.gap.xl} mb-8 md:grid md:grid-cols-4 md:text-left md:items-start`}>
          {/* Logo and Description */}
          <div className={`${layout.flex.columnCenter} md:items-start md:pl-6`}>
            <Logo className="mb-4" />
            <p className="text-sm text-gray-300 px-8 md:px-2">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:pl-18">
            <h3 className="text-numun-gold font-bold mb-4">{t.footer.quickLinks}</h3>
            <nav className={`flex flex-col items-center ${spacing.gap.xs} md:items-start`}>
              {navigationItems.filter(item => item.href).slice(0, 1).map((item) => (
                <Link
                  key={item.href}
                  href={item.href!}
                  className={`text-sm hover:text-numun-gold ${tokens.transition.colors}`}
                >
                  {getNavLabel(item)}
                </Link>
              ))}
              <Link href="/numun" className={`text-sm hover:text-numun-gold ${tokens.transition.colors}`}>
                {t.navigation.numun2026}
              </Link>
              {navigationItems.filter(item => item.href).slice(1, 4).map((item) => (
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

          {/* Important Policies */}
          <div>
            <Link href="/policy" className={`text-numun-gold font-bold mb-4 block hover:text-numun-gold-light ${tokens.transition.colors}`}>{t.footer.importantPolicies}</Link>
            <nav className={`flex flex-col items-center ${spacing.gap.xs} md:items-start`}>
              <Link href="/policy#refund-policy" className={`text-sm hover:text-numun-gold ${tokens.transition.colors}`}>
                {t.policy.sections.refundPolicy.title}
              </Link>
              <Link href="/policy#ai-usage" className={`text-sm hover:text-numun-gold ${tokens.transition.colors}`}>
                {t.policy.sections.aiUsage.title}
              </Link>
              <Link href="/policy#late-submissions" className={`text-sm hover:text-numun-gold ${tokens.transition.colors}`}>
                {t.policy.sections.lateSubmissions.title}
              </Link>
              <Link href="/policy#up-to-date-information" className={`text-sm hover:text-numun-gold ${tokens.transition.colors}`}>
                {t.policy.sections.upToDate.title}
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-numun-gold font-bold mb-4">{t.footer.contactUs}</h3>
            <div className={`flex flex-col items-center ${spacing.gap.sm} md:items-start`}>
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
