import PageTitle from "@/components/ui/PageTitle";
import Image from "next/image";
import { sections, spacing, layout, typography, gradients, tokens, utils } from "@/config/styles";

export const metadata = {
  title: "About Us - NUMUN 2026",
  description: "Learn about Nagoya University Model United Nations and our mission to foster global dialogue.",
};

export default function AboutPage() {
  return (
    <div>
      <PageTitle>ABOUT US</PageTitle>

      <section className={sections.standardSection}>
        <div className={spacing.container}>
          <div className={`${layout.grid.twoColumn} ${spacing.gap.xxl} items-center ${layout.maxWidth.xl}`}>
            {/* Text Content */}
            <div className={spacing.gap.lg}>
              <p className={`${typography.bodyLarge} ${typography.textJustify}`}>
                The Nagoya University Model United Nations is a landmark affair
                stimulating academic discussion among students. Held annually at
                Nagoya University, the event hosts delegates from high schools and
                universities all over
                Japan and abroad.
              </p>

              <p className={`${typography.bodyLarge} ${typography.textJustify}`}>
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
            <div className={`${layout.aspect.video} ${gradients.greenGradient} ${layout.flex.centerBoth} text-white ${tokens.borderRadius.lg} ${utils.overflow.hidden} ${tokens.shadow.lg}`}>
              <div className="text-center p-8">
                <p className="text-sm mb-2">📍</p>
                <p className="font-semibold italic text-lg">Nagoya University, Toyoda Auditorium</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className={sections.standardSectionBeige}>
        <div className={spacing.container}>
          <div className={`${layout.grid.twoColumn} ${spacing.gap.lg} ${layout.maxWidth.lg}`}>
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
