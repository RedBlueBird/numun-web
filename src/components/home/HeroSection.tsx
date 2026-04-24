"use client";

import Button from "@/components/ui/Button";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { sections, spacing, layout, typography, gradients, utils, components } from "@/config/styles";
import { fonts } from "@/config/fonts";
import { heroAnimations } from "@/config/animations";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { FaSearch, FaPen, FaUserPlus } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();
  const prefersReducedMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {
      // Autoplay was blocked — nothing to do, video stays paused
    });
  }, []);

  // If user prefers reduced motion, show everything immediately
  const getAnimationProps = (animationKey: keyof typeof heroAnimations) => {
    if (prefersReducedMotion) {
      return {};
    }
    return heroAnimations[animationKey];
  };

  return (
    <section className={`${utils.relative} ${sections.fullHeight} ${layout.flex.centerBoth} ${sections.heroDark} ${utils.overflow.hidden}`}>
      {/* Background video */}
      <div className={`${utils.absoluteFill} ${utils.zIndex.base}`}>
        <video
          ref={videoRef}
          src="/images/events/home-hero-vid.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-[1.07]"
        />
      </div>

      {/* Background overlay - creates green tone over photo */}
      <div className={`${utils.absoluteFill} ${gradients.heroOverlay} -bottom-2`}></div>

      {/* Content */}
      <div className={`${utils.relative} ${utils.zIndex.content} ${spacing.container} ${utils.textCenter} ${layout.flex.column} ${layout.flex.spaceBetween} h-full py-24`}>
        {/* Logo with wreath */}
        <div className={`${layout.flex.centerHorizontal} pt-8`}>
          <motion.div className={`${utils.relative} w-64 h-64`} {...getAnimationProps("logo")}>
            <Image
              src="/images/logos/numun_logo.webp"
              alt="NUMUN Logo with Laurel Wreath"
              fill
              priority
              className="object-contain"
              quality={80}
              sizes="256px"
            />
          </motion.div>
        </div>

        {/* Brand text */}
        <div className="mb-8 -mt-10 relative">
          <motion.h1
            className={`${typography.heroTitle} text-numun-gold -mb-10 md:-mb-14 relative z-0 ${fonts.itcBenguiat}`}
            {...getAnimationProps("title1")}
          >
            {t.common.numun}
          </motion.h1>
          <motion.h1
            className={`${typography.heroTitle} text-numun-gold-darkest font-bold -mb-2 md:-mb-6 relative z-0 ${fonts.itcBenguiat}`}
            {...getAnimationProps("title2")}
          >
            {t.home.numun2026}
          </motion.h1>
          <motion.p
            className={`text-white md:text-6xl text-4xl font-light relative z-10 ${typography.italic} ${fonts.itcBenguiat}`}
            {...getAnimationProps("comingSoon")}
          >
            {t.home.comingSoon}
          </motion.p>
        </div>

        {/* CTA Message */}
        <motion.p
          className={`text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold ${typography.italic} mb-12 ${layout.maxWidth.md} ${fonts.itcBenguiat}`}
          {...getAnimationProps("message")}
        >
          {t.home.recruitingMessage}
        </motion.p>

        {/* Buttons */}
        <motion.div
          className={`${layout.flex.column} sm:flex-row ${spacing.gap.lg} ${layout.flex.centerBoth} pb-16`}
          {...getAnimationProps("buttons")}
        >
          <Button href="/numun" variant="primary" icon={<FaSearch />} className={`w-full sm:w-auto ${components.button.large}`}>
            {t.home.learnAboutButton}
          </Button>
          <Button href="/register" variant="primary" icon={<FaUserPlus />} className={`w-full sm:w-auto ${components.button.large}`}>
            {t.register.individual.button}
          </Button>
          <Button href="/contact" variant="primary" icon={<FaPen />} className={`w-full sm:w-auto ${components.button.large}`}>
            {t.home.contactButton}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
