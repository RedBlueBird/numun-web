import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "decorative";
}

export default function Card({ children, className = "", variant = "default" }: CardProps) {
  const baseStyles = "bg-white rounded-lg overflow-hidden";

  const variantStyles = {
    default: "shadow-md hover:shadow-lg transition-shadow",
    decorative: "border-4 border-numun-gold relative",
  };

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {variant === "decorative" && (
        <>
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-numun-gold"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-numun-gold"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-numun-gold"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-numun-gold"></div>
        </>
      )}
      {children}
    </div>
  );
}
