import Link from "next/link";
import { ReactNode } from "react";

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
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium text-sm sm:text-base transition-colors duration-200";

  const variantStyles = {
    primary: "bg-numun-gold hover:bg-numun-gold-light text-numun-green-dark",
    secondary: "bg-numun-green hover:bg-numun-green-dark text-white",
    outline: "border-2 border-numun-gold text-numun-gold hover:bg-numun-gold hover:text-numun-green-dark",
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {icon && <span className="w-5 h-5">{icon}</span>}
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {icon && <span className="w-5 h-5">{icon}</span>}
      {children}
    </button>
  );
}
