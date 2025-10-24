import PageTitle from "@/components/ui/PageTitle";
import SectionTitle from "@/components/ui/SectionTitle";
import SponsorCard from "@/components/sponsors/SponsorCard";
import { sponsors } from "@/data/sponsors";

export const metadata = {
  title: "Our Valued Past Sponsors - NUMUN",
  description: "Recognizing our sponsors who made NUMUN 2024 and 2025 possible.",
};

export default function PastSponsorsPage() {
  const diamondSponsors = sponsors.filter((s) => s.tier === "diamond");
  const goldSponsors = sponsors.filter((s) => s.tier === "gold");
  const silverSponsors = sponsors.filter((s) => s.tier === "silver");

  return (
    <div>
      <PageTitle>OUR VALUED PAST SPONSORS</PageTitle>

      <section className="py-12 bg-numun-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <p className="text-center text-numun-green font-semibold leading-relaxed">
            We are grateful to our past sponsors whose generous support has been vital in realizing NUMUN's vision of
            fostering global awareness, promoting diplomacy, and empowering students through meaningful debate and
            cultural exchange. Their contributions were instrumental in the success of NUMUN 2024 and 2025, enabling us
            to deliver impactful conferences that connected aspiring leaders across Japan and beyond.
          </p>
        </div>
      </section>

      {/* Diamond Sponsors */}
      <SectionTitle>OUR DIAMOND SPONSORS</SectionTitle>
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
      <SectionTitle>OUR GOLD SPONSORS</SectionTitle>
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
      <SectionTitle>OUR SILVER SPONSORS</SectionTitle>
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
