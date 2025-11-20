"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { hoverAnimations, transitions } from "@/config/animations";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface GalleryEventCardProps {
  eventName: string;
  displayName: string;
  firstImageUrl: string;
  onClick: () => void;
}

export default function GalleryEventCard({
  eventName,
  displayName,
  firstImageUrl,
  onClick,
}: GalleryEventCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  // Trigger text re-animation on hover
  const handleHoverStart = () => {
    if (!prefersReducedMotion) {
      setAnimationKey((prev) => prev + 1);
    }
  };

  return (
    <motion.div
      onClick={onClick}
      className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-lg cursor-pointer"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: transitions.quick,
        },
      }}
      whileHover={prefersReducedMotion ? {} : hoverAnimations.cardLift}
      onHoverStart={handleHoverStart}
    >
      {/* Loading skeleton */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transitions.smooth}
          >
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Image - always visible */}
      <Image
        src={firstImageUrl}
        alt={displayName}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        onLoad={() => setIsLoaded(true)}
        priority={false}
      />

      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Text overlay with animation on hover */}
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.h3
            key={animationKey}
            className="font-bold text-white text-2xl md:text-3xl px-6 text-center"
            style={{
              textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8), 0 0 16px rgba(0, 0, 0, 0.6)",
            }}
            initial={
              prefersReducedMotion
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: "100%" }
            }
            animate={{ opacity: 1, y: 0 }}
            exit={
              prefersReducedMotion
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: "-100%" }
            }
            transition={{
              duration: 0.4,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            {displayName}
          </motion.h3>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
