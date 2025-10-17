import PageTitle from "@/components/ui/PageTitle";
import Card from "@/components/ui/Card";
import { teamMembers } from "@/data/team";

export const metadata = {
  title: "Our Team - NUMUN 2026",
  description: "Meet the team behind NUMUN 2026.",
};

export default function TeamPage() {
  const secretaryGeneral = teamMembers.find((m) => m.role === "secretary-general");
  const deputySecretaries = teamMembers.filter((m) => m.role === "deputy-secretary-general");

  return (
    <div>
      <section className="bg-numun-green-dark py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-numun-gold text-4xl sm:text-5xl md:text-6xl font-bold italic mb-4">
            OUR TEAM
          </h1>
          <p className="text-white text-lg italic">
            Meet our beloved team members which has made NUMUN 2026 happen!
          </p>
        </div>
      </section>

      {/* Secretary General */}
      {secretaryGeneral && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Profile Card */}
              <div className="flex justify-center">
                <Card variant="decorative" className="w-full max-w-sm">
                  <div className="aspect-[3/4] bg-gradient-to-br from-blue-200 to-green-200 flex items-center justify-center">
                    <span className="text-8xl">☁️</span>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-numun-green">{secretaryGeneral.name}</h3>
                    <p className="text-sm text-gray-600">{secretaryGeneral.affiliation}</p>
                  </div>
                </Card>
              </div>

              {/* Title and Quote */}
              <div>
                <h2 className="text-4xl font-bold text-numun-green mb-6">
                  SECRETARY<br />GENERAL
                </h2>
                <div className="bg-numun-beige border-l-4 border-t-4 border-numun-gold rounded-lg p-6 relative">
                  <div className="absolute -top-4 left-6 text-4xl text-numun-gold">"</div>
                  <p className="text-center text-lg mb-4 mt-4">{secretaryGeneral.greeting}</p>
                  <div className="absolute -bottom-4 right-6 text-4xl text-numun-gold">"</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Deputy Secretary Generals */}
      <section className="py-16 bg-numun-beige">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-numun-green mb-12">
            DEPUTY SECRETARY GENERAL
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {deputySecretaries.map((member) => (
              <div key={member.id} className="space-y-6">
                {/* Profile Card */}
                <div className="flex justify-center">
                  <Card variant="decorative" className="w-full max-w-xs">
                    <div className="aspect-[3/4] bg-gradient-to-br from-blue-200 to-green-200 flex items-center justify-center">
                      <span className="text-6xl">☁️</span>
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="text-lg font-bold text-numun-green">{member.name}</h3>
                      <p className="text-xs text-gray-600">{member.affiliation}</p>
                    </div>
                  </Card>
                </div>

                {/* Quote Box */}
                <div className="bg-white border-l-4 border-t-4 border-numun-gold rounded-lg p-6 relative">
                  <div className="absolute -top-3 left-4 text-3xl text-numun-gold">"</div>
                  <p className="text-center mb-2 mt-2">{member.greeting}</p>
                  <div className="absolute -bottom-3 right-4 text-3xl text-numun-gold">"</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizing Committees */}
      <section className="py-16 bg-numun-green-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-numun-gold mb-8">
            ORGANIZING COMITEES
          </h2>
          <p className="text-center text-white text-lg">
            More information coming soon...
          </p>
        </div>
      </section>
    </div>
  );
}
