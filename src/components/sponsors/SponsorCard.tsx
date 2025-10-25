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
}

export default function SponsorCard({ sponsor, tier }: SponsorCardProps) {
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
      className={`${styles.card} flex flex-col`}
      whileHover={prefersReducedMotion ? {} : hoverAnimations.cardLiftStrong}
    >
      <motion.div
        className={styles.logoContainer}
        whileHover={prefersReducedMotion ? {} : hoverAnimations.imageZoomSubtle}
      >
        {sponsor.logo ? (
          <Image
            src={sponsor.logo}
            alt={`${sponsor.name} logo`}
            fill
            className="object-contain"
          />
        ) : (
          <span className="text-3xl">🏢</span>
        )}
      </motion.div>
      <h3 className={styles.title}>{sponsor.name}</h3>
      <p className={styles.description}>{sponsor.description}</p>
      <div className="mt-auto">
        <Button href={sponsor.website || "#"} variant="primary" icon={<FaSearch />} className={styles.buttonSize}>
          LEARN MORE
        </Button>
      </div>
    </motion.div>
  );
}
