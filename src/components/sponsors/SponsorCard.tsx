"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { Sponsor } from "@/types";
import { FaSearch } from "react-icons/fa";
import { hoverAnimations } from "@/config/animations";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface SponsorCardProps {
  sponsor: Sponsor;
  tier: "diamond" | "gold" | "silver";
  circularGreenBg?: boolean;
  linkTarget?: string;
  badge?: string;
}

export default function SponsorCard({ sponsor, tier, circularGreenBg = false, linkTarget, badge }: SponsorCardProps) {
  const prefersReducedMotion = useReducedMotion();

  // Different styling based on tier
  const cardStyles = {
    diamond: {
      card: "bg-white rounded-lg p-8 hover:shadow-lg transition-shadow text-center",
      logoContainer: "w-full h-48 mx-auto mb-6 bg-white flex items-center justify-center relative overflow-hidden p-6",
      title: "text-xl font-bold text-numun-green mb-4",
      description: "text-numun-green text-sm mb-6 font-semibold leading-relaxed",
      buttonSize: "text-sm",
    },
    gold: {
      card: "bg-white rounded-lg p-6 hover:shadow-lg transition-shadow text-center",
      logoContainer: "w-full h-40 mx-auto mb-6 bg-white flex items-center justify-center relative overflow-hidden p-4",
      title: "text-lg font-bold text-numun-green mb-3",
      description: "text-numun-green text-xs mb-4 font-semibold leading-relaxed",
      buttonSize: "text-xs",
    },
    silver: {
      card: "bg-white rounded-lg p-8 hover:shadow-lg transition-shadow text-center",
      logoContainer: "w-full h-44 mx-auto mb-6 bg-white flex items-center justify-center relative overflow-hidden p-6",
      title: "text-xl font-bold text-numun-green mb-4",
      description: "text-numun-green text-sm mb-6 font-semibold leading-relaxed",
      buttonSize: "text-sm",
    },
  };

  const styles = cardStyles[tier];

  return (
    <motion.div
      className={`${styles.card} flex flex-col h-full`}
      whileHover={prefersReducedMotion ? {} : hoverAnimations.cardLiftStrong}
    >
      <motion.div
        className={circularGreenBg ? "flex items-center justify-center mb-6" : styles.logoContainer}
        whileHover={prefersReducedMotion ? {} : hoverAnimations.imageZoomSubtle}
      >
        {circularGreenBg ? (
          <div className="w-32 h-32 rounded-full bg-numun-green flex items-center justify-center relative overflow-hidden">
            <Image
              src={sponsor.logo}
              alt={`${sponsor.name} logo`}
              fill
              className="object-contain p-4"
              sizes="128px"
              loading="lazy"
              quality={85}
            />
          </div>
        ) : sponsor.logo ? (
          <Image
            src={sponsor.logo}
            alt={`${sponsor.name} logo`}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
            quality={85}
          />
        ) : (
          <span className="text-3xl">🏢</span>
        )}
      </motion.div>
      <h3 className={styles.title}>{sponsor.name}</h3>
      {badge && (
        <span className="text-xs font-semibold text-numun-green bg-numun-beige border border-numun-gold rounded-full px-3 py-1 whitespace-nowrap mb-4 inline-block">
          {badge}
        </span>
      )}
      <p className={styles.description}>{sponsor.description}</p>
      <div className="mt-auto">
        <Button href={sponsor.website || "#"} variant="primary" icon={<FaSearch />} className={styles.buttonSize} target={linkTarget}>
          LEARN MORE
        </Button>
      </div>
    </motion.div>
  );
}
