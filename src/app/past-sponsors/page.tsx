"use client";

import PageTitle from "@/components/ui/PageTitle";
import SectionTitle from "@/components/ui/SectionTitle";
import SponsorCard from "@/components/sponsors/SponsorCard";
import Image from "next/image";
import { motion } from "framer-motion";
import { sponsors } from "@/data/sponsors";
import { scrollAnimations } from "@/config/animations";
import { useLanguage } from "@/context/LanguageContext";
import { sections, spacing, typography, gradients, utils } from "@/config/styles";
import { fonts } from "@/config/fonts";

export default function PastSponsorsPage() {
  const { t } = useLanguage();
  const diamondSponsors = sponsors.filter((s) => s.tier === "diamond");
  const goldSponsors = sponsors.filter((s) => s.tier === "gold");
  const silverSponsors = sponsors.filter((s) => s.tier === "silver");

  return (
    <div className="relative">
      {/* Fake header background - absolute at top of page, provides dark green backdrop behind transparent header */}
      <div className={`absolute top-[-100px] left-0 right-0 h-[100px] ${sections.heroDark} z-40`} />

      {/* Unified Hero Section with Title and Diamond Section Title */}
      <div className={`${utils.relative} ${sections.heroDark} ${utils.overflow.hidden}`}>
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

        {/* Content */}
        <div className={`${utils.relative} ${utils.zIndex.content}`}>
          {/* Page Title Section */}
          <div className="py-16 sm:py-20">
            <div className="w-full px-12 sm:px-16 md:px-24 lg:px-32">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 items-center max-w-7xl mx-auto">
                <div className="lg:col-span-8 text-left">
                  <PageTitle.Heading>{t.pastSponsors.title}</PageTitle.Heading>
                  <div className="mb-0">
                    <PageTitle.Description>
                      {t.pastSponsors.description}
                    </PageTitle.Description>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Diamond Section Title */}
          <div className="pb-8 sm:pb-12">
            <div className={spacing.container}>
              <h2 className={`text-4xl font-bold text-center text-numun-gold-light ${fonts.itcBenguiat}`}>
                {t.pastSponsors.tiers.diamond}
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Diamond Sponsors */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={scrollAnimations.staggerContainer}
          >
            {diamondSponsors.map((sponsor) => (
              <motion.div key={sponsor.id} variants={scrollAnimations.staggerItem} className="h-full">
                <SponsorCard sponsor={sponsor} tier="diamond" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gold Sponsors */}
      <SectionTitle>{t.pastSponsors.tiers.gold}</SectionTitle>
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={scrollAnimations.staggerContainer}
          >
            {goldSponsors.map((sponsor) => (
              <motion.div key={sponsor.id} variants={scrollAnimations.staggerItem} className="h-full">
                <SponsorCard sponsor={sponsor} tier="gold" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Silver Sponsors */}
      <SectionTitle>{t.pastSponsors.tiers.silver}</SectionTitle>
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={scrollAnimations.staggerContainer}
          >
            {silverSponsors.map((sponsor) => (
              <motion.div key={sponsor.id} variants={scrollAnimations.staggerItem} className="h-full">
                <SponsorCard sponsor={sponsor} tier="silver" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
