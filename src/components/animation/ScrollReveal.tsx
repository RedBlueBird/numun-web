"use client";

import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";
import { scrollAnimations, viewportOptions } from "@/config/animations";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface ScrollRevealProps {
  children: ReactNode;
  variant?: "fadeIn" | "slideUp" | "slideLeft" | "slideRight" | "scale";
  className?: string;
  delay?: number;
}

/**
 * Component that reveals its children when scrolled into view
 */
export default function ScrollReveal({
  children,
  variant = "slideUp",
  className = "",
  delay = 0,
}: ScrollRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  // Skip animation if user prefers reduced motion
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const animationVariants = scrollAnimations[variant] as Variants;

  // Add delay to the visible state transition
  const variantsWithDelay = {
    ...animationVariants,
    visible: {
      ...animationVariants.visible,
      transition: {
        ...(animationVariants.visible as any).transition,
        delay,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      variants={variantsWithDelay}
      className={className}
    >
      {children}
    </motion.div>
  );
}
