"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { hoverAnimations, transitions } from "@/config/animations";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface GalleryImageCardProps {
  id: string;
  name: string;
  url: string;
  year: string;
  event: string;
}

export default function GalleryImageCard({
  id,
  name,
  url,
  year,
  event,
}: GalleryImageCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const subtitle = `${year}/${event}/${name}`;
  const googleDriveLink = `https://drive.google.com/file/d/${id}/view`;

  return (
    <motion.a
      href={googleDriveLink}
      target="_blank"
      rel="noopener noreferrer"
      className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-lg block cursor-pointer"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: transitions.quick,
        },
      }}
      whileHover={prefersReducedMotion ? {} : hoverAnimations.imageZoom}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
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

      {/* Image */}
      <Image
        src={url}
        alt={subtitle}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        loading="lazy"
        quality={80}
        onLoad={() => setIsLoaded(true)}
      />

      {/* Subtitle overlay - shows on hover */}
      <AnimatePresence>
        {isHovered && isLoaded && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-center p-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={transitions.quick}
          >
            <p className="font-semibold italic text-sm">{subtitle}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.a>
  );
}
