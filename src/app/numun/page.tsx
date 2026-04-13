"use client";

import { useState } from "react";
import Image from "next/image";
import PageTitle from "@/components/ui/PageTitle";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/animation/ScrollReveal";
import Button from "@/components/ui/Button";
import DisplayCard from "@/components/ui/DisplayCard";
import ScheduleOverviewTable from "@/components/numun/ScheduleOverviewTable";
import { scheduleOverview } from "@/data/scheduleOverview";
import { motion } from "framer-motion";
import { sections, spacing, typography, tokens, layout } from "@/config/styles";
import { scrollAnimations } from "@/config/animations";
import { fonts } from "@/config/fonts";
import CollapsibleCard from "@/components/ui/CollapsibleCard";
import TableOfContents from "@/components/numun/TableOfContents";
import { useLanguage } from "@/context/LanguageContext";
import { HiCursorClick } from "react-icons/hi";

const HANDBOOK_URL = "https://drive.google.com/drive/folders/1SNbyz3mSXhwHgjVFb9XmsZcFmayQSBe1";
const RULES_URL = "https://drive.google.com/drive/folders/1d3ersa21_l898rTA69ei-B2AFWgceDtt";
const BACKGROUND_URL = "https://drive.google.com/drive/folders/1eP3qyUaOX27eYJsYXKlKip3oYeo5jSWZ";

const SEATS_TOTAL = 150;
const SEATS_OCCUPIED = 33;

const SWAG_ITEMS = [
  { key: 'notebook'    as const, image: '/images/events/swag-notebook.webp' },
  { key: 'lanyard'     as const, image: '/images/events/swag-lanyard.webp' },
  { key: 'stickerPack' as const, image: '/images/events/swag-sticker.webp' },
  { key: 'bookmark'    as const, image: '/images/events/swag-bookmark.webp' },
  { key: 'pen'         as const, image: '/images/events/swag-pen.webp' },
];

const COMMITTEES = [
  { key: 'who'    as const, image: '/images/events/committee-who.webp',    url: 'https://drive.google.com/drive/folders/10t3EAI6B45XX4ZpBbTa9I6Us82Wi3Q7P' },
  { key: 'ecosoc' as const, image: '/images/events/committee-ecosoc.webp', url: 'https://drive.google.com/drive/folders/15p8-4ANjge6h8p_CeSya-B7lp5Jsoeoo' },
  { key: 'unsc'   as const, image: '/images/events/committee-unsc.webp',   url: 'https://drive.google.com/drive/folders/19WagMIC8xEPFpPkB1HKBC77xWx4FJHZ-' },
  { key: 'unep'   as const, image: '/images/events/committee-unep.webp',   url: 'https://drive.google.com/drive/folders/1qOvgGIIzfqcaBS_qYliCsmConOWXG1gC?usp=drive_link' },
  { key: 'unhcr'  as const, image: '/images/events/committee-unhcr.webp',  url: 'https://drive.google.com/drive/folders/19snGDbjRtCTVfpkV1-ppS-K4mwipispi?usp=drive_link' },
];

export default function NumunPage() {
  const { t, locale } = useLanguage();
  const schedule = scheduleOverview[locale];

  const awardsList = [
    {
      num: 1,
      title: t.conference.awards.bestDelegate.title,
      role: t.conference.awards.bestDelegate.role,
      subtitle: t.conference.awards.bestDelegate.subtitle,
      qualities: [
        t.conference.awards.bestDelegate.quality1,
        t.conference.awards.bestDelegate.quality2,
        t.conference.awards.bestDelegate.quality3,
        t.conference.awards.bestDelegate.quality4,
      ],
    },
    {
      num: 2,
      title: t.conference.awards.outstandingDelegate.title,
      role: t.conference.awards.outstandingDelegate.role,
      subtitle: t.conference.awards.outstandingDelegate.subtitle,
      qualities: [
        t.conference.awards.outstandingDelegate.quality1,
        t.conference.awards.outstandingDelegate.quality2,
        t.conference.awards.outstandingDelegate.quality3,
      ],
    },
    {
      num: 3,
      title: t.conference.awards.bestPositionPaper.title,
      role: '',
      subtitle: '',
      qualities: [
        t.conference.awards.bestPositionPaper.quality1,
        t.conference.awards.bestPositionPaper.quality2,
        t.conference.awards.bestPositionPaper.quality3,
      ],
    },
  ];

  const [openCards, setOpenCards] = useState([false, false, false, false, false]);
  const toggleCard = (i: number) => setOpenCards(prev => prev.map((v, idx) => idx === i ? !v : v));

  return (
    <div className="relative">
      <TableOfContents />
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
                  <a
                    href={BACKGROUND_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-numun-gold text-sm font-semibold underline hover:text-numun-gold-light ${tokens.transition.colors} ${fonts.cerebri}`}
                  >
                    {t.conference.hero.downloadBackground}
                  </a>
                </div>
              </div>

            </div>
          </ScrollReveal>

          {/* Delegate Registration Progress Bar */}
          <div className="max-w-5xl mx-auto mt-4">
            <ScrollReveal variant="slideUp">
              <div className={`bg-numun-beige ${tokens.borderRadius["2xl"]} ${tokens.shadow.md} ${spacing.padding.md}`}>
                {/* Header row: label + count */}
                <div className={`${layout.flex.spaceBetween} mb-3`}>
                  <p className={`text-sm font-semibold text-numun-green uppercase tracking-widest ${fonts.cerebri}`}>
                    {t.conference.hero.seatsProgress.label}
                  </p>
                  <p className={`text-sm font-bold text-numun-green ${fonts.cerebri}`}>
                    <span className="text-numun-gold text-lg font-bold">{SEATS_TOTAL - SEATS_OCCUPIED}</span>
                    {' / '}{SEATS_TOTAL} {t.conference.hero.seatsProgress.total}
                  </p>
                </div>
                {/* Progress bar track */}
                <div className={`w-full h-3 bg-white/70 ${tokens.borderRadius.full} overflow-hidden border border-numun-green/20`}>
                  <motion.div
                    className={`h-full ${tokens.borderRadius.full} bg-numun-green`}
                    initial={{ width: "0%" }}
                    whileInView={{ width: `${(SEATS_OCCUPIED / SEATS_TOTAL) * 100}%` }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                  />
                </div>
                {/* Footer row: registered */}
                <div className="mt-2">
                  <p className={`${typography.caption} text-numun-green/70 ${fonts.cerebri}`}>
                    {SEATS_OCCUPIED} {t.conference.hero.seatsProgress.registered}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

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
      <section id="committees" className={sections.standardSection}>
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
                  <DisplayCard
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
                    buttonIcon={<HiCursorClick />}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* SCHEDULE OVERVIEW */}
      <SectionTitle>{t.conference.sections.scheduleOverview}</SectionTitle>
      <section id="schedule" className={sections.standardSection}>
        <div className={spacing.container}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <ScheduleOverviewTable day="DAY 1 · June 27" entries={schedule.day1} />
            <ScheduleOverviewTable day="DAY 2 · June 28" entries={schedule.day2} />
          </div>
        </div>
      </section>

      {/* AWARDS */}
      <SectionTitle>{t.conference.sections.awards}</SectionTitle>
      <section id="awards" className={sections.standardSection}>
        <div className={spacing.container}>
          <div className="max-w-5xl mx-auto">

            {/* Row 1: description + medal image */}
            <ScrollReveal variant="fadeIn">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center mb-6">
                <div className="lg:col-span-2">
                  <p className={`${typography.bodyLarge} mb-4`}>
                    {t.conference.awards.descriptionPart1}
                    <strong>{t.conference.awards.descriptionBold1}</strong>
                    {t.conference.awards.descriptionPart2}
                    <strong>{t.conference.awards.descriptionBold2}</strong>
                    {t.conference.awards.descriptionPart3}
                    <strong>{t.conference.awards.descriptionBold3}</strong>
                    {t.conference.awards.descriptionPart4}
                  </p>
                  <p className={typography.bodyLarge}>{t.conference.awards.subheading}</p>
                </div>
                <div className="flex justify-center">
                  <div className="relative w-64 h-64">
                    <Image
                      src="/images/events/award-medal.webp"
                      alt={t.conference.awards.medalAlt}
                      fill
                      className="object-contain"
                      sizes="256px"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Row 2: award cards */}
            <motion.div
              className={`${layout.grid.threeColumn} gap-6 mb-12`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={scrollAnimations.staggerContainer}
            >
              {awardsList.map((award) => (
                <motion.div
                  key={award.num}
                  variants={scrollAnimations.staggerItem}
                  className="bg-numun-beige border-2 border-numun-gold/30 rounded-2xl p-6"
                >
                  <div className={`flex items-center ${spacing.gap.sm} mb-4`}>
                    <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-numun-green text-white flex items-center justify-center font-bold text-sm ${fonts.cerebri}`}>
                      {award.num}
                    </span>
                    <h3 className={`text-lg font-bold text-numun-green ${fonts.itcBenguiat}`}>
                      {award.title}
                    </h3>
                  </div>
                  {award.role && <p className={`${typography.bodyNormal} mb-2`}>{award.role}</p>}
                  {award.subtitle && <p className={`${typography.bodyNormal} mb-3`}>{award.subtitle}</p>}
                  <ul className="space-y-2">
                    {award.qualities.map((quality, i) => (
                      <li key={i} className={`${typography.bodySmall} flex gap-2`}>
                        <span className="text-numun-gold flex-shrink-0">→</span>
                        <span>{quality}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>

            {/* Closing */}
            <ScrollReveal variant="fadeIn">
              <p className={`${typography.bodyLarge} text-center`}>{t.conference.awards.closing}</p>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* SWAGS */}
      <SectionTitle>{t.conference.sections.swag}</SectionTitle>
      <section id="swags" className={sections.standardSection}>
        <div className={spacing.container}>
          <div className={`${layout.maxWidth.lg} mx-auto`}>
            <ScrollReveal variant="fadeIn">
              <p className={`${typography.bodyLarge} mb-4`}>
                {t.conference.swag.description1Part1}
                <strong>{t.conference.swag.description1Bold}</strong>
                {t.conference.swag.description1Part2}
              </p>
              <p className={`${typography.bodyLarge} mb-12`}>
                {t.conference.swag.description2}
              </p>
            </ScrollReveal>
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={scrollAnimations.staggerContainer}
            >
              {SWAG_ITEMS.map((item) => (
                <motion.div key={item.key} variants={scrollAnimations.staggerItem} className="flex flex-col items-center gap-3">
                  <div className={`w-full aspect-square relative ${tokens.borderRadius.lg} overflow-hidden`}>
                    <Image
                      src={item.image}
                      alt={t.conference.swag.items[item.key]}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    />
                  </div>
                  <p className={`text-sm font-bold text-numun-green text-center uppercase ${fonts.cerebri}`}>
                    {t.conference.swag.items[item.key]}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SOCIAL NIGHT */}
      <SectionTitle>{t.conference.sections.socialNight}</SectionTitle>
      <section id="social-night" className={sections.standardSection}>
        <div className={spacing.container}>
          <ScrollReveal>
            <div className={`relative max-w-5xl mx-auto ${tokens.borderRadius["3xl"]} overflow-hidden ${tokens.shadow.xl} bg-numun-green min-h-[380px] lg:min-h-0 lg:aspect-[21/9]`}>

              {/* Background image */}
              <div className="absolute inset-0">
                <Image
                  src="/images/events/social-night.webp"
                  alt={t.conference.sections.socialNight}
                  fill
                  className="object-cover scale-[1.1] object-[60%_center]"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
              </div>

              {/* Gradient: solid numun-green on left, fades to transparent on right */}
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(56, 86, 68, 0.98) 30%, rgba(56, 86, 68, 0.90) 45%, transparent 100%)' }} />

              {/* Content — left half only */}
              <div className={`relative z-10 w-full lg:w-1/2 ${spacing.padding.lg} md:${spacing.padding.xl}`}>
                {/* Date + Time */}
                <p className={`text-white/70 text-sm mb-1 ${fonts.cerebri}`}>{t.conference.socialNight.date}</p>
                <h2 className={`text-4xl lg:text-5xl font-bold text-white leading-tight mb-3 ${fonts.itcBenguiat}`}>
                  {t.conference.socialNight.time}
                </h2>

                {/* Location */}
                <p className={`text-white/80 text-sm mb-5 ${fonts.cerebri}`}>{t.conference.socialNight.location}</p>

                {/* Description */}
                <p className={`text-white/90 text-sm mb-6 leading-relaxed ${fonts.cerebri}`}>
                  {t.conference.socialNight.description}
                </p>

                {/* Fee */}
                <p className={`text-white/70 text-xs uppercase tracking-widest mb-1 ${fonts.cerebri}`}>{t.conference.socialNight.feeLabel}</p>
                <p className={`text-numun-gold text-2xl font-bold mb-1 ${fonts.itcBenguiat}`}>
                  {t.conference.socialNight.free} <span className={`text-white text-base font-normal ${fonts.cerebri}`}>{t.conference.socialNight.freeFor}</span>
                </p>
                <p className={`text-white/70 text-sm ${fonts.cerebri}`}>{t.conference.socialNight.noRegistration}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* PLANNING YOUR VISIT */}
      <SectionTitle>{t.conference.sections.visit}</SectionTitle>
      <section id="visit" className={sections.standardSection}>
        <div className={spacing.container}>
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              className="space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={scrollAnimations.staggerContainer}
            >
              {/* 1. Nearby Food Options */}
              <CollapsibleCard num={1} title={t.conference.visit.nearbyFood.title} isOpen={openCards[0]} onToggle={() => toggleCard(0)}>
                <p className={`${typography.bodyLarge} italic mb-4`}>{t.conference.visit.nearbyFood.subtitle}</p>
                <p className={`${typography.bodyLarge} mb-4`}>{t.conference.visit.nearbyFood.description}</p>
                <a
                  href="https://www.google.com/maps/@35.1575099,136.9578787,16z/data=!4m3!11m2!2s0U27ZjnPb0Fd5BOVXMYEcQ!3e3?entry=ttu&g_ep=EgoyMDI2MDMzMC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${typography.bodyLarge} text-numun-green font-semibold underline hover:text-numun-gold ${tokens.transition.colors}`}
                >
                  {t.conference.visit.nearbyFood.mapLink}
                </a>
              </CollapsibleCard>

              {/* 2. Nagoya Tourism Spots */}
              <CollapsibleCard num={2} title={t.conference.visit.tourismSpots.title} isOpen={openCards[1]} onToggle={() => toggleCard(1)}>
                <p className={`${typography.bodyLarge} italic mb-4`}>{t.conference.visit.tourismSpots.subtitle}</p>
                <p className={`${typography.bodyLarge} mb-4`}>{t.conference.visit.tourismSpots.description}</p>
                <a
                  href="https://www.google.com/maps/@35.1063312,136.7313299,11z/data=!4m3!11m2!2s87_EVMCCT8ytzd6cWxbRZg!3e3?entry=ttu&g_ep=EgoyMDI2MDMzMC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${typography.bodyLarge} text-numun-green font-semibold underline hover:text-numun-gold ${tokens.transition.colors}`}
                >
                  {t.conference.visit.tourismSpots.mapLink}
                </a>
              </CollapsibleCard>

              {/* 3. National Emergency Numbers */}
              <CollapsibleCard num={3} title={t.conference.visit.emergencyNumbers.title} isOpen={openCards[2]} onToggle={() => toggleCard(2)}>
                <p className={`${typography.bodyLarge} mb-4`}>{t.conference.visit.emergencyNumbers.description}</p>
                <div className="grid grid-cols-[1fr_auto] gap-x-6 gap-y-1 w-fit">
                  <p className={typography.bodyLarge}>{t.conference.visit.emergencyNumbers.policeLabel}</p>
                  <p className={`${typography.bodyLarge} font-bold`}>{t.conference.visit.emergencyNumbers.policeNumber}</p>
                  <p className={typography.bodyLarge}>{t.conference.visit.emergencyNumbers.fireLabel}</p>
                  <p className={`${typography.bodyLarge} font-bold`}>{t.conference.visit.emergencyNumbers.fireNumber}</p>
                  <p className={typography.bodyLarge}>{t.conference.visit.emergencyNumbers.aichiLabel}</p>
                  <p className={`${typography.bodyLarge} font-bold`}>{t.conference.visit.emergencyNumbers.aichiNumber}</p>
                </div>
              </CollapsibleCard>

              {/* 4. Medical Assistance */}
              <CollapsibleCard num={4} title={t.conference.visit.medicalAssistance.title} isOpen={openCards[3]} onToggle={() => toggleCard(3)}>
                <p className={`${typography.bodyLarge} mb-4`}>{t.conference.visit.medicalAssistance.description1}</p>
                <p className={typography.bodyLarge}>
                  {t.conference.visit.medicalAssistance.description2Part1}
                  <strong>{t.conference.visit.medicalAssistance.description2Bold1}</strong>
                  {t.conference.visit.medicalAssistance.description2Part2}
                  <strong>{t.conference.visit.medicalAssistance.description2Bold2}</strong>
                  {t.conference.visit.medicalAssistance.description2Part3}
                  <strong>{t.conference.visit.medicalAssistance.description2Bold3}</strong>
                  {t.conference.visit.medicalAssistance.description2Part4}
                  <strong>{t.conference.visit.medicalAssistance.description2Bold4}</strong>
                  {t.conference.visit.medicalAssistance.description2Part5}
                </p>
              </CollapsibleCard>

              {/* 5. Evacuation Procedures */}
              <CollapsibleCard num={5} title={t.conference.visit.evacuation.title} isOpen={openCards[4]} onToggle={() => toggleCard(4)}>
                <p className={`${typography.bodyLarge} mb-4`}>{t.conference.visit.evacuation.description}</p>
                <ul className="space-y-3">
                  {[
                    { label: t.conference.visit.evacuation.step1Label, text: t.conference.visit.evacuation.step1Text },
                    { label: t.conference.visit.evacuation.step2Label, text: t.conference.visit.evacuation.step2Text },
                    { label: t.conference.visit.evacuation.step3Label, text: t.conference.visit.evacuation.step3Text },
                    { label: t.conference.visit.evacuation.step4Label, text: t.conference.visit.evacuation.step4Text },
                  ].map((step, i) => (
                    <li key={i} className={`${typography.bodyLarge} flex gap-2`}>
                      <span className="text-numun-gold flex-shrink-0">•</span>
                      <span><strong>{step.label}</strong> {step.text}</span>
                    </li>
                  ))}
                </ul>
              </CollapsibleCard>

            </motion.div>
          </div>
        </div>
      </section>

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
