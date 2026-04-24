'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { currentSponsors } from '@/data/sponsors';
import { sections, spacing, layout, typography, tokens } from '@/config/styles';
import { scrollAnimations, transitions, viewportOptions } from '@/config/animations';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { fonts } from '@/config/fonts';
import Button from '@/components/ui/Button';
import { FaArrowRight } from 'react-icons/fa';

const supporters = currentSponsors.filter((s) => s.tier === 'supporter');

export default function SupportersSection() {
  const { t } = useLanguage();
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className={`${sections.standardSectionBeige}`}>
      <div className={spacing.container}>
        <motion.h2
          className={`${typography.sectionTitle} ${fonts.itcBenguiat} text-center mb-10`}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOptions}
          transition={transitions.smooth}
        >
          {t.home.supporters.title}
        </motion.h2>

        <motion.div
          className={`${layout.grid.threeColumn} gap-6 ${layout.maxWidth.lg}`}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={prefersReducedMotion ? {} : scrollAnimations.staggerContainer}
        >
          {supporters.map((sponsor) => (
            <motion.a
              key={sponsor.id}
              href={sponsor.website || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-white ${tokens.borderRadius.lg} ${tokens.shadow.md} p-6 flex flex-col items-center gap-4 hover:shadow-lg ${tokens.transition.shadow}`}
              variants={prefersReducedMotion ? {} : scrollAnimations.staggerItem}
            >
              <div className="relative w-full h-28">
                <Image
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                  quality={85}
                />
              </div>
              <p className="text-sm font-semibold text-numun-green text-center leading-snug">
                {sponsor.name}
              </p>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center mt-10"
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOptions}
          transition={{ ...transitions.smooth, delay: 0.3 }}
        >
          <Button href="/current-sponsors" variant="secondary" icon={<FaArrowRight />}>
            {t.home.supporters.viewAll}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
