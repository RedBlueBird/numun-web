"use client";

import { FaInstagram, FaLinkedinIn, FaYoutube, FaEnvelope } from "react-icons/fa";
import { SiLine } from "react-icons/si";
import { motion } from "framer-motion";
import { hoverAnimations } from "@/config/animations";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface ContactMethodCardProps {
  platform?: string;
  url: string;
  displayText: string;
  isEmail?: boolean;
}

function getPlatformIcon(platform: string) {
  const iconProps = { size: 32, className: "text-numun-green" };

  switch (platform) {
    case "Instagram":
      return <FaInstagram {...iconProps} />;
    case "LINE":
      return <SiLine {...iconProps} />;
    case "LinkedIn":
      return <FaLinkedinIn {...iconProps} />;
    case "YouTube":
      return <FaYoutube {...iconProps} />;
    default:
      return null;
  }
}

export default function ContactMethodCard({ platform, url, displayText, isEmail = false }: ContactMethodCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-6 p-6 bg-white rounded-lg border-2 border-gray-200 hover:shadow-lg transition-shadow group"
      whileHover={prefersReducedMotion ? {} : hoverAnimations.slideRight}
    >
      <motion.div
        className="flex-shrink-0"
        whileHover={prefersReducedMotion ? {} : hoverAnimations.iconScale}
      >
        {isEmail ? (
          <FaEnvelope size={32} className="text-numun-green" />
        ) : (
          getPlatformIcon(platform || "")
        )}
      </motion.div>
      <span className="text-numun-green group-hover:text-numun-gold transition-colors flex-1 text-lg font-bold break-all">
        {displayText}
      </span>
    </motion.a>
  );
}
