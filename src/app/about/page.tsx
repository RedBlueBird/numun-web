"use client";

import PageTitle from "@/components/ui/PageTitle";
import Image from "next/image";
import ScrollReveal from "@/components/animation/ScrollReveal";
import { motion } from "framer-motion";
import { sections, spacing, layout, typography, gradients, tokens, utils } from "@/config/styles";
import { scrollAnimations, hoverAnimations } from "@/config/animations";
import { useLanguage } from "@/context/LanguageContext";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function AboutPage() {
  const { t } = useLanguage();
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative">
      {/* Fake header background - absolute at top of page, provides dark green backdrop behind transparent header */}
      <div className={`absolute top-[-100px] left-0 right-0 h-[100px] ${sections.heroDark} z-40`} />
      
      <PageTitle>{t.about.title}</PageTitle>

      <section className={sections.standardSection}>
        <div className={spacing.container}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Image */}
            <ScrollReveal variant="slideLeft" className="lg:order-2">
              <motion.div
                className={`${layout.aspect.video} relative ${tokens.borderRadius.lg} ${utils.overflow.hidden} ${tokens.shadow.lg}`}
                whileHover={prefersReducedMotion ? {} : hoverAnimations.imageZoomSubtle}
              >
                <Image
                  src="/images/media/about_nagoya_auditorium.png"
                  alt={t.about.imageAlt}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-center p-3">
                  <p className="font-semibold italic text-sm">{t.about.imageAlt}</p>
                </div>
              </motion.div>
            </ScrollReveal>

            {/* Text Content */}
            <ScrollReveal variant="slideRight" className="lg:order-1">
              <div className={spacing.gap.lg}>
                <p className={`${typography.bodyLarge} ${typography.textJustify} mb-4`}>
                  {t.about.paragraph1}
                </p>
                <p className={`${typography.bodyLarge} ${typography.textJustify}`}>
                  {t.about.paragraph2}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className={sections.standardSection}>
        <div className={spacing.container}>
          <motion.div
            className={`${layout.grid.twoColumn} ${spacing.gap.lg} ${layout.maxWidth.lg}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={scrollAnimations.staggerContainer}
          >
            {/* Photo 1 */}
            <motion.div
              className="rounded-lg overflow-hidden shadow-lg aspect-video relative"
              variants={scrollAnimations.staggerItem}
              whileHover={prefersReducedMotion ? {} : hoverAnimations.imageZoom}
            >
              <Image
                src="/images/media/about_committee_session_1.jpg"
                alt={t.about.quote.description}
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Photo 2 */}
            <motion.div
              className="rounded-lg overflow-hidden shadow-lg aspect-video relative"
              variants={scrollAnimations.staggerItem}
              whileHover={prefersReducedMotion ? {} : hoverAnimations.imageZoom}
            >
              <Image
                src="/images/media/about_committee_session_2.jpg"
                alt={t.about.quote.description}
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Photo 3 */}
            <motion.div
              className="rounded-lg overflow-hidden shadow-lg aspect-video relative"
              variants={scrollAnimations.staggerItem}
              whileHover={prefersReducedMotion ? {} : hoverAnimations.imageZoom}
            >
              <Image
                src="/images/media/about_committee_session_3.jpg"
                alt={t.about.quote.description}
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Photo 4 with caption */}
            <motion.div className="space-y-2" variants={scrollAnimations.staggerItem}>
              <motion.div
                className="rounded-lg overflow-hidden shadow-lg aspect-video relative"
                whileHover={prefersReducedMotion ? {} : hoverAnimations.imageZoom}
              >
                <Image
                  src="/images/media/about_committee_session_4.jpg"
                  alt={t.about.quote.title}
                  fill
                  className="object-cover"
                />
              </motion.div>
              <p className="text-right italic text-sm text-numun-green font-semibold">{t.about.quote.title}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
