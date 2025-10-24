import Link from "next/link";
import Image from "next/image";
import { navigationItems } from "@/data/navigation";
import SocialLinks from "@/components/ui/SocialLinks";
import { contactEmail } from "@/data/socialLinks";
import { sections, spacing, layout, components, tokens } from "@/config/styles";

export default function Footer() {
  return (
    <footer className={`${sections.heroDark} pt-12 pb-6`}>
      <div className={spacing.container}>
        <div className={`${layout.grid.threeColumn} ${spacing.gap.xl} mb-8`}>
          {/* Logo and Description */}
          <div>
            <Link href="/" className={`${layout.flex.row} items-center ${spacing.gap.sm} mb-4`}>
              <div className="relative w-16 h-16 flex items-center">
                <Image
                  src="/images/logos/numun_logo.png"
                  alt="NUMUN Logo"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <div className={layout.flex.column}>
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
            <nav className={`${layout.flex.column} ${spacing.gap.xs}`}>
              {navigationItems.slice(0, 4).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm hover:text-numun-gold ${tokens.transition.colors}`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-numun-gold font-bold mb-4">Contact Us</h3>
            <div className={`${layout.flex.column} ${spacing.gap.sm}`}>
              <a
                href={`mailto:${contactEmail}`}
                className={`text-sm hover:text-numun-gold ${tokens.transition.colors}`}
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
