"use client";

import PageTitle from "@/components/ui/PageTitle";
import TeamProfileCard from "@/components/team/TeamProfileCard";
import TeamGreetingQuote from "@/components/team/TeamGreetingQuote";
import TeamCarousel from "@/components/team/TeamCarousel";
import ScrollReveal from "@/components/animation/ScrollReveal";
import { motion } from "framer-motion";
import { teamMembers } from "@/data/team";
import { scrollAnimations } from "@/config/animations";
import { useLanguage } from "@/context/LanguageContext";
import { sections, spacing } from "@/config/styles";

export default function TeamPage() {
  const { t } = useLanguage();
  const secretaryGeneral = teamMembers.find((m) => m.role === "secretary-general");
  const deputySecretaries = teamMembers.filter((m) => m.role === "deputy-secretary-general");
  const organizingCommittees = teamMembers.filter((m) => m.role === "organizing-committee");

  return (
    <div
      className="bg-white relative"
    >
      {/* Fake header background - absolute at top of page, provides dark green backdrop behind transparent header */}
      <div className={`absolute top-[-100px] left-0 right-0 h-[100px] ${sections.heroDark} z-40`} />

      <PageTitle>{t.team.title}</PageTitle>

      {/* Secretary General */}
      {secretaryGeneral && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Profile Card */}
              <ScrollReveal variant="slideRight">
                <TeamProfileCard
                  name={secretaryGeneral.name}
                  affiliation={secretaryGeneral.affiliation}
                  photo={secretaryGeneral.photo}
                  size="large"
                  priority={true}
                />
              </ScrollReveal>

              {/* Title and Quote */}
              <ScrollReveal variant="slideLeft" delay={0.2}>
                <div>
                  <h2 className="text-4xl font-bold text-numun-green mb-6">
                    {t.team.roles.secretaryGeneral}
                  </h2>
                  <TeamGreetingQuote
                    greeting={secretaryGeneral.greeting}
                    size="small"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      )}

      {/* Deputy Secretary Generals */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <ScrollReveal variant="slideUp">
            <h2 className="text-4xl font-bold text-center text-numun-green mb-12">
              {t.team.roles.deputySecretaryGeneral}
            </h2>
          </ScrollReveal>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-[auto_1fr] gap-x-12 gap-y-6 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={scrollAnimations.staggerContainer}
          >
            {/* Profile Cards Row */}
            {deputySecretaries.map((member) => (
              <motion.div key={`${member.id}-profile`} variants={scrollAnimations.staggerItem}>
                <TeamProfileCard
                  name={member.name}
                  affiliation={member.affiliation}
                  photo={member.photo}
                  size="small"
                />
              </motion.div>
            ))}

            {/* Greeting Quotes Row */}
            {deputySecretaries.map((member) => (
              <motion.div key={`${member.id}-quote`} variants={scrollAnimations.staggerItem}>
                <TeamGreetingQuote greeting={member.greeting} size="small" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Organizing Committees */}
      <section className={`${spacing.section.medium} ${sections.contentGreen}`}>
        <div className={spacing.container}>
          <ScrollReveal variant="slideUp">
            <h2 className="text-4xl font-bold text-center text-numun-gold mb-12">
              {t.team.roles.organizingCommittees}
            </h2>
          </ScrollReveal>
          <ScrollReveal variant="slideUp" delay={0.2}>
            <TeamCarousel teams={organizingCommittees} />
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
