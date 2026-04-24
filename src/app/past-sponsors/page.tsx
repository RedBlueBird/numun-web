"use client";

import PageTitle from "@/components/ui/PageTitle";
import SectionTitle from "@/components/ui/SectionTitle";
import DisplayCard from "@/components/ui/DisplayCard";
import Image from "next/image";
import { motion } from "framer-motion";
import { pastSponsors } from "@/data/sponsors";
import { scrollAnimations } from "@/config/animations";
import { useLanguage } from "@/context/LanguageContext";
import { sections, spacing, gradients, utils } from "@/config/styles";
import { fonts } from "@/config/fonts";

const TIER_ORDER = ["supporter", "diamond", "gold", "silver", "partner"] as const;
type Tier = typeof TIER_ORDER[number];

const tierConfig: Record<Tier, { container: string; item: string }> = {
  diamond:   { container: "flex flex-wrap justify-center gap-8 max-w-5xl mx-auto", item: "w-full md:w-[46%]" },
  gold:      { container: "flex flex-wrap justify-center gap-6 max-w-6xl mx-auto", item: "w-full md:w-[30%]" },
  silver:    { container: "flex flex-wrap justify-center gap-8 max-w-4xl mx-auto", item: "w-full md:w-[46%]" },
  partner:   { container: "flex flex-wrap justify-center gap-6 max-w-4xl mx-auto", item: "w-full md:w-[30%]" },
  supporter: { container: "flex flex-wrap justify-center gap-6 max-w-4xl mx-auto", item: "w-full md:w-[30%]" },
};

export default function PastSponsorsPage() {
  const { t } = useLanguage();

  const presentTiers = TIER_ORDER.filter((tier) =>
    pastSponsors.some((s) => s.tier === tier)
  );
  const [firstTier, ...remainingTiers] = presentTiers;

  const getTierLabel = (tier: Tier) => t.pastSponsors.tiers[tier];

  return (
    <div className="relative">
      {/* Fake header background */}
      <div className={`absolute top-[-100px] left-0 right-0 h-[100px] ${sections.heroDark} z-40`} />

      {/* Hero Section */}
      <div className={`${utils.relative} ${sections.heroDark} ${utils.overflow.hidden}`}>
        <div className={`${utils.absoluteFill} ${utils.zIndex.base}`}>
          <Image
            src="/images/home_background.webp"
            alt="Background"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className={`${utils.absoluteFill} ${gradients.heroOverlay}`}></div>

        <div className={`${utils.relative} ${utils.zIndex.content}`}>
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

          {firstTier && (
            <div className="pb-8 sm:pb-12">
              <div className={spacing.container}>
                <h2 className={`text-4xl font-bold text-center text-numun-gold-light ${fonts.itcBenguiat}`}>
                  {getTierLabel(firstTier)}
                </h2>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* First tier sponsors */}
      {firstTier && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className={tierConfig[firstTier].container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={scrollAnimations.staggerContainer}
            >
              {pastSponsors
                .filter((s) => s.tier === firstTier)
                .map((sponsor) => (
                  <motion.div key={sponsor.id} variants={scrollAnimations.staggerItem} className={`${tierConfig[firstTier].item} h-full`}>
                    <DisplayCard sponsor={sponsor} tier={firstTier} linkTarget="_blank" />
                  </motion.div>
                ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Remaining tiers */}
      {remainingTiers.map((tier) => (
        <div key={tier}>
          <SectionTitle>{getTierLabel(tier)}</SectionTitle>
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <motion.div
                className={tierConfig[tier].container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={scrollAnimations.staggerContainer}
              >
                {pastSponsors
                  .filter((s) => s.tier === tier)
                  .map((sponsor) => (
                    <motion.div key={sponsor.id} variants={scrollAnimations.staggerItem} className={`${tierConfig[tier].item} h-full`}>
                      <DisplayCard sponsor={sponsor} tier={tier} linkTarget="_blank" />
                    </motion.div>
                  ))}
              </motion.div>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
}
