interface PageTitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageTitle({ children, className = "" }: PageTitleProps) {
  return (
    <div className="bg-numun-green-dark py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold text-numun-gold italic ${className}`}>
          {children}
        </h1>
      </div>
    </div>
  );
}
