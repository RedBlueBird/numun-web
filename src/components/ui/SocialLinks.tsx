import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "@/data/socialLinks";

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
}

export default function SocialLinks({ className = "", iconSize = 40 }: SocialLinksProps) {
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
            <span className="text-2xl">{getPlatformIcon(social.platform)}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

function getPlatformIcon(platform: string): string {
  const icons: Record<string, string> = {
    Instagram: "📷",
    LINE: "💬",
    LinkedIn: "💼",
    YouTube: "▶️",
  };
  return icons[platform] || "🔗";
}
