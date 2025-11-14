"use client";

import Link from "next/link";
import Image from "next/image";
import { layout, spacing } from "@/config/styles";
import { fonts } from "@/config/fonts";
import { useLanguage } from "@/context/LanguageContext";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  const { t, locale } = useLanguage();

  return (
    <Link href="/" className={`${layout.flex.row} items-center ${spacing.gap.sm} ${className}`}>
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
        <span className={`text-3xl font-bold whitespace-nowrap ${locale === 'en' ? 'tracking-[0.02em]' : 'tracking-[0.15em]'} ${fonts.itcBenguiat} -mb-2`}>
          {t.common.numun} {locale === 'en' ? '2026' : ''}
        </span>
        <span className={`text-numun-gold uppercase whitespace-nowrap leading-none ${
          locale === 'en'
            ? 'text-[0.5rem] tracking-[0em]'
            : 'text-xs tracking-normal'
        }`}>
          {t.common.nagoyaUniversity}
        </span>
      </div>
    </Link>
  );
}
