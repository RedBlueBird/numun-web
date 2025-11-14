/**
 * Centralized Font Configuration for NUMUN Website
 *
 * This file contains all reusable font class utilities.
 * The actual Next.js font imports are in app/layout.tsx
 *
 * Usage example:
 * import { fonts } from '@/config/fonts'
 * <p className={fonts.script}>Coming Soon</p>
 */

export const fonts = {
  // Script/Cursive fonts
  script: "font-[family-name:var(--font-great-vibes)]",
  greatVibes: "font-[family-name:var(--font-great-vibes)]",
  symphonyPro: "font-[family-name:var(--font-symphony-pro)]",

  // Cerebri Sans - Primary brand font
  cerebri: "font-[family-name:var(--font-cerebri-sans)]",
  cerebriSans: "font-[family-name:var(--font-cerebri-sans)]",

  // ITC Benguiat - Decorative serif font
  itcBenguiat: "font-[family-name:var(--font-itc-benguiat)]",

  // Default system fonts
  sans: "font-[family-name:var(--font-geist-sans)]",
  mono: "font-[family-name:var(--font-geist-mono)]",
} as const;

// Type export for TypeScript autocomplete
export type FontKey = keyof typeof fonts;
