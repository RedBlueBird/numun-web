import Link from "next/link";
import { socialLinks } from "@/data/socialLinks";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { SiLine } from "react-icons/si";

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
}

export default function SocialLinks({ className = "", iconSize = 24 }: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socialLinks.map((social) => (
        <Link
          key={social.platform}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
          aria-label={social.platform}
        >
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
            {getPlatformIcon(social.platform, iconSize)}
          </div>
        </Link>
      ))}
    </div>
  );
}

function getPlatformIcon(platform: string, size: number) {
  const iconProps = { size, className: "text-numun-green-darkest" };

  switch (platform) {
    case "Instagram":
      return <FaInstagram {...iconProps} />;
    case "LINE":
      return <SiLine {...iconProps} />;
    case "LinkedIn":
      return <FaLinkedinIn {...iconProps} />;
    case "YouTube":
      return <FaYoutube {...iconProps} />;
    default:
      return null;
  }
}
