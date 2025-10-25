"use client";

import PageTitle from "@/components/ui/PageTitle";
import TeamProfileCard from "@/components/team/TeamProfileCard";
import TeamGreetingQuote from "@/components/team/TeamGreetingQuote";
import ScrollReveal from "@/components/animation/ScrollReveal";
import { motion } from "framer-motion";
import { teamMembers } from "@/data/team";
import { scrollAnimations } from "@/config/animations";
import { useLanguage } from "@/context/LanguageContext";

export default function TeamPage() {
  const { t } = useLanguage();
  const secretaryGeneral = teamMembers.find((m) => m.role === "secretary-general");
  const deputySecretaries = teamMembers.filter((m) => m.role === "deputy-secretary-general");

  return (
    <div
      className="bg-white"
      style={{
        // backgroundImage: 'url(/images/topography_tile_background.svg)',
        // backgroundRepeat: 'repeat',
        // backgroundSize: '150.6px 140.4px',
        // backgroundPosition: '0 0',
        // imageRendering: 'crisp-edges',
      }}
    >
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
      <section className="py-16 bg-numun-green">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-numun-gold mb-8">
            {t.team.roles.organizingCommittees}
          </h2>
          <p className="text-center text-white text-lg">
            More information coming soon...
          </p>
        </div>
      </section>
    </div>
  );
}
