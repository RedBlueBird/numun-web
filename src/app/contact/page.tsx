"use client";

import PageTitle from "@/components/ui/PageTitle";
import ContactMethodCard from "@/components/contact/ContactMethodCard";
import ContactForm from "@/components/contact/ContactForm";
import { socialLinks, contactEmail } from "@/data/socialLinks";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();
  return (
    <div>
      <PageTitle>{t.contact.title}</PageTitle>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-xl text-center text-gray-700 mb-12 italic">
            {t.contact.intro}
          </p>

          {/* Contact Methods */}
          <div className="space-y-6 mb-16">
            {socialLinks.map((social) => (
              <ContactMethodCard
                key={social.platform}
                platform={social.platform}
                url={social.url}
                displayText={social.url}
              />
            ))}
            <ContactMethodCard
              url={`mailto:${contactEmail}`}
              displayText={contactEmail}
              isEmail
            />
          </div>

          {/* Inquiry Box */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-numun-green mb-8">{t.contact.inquiryBox}</h2>
            <div className="bg-numun-beige border-4 border-numun-gold rounded-lg p-8 md:p-12">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
