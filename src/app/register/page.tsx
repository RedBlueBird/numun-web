"use client";

import PageTitle from "@/components/ui/PageTitle";
import { motion } from "framer-motion";
import { scrollAnimations } from "@/config/animations";
import { sections, components, gradients, tokens, typography } from "@/config/styles";
import { fonts } from "@/config/fonts";
import { useLanguage } from "@/context/LanguageContext";

const FORM_URL = "https://forms.gle/29QvdsevFMzV7iYY8";
const DRIVE_URL = "https://drive.google.com/drive/folders/1waApdz40vlpR2Ro7UIOCg_q38L68C_XP";

export default function RegisterPage() {
  const { t } = useLanguage();

  return (
    <div className="relative">
      <div className={`absolute top-[-100px] left-0 right-0 h-[100px] ${sections.heroDark} z-40`} />
      <PageTitle>{t.register.title}</PageTitle>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={scrollAnimations.staggerContainer}
          >
            {/* Registration Process */}
            <motion.div
              variants={scrollAnimations.staggerItem}
              className="bg-numun-beige border-2 border-numun-gold/30 rounded-2xl p-8"
            >
              <h2 className={`text-2xl font-bold text-numun-green mb-6 ${fonts.itcBenguiat}`}>
                {t.register.process.title}
              </h2>
              <ol className="space-y-4">
                {[
                  t.register.process.step1,
                  t.register.process.step2,
                  t.register.process.step3,
                  t.register.process.step4,
                ].map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span
                      className={`flex-shrink-0 w-8 h-8 rounded-full bg-numun-green text-white flex items-center justify-center font-bold text-sm ${fonts.cerebri}`}
                    >
                      {i + 1}
                    </span>
                    <p className={`${typography.bodyLarge} pt-1`}>{step}</p>
                  </li>
                ))}
              </ol>
            </motion.div>

            {/* Individual Registration */}
            <motion.div
              variants={scrollAnimations.staggerItem}
              className="bg-numun-beige border-2 border-numun-gold/30 rounded-2xl p-8"
            >
              <h2 className={`text-2xl font-bold text-numun-green mb-4 ${fonts.itcBenguiat}`}>
                {t.register.individual.title}
              </h2>
              <p className={`${typography.bodyLarge} mb-6`}>{t.register.individual.description}</p>
              <a
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${components.button.base} ${gradients.goldGradientDark} text-white ${fonts.cerebri}`}
              >
                {t.register.individual.button}
              </a>
            </motion.div>

            {/* Group Registration & Discount */}
            <motion.div
              variants={scrollAnimations.staggerItem}
              className="bg-numun-beige border-2 border-numun-gold/30 rounded-2xl p-8"
            >
              <h2 className={`text-2xl font-bold text-numun-green mb-4 ${fonts.itcBenguiat}`}>
                {t.register.group.title}
              </h2>
              <p className={`${typography.bodyLarge} mb-6`}>{t.register.group.description}</p>
              <div className="flex flex-col gap-3 mb-6">
                <a
                  href={`mailto:${t.register.group.emailUs}`}
                  className={`text-numun-green font-semibold underline hover:text-numun-gold ${tokens.transition.colors} ${fonts.cerebri}`}
                >
                  {t.register.group.emailUs}
                </a>
                <a
                  href={DRIVE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${components.button.base} ${gradients.goldGradientDark} text-white ${fonts.cerebri} self-start`}
                >
                  {t.register.group.downloadForm}
                </a>
              </div>
              <hr className="border-numun-gold/30 mb-6" />
              <h3 className={`text-xl font-bold text-numun-green mb-3 ${fonts.itcBenguiat}`}>
                {t.register.discount.title}
              </h3>
              <p className={typography.bodyLarge}>{t.register.discount.description}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
