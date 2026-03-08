"use client";

import Image from "next/image";
import PageTitle from "@/components/ui/PageTitle";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/animation/ScrollReveal";
import Button from "@/components/ui/Button";
import { sections, spacing, typography, tokens } from "@/config/styles";
import { fonts } from "@/config/fonts";
import { useLanguage } from "@/context/LanguageContext";

const LOREM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const DRIVE_URL = "https://drive.google.com/drive/folders/1waApdz40vlpR2Ro7UIOCg_q38L68C_XP";

export default function NumunPage() {
  const { t } = useLanguage();

  return (
    <div className="relative">
      {/* Fake header background */}
      <div className={`absolute top-[-100px] left-0 right-0 h-[100px] ${sections.heroDark} z-40`} />

      <PageTitle>{t.conference.title}</PageTitle>

      {/* Conference Hero Card */}
      <section className={sections.standardSection}>
        <div className={spacing.container}>
          <ScrollReveal>
            <div className={`relative max-w-5xl mx-auto ${tokens.borderRadius["3xl"]} overflow-hidden ${tokens.shadow.xl} bg-numun-green min-h-[450px] lg:min-h-0 lg:aspect-video`}>

              {/* Background video */}
              <div className="absolute inset-0">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover scale-[1.07]"
                >
                  <source src="/images/events/home-hero-vid.mp4" type="video/mp4" />
                </video>
              </div>

              {/* Gradient: solid numun-green on left, fades to transparent on right */}
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(56, 86, 68, 0.98) 30%, rgba(56, 86, 68, 0.90) 45%, transparent 100%)' }} />

              {/* Content — left half only */}
              <div className={`relative z-10 w-full lg:w-3/5 ${spacing.padding.lg} md:${spacing.padding.xl}`}>
                {/* Quote */}
                <h2 className={`${typography.heroQuote} ${typography.italic} leading-tight mb-1 ${fonts.itcBenguiat}`}>
                  {t.conference.hero.quote}
                </h2>

                {/* Date */}
                <h3 className={`text-xl lg:text-2xl xl:text-3xl font-bold text-white leading-tight mb-3 ${fonts.itcBenguiat}`}>
                  {t.conference.hero.date}
                </h3>

                {/* Location */}
                <p className={`text-white text-sm mb-6 ${fonts.cerebri}`}>
                  {t.conference.hero.location}
                </p>

                {/* Committee emblems */}
                <div className="mb-6">
                  <Image
                    src="/images/events/emblem-banner.webp"
                    alt={t.conference.hero.emblemAlt}
                    width={1100}
                    height={250}
                    className="w-full h-auto rounded-md"
                  />
                </div>

                {/* Early-bird registration info */}
                <p className={`text-white text-sm mb-6 ${fonts.cerebri}`}>
                  {t.conference.hero.earlyBird}
                </p>

                {/* Register Now button */}
                <div className="mb-4">
                  <Button href="#" variant="primary">
                    {t.conference.hero.registerNow}
                  </Button>
                </div>

                {/* Download links */}
                <div className={`flex flex-col ${spacing.gap.xs}`}>
                  <a
                    href={DRIVE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-numun-gold text-sm font-semibold underline hover:text-numun-gold-light ${tokens.transition.colors} ${fonts.cerebri}`}
                  >
                    {t.conference.hero.downloadHandbook}
                  </a>
                  <a
                    href={DRIVE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-numun-gold text-sm font-semibold underline hover:text-numun-gold-light ${tokens.transition.colors} ${fonts.cerebri}`}
                  >
                    {t.conference.hero.downloadRules}
                  </a>
                </div>
              </div>

            </div>
          </ScrollReveal>
          <div className="max-w-5xl mx-auto mt-2">
            <a
              href="https://drive.google.com/file/d/1Gg5-px_jiiK0stJLyfh-QNBfUOmz6wOv/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className={`${typography.bodySmall} underline hover:text-numun-green ${tokens.transition.colors} ${fonts.cerebri}`}
            >
              *View Refund Policy
            </a>
          </div>
        </div>
      </section>

      {/* COMMITTEES */}
      <SectionTitle>{t.conference.sections.committees}</SectionTitle>
      <section className={sections.standardSection}>
        <div className={spacing.container}>
          <ScrollReveal>
            <p className={typography.bodyLarge}>{LOREM}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* AWARDS */}
      <SectionTitle>{t.conference.sections.awards}</SectionTitle>
      <section className={sections.standardSection}>
        <div className={spacing.container}>
          <ScrollReveal>
            <p className={typography.bodyLarge}>{LOREM}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* MERCHANDISE */}
      <SectionTitle>{t.conference.sections.merchandise}</SectionTitle>
      <section className={sections.standardSection}>
        <div className={spacing.container}>
          <ScrollReveal>
            <p className={typography.bodyLarge}>{LOREM}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* LUNCH OPTIONS */}
      <SectionTitle>{t.conference.sections.lunchOptions}</SectionTitle>
      <section className={sections.standardSection}>
        <div className={spacing.container}>
          <ScrollReveal>
            <p className={typography.bodyLarge}>{LOREM}</p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
