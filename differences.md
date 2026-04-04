# Differences: Official Japanese ROP PDF vs. Implementation

Compared pages 2–21 of `[2026] ROP - Japanese.pdf` against `src/locales/jp.ts → fullRop`.

---

## Status

**Categories A, B, D — RESOLVED** (`jp.ts` and `en.ts` updated, `npx tsc --noEmit` clean)

All string-level fixes applied in one pass:
- Section titles II, III, V, VIII corrected
- All rule titles corrected (missing words, wrong terminology)
- Rule 1: body paragraphs rewritten to match PDF wording; committee order fixed (UNHCR before UNEP); full Japanese committee names used
- Rule 2: title now includes「および職務」; intro expanded to describe Chair, Co-Chairs, and Member of Academics roles; officers table uses full Japanese committee names
- Rule 3: quorum threshold corrected (1/3, not simple majority); substantive-matters clause added
- Rule 4: generic bullet arrays replaced with specific committee-to-language assignments; break-time language freedom clause added
- Rule 5: rewritten to credentials-approval + written-objection-to-Head-of-Academics
- Rule 6: trimmed to one-sentence PDF rule; personal-attacks / in-character content removed
- Rule 7: appeal now goes to Head of Academics (not 2/3 committee vote); co-chairs sharing authority added
- Rule 8: provisional agenda clause added; non-PDF content removed
- Rule 9: Present / Present and Voting distinction added; non-PDF absence-notice clause removed
- Rule 10: 西洋式ビジネスフォーマル named explicitly; electronic-device content removed
- Rule 11: specific document types named; chair's authority to stop distribution added
- Rule 12: trimmed to one sentence; NGO/IGO content not in PDF removed
- Rule 13: framing reversed (tech permitted by default); ポジションペーパー and Points added to AI prohibition
- Rule 14: 60-second default speaking time and placard procedure added
- Rule 15: フロアへの譲渡 removed; re-yielding prohibition added
- Rule 16: expulsion language replaced with「秩序回復の指示」
- Rule 17: reopening clause removed (belongs in Rule 18 only)
- Rule 18: second (賛成者) requirement added
- Rule 19: all 5 point circumstance descriptions rewritten to match full PDF text
- Rule 20: replaced 27-entry list with 21 official motions in PDF order with correct Japanese names
- Rule 21: precedence list updated to 12-item format showing vote requirements and interrupt eligibility
- Rule 22: topic → purpose (目的); chair's discretion to reject/modify added
- Rule 23: purpose requirement added; second required; extension rule reference added
- Rule 24: fabricated "one extension only" constraint removed; second requirement added; chair's grounds for rejection added
- Rule 25 (impl) / Rule 26 (PDF): official-status language corrected; relevance check added
- Rule 26 (impl) / Rule 27 (PDF): UN formatting description removed; topic-relevance requirement added
- Rule 27 (impl) / Rule 28 (PDF): unfriendly amendment simplified to "debate and vote"; three non-PDF `further[]` items removed
- Rule 28 (impl) / Rule 29 (PDF): sponsor withdrawal nuance added (other sponsors can maintain the draft)
- Rule 29 (impl) / Rule 30 (PDF): door-closure sentence added; incorrect rule cross-reference removed
- Rule 30 (impl) / Rule 31 (PDF): Present and Voting rule added; observer voting rights clarified
- Rule 31 (impl) / Rule 32 (PDF): vote-invalidation power added; electronic-device clause removed
- Rule 32 (impl) / Rule 33 (PDF): ロールコール → 点呼; second-call options corrected (can still abstain)
- Rule 33 (impl) / Rule 34 (PDF): simplified to open-ended wording matching PDF
- Rule 34 (impl) / Rule 35 (PDF): 2/3 definition corrected (all committee members); added-motions clause removed
- Rule 35 (impl) / Rule 36 (PDF): second-call now includes abstain option
- Rule 36 (impl) / Rule 37 (PDF): combined final-vote procedure added; second requirement added; non-PDF item removed
- Rule 37 (impl) / Rule 38 (PDF): "only those who voted yes", chair discretion, once-per-topic all added
- Rule 38 (impl) / Rule 39 (PDF): charter/Head-of-Academics exception replaces non-PDF "delegation rights" exception
- Rule 39 (impl) / Rule 40 (PDF): 30-second limit added; abuse/frivolous rejection clause added
- Rule 40 (impl) / Rule 41 (PDF): 2/3 logic reframed to "sustain" framing; chair's explanation right added; tie-goes-to-chair removed
- Rule 41 (impl) / Rule 42 (PDF): 単純過半数 → 3分の2多数; second requirement added; non-PDF "two speakers against" clause removed
- Rule 42 (impl) / Rule 43 (PDF): rewritten as permanent end of all committee activity

**Category D fixes applied to `en.ts`:**
- Scope committee names updated to full English names (United Nations Security Council, Economic and Social Council, World Health Organization, United Nations Human Rights Council, United Nations Environment Programme); order corrected (UNHCR before UNEP)
- Officers table updated to full English names (matching jp.ts pattern of full Japanese names)
- Rule 30 voting rights: Present and Voting clause added; observer voting rights clarified to substantive matters only

---

## Remaining Work — Category C (Structural Code Changes)

These require changes to `locales.ts`, both `en.ts`/`jp.ts`, **and** `page.tsx`. Not yet implemented.

### 1. Rule 25「コーカス終了」— Missing Rule (Medium)

The PDF contains Rule 25 as the final rule of Section IV. It is entirely absent from the implementation, causing all rule numbers in Sections V–VIII to be off by 1 (impl Rule 25 = PDF Rule 26, etc.).

**Required changes:**
- `locales.ts`: add `caucusTermination: { title: string; body: string }` to `fullRop.caucuses`
- `en.ts`: add English content
- `jp.ts`: add Japanese content
- `page.tsx`: add a new rendered rule block inside the Caucuses `CollapsibleSection`

**PDF content (jp):**
> 「コーカスの時間が終了した際、または議長が秩序回復や進行上の必要性を認めた際には、議長はコーカスの終了を宣言し、討論を正式討論（formal debate）に戻す。終了時点で作成中の文書（作業文書、草案など）は、議長の承認を得た後、次の適切な段階で紹介される。」

---

### 2. Rule 21 Precedence — Table Structure (High)

The PDF has a 3-column table (優先順位 / 投票要件 / 中断の可否) with 12 rows. The current implementation renders a plain `items: string[]` list. The strings in the list now encode all three columns (e.g. `'個人的特権のポイント — 投票不要 — 中断可（聴取不能時のみ）'`), which works as a stopgap but is not semantically structured.

**Required changes:**
- `locales.ts`: change `precedence` type from `{ title: string; intro: string; items: string[] }` to `{ title: string; intro: string; items: Array<{ name: string; voteRequired: string; canInterrupt: string }> }`
- `en.ts` + `jp.ts`: rewrite to structured array
- `page.tsx`: replace `<ol>` list with a 3-column grid table using `bg-numun-green` headers and `bg-numun-beige` rows

**Note:** Rule numbers in impl Sections V–VIII will remain off by 1 until Category C item 1 (Rule 25) is implemented.
