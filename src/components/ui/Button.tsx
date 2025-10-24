import Link from "next/link";
import { ReactNode } from "react";
import { components, gradients } from "@/config/styles";
import { fonts } from "@/config/fonts";

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
  const variantStyles = {
    primary: `${gradients.goldGradientDark} text-white`,
    secondary: "bg-numun-green hover:bg-numun-green-dark text-white",
    outline: "border-2 border-numun-gold text-numun-gold hover:bg-numun-gold hover:text-numun-green-dark",
  };

  const combinedClassName = `${components.button.base} ${variantStyles[variant]} ${className}`;

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
