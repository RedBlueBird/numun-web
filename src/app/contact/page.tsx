import PageTitle from "@/components/ui/PageTitle";
import ContactMethodCard from "@/components/contact/ContactMethodCard";
import { socialLinks, contactEmail } from "@/data/socialLinks";

export const metadata = {
  title: "Contact Us - NUMUN 2026",
  description: "Get in touch with the NUMUN team. We're here to answer your questions.",
};

export default function ContactPage() {
  return (
    <div>
      <PageTitle>CONTACT US</PageTitle>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-xl text-center text-gray-700 mb-12 italic">
            Got any questions? Feel free to contact us through any of the
            following or through the inquiry form!
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
            <h2 className="text-3xl font-bold text-numun-green mb-8">INQUIRY BOX</h2>
            <div className="relative max-w-2xl mx-auto">
              <div className="bg-numun-beige border-4 border-dashed border-numun-gold rounded-lg p-12 flex flex-col items-center justify-center min-h-[400px]">
                <div className="absolute top-4 right-4 bg-numun-green text-white rounded-full w-16 h-16 flex items-center justify-center transform rotate-12">
                  <span className="text-2xl">&lt;/&gt;</span>
                </div>
                <div className="text-6xl mb-6">📝</div>
                <p className="text-lg text-gray-600 mb-4">Contact form will be integrated here</p>
                <div className="space-y-3 w-full max-w-md">
                  <div className="h-3 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                  <div className="h-3 bg-gray-300 rounded w-2/3"></div>
                  <div className="h-3 bg-gray-300 rounded w-1/4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
