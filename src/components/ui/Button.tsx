"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { components, gradients } from "@/config/styles";
import { hoverAnimations } from "@/config/animations";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  icon?: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  href,
  variant = "primary",
  icon,
  className = "",
  onClick,
}: ButtonProps) {
  const prefersReducedMotion = useReducedMotion();

  const variantStyles = {
    primary: `${gradients.goldGradientDark} text-white`,
    secondary: "bg-numun-green hover:bg-numun-green-dark text-white",
    outline: "border-2 border-numun-gold text-numun-gold hover:bg-numun-gold hover:text-numun-green-dark",
  };

  const combinedClassName = `${components.button.base} ${variantStyles[variant]} ${className}`;

  const MotionComponent = motion(href ? Link : "button");

  const motionProps = prefersReducedMotion
    ? {}
    : {
        whileHover: hoverAnimations.button,
        whileTap: hoverAnimations.buttonTap,
      };

  if (href) {
    return (
      <MotionComponent href={href} className={combinedClassName} {...motionProps}>
        {icon && <span className="w-5 h-5">{icon}</span>}
        {children}
      </MotionComponent>
    );
  }

  return (
    <MotionComponent onClick={onClick} className={combinedClassName} {...motionProps}>
      {icon && <span className="w-5 h-5">{icon}</span>}
      {children}
    </MotionComponent>
  );
}
