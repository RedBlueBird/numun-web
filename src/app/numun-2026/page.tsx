import PageTitle from "@/components/ui/PageTitle";
import Button from "@/components/ui/Button";
import { sponsorshipTiers } from "@/data/sponsors";
import { sections, spacing, layout, typography, gradients, utils, components, tokens } from "@/config/styles";

export const metadata = {
  title: "NUMUN 2026 - Partner with Us",
  description: "Support youth leadership and global dialogue by partnering with NUMUN 2026.",
};

export default function Numun2026Page() {
  return (
    <div>
      {/* Hero Section */}
      <section className={`${utils.relative} ${sections.partialHeight} ${layout.flex.centerBoth} ${sections.heroDark} ${utils.overflow.hidden}`}>
        <div className={`${utils.absoluteFill} ${gradients.heroOverlay}`}></div>

        <div className={`${utils.relative} ${utils.zIndex.content} ${spacing.container} ${utils.textCenter}`}>
          <h1 className={`${typography.pageTitle} mb-6`}>
            PARTNER WITH NUMUN
          </h1>
          <p className={`text-white text-xl sm:text-2xl ${typography.italic} mb-8`}>Support youth leadership and global dialogue</p>

          <div className="mb-12">
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <div className="w-32 h-32 rounded-full border-8 border-numun-gold flex items-center justify-center bg-numun-green">
                <span className="text-4xl">🌐</span>
              </div>
            </div>

            {/* Quote */}
            <div className="max-w-2xl mx-auto mb-8 border-l-4 border-numun-gold pl-6">
              <p className="text-white text-2xl sm:text-3xl font-bold mb-2">Driving growth, elevating impact</p>
              <p className="text-white text-lg">
                In achieving a greater impact, NUMUN 2026 aims to recruit more
                participants than ever before by committing to deliver a high quality
                conference experience that inspires meaningful debate and lasting
                connections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`${spacing.section.small} ${sections.contentBeige}`}>
        <div className={spacing.container}>
          <div className={`${layout.grid.twoColumn} ${spacing.gap.xl} ${layout.maxWidth.md} ${utils.textCenter}`}>
            <div className={components.stat.container}>
              <p className={components.stat.sublabel}>MEET OUR</p>
              <p className={components.stat.number}>400+</p>
              <p className={components.stat.label}>DELEGATES</p>
            </div>
            <div className={components.stat.container}>
              <p className={components.stat.sublabel}>FROM</p>
              <p className={components.stat.number}>20+</p>
              <p className={components.stat.label}>COUNTRIES</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Exposure */}
      <section className={sections.standardSection}>
        <div className={`${spacing.container} ${utils.textCenter}`}>
          <h2 className={`${typography.sectionTitle} mb-4`}>SOCIAL MEDIA EXPOSURE</h2>
          <p className={`${typography.bodyLarge} mb-12 ${layout.maxWidth.sm}`}>
            Over the past few years, NUMUN have been featured in various social media platforms, including:
          </p>

          <div className={`${layout.grid.fourColumn} ${spacing.gap.xl} ${layout.maxWidth.md}`}>
            <div className="flex flex-col items-center">
              <div className="text-6xl mb-2">📺</div>
              <p className="font-semibold text-numun-green">2023</p>
              <p className="text-sm text-gray-600">NHK</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-6xl mb-2">📰</div>
              <p className="font-semibold text-numun-green">2024</p>
              <p className="text-sm text-gray-600">中日新聞</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-6xl mb-2">📻</div>
              <p className="font-semibold text-numun-green">2025</p>
              <p className="text-sm text-gray-600">Aichi News</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-6xl mb-2">🎓</div>
              <p className="font-semibold text-numun-green">2025</p>
              <p className="text-sm text-gray-600">PBL</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className={sections.standardSectionDark}>
        <div className={spacing.container}>
          <h2 className={`${typography.sectionTitleLight} ${utils.textCenter} mb-4`}>SPONSORSHIP LEVELS</h2>
          <p className={`${utils.textCenter} text-white mb-12 ${layout.maxWidth.sm}`}>
            NUMUN offers 3 different levels of sponsorship with the higher levels of sponsorship having the merits of the lower levels
            as well as additional ones as explained briefly below:
          </p>

          <div className="max-w-5xl mx-auto bg-gradient-to-br from-numun-beige to-white rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Silver Tier */}
              <div className="bg-gray-200 rounded-2xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold text-center mb-4 text-numun-green">SILVER - 30,000円</h3>
                <ul className="space-y-3 text-sm">
                  {sponsorshipTiers[0].benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-numun-green">•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Gold Tier */}
              <div className="bg-gradient-to-br from-numun-gold-light to-numun-gold rounded-2xl p-6 shadow-xl transform md:scale-105">
                <h3 className="text-2xl font-bold text-center mb-4 text-numun-green-dark">GOLD - 50,000円</h3>
                <ul className="space-y-3 text-sm text-numun-green-dark">
                  {sponsorshipTiers[1].benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span>•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Diamond Tier */}
              <div className="bg-gradient-to-br from-blue-200 to-blue-300 rounded-2xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold text-center mb-4 text-numun-green-dark">DIAMOND - 70,000円</h3>
                <ul className="space-y-3 text-sm text-numun-green-dark">
                  {sponsorshipTiers[2].benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span>•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`${spacing.section.medium} ${sections.contentGreen} ${utils.textCenter}`}>
        <h2 className={`${typography.sectionTitleGold} text-4xl sm:text-5xl ${typography.italic} mb-8`}>
          INTERESTED IN LEARNING MORE?
        </h2>
        <div className={`${layout.flex.column} sm:flex-row ${spacing.gap.lg} ${layout.flex.centerBoth}`}>
          <Button href="/contact" variant="primary" className={components.button.large}>
            🔍 INQUIRE HERE
          </Button>
          <Button href="/past-sponsors" variant="primary" className={components.button.large}>
            📊 PAST SPONSORS
          </Button>
        </div>
      </section>
    </div>
  );
}
