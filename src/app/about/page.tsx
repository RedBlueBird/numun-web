"use client";

import PageTitle from "@/components/ui/PageTitle";
import Image from "next/image";
import { sections, spacing, layout, typography, gradients, tokens, utils } from "@/config/styles";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();
  return (
    <div>
      <PageTitle>{t.about.title}</PageTitle>

      <section className={sections.standardSection}>
        <div className={spacing.container}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Image */}
            <div className={`${layout.aspect.video} relative ${tokens.borderRadius.lg} ${utils.overflow.hidden} ${tokens.shadow.lg} lg:order-2`}>
              <Image
                src="/images/media/about_nagoya_auditorium.png"
                alt={t.about.imageAlt}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-center p-3">
                <p className="font-semibold italic text-sm">{t.about.imageAlt}</p>
              </div>
            </div>

            {/* Text Content */}
            <div className={`${spacing.gap.lg} lg:order-1`}>
              <p className={`${typography.bodyLarge} ${typography.textJustify} mb-4`}>
                {t.about.paragraph1}
              </p>
              <p className={`${typography.bodyLarge} ${typography.textJustify}`}>
                {t.about.paragraph2}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className={sections.standardSection}>
        <div className={spacing.container}>
          <div className={`${layout.grid.twoColumn} ${spacing.gap.lg} ${layout.maxWidth.lg}`}>
            {/* Photo 1 */}
            <div className="rounded-lg overflow-hidden shadow-lg aspect-video relative">
              <Image
                src="/images/media/about_committee_session_1.jpg"
                alt={t.about.quote.description}
                fill
                className="object-cover"
              />
            </div>

            {/* Photo 2 */}
            <div className="rounded-lg overflow-hidden shadow-lg aspect-video relative">
              <Image
                src="/images/media/about_committee_session_2.jpg"
                alt={t.about.quote.description}
                fill
                className="object-cover"
              />
            </div>

            {/* Photo 3 */}
            <div className="rounded-lg overflow-hidden shadow-lg aspect-video relative">
              <Image
                src="/images/media/about_committee_session_3.jpg"
                alt={t.about.quote.description}
                fill
                className="object-cover"
              />
            </div>

            {/* Photo 4 with caption */}
            <div className="space-y-2">
              <div className="rounded-lg overflow-hidden shadow-lg aspect-video relative">
                <Image
                  src="/images/media/about_committee_session_4.jpg"
                  alt={t.about.quote.title}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-right italic text-sm text-numun-green font-semibold">{t.about.quote.title}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
