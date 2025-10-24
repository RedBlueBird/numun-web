import { sections, spacing, typography } from "@/config/styles";

interface PageTitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageTitle({ children, className = "" }: PageTitleProps) {
  return (
    <div className={`${sections.heroDark} ${spacing.section.medium} sm:py-20`}>
      <div className={spacing.container}>
        <h1 className={`${typography.pageTitle} ${className}`}>
          {children}
        </h1>
      </div>
    </div>
  );
}
