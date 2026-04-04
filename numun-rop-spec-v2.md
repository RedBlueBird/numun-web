# NUMUN 2026 — ROP Page Implementation Spec

## Context

The NUMUN 2026 site has a single `/numun` link. The user wants:

- The nav item changed to a dropdown (**OVERVIEW** → `/numun`, **RULES OF PROCEDURE** → `/rop`)
- A new `/rop` page recreating PDF pages 22–38 (House Rules + Delegate Cheatsheet)

All text goes into locales (`en`/`jp`) following the existing pattern. No custom CSS — use only existing styles from `@/config/styles`, `@/config/fonts`, `@/config/animations`.

---

## Files to Modify

### 1. `src/data/navigation.ts`

Replace `{ label: "NUMUN 2026", href: "/numun" }` with:

```ts
{
  label: "NUMUN 2026",
  dropdown: [
    { label: "OVERVIEW", href: "/numun" },
    { label: "RULES OF PROCEDURE", href: "/rop" },
  ]
},
```

---

### 2. `src/components/layout/Header.tsx`

In `getDropdownLabel`, add two cases:

```ts
if (label === "OVERVIEW") return t.navigation.overview;
if (label === "RULES OF PROCEDURE") return t.navigation.rulesOfProcedure;
```

---

### 3. `src/types/locales.ts`

- Add to `navigation`: `overview: string;` and `rulesOfProcedure: string;`
- Add new top-level `rop` section (see structure below)

---

### 4. `src/locales/en.ts`

- Add `navigation.overview = 'OVERVIEW'`, `navigation.rulesOfProcedure = 'RULES OF PROCEDURE'`
- Add full `rop` object with all English content from PDF pages 22–38

---

### 5. `src/locales/jp.ts`

- Add same keys with Japanese translations
- Procedural terms (e.g. "Point of Personal Privilege") kept in English even in JP; descriptions translated

---

### 6. `src/app/rop/page.tsx` ← NEW FILE

---

## Locale `rop` Structure

```ts
rop: {
  title: string;                    // "RULES OF PROCEDURE"

  houseRules: {
    sectionTitle: string;           // "HOUSE RULES"
    intro: string;
    rule1: string; rule1subs?: string[];
    rule2: string;
    rule3: string;
    rule4: string;
    rule5: string; rule5subs: string[];
    rule6: string;
    rule7: string;
    rule8: string; rule8subs: string[];
  };

  cheatsheet: {
    sectionTitle: string;           // "DELEGATE CHEATSHEET"

    rollCall: {
      title: string;                // "ROLL CALL"
      subtitle: string;
      instruction: string;
      presentVoting: { label: string; desc: string; };
      present: { label: string; desc: string; };
      quorumTitle: string;
      quorumSubtitle: string;
      majority: { label: string; desc: string; };
      simpleMajority: { label: string; desc: string; };
      twothirdsMajority: { label: string; desc: string; };
    };

    raisingPoints: {
      title: string;
      intro: string;
      phrase: string;
      point1: { label: string; circumstance: string; };
      point2: { label: string; circumstance: string; };
      point3: { label: string; circumstance: string; };
      point4: { label: string; circumstance: string; };
      point5: { label: string; circumstance: string; };
    };

    raisingMotions: {
      title: string;
      intro: string;
      phrase: string;
      unmoderatedPhrase: string;
      moderatedPhrase: string;
      motion1: { label: string; circumstance: string; };
      // ... through motion27
    };

    makingSpeeches: {
      title: string;
      addressingTitle: string;
      addressPhrase1: string;
      addressPhrase2: string;
      yieldingTitle: string;
      yieldingNote: string;
      yield1: string; yield1note: string;
      yield2: string; yield2note: string;
      yield3: string;
      yield4: string; yield4note: string;
      whenTitle: string;
      openingSpeechTitle: string;
      openingSpeechDesc: string;
      generalListTitle: string;
      generalListDesc: string;
      moderatedListTitle: string;
      moderatedListDesc1: string;
      moderatedListDesc2: string;
    };

    writingWorkingPapers: {
      title: string;
      purposeTitle: string;
      purpose1: string; purpose2: string;
      structureTitle: string;
      structureNote: string;
      structureItem1: string; structureItem2: string; structureItem3: string;
      submissionTitle: string;
      submissionDesc: string;
    };

    writingDraftResolutions: {
      title: string;
      purposeTitle: string;
      purpose1: string; purpose2: string;
      structureTitle: string;
      structureNote1: string; structureNote2: string;
      headingLabel: string;
      headingItem1: string; headingItem2: string; headingItem3: string; headingItem4: string;
      preambLabel: string;
      preambItem1: string; preambItem2: string; preambItem3: string;
      operativeLabel: string; operativeItem1: string;
      amendmentsTitle: string;
      amendment1: string; amendment2: string;
    };

    preambulatoryPhrases: {
      title: string;
      intro: string;
      phrases: string;  // newline-delimited list
    };

    operativePhrases: {
      title: string;
      intro: string;
      phrases: string;
    };

    amendments: {
      title: string;
      purposeTitle: string;
      purposeItem1: string; purposeItem2: string; purposeItem3: string;
      typeTitle: string;
      nonSubLabel: string; nonSubDesc: string;
      friendlyLabel: string; friendlyPhrase: string; friendlyNote: string;
      unfriendlyLabel: string; unfriendlyPhrase: string;
      unfriendlyStep1: string; unfriendlyStep2: string; unfriendlyStep3: string;
      unfriendlyStep4: string; unfriendlyStep5: string;
    };

    voting: {
      title: string;
      item1: string; item1sub1: string; item1sub2: string;
      item2: string;
      item3: string;
    };

    glossary: {
      title: string;
      term1: { word: string; definition: string; };
      // ... through term25
    };

    commonPhrases: {
      title: string;
      phrase1: { phrase: string; circumstance: string; };
      // ... through phrase12
    };
  };
}
```

---

## `src/app/rop/page.tsx` Page Architecture

Pattern: follows `policy/page.tsx` structure + `numun/page.tsx` patterns

```tsx
"use client";
import PageTitle from "@/components/ui/PageTitle";
import SectionTitle from "@/components/ui/SectionTitle";
import { motion } from "framer-motion";
import { sections, spacing, typography, tokens, layout, components, gradients } from "@/config/styles";
import { scrollAnimations } from "@/config/animations";
import { fonts } from "@/config/fonts";
import { useLanguage } from "@/context/LanguageContext";

export default function RopPage() {
  const { t } = useLanguage();
  return (
    <div className="relative">
      <div className={`absolute top-[-100px] ... ${sections.heroDark} z-40`} />
      <PageTitle>{t.rop.title}</PageTitle>

      {/* HOUSE RULES */}
      <SectionTitle>{t.rop.houseRules.sectionTitle}</SectionTitle>
      <section className={sections.standardSection}>
        {/* intro text, then 8 numbered items using policy-page card pattern */}
        {/* numbered circle + bold rule text + sub-bullets where present */}
      </section>

      {/* DELEGATE CHEATSHEET */}
      <SectionTitle>{t.rop.cheatsheet.sectionTitle}</SectionTitle>

      {/* Roll Call Decorum — bg-white */}
      <section className={sections.standardSection}>
        {/* subsection heading, roll call table, quorum table */}
      </section>

      {/* Raising Points — bg-numun-beige */}
      <section className={sections.standardSectionBeige}>
        {/* 5-row table: Point label | Circumstance */}
      </section>

      {/* Raising Motions — bg-white */}
      <section className={sections.standardSection}>
        {/* 27-row table + unmoderated/moderated caucus phrase callouts */}
      </section>

      {/* Making Speeches — bg-numun-beige */}
      <section className={sections.standardSectionBeige}>...</section>

      {/* Writing Working Papers — bg-white */}
      <section className={sections.standardSection}>...</section>

      {/* Writing Draft Resolutions — bg-numun-beige */}
      <section className={sections.standardSectionBeige}>...</section>

      {/* Sample Preambulatory Phrases — bg-white */}
      <section className={sections.standardSection}>
        {/* intro paragraph + word cloud / multi-column list of phrases */}
      </section>

      {/* Sample Operative Phrases — bg-numun-beige */}
      <section className={sections.standardSectionBeige}>
        {/* same layout as preambulatory */}
      </section>

      {/* Amendments — bg-white */}
      <section className={sections.standardSection}>...</section>

      {/* Voting on the Resolution — bg-numun-beige */}
      <section className={sections.standardSectionBeige}>...</section>

      {/* Glossary — bg-white */}
      <section className={sections.standardSection}>
        {/* 2-col table: Term | Definition */}
      </section>

      {/* Commonly-Used Phrases — bg-numun-beige */}
      <section className={sections.standardSectionBeige}>
        {/* 2-col table: Phrase | Circumstance */}
      </section>
    </div>
  );
}
```

---

## Styling Notes

### Table Styling Pattern

Based on `ScheduleOverviewTable.tsx`: use CSS grid with:

- Header cells: `bg-numun-green text-white`
- Content cells: `bg-numun-beige text-numun-green-darkest`
- `rounded`, `gap-1` between cells
- No `<table>` HTML elements — use CSS grid divs

### Subsection Headings

```tsx
<h3 className={`text-2xl font-bold text-numun-green ${fonts.itcBenguiat}`}>
```

### Numbered Items (House Rules)

Use policy page pattern: numbered green circle + `fonts.cerebri` numbering + `fonts.itcBenguiat` heading

### Phrase Cloud (Preambulatory/Operative)

Multi-column `flex-wrap` layout of italic gold-colored words, similar to how the PDF renders them.

---

## Verification Checklist

- [ ] Run dev server: `npm run dev`
- [ ] Verify nav dropdown on **NUMUN 2026** shows **OVERVIEW** + **RULES OF PROCEDURE**
- [ ] Navigate to `/rop` — page renders all sections
- [ ] Toggle language to JP — all text switches
- [ ] Check mobile menu shows the dropdown properly
- [ ] No TypeScript errors (`types/locales.ts` covers all new keys)
