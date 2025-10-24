import { ReactNode } from "react";
import { components } from "@/config/styles";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "decorative";
}

export default function Card({ children, className = "", variant = "default" }: CardProps) {
  const variantStyles = {
    default: components.card.withShadow,
    decorative: components.card.decorative,
  };

  return (
    <div className={`${variantStyles[variant]} ${className}`}>
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
    </div>
  );
}
