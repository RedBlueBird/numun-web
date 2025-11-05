# NUMUN 2026 Website

Official website for Nagoya University Model United Nations 2026 - Driving growth, elevating impact.

![Next.js](https://img.shields.io/badge/Next.js-15.5.6-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=flat-square&logo=tailwind-css)

## Overview

This is the official website for NUMUN (Nagoya University Model United Nations), built with modern web technologies to provide an engaging and informative experience for participants, sponsors, and visitors. The website features bilingual support (English/Japanese) and smooth animations throughout.

## Features

- **Bilingual Support**: Full English and Japanese translations with localStorage persistence
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: Framer Motion animations including scroll reveals, fade-ins, and counters
- **Modern Stack**: Built with Next.js 15 App Router and React 19
- **Type-Safe**: Full TypeScript implementation
- **Custom Typography**: Cerebri Sans Pro custom font family with multiple weights
- **Optimized Performance**: Next.js automatic optimization and Turbopack for fast development

## Tech Stack

### Core
- **Framework**: [Next.js 15.5.6](https://nextjs.org/) with App Router
- **React**: 19.1.0
- **TypeScript**: 5
- **Node.js**: 20+

### Styling
- **Tailwind CSS**: 4 (PostCSS)
- **Utility Libraries**: clsx, tailwind-merge

### Animations
- **Framer Motion**: 12.23.24

### Icons & Fonts
- **Icons**: react-icons 5.5.0
- **Fonts**:
  - Google Fonts (Geist, Geist Mono, Great Vibes)
  - Custom font (Cerebri Sans Pro)

## Project Structure

```
numun-web/
├── public/
│   ├── fonts/              # Custom font files (Cerebri Sans Pro)
│   ├── images/             # Images organized by category
│   │   ├── gallery/
│   │   ├── logos/
│   │   ├── media/
│   │   ├── sponsors/
│   │   └── team/
│   └── numun_logo.ico      # Favicon
├── src/
│   ├── app/                # Next.js App Router pages
│   │   ├── about/
│   │   ├── contact/
│   │   ├── gallery/
│   │   ├── numun-2026/
│   │   ├── past-sponsors/
│   │   ├── team/
│   │   ├── layout.tsx      # Root layout with fonts & metadata
│   │   ├── globals.css     # Global styles
│   │   └── page.tsx        # Home page
│   ├── components/         # React components
│   │   ├── animation/      # Animation components (ScrollReveal, StatsCounter)
│   │   ├── contact/        # Contact form & method cards
│   │   ├── home/           # Home page sections
│   │   ├── layout/         # Header, Footer, ClientLayout
│   │   ├── sponsors/       # Sponsor cards
│   │   ├── team/           # Team profiles & quotes
│   │   └── ui/             # Reusable UI components
│   ├── config/             # Configuration files
│   ├── context/            # React contexts (LanguageContext)
│   ├── data/               # Static data (team, sponsors, navigation, social links)
│   ├── lib/                # Utility functions
│   ├── locales/            # Translation files
│   └── types/              # TypeScript type definitions
├── package.json
└── README.md
```

## Pages

- **Home** (`/`): Hero section with key information
- **About** (`/about`): Information about NUMUN
- **Team** (`/team`): Team member profiles and greetings
- **Gallery** (`/gallery`): Photo gallery from events
- **Contact** (`/contact`): Contact form and contact methods
- **Past Sponsors** (`/past-sponsors`): Showcase of previous sponsors
- **NUMUN 2026** (`/numun-2026`): Information about the 2026 conference

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

## Key Components

### Animation Components
- **ScrollReveal**: Animates elements as they scroll into view
- **StatsCounter**: Animated number counter for statistics

### Layout Components
- **Header**: Navigation with language toggle
- **Footer**: Social links and footer information
- **ClientLayout**: Client-side layout wrapper with language provider

### UI Components
- **Button**: Reusable button component
- **Card**: Card container component
- **PageTitle**: Consistent page title styling
- **SectionTitle**: Section heading component
- **SocialLinks**: Social media link icons
- **LanguageToggle**: EN/JP language switcher

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

## Development

### Adding a New Page

1. Create a new folder in `src/app/`
2. Add a `page.tsx` file
3. Update navigation in `src/data/navigation.ts`
4. Add translations to locale files

### Adding Translations

1. Update `src/locales/en.ts` for English
2. Update `src/locales/jp.ts` for Japanese
3. Update types in `src/types/locales.ts` if needed

### Adding Team Members

Edit `src/data/team.ts` to add or update team member information.

### Adding Sponsors

Edit `src/data/sponsors.ts` to add or update sponsor information.

## Performance Optimizations

- Next.js automatic code splitting
- Image optimization with next/image (recommended)
- Font optimization with next/font
- Tailwind CSS purges unused styles in production
- Turbopack for faster development builds

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Create a feature branch from `main`
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## License

[Add your license here]

## Contact

For questions or support, please contact the NUMUN team through the website's contact form.

---

Built with care by the NUMUN team.
