import PageTitle from "@/components/ui/PageTitle";
import Image from "next/image";

export const metadata = {
  title: "About Us - NUMUN 2026",
  description: "Learn about Nagoya University Model United Nations and our mission to foster global dialogue.",
};

export default function AboutPage() {
  return (
    <div>
      <PageTitle>ABOUT US</PageTitle>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                The Nagoya University Model United Nations is a landmark affair
                stimulating academic discussion among students. Held annually at
                Nagoya University, the event hosts delegates from high schools and
                universities all over
                Japan and abroad.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                The purpose of
                NUMUN is to provide
                a platform for youth
                to engage with
                contemporary
                affairs. By stepping
                into the role of a UN
                delegate, students
                represent their respective nations, research global issues and
                articulate their positions in committees. In the process, they hone
                their critical thinking, communication and negotiation skills, build
                international networks and develop as future leaders prepared to
                engage with the world's most pressing challenges.
              </p>
            </div>

            {/* Image */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-video bg-gradient-to-br from-numun-green to-numun-green-dark flex items-center justify-center text-white">
                <div className="text-center p-8">
                  <p className="text-sm mb-2">📍</p>
                  <p className="font-semibold italic text-lg">Nagoya University, Toyoda Auditorium</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-16 bg-numun-beige">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Photo 1 */}
            <div className="rounded-lg overflow-hidden shadow-lg aspect-video bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
              <span className="text-6xl">👥</span>
            </div>

            {/* Photo 2 */}
            <div className="rounded-lg overflow-hidden shadow-lg aspect-video bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center">
              <span className="text-6xl">💼</span>
            </div>

            {/* Photo 3 */}
            <div className="rounded-lg overflow-hidden shadow-lg aspect-video bg-gradient-to-br from-gray-500 to-gray-600 flex items-center justify-center">
              <span className="text-6xl">🎓</span>
            </div>

            {/* Photo 4 with caption */}
            <div className="space-y-2">
              <div className="rounded-lg overflow-hidden shadow-lg aspect-video bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center">
                <span className="text-6xl">📝</span>
              </div>
              <p className="text-right italic text-sm text-gray-600">NUMUN 2024, Committee Sessions</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
