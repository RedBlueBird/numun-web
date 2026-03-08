# NUMUN 2026 Website

Official website for Nagoya University Model United Nations 2026 - Driving growth, elevating impact.

![Next.js](https://img.shields.io/badge/Next.js-15.5.6-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=flat-square&logo=tailwind-css)

## Overview

This is the official website for NUMUN (Nagoya University Model United Nations), built with modern web technologies to provide an engaging and informative experience for participants, sponsors, and visitors. The website features bilingual support (English/Japanese) and smooth animations throughout.

## Project Structure

```
numun-web/
├── public/
│   ├── fonts/              # Custom font files
│   │   ├── Cerebri-Sans-Pro/
│   │   ├── ITC-Benguiat-Std/
│   │   └── symphony-pro/
│   ├── images/             # Images organized by category
│   │   ├── events/         # Committee banners & hero video
│   │   ├── logos/
│   │   ├── media/
│   │   ├── sponsors/
│   │   ├── team/
│   │   └── topography_tile_background.svg
│   └── logo.ico            # Favicon
├── scripts/                # Utility scripts (image conversion, etc.)
├── src/
│   ├── app/                # Next.js App Router pages
│   │   ├── about/
│   │   ├── contact/
│   │   ├── gallery/
│   │   ├── numun/          # NUMUN committees page
│   │   ├── partnership/
│   │   ├── past-sponsors/
│   │   ├── register/       # Registration page
│   │   ├── team/
│   │   ├── layout.tsx      # Root layout with fonts & metadata
│   │   ├── globals.css     # Global styles
│   │   └── page.tsx        # Home page
│   ├── components/         # React components
│   │   ├── animation/      # Animation components (ScrollReveal, StatsCounter)
│   │   ├── contact/        # Contact form & method cards
│   │   ├── gallery/        # Gallery event & image cards
│   │   ├── home/           # Home page sections
│   │   ├── layout/         # Header, Footer, ClientLayout, Logo
│   │   ├── social/         # Instagram feed
│   │   ├── sponsors/       # Sponsor cards
│   │   ├── team/           # Team profiles & quotes
│   │   └── ui/             # Reusable UI components
│   ├── config/             # Configuration files (styles, animations, fonts)
│   ├── context/            # React contexts (LanguageContext)
│   ├── data/               # Static data (team, sponsors, gallery, timeline, navigation)
│   ├── hooks/              # Custom React hooks (useReducedMotion, useScrollAnimation)
│   ├── lib/                # Utility functions
│   ├── locales/            # Translation files (en, jp)
│   └── types/              # TypeScript type definitions
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd numun-web
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

The page will auto-reload when you edit files.

### Build for Production

```bash
npm run build
npm start
```

## Internationalization

The website supports English and Japanese languages:

- Language selection persists in localStorage
- Switch between languages using the toggle in the header
- All translations are defined in `/src/locales/`
- Use the `useLanguage()` hook to access translations:

```tsx
import { useLanguage } from "@/context/LanguageContext";

function MyComponent() {
  const { t, locale, setLocale } = useLanguage();
  return <h1>{t.home.title}</h1>;
}
```

## Contact

For questions or support, please contact the NUMUN team through the website's contact form.

---

Built with care by the NUMUN team :)
