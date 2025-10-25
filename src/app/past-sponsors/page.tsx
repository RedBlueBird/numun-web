"use client";

import PageTitle from "@/components/ui/PageTitle";
import SectionTitle from "@/components/ui/SectionTitle";
import SponsorCard from "@/components/sponsors/SponsorCard";
import { sponsors } from "@/data/sponsors";
import { useLanguage } from "@/context/LanguageContext";

export default function PastSponsorsPage() {
  const { t } = useLanguage();
  const diamondSponsors = sponsors.filter((s) => s.tier === "diamond");
  const goldSponsors = sponsors.filter((s) => s.tier === "gold");
  const silverSponsors = sponsors.filter((s) => s.tier === "silver");

  return (
    <div>
      <PageTitle>{t.pastSponsors.title}</PageTitle>

      <section className="py-12 bg-numun-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <p className="text-center text-numun-green font-semibold leading-relaxed">
            {t.pastSponsors.description}
          </p>
        </div>
      </section>

      {/* Diamond Sponsors */}
      <SectionTitle>{t.pastSponsors.tiers.diamond}</SectionTitle>
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {diamondSponsors.map((sponsor) => (
              <SponsorCard key={sponsor.id} sponsor={sponsor} tier="diamond" />
            ))}
          </div>
        </div>
      </section>

      {/* Gold Sponsors */}
      <SectionTitle>{t.pastSponsors.tiers.gold}</SectionTitle>
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {goldSponsors.map((sponsor) => (
              <SponsorCard key={sponsor.id} sponsor={sponsor} tier="gold" />
            ))}
          </div>
        </div>
      </section>

      {/* Silver Sponsors */}
      <SectionTitle>{t.pastSponsors.tiers.silver}</SectionTitle>
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {silverSponsors.map((sponsor) => (
              <SponsorCard key={sponsor.id} sponsor={sponsor} tier="silver" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
