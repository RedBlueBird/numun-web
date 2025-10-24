import Button from "@/components/ui/Button";
import Image from "next/image";
import { sections, spacing, layout, typography, gradients, utils, components } from "@/config/styles";
import { FaSearch } from "react-icons/fa";
import { FaPen } from "react-icons/fa";

export default function HeroSection() {
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
        <div className="mb-4 -mt-20">
          <p className={`text-white text-3xl sm:text-4xl ${typography.italic} font-light mb-2`}>Coming Soon</p>
          <h1 className={`${typography.heroTitle} text-numun-gold -mb-8`}>
            NUMUN
          </h1>
          <h1 className={`${typography.heroTitle} text-numun-gold-darkest font-bold`}>
            2026
          </h1>
        </div>

        {/* Tagline */}
        <p className={`text-white text-xl sm:text-2xl md:text-3xl ${typography.italic} font-light mb-8 ${layout.maxWidth.sm}`}>
          "Driving growth, elevating impact"
        </p>

        {/* CTA Message */}
        <p className={`text-white text-2xl sm:text-3xl md:text-4xl font-bold ${typography.italic} mb-12`}>
          Now recruiting sponsors & partners!
        </p>

        {/* Buttons */}
        <div className={`${layout.flex.column} sm:flex-row ${spacing.gap.lg} ${layout.flex.centerBoth} pb-16`}>
          <Button href="/about" variant="primary" icon={<FaSearch />} className={`w-full sm:w-auto ${components.button.large}`}>
            LEARN ABOUT NUMUN
          </Button>
          <Button href="/contact" variant="primary" icon={<FaPen />} className={`w-full sm:w-auto ${components.button.large}`}>
            CONTACT US
          </Button>
        </div>
      </div>
    </section>
  );
}
