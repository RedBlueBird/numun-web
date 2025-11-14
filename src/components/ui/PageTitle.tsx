"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { sections, spacing, typography, gradients, utils, components, layout } from "@/config/styles";
import { scrollAnimations } from "@/config/animations";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { fonts } from "@/config/fonts";

interface PageTitleProps {
  children: React.ReactNode;
  className?: string;
}

interface HeroProps {
  children: React.ReactNode;
  className?: string;
}

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

interface SubtitleProps {
  children: React.ReactNode;
  className?: string;
}

interface QuoteProps {
  children: React.ReactNode;
  className?: string;
}

interface DescriptionProps {
  children: React.ReactNode;
  className?: string;
}

interface LogoProps {
  src: string;
  alt?: string;
  position?: "right" | "left";
  className?: string;
}

// Main PageTitle component (simple usage)
function PageTitle({ children, className = "" }: PageTitleProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className={`${utils.relative} ${sections.heroDark} ${spacing.section.medium} sm:py-20 ${utils.overflow.hidden}`}>
      {/* Background image */}
      <div className={`${utils.absoluteFill} ${utils.zIndex.base}`}>
        <Image
          src="/images/home_background.png"
          alt="Background"
          fill
          priority
          className="object-cover"
        />
      </div>
      {/* Green overlay */}
      <div className={`${utils.absoluteFill} ${gradients.heroOverlay}`}></div>

      <div className={`${utils.relative} ${utils.zIndex.content} ${spacing.container} ${fonts.itcBenguiat}`}>
        <motion.h1
          className={`${typography.pageTitle} ${className} ml-20`}
          initial={prefersReducedMotion ? false : "hidden"}
          animate="visible"
          variants={scrollAnimations.slideUp}
        >
          {children}
        </motion.h1>
      </div>
    </div>
  );
}

// Hero component for complex layouts
function Hero({ children, className = "" }: HeroProps) {
  return (
    <div className={`${utils.relative} ${sections.partialHeight} ${layout.flex.centerBoth} ${sections.heroDark} ${utils.overflow.hidden}`}>
      {/* Background image */}
      <div className={`${utils.absoluteFill} ${utils.zIndex.base}`}>
        <Image
          src="/images/home_background.png"
          alt="Background"
          fill
          priority
          className="object-cover"
        />
      </div>
      {/* Green overlay */}
      <div className={`${utils.absoluteFill} ${gradients.heroOverlay}`}></div>

      <div className={`${utils.relative} ${utils.zIndex.content} w-full px-12 sm:px-16 md:px-24 lg:px-32 ${className} `}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 items-center max-w-7xl mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
}

// Content wrapper for text content (left side)
function HeroContent({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`lg:col-span-8 text-left ${className}`}>
      {children}
    </div>
  );
}

// Logo wrapper (right side)
function HeroLogoWrapper({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`lg:col-span-4 flex justify-center lg:justify-start items-center ${className}`}>
      <div className="w-full aspect-square max-w-sm">
        {children}
      </div>
    </div>
  );
}

// Heading subcomponent
function Heading({ children, className = "" }: HeadingProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.h1
      className={`${typography.pageTitle} mb-4 sm:mb-6 ${className}  ${fonts.itcBenguiat}`}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
    >
      {children}
    </motion.h1>
  );
}

// Subtitle subcomponent
function Subtitle({ children, className = "" }: SubtitleProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.p
      className={`${typography.heroSubtitle} mb-6 sm:mb-8 ${className}`}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
    >
      {children}
    </motion.p>
  );
}

// Quote subcomponent
function Quote({ children, className = "" }: QuoteProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={`${components.hero.quoteBox} mb-6 sm:mb-8 ${className}`}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
    >
      <p className={`${typography.heroQuote} mb-2`}>{children}</p>
    </motion.div>
  );
}

// Description subcomponent
function Description({ children, className = "" }: DescriptionProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.p
      className={`${typography.heroDescription} ${className}`}
      initial={prefersReducedMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.p>
  );
}

// Logo subcomponent
function Logo({ src, alt = "Logo", className = "" }: LogoProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={`${utils.relative} w-full h-full ${className}`}
      initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain"
      />
    </motion.div>
  );
}

// Export with composition pattern
export default Object.assign(PageTitle, {
  Hero,
  HeroContent,
  HeroLogoWrapper,
  Heading,
  Subtitle,
  Quote,
  Description,
  Logo,
});
