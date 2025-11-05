"use client";

import PageTitle from "@/components/ui/PageTitle";
import SectionTitle from "@/components/ui/SectionTitle";
import SponsorCard from "@/components/sponsors/SponsorCard";
import { motion } from "framer-motion";
import { sponsors } from "@/data/sponsors";
import { scrollAnimations } from "@/config/animations";
import { useLanguage } from "@/context/LanguageContext";
import { sections } from "@/config/styles";

export default function PastSponsorsPage() {
  const { t } = useLanguage();
  const diamondSponsors = sponsors.filter((s) => s.tier === "diamond");
  const goldSponsors = sponsors.filter((s) => s.tier === "gold");
  const silverSponsors = sponsors.filter((s) => s.tier === "silver");

  return (
    <div className="relative">
      {/* Fake header background - absolute at top of page, provides dark green backdrop behind transparent header */}
      <div className={`absolute top-[-100px] left-0 right-0 h-[100px] ${sections.heroDark} z-40`} />

      <PageTitle>{t.pastSponsors.title}</PageTitle>

      <section className={`py-12 ${sections.contentBeige}`}>
        <div className={`container mx-auto px-4 max-w-6xl`}>
          <p className="text-center text-numun-green font-semibold leading-relaxed">
            {t.pastSponsors.description}
          </p>
        </div>
      </section>

      {/* Diamond Sponsors */}
      <SectionTitle>{t.pastSponsors.tiers.diamond}</SectionTitle>
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
