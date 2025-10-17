# NUMUN Website Implementation Plan

## Task Summary

Recreating the NUMUN (Nagoya University Model United Nations) website design from the Canva PDF, implementing it 1:1 using Next.js 15 with React 19 and Tailwind CSS v4. The website needs to be a multi-page promotional site for an annual MUN conference at Nagoya University.

---

## Design Analysis from PDF

### **Color Scheme:**
- **Primary:** Dark forest green (#1a3a2f or similar) - used for header, footer, and backgrounds
- **Secondary:** Golden/tan (#c9a961 or similar) - used for accents, buttons, and decorative elements
- **Text:** White text on dark backgrounds, dark text on light backgrounds
- **Backgrounds:** Mix of dark green overlays on photos and light beige/white sections

### **Typography:**
- Mix of serif fonts (for elegant headings like "Coming Soon") and sans-serif (for body text)
- Golden italic script for decorative text
- Bold, uppercase styling for section headers

### **Visual Elements:**
- **Logo:** UN-style laurel wreath with globe and "NUMUN" text
- **Decorative torn paper edges:** Golden diagonal tears/rips between sections
- **Background photos:** Committee sessions with delegates, crowded conference rooms
- **Social media icons:** Instagram, LINE, LinkedIn, YouTube in header
- **"Inquire Here" CTA button:** Rounded, golden/tan background with pen icon

### **Pages Identified (6 pages total):**

1. **HOME (Landing Page)**
   - Hero section with NUMUN logo, "Coming Soon NUMUN 2026" text
   - Tagline: "Driving growth, elevating impact"
   - CTA: "Now recruiting sponsors & partners!"
   - Two buttons: "Learn About NUMUN" and "Contact Us"
   - Dark green background with crowd photo overlay

2. **ABOUT US**
   - Page title with decorative styling
   - Two-column layout with text and image
   - Description of NUMUN purpose and mission
   - Image of Nagoya University Toyoda Auditorium
   - 4 photo grid at bottom showing committee sessions and delegates

3. **SPONSOR & PARTNERS (NUMUN 2026)**
   - "Partner with NUMUN" header
   - Same tagline and decorative logo
   - Statistics: "400+ DELEGATES" and "20+ COUNTRIES"
   - Social media exposure section (NHK, 中日新聞, Aichi News, PBL logos)
   - Sponsorship levels: Silver (30,000円), Gold (50,000円), Diamond (70,000円)
   - Benefit descriptions for each tier
   - CTAs: "Inquire Here" and "Past Sponsors"

4. **PAST SPONSORS**
   - Three sections: Diamond, Gold, Silver sponsors
   - Logo display cards for each sponsor
   - Sponsor descriptions
   - "Learn More" buttons for each sponsor
   - Includes: IAFOR, NUAL, ASEAN-Nagoya Club, NUFSA, COFSA, Red Bull, Suntory

5. **CONTACT US**
   - Page title
   - Contact prompt text
   - Social media links (Instagram, LINE, LinkedIn, YouTube URLs)
   - Email: nagoyauniversity.mun@gmail.com
   - "Inquiry Box" illustration/form placeholder

6. **TEAM**
   - "Our Team" header
   - Profile cards with decorative borders (golden corner accents)
   - Secretary General (large profile)
   - Deputy Secretary General (2 profiles side by side)
   - Quote boxes with greetings
   - "Organizing Committees" section at bottom

### **Header Navigation (consistent across all pages):**
- Logo on left
- Nav items: HOME | ABOUT US | NUMUN 2026 | TEAM | SPONSOR & PARTNERS | GALLERY | CONTACT US
- "Inquire Here" button + social icons on right

---

## Proposed Folder Structure

```
numun-web/
├── src/
│   ├── app/
│   │   ├── layout.tsx                    # Root layout with header/footer
│   │   ├── page.tsx                      # Home/Landing page
│   │   ├── globals.css                   # Global styles, Tailwind config
│   │   ├── about/
│   │   │   └── page.tsx                  # About Us page
│   │   ├── numun-2026/
│   │   │   └── page.tsx                  # Sponsor & Partners page
│   │   ├── past-sponsors/
│   │   │   └── page.tsx                  # Past Sponsors page
│   │   ├── team/
│   │   │   └── page.tsx                  # Team page
│   │   ├── gallery/
│   │   │   └── page.tsx                  # Gallery page (to be built)
│   │   └── contact/
│   │       └── page.tsx                  # Contact Us page
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx                # Main navigation header
│   │   │   ├── Footer.tsx                # Footer component
│   │   │   └── Navigation.tsx            # Navigation menu component
│   │   ├── ui/
│   │   │   ├── Button.tsx                # Reusable button component
│   │   │   ├── SocialLinks.tsx           # Social media icons
│   │   │   ├── PageTitle.tsx             # Page title styling
│   │   │   ├── DecorativeBorder.tsx      # Golden torn paper effect
│   │   │   └── Card.tsx                  # Generic card component
│   │   ├── home/
│   │   │   ├── HeroSection.tsx           # Landing hero section
│   │   │   └── ComingSoonBanner.tsx      # Coming soon message
│   │   ├── about/
│   │   │   ├── MissionSection.tsx        # Mission description
│   │   │   └── PhotoGrid.tsx             # 4-photo grid
│   │   ├── sponsors/
│   │   │   ├── SponsorshipTiers.tsx      # Tier comparison cards
│   │   │   ├── SponsorCard.tsx           # Individual sponsor display
│   │   │   ├── StatsSection.tsx          # 400+ delegates, 20+ countries
│   │   │   └── MediaExposure.tsx         # Social media logos
│   │   ├── team/
│   │   │   ├── TeamMemberCard.tsx        # Profile card with photo
│   │   │   └── QuoteBox.tsx              # Greeting quote box
│   │   └── contact/
│   │       ├── ContactInfo.tsx           # Contact details display
│   │       └── InquiryForm.tsx           # Contact form (if needed)
│   │
│   ├── data/
│   │   ├── sponsors.ts                   # Sponsor data (names, logos, descriptions)
│   │   ├── team.ts                       # Team member data
│   │   ├── navigation.ts                 # Navigation menu items
│   │   └── socialLinks.ts                # Social media URLs
│   │
│   ├── lib/
│   │   └── utils.ts                      # Utility functions (cn for classnames)
│   │
│   ├── types/
│   │   ├── sponsor.ts                    # TypeScript types for sponsors
│   │   ├── team.ts                       # Types for team members
│   │   └── index.ts                      # Export all types
│   │
│   └── styles/
│       └── colors.ts                     # Theme colors config
│
├── public/
│   ├── images/
│   │   ├── logo.svg                      # NUMUN logo
│   │   ├── logo-with-wreath.svg          # Full logo with laurel
│   │   ├── hero-bg.jpg                   # Hero background photo
│   │   ├── toyoda-auditorium.jpg         # Nagoya University building
│   │   ├── torn-edge.svg                 # Decorative torn paper SVG
│   │   ├── sponsors/                     # Sponsor logos
│   │   │   ├── iafor.png
│   │   │   ├── nual.png
│   │   │   ├── red-bull.png
│   │   │   └── ...
│   │   ├── team/                         # Team member photos
│   │   │   └── placeholder.jpg
│   │   ├── gallery/                      # Conference photos
│   │   │   ├── committee-1.jpg
│   │   │   └── ...
│   │   └── media/                        # Media partner logos
│   │       ├── nhk.png
│   │       ├── chunichi.png
│   │       └── ...
│   └── icons/
│       ├── instagram.svg
│       ├── line.svg
│       ├── linkedin.svg
│       └── youtube.svg
│
├── package.json
├── tsconfig.json
├── next.config.ts
└── tailwind.config.ts
```

---

## Implementation Strategy

### **Phase 1: Foundation**
- Set up Tailwind custom theme (colors, fonts)
- Create base layout with Header and Footer components
- Implement responsive navigation

### **Phase 2: Shared Components**
- Build reusable UI components (Button, Card, etc.)
- Implement decorative elements (torn edges, borders)
- Create social media links component

### **Phase 3: Page-by-Page Implementation**
1. Home/Landing page
2. About Us page
3. Sponsor & Partners page
4. Past Sponsors page
5. Team page
6. Contact Us page
7. Gallery page (placeholder)

### **Phase 4: Data Integration**
- Populate data files with sponsor, team, and navigation information
- Connect components to data sources
- Add TypeScript types for type safety

### **Phase 5: Polish & Optimization**
- Responsive design adjustments
- Image optimization
- Performance tuning
- Accessibility improvements

---

## Key Technical Considerations

1. **Next.js 15 App Router:** Using page.tsx files in folder-based routing
2. **Tailwind CSS v4:** Custom theme configuration for NUMUN colors
3. **TypeScript:** Strong typing for all components and data
4. **Responsive Design:** Mobile-first approach
5. **Image Optimization:** Using Next.js Image component
6. **SEO:** Proper metadata for each page
7. **Accessibility:** Semantic HTML and ARIA labels where needed

This structure keeps the code modular, maintainable, and scalable for future development. The separation of concerns (components, data, types, pages) makes it easy for other developers to understand and extend the codebase.
