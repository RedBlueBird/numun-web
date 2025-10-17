import PageTitle from "@/components/ui/PageTitle";
import Button from "@/components/ui/Button";
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

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <p className="text-center text-gray-700 mb-12 leading-relaxed">
            We are grateful to our past sponsors whose generous support has been vital in realizing NUMUN's vision of
            fostering global awareness, promoting diplomacy, and empowering students through meaningful debate and
            cultural exchange. Their contributions were instrumental in the success of NUMUN 2024 and 2025, enabling us
            to deliver impactful conferences that connected aspiring leaders across Japan and beyond.
          </p>
        </div>
      </section>

      {/* Diamond Sponsors */}
      <section className="py-12 bg-numun-green-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-numun-gold mb-12">OUR DIAMOND SPONSORS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {diamondSponsors.map((sponsor) => (
              <div key={sponsor.id} className="bg-white rounded-lg p-8 shadow-lg text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-numun-beige rounded-lg flex items-center justify-center">
                  <span className="text-4xl">🏆</span>
                </div>
                <h3 className="text-xl font-bold text-numun-green mb-3">{sponsor.name}</h3>
                <p className="text-gray-700 text-sm mb-6">{sponsor.description}</p>
                <Button href={sponsor.website || "#"} variant="primary" className="text-sm">
                  🔍 LEARN MORE
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gold Sponsors */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-numun-green mb-12">OUR GOLD SPONSORS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {goldSponsors.map((sponsor) => (
              <div key={sponsor.id} className="bg-numun-beige rounded-lg p-6 shadow-lg text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-3xl">🥇</span>
                </div>
                <h3 className="text-lg font-bold text-numun-green mb-2">{sponsor.name}</h3>
                <p className="text-gray-700 text-xs mb-4">{sponsor.description}</p>
                <Button href={sponsor.website || "#"} variant="primary" className="text-xs">
                  🔍 LEARN MORE
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Silver Sponsors */}
      <section className="py-12 bg-numun-green-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-numun-gold mb-12">OUR SILVER SPONSORS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {silverSponsors.map((sponsor) => (
              <div key={sponsor.id} className="bg-white rounded-lg p-8 shadow-lg text-center">
                <div className="w-28 h-28 mx-auto mb-4 bg-numun-beige rounded-lg flex items-center justify-center">
                  <span className="text-4xl">🥈</span>
                </div>
                <h3 className="text-xl font-bold text-numun-green mb-3">{sponsor.name}</h3>
                <p className="text-gray-700 text-sm mb-6">{sponsor.description}</p>
                <Button href={sponsor.website || "#"} variant="primary" className="text-sm">
                  🔍 LEARN MORE
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
