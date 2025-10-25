"use client";

import Button from "@/components/ui/Button";
import Image from "next/image";
import { sections, spacing, layout, typography, gradients, utils, components } from "@/config/styles";
import { fonts } from "@/config/fonts";
import { FaSearch } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();
  return (
    <section className={`${utils.relative} ${sections.fullHeight} ${layout.flex.centerBoth} ${sections.heroDark} ${utils.overflow.hidden}`}>
      {/* Background image */}
      <div className={`${utils.absoluteFill} ${utils.zIndex.base}`}>
        <Image
          src="/images/home_background.png"
          alt="NUMUN Conference Background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Background overlay - creates green tone over photo */}
      <div className={`${utils.absoluteFill} ${gradients.heroOverlay}`}></div>

      {/* Content */}
      <div className={`${utils.relative} ${utils.zIndex.content} ${spacing.container} ${utils.textCenter} ${layout.flex.column} ${layout.flex.spaceBetween} h-full py-24`}>
        {/* Logo with wreath */}
        <div className={`${layout.flex.centerHorizontal} pt-8`}>
          <div className={`${utils.relative} w-64 h-64`}>
            <Image
              src="/images/logos/numun_logo.png"
              alt="NUMUN Logo with Laurel Wreath"
              width={256}
              height={256}
              priority
              className="object-contain"
            />
          </div>
        </div>

        {/* Coming Soon text */}
        <div className="mb-8 -mt-20">
          <p className={`text-white text-5xl sm:text-6xl font-light mb-2 ${fonts.script}`}>{t.home.comingSoon}</p>
          <h1 className={`${typography.heroTitle} text-numun-gold -mb-8`}>
            {t.common.numun}
          </h1>
          <h1 className={`${typography.heroTitle} text-numun-gold-darkest font-bold`}>
            {t.home.numun2026}
          </h1>
        </div>

        {/* CTA Message */}
        <p className={`text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold ${typography.italic} mb-12 ${layout.maxWidth.lg}`}>
          {t.home.recruitingMessage}
        </p>

        {/* Buttons */}
        <div className={`${layout.flex.column} sm:flex-row ${spacing.gap.lg} ${layout.flex.centerBoth} pb-16`}>
          <Button href="/about" variant="primary" icon={<FaSearch />} className={`w-full sm:w-auto ${components.button.large}`}>
            {t.home.learnAboutButton}
          </Button>
          <Button href="/contact" variant="primary" icon={<FaPen />} className={`w-full sm:w-auto ${components.button.large}`}>
            {t.home.contactButton}
          </Button>
        </div>
      </div>
    </section>
  );
}
