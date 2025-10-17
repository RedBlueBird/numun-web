import Link from "next/link";
import { navigationItems } from "@/data/navigation";
import SocialLinks from "@/components/ui/SocialLinks";
import { contactEmail } from "@/data/socialLinks";

export default function Footer() {
  return (
    <footer className="bg-numun-green-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-numun-gold rounded-full flex items-center justify-center">
                <span className="text-2xl">🌐</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-wider">NUMUN</span>
                <span className="text-xs text-numun-gold uppercase">Nagoya University Model United Nations</span>
              </div>
            </Link>
            <p className="text-sm text-gray-300">
              Fostering global awareness, promoting diplomacy, and empowering students through meaningful debate and cultural exchange.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-numun-gold font-bold mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              {navigationItems.slice(0, 4).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm hover:text-numun-gold transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-numun-gold font-bold mb-4">Contact Us</h3>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${contactEmail}`}
                className="text-sm hover:text-numun-gold transition-colors"
              >
                {contactEmail}
              </a>
              <SocialLinks />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-numun-green pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Nagoya University Model United Nations. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
