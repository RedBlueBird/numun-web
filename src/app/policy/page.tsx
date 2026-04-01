"use client";

import PageTitle from "@/components/ui/PageTitle";
import { motion } from "framer-motion";
import { sections, spacing, typography, tokens, components, gradients } from "@/config/styles";
import { scrollAnimations } from "@/config/animations";
import { fonts } from "@/config/fonts";
import { useLanguage } from "@/context/LanguageContext";

const REFUND_POLICY_URL = "https://drive.google.com/file/d/1Gg5-px_jiiK0stJLyfh-QNBfUOmz6wOv/view?usp=sharing";
const DRIVE_URL = "https://drive.google.com/drive/folders/1waApdz40vlpR2Ro7UIOCg_q38L68C_XP";
const REFUND_EMAIL = "externalaffairs.numun.jp@gmail.com";

export default function PolicyPage() {
  const { t } = useLanguage();

  return (
    <div className="relative">
      <div className={`absolute top-[-100px] left-0 right-0 h-[100px] ${sections.heroDark} z-40`} />
      <PageTitle>{t.policy.title}</PageTitle>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={scrollAnimations.staggerContainer}
          >
            {/* 1. Refund Policy */}
            <motion.div
              id="refund-policy"
              variants={scrollAnimations.staggerItem}
              className="bg-numun-beige border-2 border-numun-gold/30 rounded-2xl p-8 scroll-mt-36"
            >
              <div className={`flex items-center ${spacing.gap.md} mb-6`}>
                <span className={`flex-shrink-0 w-10 h-10 rounded-full bg-numun-green text-white flex items-center justify-center font-bold ${fonts.cerebri}`}>
                  1
                </span>
                <h2 className={`text-2xl font-bold text-numun-green ${fonts.itcBenguiat}`}>
                  {t.policy.sections.refundPolicy.title}
                </h2>
              </div>
              <p className={typography.bodyLarge}>{t.policy.sections.refundPolicy.body}</p>
              <a
                href={`mailto:${REFUND_EMAIL}`}
                className={`block mt-4 text-numun-green font-semibold underline hover:text-numun-gold ${tokens.transition.colors} ${fonts.cerebri}`}
              >
                {REFUND_EMAIL}
              </a>
              <div className="mt-4">
                <a
                  href={REFUND_POLICY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${components.button.base} ${gradients.goldGradientDark} text-white ${fonts.cerebri}`}
                >
                  {t.policy.sections.refundPolicy.refundPolicyLinkText}
                </a>
              </div>
            </motion.div>

            {/* 2. AI Usage */}
            <motion.div
              id="ai-usage"
              variants={scrollAnimations.staggerItem}
              className="bg-numun-beige border-2 border-numun-gold/30 rounded-2xl p-8 scroll-mt-36"
            >
              <div className={`flex items-center ${spacing.gap.md} mb-6`}>
                <span className={`flex-shrink-0 w-10 h-10 rounded-full bg-numun-green text-white flex items-center justify-center font-bold ${fonts.cerebri}`}>
                  2
                </span>
                <h2 className={`text-2xl font-bold text-numun-green ${fonts.itcBenguiat}`}>
                  {t.policy.sections.aiUsage.title}
                </h2>
              </div>
              <p className={typography.bodyLarge}>{t.policy.sections.aiUsage.body}</p>
              <div className="mt-4">
                <a
                  href={DRIVE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${components.button.base} ${gradients.goldGradientDark} text-white ${fonts.cerebri}`}
                >
                  {t.policy.sections.aiUsage.rulesLinkText}
                </a>
              </div>
            </motion.div>

            {/* 3. Late Submissions */}
            <motion.div
              id="late-submissions"
              variants={scrollAnimations.staggerItem}
              className="bg-numun-beige border-2 border-numun-gold/30 rounded-2xl p-8 scroll-mt-36"
            >
              <div className={`flex items-center ${spacing.gap.md} mb-6`}>
                <span className={`flex-shrink-0 w-10 h-10 rounded-full bg-numun-green text-white flex items-center justify-center font-bold ${fonts.cerebri}`}>
                  3
                </span>
                <h2 className={`text-2xl font-bold text-numun-green ${fonts.itcBenguiat}`}>
                  {t.policy.sections.lateSubmissions.title}
                </h2>
              </div>
              <p className={typography.bodyLarge}>{t.policy.sections.lateSubmissions.body}</p>
            </motion.div>

            {/* 4. Up-to-Date Information */}
            <motion.div
              id="up-to-date-information"
              variants={scrollAnimations.staggerItem}
              className="bg-numun-beige border-2 border-numun-gold/30 rounded-2xl p-8 scroll-mt-36"
            >
              <div className={`flex items-center ${spacing.gap.md} mb-6`}>
                <span className={`flex-shrink-0 w-10 h-10 rounded-full bg-numun-green text-white flex items-center justify-center font-bold ${fonts.cerebri}`}>
                  4
                </span>
                <h2 className={`text-2xl font-bold text-numun-green ${fonts.itcBenguiat}`}>
                  {t.policy.sections.upToDate.title}
                </h2>
              </div>
              <p className={typography.bodyLarge}>{t.policy.sections.upToDate.body}</p>
              <p className={`${typography.bodyLarge} mt-4`}>{t.policy.sections.upToDate.followUp}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
