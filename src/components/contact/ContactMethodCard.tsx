import { FaInstagram, FaLinkedinIn, FaYoutube, FaEnvelope } from "react-icons/fa";
import { SiLine } from "react-icons/si";

interface ContactMethodCardProps {
  platform?: string;
  url: string;
  displayText: string;
  isEmail?: boolean;
}

function getPlatformIcon(platform: string) {
  const iconProps = { size: 32, className: "text-numun-green" };

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

export default function ContactMethodCard({ platform, url, displayText, isEmail = false }: ContactMethodCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-6 p-6 bg-white rounded-lg border-2 border-gray-200 hover:shadow-lg transition-shadow group"
    >
      <div className="flex-shrink-0">
        {isEmail ? (
          <FaEnvelope size={32} className="text-numun-green" />
        ) : (
          getPlatformIcon(platform || "")
        )}
      </div>
      <span className="text-numun-green group-hover:text-numun-gold transition-colors flex-1 text-lg font-bold">
        {displayText}
      </span>
    </a>
  );
}
