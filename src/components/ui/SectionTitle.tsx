import Image from "next/image";
import { sections, spacing, typography, gradients, utils } from "@/config/styles";
import { fonts } from "@/config/fonts";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionTitle({ children, className = "" }: SectionTitleProps) {
  return (
    <div className={`${utils.relative} ${sections.heroDark} py-8 sm:py-12 ${utils.overflow.hidden}`}>
      {/* Background image */}
      <div className={`${utils.absoluteFill} ${utils.zIndex.base}`}>
        <Image
          src="/images/home_background.png"
          alt="Background"
          fill
          priority
          className="object-cover"
        />
      </div>
      {/* Green overlay */}
      <div className={`${utils.absoluteFill} ${gradients.heroOverlay}`}></div>

      <div className={`${utils.relative} ${utils.zIndex.content} ${spacing.container}`}>
        <h2 className={`text-4xl font-bold text-center text-numun-gold-light ${className} ${fonts.itcBenguiat}`}>
          {children}
        </h2>
      </div>
    </div>
  );
}
