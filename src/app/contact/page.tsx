"use client";

import PageTitle from "@/components/ui/PageTitle";
import ContactMethodCard from "@/components/contact/ContactMethodCard";
import ContactForm from "@/components/contact/ContactForm";
import { motion } from "framer-motion";
import { socialLinks, contactEmail } from "@/data/socialLinks";
import { scrollAnimations } from "@/config/animations";
import { useLanguage } from "@/context/LanguageContext";
import { sections } from "@/config/styles";

export default function ContactPage() {
  const { t } = useLanguage();
  return (
    <div className="relative">
      {/* Fake header background - absolute at top of page, provides dark green backdrop behind transparent header */}
      <div className={`absolute top-[-100px] left-0 right-0 h-[100px] ${sections.heroDark} z-40`} />
      <PageTitle>{t.contact.title}</PageTitle>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* TODO: Contact form to be implemented - Original intro message */}
          {/* <p className="text-xl text-center text-gray-700 mb-12 italic">
            {t.contact.intro}
          </p> */}
          <p className="text-xl text-center text-gray-700 mb-12 italic">
            Got any questions? Feel free to contact us through any of the following!
          </p>

          {/* Contact Methods */}
          <motion.div
            className="space-y-6 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={scrollAnimations.staggerContainer}
          >
            {socialLinks.map((social) => (
              <motion.div key={social.platform} variants={scrollAnimations.staggerItem}>
                <ContactMethodCard
                  platform={social.platform}
                  url={social.url}
                  displayText={social.url}
                />
              </motion.div>
            ))}
            <motion.div variants={scrollAnimations.staggerItem}>
              <ContactMethodCard
                url={`mailto:${contactEmail}`}
                displayText={contactEmail}
                isEmail
              />
            </motion.div>
          </motion.div>

          {/* TODO: Contact form to be implemented - Don't delete this code */}
          {/* Inquiry Box */}
          {/* <div className="text-center">
            <h2 className="text-3xl font-bold text-numun-green mb-8">{t.contact.inquiryBox}</h2>
            <div className="bg-numun-beige border-4 border-numun-gold rounded-lg p-8 md:p-12">
              <ContactForm />
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
}
