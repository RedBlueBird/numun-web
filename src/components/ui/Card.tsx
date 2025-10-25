"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { components } from "@/config/styles";
import { hoverAnimations } from "@/config/animations";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "decorative";
}

export default function Card({ children, className = "", variant = "default" }: CardProps) {
  const prefersReducedMotion = useReducedMotion();

  const variantStyles = {
    default: components.card.withShadow,
    decorative: components.card.decorative,
  };

  const motionProps = prefersReducedMotion
    ? {}
    : {
        whileHover: hoverAnimations.cardLift,
      };

  return (
    <motion.div className={`${variantStyles[variant]} ${className}`} {...motionProps}>
      {variant === "decorative" && (
        <>
          {/* Decorative corner accents */}
          <div className={`${components.decorativeCorner} top-0 left-0 border-t-4 border-l-4`}></div>
          <div className={`${components.decorativeCorner} top-0 right-0 border-t-4 border-r-4`}></div>
          <div className={`${components.decorativeCorner} bottom-0 left-0 border-b-4 border-l-4`}></div>
          <div className={`${components.decorativeCorner} bottom-0 right-0 border-b-4 border-r-4`}></div>
        </>
      )}
      {children}
    </motion.div>
  );
}
