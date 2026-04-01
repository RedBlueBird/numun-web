"use client";

import Image from "next/image";
import PageTitle from "@/components/ui/PageTitle";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/animation/ScrollReveal";
import Button from "@/components/ui/Button";
import SponsorCard from "@/components/sponsors/SponsorCard";
import ScheduleOverviewTable, { ScheduleEntry } from "@/components/numun/ScheduleOverviewTable";
import { motion } from "framer-motion";
import { sections, spacing, typography, tokens } from "@/config/styles";
import { scrollAnimations } from "@/config/animations";
import { fonts } from "@/config/fonts";
import { useLanguage } from "@/context/LanguageContext";

const HANDBOOK_URL = "https://drive.google.com/drive/folders/1SNbyz3mSXhwHgjVFb9XmsZcFmayQSBe1";
const RULES_URL = "https://drive.google.com/drive/folders/1d3ersa21_l898rTA69ei-B2AFWgceDtt";

const DAY1_SCHEDULE: ScheduleEntry[] = [
  { time: "09:00 – 09:30", event: "Registration",                          location: "ALEP, 1F" },
  { time: "09:35 – 10:00", event: "Opening Ceremony",                      location: "ALEP, 2F, Main Hall" },
  { time: "10:00 – 10:15", event: "Move from Main Hall to Committee Rooms" },
  { time: "10:15 – 11:45", event: "Committee Session 1 (90min)",           location: "ALEP Committee Room" },
  { time: "11:45 – 12:30", event: "Lunch Time" },
  { time: "12:30 – 14:00", event: "Committee Session 2 (90min)",           location: "ALEP Committee Room" },
  { time: "14:00 – 14:15", event: "Break" },
  { time: "14:15 – 15:45", event: "Committee Session 3 (90min)",           location: "ALEP Committee Room" },
  { time: "15:45 – 15:55", event: "Short Break" },
  { time: "15:55 – 17:25", event: "Committee Session 4 (90min)",           location: "ALEP Committee Room" },
  { time: "17:30 – 18:00", event: "Memory Time" },
  { time: "18:00 – 19:00", event: "Commute to Social Night Venue" },
  { time: "19:00 – 22:00", event: "Social Night",                          location: "TBA" },
];

const DAY2_SCHEDULE: ScheduleEntry[] = [
  { time: "08:45 – 09:00", event: "Arrival",                               location: "ALEP, 1F" },
  { time: "09:00 – 10:30", event: "Committee Session 5 (90min)",           location: "ALEP Committee Room" },
  { time: "10:30 – 10:45", event: "Break" },
  { time: "10:45 – 12:15", event: "Committee Session 6 (90min)",           location: "ALEP Committee Room" },
  { time: "12:15 – 13:00", event: "Lunch Time" },
  { time: "13:00 – 14:30", event: "Committee Session 7 (90min)",           location: "ALEP Committee Room" },
  { time: "14:30 – 16:00", event: "Certificate Giving",                    location: "ALEP Committee Room" },
  {                         event: "Memory Time" },
  {                         event: "Move to Noyori Hall" },
  { time: "15:00 – 16:30", event: "Awarding & Closing Ceremony",           location: "Noyori Hall" },
];

const COMMITTEES = [
  { key: 'who'    as const, image: '/images/events/committee-who.webp',    url: 'https://drive.google.com/drive/folders/10t3EAI6B45XX4ZpBbTa9I6Us82Wi3Q7P' },
  { key: 'ecosoc' as const, image: '/images/events/committee-ecosoc.webp', url: 'https://drive.google.com/drive/folders/15p8-4ANjge6h8p_CeSya-B7lp5Jsoeoo' },
  { key: 'unsc'   as const, image: '/images/events/committee-unsc.webp',   url: 'https://drive.google.com/drive/folders/19WagMIC8xEPFpPkB1HKBC77xWx4FJHZ-' },
  { key: 'unep'   as const, image: '/images/events/committee-unep.webp',   url: 'https://drive.google.com/drive/folders/1qOvgGIIzfqcaBS_qYliCsmConOWXG1gC?usp=drive_link' },
  { key: 'unhcr'  as const, image: '/images/events/committee-unhcr.webp',  url: 'https://drive.google.com/drive/folders/19snGDbjRtCTVfpkV1-ppS-K4mwipispi?usp=drive_link' },
];

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
                  <Button href="register" variant="primary">
                    {t.conference.hero.registerNow}
                  </Button>
                </div>

                {/* Download links */}
                <div className={`flex flex-col ${spacing.gap.xs}`}>
                  <a
                    href={HANDBOOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-numun-gold text-sm font-semibold underline hover:text-numun-gold-light ${tokens.transition.colors} ${fonts.cerebri}`}
                  >
                    {t.conference.hero.downloadHandbook}
                  </a>
                  <a
                    href={RULES_URL}
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
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={scrollAnimations.staggerContainer}
          >
            {COMMITTEES.map((committee) => {
              const data = t.conference.committeeList[committee.key];
              return (
                <motion.div key={committee.key} variants={scrollAnimations.staggerItem} className="h-full">
                  <SponsorCard
                    sponsor={{
                      id: committee.key,
                      name: data.name,
                      tier: 'diamond',
                      logo: committee.image,
                      description: data.description,
                      website: committee.url,
                    }}
                    tier="diamond"
                    circularGreenBg
                    linkTarget="_blank"
                    badge={data.level}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* SCHEDULE OVERVIEW */}
      <SectionTitle>{t.conference.sections.scheduleOverview}</SectionTitle>
      <section className={sections.standardSection}>
        <div className={spacing.container}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <ScheduleOverviewTable day="DAY 1" entries={DAY1_SCHEDULE} />
            <ScheduleOverviewTable day="DAY 2" entries={DAY2_SCHEDULE} />
          </div>
        </div>
      </section>

      {/* AWARDS */}
      {/* <SectionTitle>{t.conference.sections.awards}</SectionTitle>
      <section className={sections.standardSection}>
        <div className={spacing.container}>
          <ScrollReveal>
            <p className={typography.bodyLarge}>{LOREM}</p>
          </ScrollReveal>
        </div>
      </section> */}

      {/* MERCHANDISE */}
      {/* <SectionTitle>{t.conference.sections.merchandise}</SectionTitle>
      <section className={sections.standardSection}>
        <div className={spacing.container}>
          <ScrollReveal>
            <p className={typography.bodyLarge}>{LOREM}</p>
          </ScrollReveal>
        </div>
      </section> */}

      {/* LUNCH OPTIONS */}
      {/* <SectionTitle>{t.conference.sections.lunchOptions}</SectionTitle>
      <section className={sections.standardSection}>
        <div className={spacing.container}>
          <ScrollReveal>
            <p className={typography.bodyLarge}>{LOREM}</p>
          </ScrollReveal>
        </div>
      </section> */}
    </div>
  );
}
