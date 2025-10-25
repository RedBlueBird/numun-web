"use client";

import { useLanguage } from "@/context/LanguageContext";
import { tokens } from "@/config/styles";

export default function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  const toggleLocale = () => {
    setLocale(locale === "en" ? "jp" : "en");
  };

  return (
    <button
      onClick={toggleLocale}
      className={`flex items-center gap-2 px-4 py-2 rounded-md ${tokens.transition.colors} bg-numun-green hover:bg-numun-green-dark border border-numun-gold`}
      aria-label="Toggle language"
    >
      <svg
        className="w-5 h-5 text-numun-gold"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
        />
      </svg>
      <span className="text-white text-sm font-medium">
        {locale === "en" ? "日本語" : "English"}
      </span>
    </button>
  );
}
