"use client";

import PageTitle from "@/components/ui/PageTitle";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { sponsorshipTiers } from "@/data/sponsors";
import { sections, spacing, layout, typography, utils, components } from "@/config/styles";
import { useLanguage } from "@/context/LanguageContext";
import { FaPen, FaHistory } from "react-icons/fa";

export default function Numun2026Page() {
  const { t } = useLanguage();
  return (
    <div>
      {/* Hero Section */}
      <PageTitle.Hero>
        <PageTitle.HeroContent>
          <PageTitle.Heading>{t.numun2026.title}</PageTitle.Heading>
          <PageTitle.Subtitle>{t.numun2026.subtitle}</PageTitle.Subtitle>

          <PageTitle.Quote>
            {t.numun2026.quote}
          </PageTitle.Quote>

          <PageTitle.Description>
            {t.numun2026.description}
          </PageTitle.Description>
        </PageTitle.HeroContent>

        <PageTitle.HeroLogoWrapper>
          <PageTitle.Logo
            src="/images/logos/numun_logo.png"
            alt={t.header.logoAlt}
          />
        </PageTitle.HeroLogoWrapper>
      </PageTitle.Hero>

      {/* Stats Section */}
      <section className={`${spacing.section.small} ${sections.contentBeige}`}>
        <div className={spacing.container}>
          <div className={`${layout.grid.twoColumn} ${spacing.gap.xl} ${layout.maxWidth.md} ${utils.textCenter}`}>
            <div className={components.stat.container}>
              <p className={components.stat.sublabel}>{t.numun2026.stats.meetOur}</p>
              <p className={components.stat.number}>400+</p>
              <p className={components.stat.label}>{t.numun2026.stats.delegates}</p>
            </div>
            <div className={components.stat.container}>
              <p className={components.stat.sublabel}>{t.numun2026.stats.from}</p>
              <p className={components.stat.number}>20+</p>
              <p className={components.stat.label}>{t.numun2026.stats.countries}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Exposure */}
      <section className={sections.standardSection}>
        <div className={`${spacing.container} ${utils.textCenter}`}>
          <h2 className={`${typography.sectionTitle} mb-4`}>{t.numun2026.socialMedia.title}</h2>
          <p className={`${typography.bodyLarge} mb-12 ${layout.maxWidth.sm}`}>
            {t.numun2026.socialMedia.description}
          </p>

          <div className={`${layout.grid.fourColumn} ${spacing.gap.xl} ${layout.maxWidth.md}`}>
            <div className="flex flex-col items-center">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 mb-4">
                <Image
                  src="/images/sponsors/nhk.png"
                  alt="NHK"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="font-semibold text-numun-green">2023</p>
              <p className="text-sm text-gray-600">NHK</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 mb-4">
                <Image
                  src="/images/sponsors/cn_jp_news.jpg"
                  alt="中日新聞"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="font-semibold text-numun-green">2024</p>
              <p className="text-sm text-gray-600">中日新聞</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 mb-4">
                <Image
                  src="/images/sponsors/aichi_news.png"
                  alt="Aichi News"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="font-semibold text-numun-green">2025</p>
              <p className="text-sm text-gray-600">Aichi News</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 mb-4">
                <Image
                  src="/images/sponsors/pbl.png"
                  alt="PBL"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="font-semibold text-numun-green">2025</p>
              <p className="text-sm text-gray-600">PBL</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className={sections.standardSectionDark}>
        <div className={spacing.container}>
          <h2 className={`${typography.sectionTitleLight} ${utils.textCenter} mb-4`}>{t.numun2026.sponsorship.title}</h2>
          <p className={`${utils.textCenter} text-white mb-12 ${layout.maxWidth.sm}`}>
            {t.numun2026.sponsorship.description}
          </p>

          <div className="max-w-5xl mx-auto bg-gradient-to-br from-numun-beige to-white rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Silver Tier */}
              <div className="bg-gray-200 rounded-2xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold text-center mb-4 text-numun-green">{t.numun2026.sponsorship.tiers.silver}</h3>
                <ul className="space-y-3 text-sm">
                  {sponsorshipTiers[0].benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-numun-green">•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Gold Tier */}
              <div className="bg-gradient-to-br from-numun-gold-light to-numun-gold rounded-2xl p-6 shadow-xl transform md:scale-105">
                <h3 className="text-2xl font-bold text-center mb-4 text-numun-green-dark">{t.numun2026.sponsorship.tiers.gold}</h3>
                <ul className="space-y-3 text-sm text-numun-green-dark">
                  {sponsorshipTiers[1].benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span>•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Diamond Tier */}
              <div className="bg-gradient-to-br from-blue-200 to-blue-300 rounded-2xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold text-center mb-4 text-numun-green-dark">{t.numun2026.sponsorship.tiers.diamond}</h3>
                <ul className="space-y-3 text-sm text-numun-green-dark">
                  {sponsorshipTiers[2].benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span>•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`${spacing.section.medium} ${sections.contentGreen} ${utils.textCenter}`}>
        <h2 className={`${typography.sectionTitleGold} text-4xl sm:text-5xl ${typography.italic} mb-8`}>
          {t.numun2026.cta.title}
        </h2>
        <div className={`${layout.flex.column} sm:flex-row ${spacing.gap.lg} ${layout.flex.centerBoth}`}>
          <Button href="/contact" variant="primary" icon={<FaPen />} className={components.button.large}>
            {t.numun2026.cta.inquire}
          </Button>
          <Button href="/past-sponsors" variant="primary" icon={<FaHistory />} className={components.button.large}>
            {t.numun2026.cta.pastSponsors}
          </Button>
        </div>
      </section>
    </div>
  );
}
