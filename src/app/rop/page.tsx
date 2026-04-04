"use client";

import React, { useState } from "react";
import PageTitle from "@/components/ui/PageTitle";
import SectionTitle from "@/components/ui/SectionTitle";
import { motion } from "framer-motion";
import Image from "next/image";
import { sections, spacing, typography, tokens, layout, gradients, utils } from "@/config/styles";
import { scrollAnimations } from "@/config/animations";
import { fonts } from "@/config/fonts";
import { useLanguage } from "@/context/LanguageContext";
import CollapsibleSection from "@/components/ui/CollapsibleSection";
import TableOfContents from "@/components/rop/TableOfContents";

export default function RopPage() {
  const { t } = useLanguage();
  const r = t.rop;

  const [open, setOpen] = useState<Record<string, boolean>>({
    rollCall: false,
    quorum: false,
    raisingPoints: false,
    raisingMotions: false,
    makingSpeeches: false,
    writingWorkingPapers: false,
    writingDraftResolutions: false,
    preambulatoryPhrases: false,
    operativePhrases: false,
    phraseGuide: false,
    amendments: false,
    voting: false,
    glossary: false,
    commonPhrases: false,
    ropI: false,
    ropII: false,
    ropIII: false,
    ropIV: false,
    ropV: false,
    ropVI: false,
    ropVII: false,
    ropVIII: false,
  });

  const toggle = (key: string) => setOpen(prev => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="relative">
      <TableOfContents />
      <div className={`absolute top-[-100px] left-0 right-0 h-[100px] ${sections.heroDark} z-40`} />
      {/* ── HERO: PAGE TITLE + DESCRIPTION + HOUSE RULES SECTION TITLE ── */}
      <div className={`${utils.relative} ${sections.heroDark} ${utils.overflow.hidden}`}>
        <div className={`${utils.absoluteFill} ${utils.zIndex.base}`}>
          <Image src="/images/home_background.webp" alt="Background" fill priority className="object-cover" />
        </div>
        <div className={`${utils.absoluteFill} ${gradients.heroOverlay}`} />

        <div className={`${utils.relative} ${utils.zIndex.content}`}>
          <div className="py-16 sm:py-20">
            <div className="w-full px-12 sm:px-16 md:px-24 lg:px-32">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 items-center max-w-7xl mx-auto">
                <div className="lg:col-span-8 text-left">
                  <PageTitle.Heading>{r.title}</PageTitle.Heading>
                  <div className="mb-0">
                    <PageTitle.Description>{r.description}</PageTitle.Description>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pb-8 sm:pb-12">
            <div className={spacing.container}>
              <h2 className={`text-4xl font-bold text-center text-numun-gold-light ${fonts.itcBenguiat}`}>
                {r.houseRules.sectionTitle}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <section id="house-rules" className={sections.standardSection}>
        <div className={spacing.container}>
          <div className="container mx-auto px-4 max-w-4xl">
            <p className={`${typography.bodyLarge} mb-8`}>{r.houseRules.intro}</p>
            <ol className="list-none border-2 border-numun-gold/30 rounded-2xl overflow-hidden">
              {r.houseRules.rules.map((rule, i) => (
                <li key={i} className={`flex gap-3 px-4 py-3 ${i % 2 === 0 ? 'bg-numun-beige' : 'bg-white'}`}>
                  <span className={`flex-shrink-0 font-semibold ${fonts.cerebri}`}>{i + 1}.</span>
                  <div className={typography.bodyNormal}>
                    <span>{rule.text}</span>
                    {rule.subs && rule.subs.length > 0 && (
                      <ul className="mt-2 space-y-1 list-none">
                        {rule.subs.map((sub, j) => (
                          <li key={j} className="flex gap-2">
                            <span className="flex-shrink-0">•</span>
                            <span>{sub}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── COMPLETE RULES OF PROCEDURE ── */}
      <SectionTitle>{r.fullRop.sectionTitle}</SectionTitle>
      <section id="rules-of-procedure" className={sections.standardSection}>
        <div className={spacing.container}>
          <div className="container mx-auto px-4 max-w-4xl space-y-10">

            {/* Section I: General Rules */}
            <CollapsibleSection title={r.fullRop.generalRules.title} isOpen={open.ropI} onToggle={() => toggle("ropI")}>
              <div className="mt-4 space-y-6">
                {/* Rule 1: Scope */}
                <div>
                  <div className={`flex items-center gap-3 mb-3`}>
                    <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-numun-green text-white flex items-center justify-center font-bold text-xs ${fonts.cerebri}`}>1</span>
                    <h4 className={`font-bold text-numun-green ${fonts.itcBenguiat}`}>{r.fullRop.generalRules.scope.title}</h4>
                  </div>
                  {r.fullRop.generalRules.scope.body.map((p, i) => (
                    <p key={i} className={`${typography.bodyNormal} mb-2`}>{p}</p>
                  ))}
                  <div className={`${tokens.borderRadius["2xl"]} overflow-hidden mt-3`}>
                    <div className="grid gap-1" style={{ gridTemplateColumns: "max-content 1fr" }}>
                      <div className={`bg-numun-green text-white text-sm font-bold px-4 py-3 ${fonts.cerebri}`}>Committee</div>
                      <div className={`bg-numun-green text-white text-sm font-bold px-4 py-3 ${fonts.cerebri}`}>Topic</div>
                      {r.fullRop.generalRules.scope.committees.map((c, i) => (
                        <React.Fragment key={i}>
                          <div className={`bg-numun-beige text-numun-green-darkest text-sm font-semibold px-4 py-3 flex items-center ${fonts.cerebri}`}>{c.name}</div>
                          <div className={`bg-numun-beige text-numun-green-darkest text-sm px-4 py-3 ${fonts.cerebri}`}>{c.topic}</div>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Rule 2: Officers */}
                <div>
                  <div className={`flex items-center gap-3 mb-3`}>
                    <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-numun-green text-white flex items-center justify-center font-bold text-xs ${fonts.cerebri}`}>2</span>
                    <h4 className={`font-bold text-numun-green ${fonts.itcBenguiat}`}>{r.fullRop.generalRules.officers.title}</h4>
                  </div>
                  <p className={`${typography.bodyNormal} mb-3`}>{r.fullRop.generalRules.officers.intro}</p>
                  <div className={`${tokens.borderRadius["2xl"]} overflow-hidden`}>
                    <div className="grid gap-1" style={{ gridTemplateColumns: "1fr 2fr" }}>
                      <div className={`bg-numun-green text-white text-sm font-bold px-4 py-3 ${fonts.cerebri}`}>Committee</div>
                      <div className={`bg-numun-green text-white text-sm font-bold px-4 py-3 ${fonts.cerebri}`}>Officers</div>
                      {r.fullRop.generalRules.officers.table.map((row, i) => (
                        <React.Fragment key={i}>
                          <div className={`bg-numun-beige text-numun-green-darkest text-sm font-semibold px-4 py-3 flex items-center ${fonts.cerebri}`}>{row.committee}</div>
                          <div className={`bg-numun-beige text-numun-green-darkest text-sm px-4 py-3 ${fonts.cerebri}`}>
                            <span className="font-semibold">{row.chair}</span>
                            {row.coChairs.map((co, j) => (
                              <span key={j}>, {co}</span>
                            ))}
                          </div>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Rule 3: Quorum */}
                <div>
                  <div className={`flex items-center gap-3 mb-3`}>
                    <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-numun-green text-white flex items-center justify-center font-bold text-xs ${fonts.cerebri}`}>3</span>
                    <h4 className={`font-bold text-numun-green ${fonts.itcBenguiat}`}>{r.fullRop.generalRules.quorum.title}</h4>
                  </div>
                  <p className={`${typography.bodyNormal}`}>{r.fullRop.generalRules.quorum.body}</p>
                </div>
              </div>
            </CollapsibleSection>

            {/* Section II: Conduct of Delegates */}
            <CollapsibleSection title={r.fullRop.conduct.title} isOpen={open.ropII} onToggle={() => toggle("ropII")}>
              <div className="mt-4 space-y-6">
                {/* Rule 4: Language of Debate */}
                <div>
                  <div className={`flex items-center gap-3 mb-3`}>
                    <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-numun-green text-white flex items-center justify-center font-bold text-xs ${fonts.cerebri}`}>4</span>
                    <h4 className={`font-bold text-numun-green ${fonts.itcBenguiat}`}>{r.fullRop.conduct.languageOfDebate.title}</h4>
                  </div>
                  {r.fullRop.conduct.languageOfDebate.body.map((p, i) => (
                    <p key={i} className={`${typography.bodyNormal} mb-2`}>{p}</p>
                  ))}
                  <div className="grid grid-cols-2 gap-1 mt-3 overflow-hidden rounded-2xl">
                    <div className={`bg-numun-green text-white text-sm font-bold px-4 py-3 ${fonts.cerebri}`}>English / 英語</div>
                    <div className={`bg-numun-beige text-numun-green-darkest text-sm font-bold px-4 py-3 ${fonts.cerebri}`}>Japanese / 日本語</div>
                    <div className={`bg-numun-green/10 text-numun-green-darkest text-sm px-4 py-3 ${fonts.cerebri}`}>
                      <ul className="space-y-1">
                        {r.fullRop.conduct.languageOfDebate.english.map((item, i) => (
                          <li key={i} className="flex gap-2"><span className="text-numun-gold flex-shrink-0">•</span><span>{item}</span></li>
                        ))}
                      </ul>
                    </div>
                    <div className={`bg-numun-beige text-numun-green-darkest text-sm px-4 py-3 ${fonts.cerebri}`}>
                      <ul className="space-y-1">
                        {r.fullRop.conduct.languageOfDebate.japanese.map((item, i) => (
                          <li key={i} className="flex gap-2"><span className="text-numun-gold flex-shrink-0">•</span><span>{item}</span></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Rules 5–13 */}
                {[
                  { num: 5, rule: r.fullRop.conduct.credentials },
                  { num: 6, rule: r.fullRop.conduct.courtesy },
                  { num: 7, rule: r.fullRop.conduct.chairAuthority },
                  { num: 10, rule: r.fullRop.conduct.decorum },
                  { num: 11, rule: r.fullRop.conduct.officialDocuments },
                  { num: 12, rule: r.fullRop.conduct.observers },
                ].map(({ num, rule }) => (
                  <div key={num}>
                    <div className={`flex items-center gap-3 mb-3`}>
                      <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-numun-green text-white flex items-center justify-center font-bold text-xs ${fonts.cerebri}`}>{num}</span>
                      <h4 className={`font-bold text-numun-green ${fonts.itcBenguiat}`}>{rule.title}</h4>
                    </div>
                    <p className={`${typography.bodyNormal}`}>{rule.body}</p>
                  </div>
                ))}

                {/* Rule 8: Agenda (array body) */}
                <div>
                  <div className={`flex items-center gap-3 mb-3`}>
                    <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-numun-green text-white flex items-center justify-center font-bold text-xs ${fonts.cerebri}`}>8</span>
                    <h4 className={`font-bold text-numun-green ${fonts.itcBenguiat}`}>{r.fullRop.conduct.agenda.title}</h4>
                  </div>
                  {r.fullRop.conduct.agenda.body.map((p, i) => (
                    <p key={i} className={`${typography.bodyNormal} mb-2`}>{p}</p>
                  ))}
                </div>

                {/* Rule 9: Attendance */}
                <div>
                  <div className={`flex items-center gap-3 mb-3`}>
                    <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-numun-green text-white flex items-center justify-center font-bold text-xs ${fonts.cerebri}`}>9</span>
                    <h4 className={`font-bold text-numun-green ${fonts.itcBenguiat}`}>{r.fullRop.conduct.attendance.title}</h4>
                  </div>
                  <p className={`${typography.bodyNormal}`}>{r.fullRop.conduct.attendance.body}</p>
                </div>

                {/* Rule 13: Technology and AI (array body) */}
                <div>
                  <div className={`flex items-center gap-3 mb-3`}>
                    <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-numun-green text-white flex items-center justify-center font-bold text-xs ${fonts.cerebri}`}>13</span>
                    <h4 className={`font-bold text-numun-green ${fonts.itcBenguiat}`}>{r.fullRop.conduct.technologyAI.title}</h4>
                  </div>
                  {r.fullRop.conduct.technologyAI.body.map((p, i) => (
                    <p key={i} className={`${typography.bodyNormal} mb-2`}>{p}</p>
                  ))}
                </div>
              </div>
            </CollapsibleSection>

            {/* Section III: Conduct of Debate */}
            <CollapsibleSection title={r.fullRop.debate.title} isOpen={open.ropIII} onToggle={() => toggle("ropIII")}>
              <div className="mt-4 space-y-6">
                {/* Rules 14–18: single-body rules */}
                {[
                  { num: 14, rule: r.fullRop.debate.speeches },
                  { num: 15, rule: r.fullRop.debate.yields },
                  { num: 16, rule: r.fullRop.debate.relevance },
                  { num: 17, rule: r.fullRop.debate.closureSpeakersList },
                  { num: 18, rule: r.fullRop.debate.reopeningSpeakersList },
                ].map(({ num, rule }) => (
                  <div key={num}>
                    <div className={`flex items-center gap-3 mb-3`}>
                      <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-numun-green text-white flex items-center justify-center font-bold text-xs ${fonts.cerebri}`}>{num}</span>
                      <h4 className={`font-bold text-numun-green ${fonts.itcBenguiat}`}>{rule.title}</h4>
                    </div>
                    <p className={`${typography.bodyNormal}`}>{rule.body}</p>
                  </div>
                ))}

                {/* Rule 19: Points table */}
                <div>
                  <div className={`flex items-center gap-3 mb-3`}>
                    <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-numun-green text-white flex items-center justify-center font-bold text-xs ${fonts.cerebri}`}>19</span>
                    <h4 className={`font-bold text-numun-green ${fonts.itcBenguiat}`}>{r.fullRop.debate.points.title}</h4>
                  </div>
                  <p className={`${typography.bodyNormal} mb-3`}>{r.fullRop.debate.points.intro}</p>
                  <div className={`${tokens.borderRadius["2xl"]} overflow-hidden`}>
                    <div className="grid gap-1" style={{ gridTemplateColumns: "1fr 2fr" }}>
                      <div className={`bg-numun-green text-white text-sm font-bold px-4 py-3 ${fonts.cerebri}`}>Point</div>
                      <div className={`bg-numun-green text-white text-sm font-bold px-4 py-3 ${fonts.cerebri}`}>Circumstance</div>
                      {r.fullRop.debate.points.items.map((item, i) => (
                        <React.Fragment key={i}>
                          <div className={`bg-numun-beige text-numun-green-darkest text-sm font-semibold px-4 py-3 flex items-center ${fonts.cerebri}`}>{item.point}</div>
                          <div className={`bg-numun-beige text-numun-green-darkest text-sm px-4 py-3 ${fonts.cerebri}`}>{item.circumstance}</div>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Rule 20: Motions table */}
                <div>
                  <div className={`flex items-center gap-3 mb-3`}>
                    <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-numun-green text-white flex items-center justify-center font-bold text-xs ${fonts.cerebri}`}>20</span>
                    <h4 className={`font-bold text-numun-green ${fonts.itcBenguiat}`}>{r.fullRop.debate.motions.title}</h4>
                  </div>
                  <p className={`${typography.bodyNormal} mb-3`}>{r.fullRop.debate.motions.intro}</p>
                  <div className={`${tokens.borderRadius["2xl"]} overflow-hidden`}>
                    <div className="grid gap-1" style={{ gridTemplateColumns: "1fr 2fr" }}>
                      <div className={`bg-numun-green text-white text-sm font-bold px-4 py-3 ${fonts.cerebri}`}>Motion</div>
                      <div className={`bg-numun-green text-white text-sm font-bold px-4 py-3 ${fonts.cerebri}`}>Circumstance</div>
                      {r.fullRop.debate.motions.items.map((item, i) => (
                        <React.Fragment key={i}>
                          <div className={`bg-numun-beige text-numun-green-darkest text-sm font-semibold px-4 py-3 flex items-center ${fonts.cerebri}`}>
                            <span className="text-numun-gold font-bold mr-2">{i + 1}.</span>
                            {item.motion}
                          </div>
                          <div className={`bg-numun-beige text-numun-green-darkest text-sm px-4 py-3 ${fonts.cerebri}`}>{item.circumstance}</div>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Rule 21: Precedence list */}
                <div>
                  <div className={`flex items-center gap-3 mb-3`}>
                    <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-numun-green text-white flex items-center justify-center font-bold text-xs ${fonts.cerebri}`}>21</span>
                    <h4 className={`font-bold text-numun-green ${fonts.itcBenguiat}`}>{r.fullRop.debate.precedence.title}</h4>
                  </div>
                  <p className={`${typography.bodyNormal} mb-3`}>{r.fullRop.debate.precedence.intro}</p>
                  <ol className="list-none border-2 border-numun-gold/30 rounded-2xl overflow-hidden">
                    {r.fullRop.debate.precedence.items.map((item, i) => (
                      <li key={i} className={`flex gap-3 px-4 py-3 ${i % 2 === 0 ? 'bg-numun-beige' : 'bg-white'}`}>
                        <span className={`flex-shrink-0 font-semibold ${fonts.cerebri}`}>{i + 1}.</span>
                        <span className={`${typography.bodyNormal}`}>{item}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </CollapsibleSection>

            {/* Section IV: Caucuses */}
            <CollapsibleSection title={r.fullRop.caucuses.title} isOpen={open.ropIV} onToggle={() => toggle("ropIV")}>
              <div className="mt-4 space-y-6">
                {/* Rule 22: Moderated Caucus */}
                <div>
                  <div className={`flex items-center gap-3 mb-3`}>
                    <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-numun-green text-white flex items-center justify-center font-bold text-xs ${fonts.cerebri}`}>22</span>
                    <h4 className={`font-bold text-numun-green ${fonts.itcBenguiat}`}>{r.fullRop.caucuses.moderated.title}</h4>
                  </div>
                  {r.fullRop.caucuses.moderated.body.map((p, i) => (
                    <p key={i} className={`${typography.bodyNormal} mb-2`}>{p}</p>
                  ))}
                </div>
                {/* Rule 23: Unmoderated Caucus */}
                <div>
                  <div className={`flex items-center gap-3 mb-3`}>
                    <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-numun-green text-white flex items-center justify-center font-bold text-xs ${fonts.cerebri}`}>23</span>
                    <h4 className={`font-bold text-numun-green ${fonts.itcBenguiat}`}>{r.fullRop.caucuses.unmoderated.title}</h4>
                  </div>
                  {r.fullRop.caucuses.unmoderated.body.map((p, i) => (
                    <p key={i} className={`${typography.bodyNormal} mb-2`}>{p}</p>
                  ))}
                </div>
                {/* Rule 24: Extension */}
                <div>
                  <div className={`flex items-center gap-3 mb-3`}>
                    <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-numun-green text-white flex items-center justify-center font-bold text-xs ${fonts.cerebri}`}>24</span>
                    <h4 className={`font-bold text-numun-green ${fonts.itcBenguiat}`}>{r.fullRop.caucuses.extension.title}</h4>
                  </div>
                  <p className={`${typography.bodyNormal}`}>{r.fullRop.caucuses.extension.body}</p>
                </div>
              </div>
            </CollapsibleSection>

            {/* Section V: Working Papers, Resolutions, and Amendments */}
            <CollapsibleSection title={r.fullRop.workingPapersResolutions.title} isOpen={open.ropV} onToggle={() => toggle("ropV")}>
              <div className="mt-4 space-y-6">
                {/* Rule 25: Working Papers */}
                <div>
                  <div className={`flex items-center gap-3 mb-3`}>
                    <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-numun-green text-white flex items-center justify-center font-bold text-xs ${fonts.cerebri}`}>25</span>
                    <h4 className={`font-bold text-numun-green ${fonts.itcBenguiat}`}>{r.fullRop.workingPapersResolutions.workingPapers.title}</h4>
                  </div>
                  <p className={`${typography.bodyNormal}`}>{r.fullRop.workingPapersResolutions.workingPapers.body}</p>
                </div>
                {/* Rule 26: Draft Resolutions */}
                <div>
                  <div className={`flex items-center gap-3 mb-3`}>
                    <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-numun-green text-white flex items-center justify-center font-bold text-xs ${fonts.cerebri}`}>26</span>
                    <h4 className={`font-bold text-numun-green ${fonts.itcBenguiat}`}>{r.fullRop.workingPapersResolutions.draftResolutions.title}</h4>
                  </div>
                  <p className={`${typography.bodyNormal}`}>{r.fullRop.workingPapersResolutions.draftResolutions.body}</p>
                </div>
                {/* Rule 27: Amendments */}
                <div>
                  <div className={`flex items-center gap-3 mb-3`}>
                    <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-numun-green text-white flex items-center justify-center font-bold text-xs ${fonts.cerebri}`}>27</span>
                    <h4 className={`font-bold text-numun-green ${fonts.itcBenguiat}`}>{r.fullRop.workingPapersResolutions.amendments.title}</h4>
                  </div>
                  <p className={`${typography.bodyNormal} mb-3`}>{r.fullRop.workingPapersResolutions.amendments.body}</p>
                  <div className={`${tokens.borderRadius["2xl"]} overflow-hidden mb-3`}>
                    <div className="grid gap-1" style={{ gridTemplateColumns: "1fr 1fr" }}>
                      <div className={`bg-numun-green text-white text-sm font-bold px-4 py-3 ${fonts.cerebri}`}>{r.fullRop.workingPapersResolutions.amendments.friendly.label}</div>
                      <div className={`bg-numun-green text-white text-sm font-bold px-4 py-3 ${fonts.cerebri}`}>{r.fullRop.workingPapersResolutions.amendments.unfriendly.label}</div>
                      <div className={`bg-numun-beige text-numun-green-darkest text-sm px-4 py-3 ${fonts.cerebri}`}>{r.fullRop.workingPapersResolutions.amendments.friendly.desc}</div>
                      <div className={`bg-numun-beige text-numun-green-darkest text-sm px-4 py-3 ${fonts.cerebri}`}>{r.fullRop.workingPapersResolutions.amendments.unfriendly.desc}</div>
                    </div>
                  </div>
                  <ul className="space-y-1">
                    {r.fullRop.workingPapersResolutions.amendments.further.map((item, i) => (
                      <li key={i} className={`${typography.bodyNormal} flex gap-2`}>
                        <span className="text-numun-gold flex-shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Rule 28: Merging and Withdrawal */}
                <div>
                  <div className={`flex items-center gap-3 mb-3`}>
                    <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-numun-green text-white flex items-center justify-center font-bold text-xs ${fonts.cerebri}`}>28</span>
                    <h4 className={`font-bold text-numun-green ${fonts.itcBenguiat}`}>{r.fullRop.workingPapersResolutions.mergingWithdrawal.title}</h4>
                  </div>
                  <p className={`${typography.bodyNormal}`}>{r.fullRop.workingPapersResolutions.mergingWithdrawal.body}</p>
                </div>
              </div>
            </CollapsibleSection>

            {/* Section VI: Voting */}
            <CollapsibleSection title={r.fullRop.voting.title} isOpen={open.ropVI} onToggle={() => toggle("ropVI")}>
              <div className="mt-4 space-y-6">
                {[
                  { num: 29, rule: r.fullRop.voting.votingBloc },
                  { num: 30, rule: r.fullRop.voting.votingRights },
                  { num: 31, rule: r.fullRop.voting.conductDuringVoting },
                  { num: 32, rule: r.fullRop.voting.rollCallVotes },
                  { num: 33, rule: r.fullRop.voting.motionsDuringBloc },
                  { num: 34, rule: r.fullRop.voting.majorityRequirements },
                  { num: 35, rule: r.fullRop.voting.abstentionsAndPasses },
                  { num: 36, rule: r.fullRop.voting.divisionOfQuestion },
                  { num: 37, rule: r.fullRop.voting.reconsideration },
                ].map(({ num, rule }) => (
                  <div key={num}>
                    <div className={`flex items-center gap-3 mb-3`}>
                      <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-numun-green text-white flex items-center justify-center font-bold text-xs ${fonts.cerebri}`}>{num}</span>
                      <h4 className={`font-bold text-numun-green ${fonts.itcBenguiat}`}>{rule.title}</h4>
                    </div>
                    <p className={`${typography.bodyNormal}`}>{rule.body}</p>
                  </div>
                ))}
              </div>
            </CollapsibleSection>

            {/* Section VII: Special Rules */}
            <CollapsibleSection title={r.fullRop.specialRules.title} isOpen={open.ropVII} onToggle={() => toggle("ropVII")}>
              <div className="mt-4 space-y-6">
                {[
                  { num: 38, rule: r.fullRop.specialRules.suspensionOfRules },
                  { num: 39, rule: r.fullRop.specialRules.rightOfReply },
                  { num: 40, rule: r.fullRop.specialRules.appealChair },
                ].map(({ num, rule }) => (
                  <div key={num}>
                    <div className={`flex items-center gap-3 mb-3`}>
                      <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-numun-green text-white flex items-center justify-center font-bold text-xs ${fonts.cerebri}`}>{num}</span>
                      <h4 className={`font-bold text-numun-green ${fonts.itcBenguiat}`}>{rule.title}</h4>
                    </div>
                    <p className={`${typography.bodyNormal}`}>{rule.body}</p>
                  </div>
                ))}
              </div>
            </CollapsibleSection>

            {/* Section VIII: Closure of Debate */}
            <CollapsibleSection title={r.fullRop.closureOfDebate.title} isOpen={open.ropVIII} onToggle={() => toggle("ropVIII")}>
              <div className="mt-4 space-y-6">
                {[
                  { num: 41, rule: r.fullRop.closureOfDebate.closure },
                  { num: 42, rule: r.fullRop.closureOfDebate.adjournment },
                ].map(({ num, rule }) => (
                  <div key={num}>
                    <div className={`flex items-center gap-3 mb-3`}>
                      <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-numun-green text-white flex items-center justify-center font-bold text-xs ${fonts.cerebri}`}>{num}</span>
                      <h4 className={`font-bold text-numun-green ${fonts.itcBenguiat}`}>{rule.title}</h4>
                    </div>
                    <p className={`${typography.bodyNormal}`}>{rule.body}</p>
                  </div>
                ))}
              </div>
            </CollapsibleSection>

          </div>
        </div>
      </section>

      {/* ── DELEGATE CHEATSHEET ── */}
      <SectionTitle>{r.cheatsheet.sectionTitle}</SectionTitle>

      <section id="cheatsheet" className={sections.standardSection}>
        <div className={spacing.container}>
          <div className="container mx-auto px-4 max-w-4xl space-y-10">

            {/* Roll Call */}
            <CollapsibleSection title={r.cheatsheet.rollCall.title} isOpen={open.rollCall} onToggle={() => toggle("rollCall")}>
              <div className="mt-1">
                <p className={`${typography.bodySmall} text-numun-green mb-3`}>
                  → {r.cheatsheet.rollCall.subtitle}
                </p>
                <p className={`${typography.bodyNormal} mb-4`}>{r.cheatsheet.rollCall.instruction}</p>
                <div className={`${tokens.borderRadius["2xl"]} overflow-hidden mb-8`}>
                  <div className="grid gap-1" style={{ gridTemplateColumns: "max-content 1fr" }}>
                    <div className={`bg-numun-green text-white text-sm font-bold px-4 py-3 ${fonts.cerebri}`}>
                      {r.cheatsheet.rollCall.presentVoting.label}
                    </div>
                    <div className={`bg-numun-beige text-numun-green-darkest text-sm px-4 py-3 ${fonts.cerebri}`}>
                      {r.cheatsheet.rollCall.presentVoting.desc}
                    </div>
                    <div className={`bg-numun-green text-white text-sm font-bold px-4 py-3 ${fonts.cerebri}`}>
                      {r.cheatsheet.rollCall.present.label}
                    </div>
                    <div className={`bg-numun-beige text-numun-green-darkest text-sm px-4 py-3 ${fonts.cerebri}`}>
                      {r.cheatsheet.rollCall.present.desc}
                    </div>
                  </div>
                </div>
              </div>
            </CollapsibleSection>

            {/* Quorum */}
            <CollapsibleSection title={r.cheatsheet.rollCall.quorumTitle} isOpen={open.quorum} onToggle={() => toggle("quorum")}>
              <div className="mt-1">
                <p className={`${typography.bodySmall} text-numun-green mb-3`}>
                  → {r.cheatsheet.rollCall.quorumSubtitle}
                </p>
                <div className={`${tokens.borderRadius["2xl"]} overflow-hidden`}>
                  <div className="grid gap-1" style={{ gridTemplateColumns: "max-content 1fr" }}>
                    <div className={`bg-numun-green text-white text-sm font-bold px-4 py-3 ${fonts.cerebri}`}>
                      {r.cheatsheet.rollCall.majority.label}
                    </div>
                    <div className={`bg-numun-beige text-numun-green-darkest text-sm px-4 py-3 ${fonts.cerebri}`}>
                      = {r.cheatsheet.rollCall.majority.desc}
                    </div>
                    <div className={`bg-numun-green text-white text-sm font-bold px-4 py-3 ${fonts.cerebri}`}>
                      {r.cheatsheet.rollCall.simpleMajority.label}
                    </div>
                    <div className={`bg-numun-beige text-numun-green-darkest text-sm px-4 py-3 ${fonts.cerebri}`}>
                      = {r.cheatsheet.rollCall.simpleMajority.desc}
                    </div>
                    <div className={`bg-numun-green text-white text-sm font-bold px-4 py-3 ${fonts.cerebri}`}>
                      {r.cheatsheet.rollCall.twothirdsMajority.label}
                    </div>
                    <div className={`bg-numun-beige text-numun-green-darkest text-sm px-4 py-3 ${fonts.cerebri}`}>
                      {r.cheatsheet.rollCall.twothirdsMajority.conditions
                        ? r.cheatsheet.rollCall.twothirdsMajority.conditions.map((c, i) => (
                            <p key={i} className={i > 0 ? 'mt-1' : ''}>{c}</p>
                          ))
                        : r.cheatsheet.rollCall.twothirdsMajority.desc}
                    </div>
                  </div>
                </div>
              </div>
            </CollapsibleSection>

            {/* Raising Points */}
            <CollapsibleSection title={r.cheatsheet.raisingPoints.title} isOpen={open.raisingPoints} onToggle={() => toggle("raisingPoints")}>
              <div className="mt-2">
                <p className={`${typography.bodyNormal} mb-1`}>→ {r.cheatsheet.raisingPoints.intro}</p>
                <p className={`${typography.bodyNormal} font-semibold text-numun-green mb-6`}>→ {r.cheatsheet.raisingPoints.phrase}</p>
                <div className={`${tokens.borderRadius["2xl"]} overflow-hidden`}>
                  <div className="grid gap-1" style={{ gridTemplateColumns: "1fr 2fr" }}>
                    <div className={`bg-numun-green text-white text-sm font-bold px-4 py-3 ${fonts.cerebri}`}>Point</div>
                    <div className={`bg-numun-green text-white text-sm font-bold px-4 py-3 ${fonts.cerebri}`}>Circumstance</div>
                    {r.cheatsheet.raisingPoints.points.map((point, i) => (
                      <React.Fragment key={i}>
                        <div className={`bg-numun-beige text-numun-green-darkest text-sm font-semibold px-4 py-3 flex items-center ${fonts.cerebri}`}>
                          {point.label}
                        </div>
                        <div className={`bg-numun-beige text-numun-green-darkest text-sm px-4 py-3 ${fonts.cerebri}`}>
                          {point.circumstance}
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </CollapsibleSection>

            {/* Raising Motions */}
            <CollapsibleSection title={r.cheatsheet.raisingMotions.title} isOpen={open.raisingMotions} onToggle={() => toggle("raisingMotions")}>
              <div className="mt-2">
                <p className={`${typography.bodyNormal} mb-1`}>→ {r.cheatsheet.raisingMotions.intro}</p>
                <p className={`${typography.bodyNormal} font-semibold text-numun-green mb-4`}>→ {r.cheatsheet.raisingMotions.phrase}</p>
                <div className={`${tokens.borderRadius["2xl"]} overflow-hidden`}>
                  <div className="grid gap-1" style={{ gridTemplateColumns: "1fr 2fr" }}>
                    <div className={`bg-numun-green text-white text-sm font-bold px-4 py-3 ${fonts.cerebri}`}>Motion</div>
                    <div className={`bg-numun-green text-white text-sm font-bold px-4 py-3 ${fonts.cerebri}`}>Circumstance</div>
                    {r.cheatsheet.raisingMotions.motions.map((motion, i) => (
                      <React.Fragment key={i}>
                        <div className={`bg-numun-beige text-numun-green-darkest text-sm font-semibold px-4 py-3 flex items-center ${fonts.cerebri}`}>
                          <span className="text-numun-gold font-bold mr-2">{i + 1}.</span>
                          {motion.label}
                        </div>
                        <div className={`bg-numun-beige text-numun-green-darkest text-sm px-4 py-3 ${fonts.cerebri}`}>
                          {motion.circumstance}
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </CollapsibleSection>

            {/* Making Speeches */}
            <CollapsibleSection title={r.cheatsheet.makingSpeeches.title} isOpen={open.makingSpeeches} onToggle={() => toggle("makingSpeeches")}>
              <div className="mt-6">
                <div className={`${layout.grid.twoColumn} gap-8 mb-8`}>
                  <div>
                    <h4 className={`text-lg font-bold text-numun-green mb-3 ${fonts.itcBenguiat}`}>
                      {r.cheatsheet.makingSpeeches.addressingTitle}
                    </h4>
                    <ul className="space-y-2">
                      {r.cheatsheet.makingSpeeches.addressPhrases.map((phrase, i) => (
                        <li key={i} className={`${typography.bodyNormal} flex gap-2`}>
                          <span className="text-numun-gold flex-shrink-0">•</span>
                          <span className="italic">{phrase}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className={`text-lg font-bold text-numun-green mb-1 ${fonts.itcBenguiat}`}>
                      {r.cheatsheet.makingSpeeches.yieldingTitle}
                    </h4>
                    <p className={`${typography.bodySmall} mb-3`}>→ {r.cheatsheet.makingSpeeches.yieldingNote}</p>
                    <ul className="space-y-2">
                      {r.cheatsheet.makingSpeeches.yields.map((y, i) => (
                        <li key={i} className={`${typography.bodyNormal} flex gap-2`}>
                          <span className="text-numun-gold flex-shrink-0">•</span>
                          <span>
                            <span className="italic">{y.text}</span>
                            {y.note && <span className={`text-gray-500 ml-2 ${typography.bodySmall}`}>→ {y.note}</span>}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <h4 className={`text-lg font-bold text-numun-green mb-4 ${fonts.itcBenguiat}`}>
                  {r.cheatsheet.makingSpeeches.whenTitle}
                </h4>
                <motion.div
                  className="space-y-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={scrollAnimations.staggerContainer}
                >
                  {r.cheatsheet.makingSpeeches.speechTypes.map((st, i) => (
                    <motion.div
                      key={i}
                      variants={scrollAnimations.staggerItem}
                      className="bg-numun-beige border-2 border-numun-gold/30 rounded-2xl p-5"
                    >
                      <p className={`font-bold text-numun-green mb-1 ${fonts.itcBenguiat}`}>{st.title}</p>
                      <p className={`${typography.bodyNormal}`}>→ {st.desc}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </CollapsibleSection>

            {/* Writing Working Papers */}
            <CollapsibleSection title={r.cheatsheet.writingWorkingPapers.title} isOpen={open.writingWorkingPapers} onToggle={() => toggle("writingWorkingPapers")}>
              <div className="mt-6">
                <div className={`${layout.grid.threeColumn} gap-6`}>
                  <div className="bg-numun-beige border-2 border-numun-gold/30 rounded-2xl p-5">
                    <h4 className={`text-base font-bold text-numun-green mb-3 ${fonts.itcBenguiat}`}>
                      {r.cheatsheet.writingWorkingPapers.purposeTitle}
                    </h4>
                    <ul className="space-y-2">
                      {r.cheatsheet.writingWorkingPapers.purposes.map((p, i) => (
                        <li key={i} className={`${typography.bodySmall} flex gap-2`}>
                          <span className="text-numun-gold flex-shrink-0">→</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-numun-beige border-2 border-numun-gold/30 rounded-2xl p-5">
                    <h4 className={`text-base font-bold text-numun-green mb-3 ${fonts.itcBenguiat}`}>
                      {r.cheatsheet.writingWorkingPapers.structureTitle}
                    </h4>
                    <p className={`${typography.bodySmall} mb-2`}>→ {r.cheatsheet.writingWorkingPapers.structureNote}</p>
                    <ul className="space-y-1">
                      {r.cheatsheet.writingWorkingPapers.structureItems.map((item, i) => (
                        <li key={i} className={`${typography.bodySmall} flex gap-2`}>
                          <span className="text-numun-gold flex-shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-numun-beige border-2 border-numun-gold/30 rounded-2xl p-5">
                    <h4 className={`text-base font-bold text-numun-green mb-3 ${fonts.itcBenguiat}`}>
                      {r.cheatsheet.writingWorkingPapers.submissionTitle}
                    </h4>
                    <p className={`${typography.bodySmall} flex gap-2`}>
                      <span className="text-numun-gold flex-shrink-0">→</span>
                      <span>{r.cheatsheet.writingWorkingPapers.submissionDesc}</span>
                    </p>
                  </div>
                </div>
              </div>
            </CollapsibleSection>

            {/* Writing Draft Resolutions */}
            <CollapsibleSection title={r.cheatsheet.writingDraftResolutions.title} isOpen={open.writingDraftResolutions} onToggle={() => toggle("writingDraftResolutions")}>
              <div className="mt-6">
                <div className={`${layout.grid.twoColumn} gap-8 mb-8`}>
                  <div>
                    <h4 className={`text-lg font-bold text-numun-green mb-3 ${fonts.itcBenguiat}`}>
                      {r.cheatsheet.writingDraftResolutions.purposeTitle}
                    </h4>
                    <ul className="space-y-2">
                      {r.cheatsheet.writingDraftResolutions.purposes.map((p, i) => (
                        <li key={i} className={`${typography.bodyNormal} flex gap-2`}>
                          <span className="text-numun-gold flex-shrink-0">→</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className={`text-lg font-bold text-numun-green mb-3 ${fonts.itcBenguiat}`}>
                      {r.cheatsheet.writingDraftResolutions.structureTitle}
                    </h4>
                    <ul className="space-y-2 mb-4">
                      {r.cheatsheet.writingDraftResolutions.structureNotes.map((n, i) => (
                        <li key={i} className={`${typography.bodyNormal} flex gap-2`}>
                          <span className="text-numun-gold flex-shrink-0">→</span>
                          <span>{n}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="bg-numun-beige border-2 border-numun-gold/30 rounded-2xl p-5">
                    <div className={`flex items-start ${spacing.gap.md}`}>
                      <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-numun-green text-white flex items-center justify-center font-bold text-sm ${fonts.cerebri}`}>1</span>
                      <div>
                        <p className={`font-bold text-numun-green ${fonts.itcBenguiat}`}>{r.cheatsheet.writingDraftResolutions.heading.label}</p>
                        <ul className="mt-2 space-y-1">
                          {r.cheatsheet.writingDraftResolutions.heading.items.map((item, i) => (
                            <li key={i} className={`${typography.bodySmall} flex gap-2`}>
                              <span className="text-numun-gold flex-shrink-0">•</span>
                              <span>
                                {item}
                                {item === r.cheatsheet.writingDraftResolutions.heading.items[r.cheatsheet.writingDraftResolutions.heading.items.length - 1] && (
                                  <span className="text-gray-500 ml-2">→ {r.cheatsheet.writingDraftResolutions.heading.signatoryNote}</span>
                                )}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="bg-numun-beige border-2 border-numun-gold/30 rounded-2xl p-5">
                    <div className={`flex items-start ${spacing.gap.md}`}>
                      <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-numun-green text-white flex items-center justify-center font-bold text-sm ${fonts.cerebri}`}>2</span>
                      <div>
                        <p className={`font-bold text-numun-green ${fonts.itcBenguiat}`}>{r.cheatsheet.writingDraftResolutions.preamb.label}</p>
                        <ul className="mt-2 space-y-1">
                          {r.cheatsheet.writingDraftResolutions.preamb.items.map((item, i) => (
                            <li key={i} className={`${typography.bodySmall} flex gap-2`}>
                              <span className="text-numun-gold flex-shrink-0">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="bg-numun-beige border-2 border-numun-gold/30 rounded-2xl p-5">
                    <div className={`flex items-start ${spacing.gap.md}`}>
                      <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-numun-green text-white flex items-center justify-center font-bold text-sm ${fonts.cerebri}`}>3</span>
                      <div>
                        <p className={`font-bold text-numun-green ${fonts.itcBenguiat}`}>{r.cheatsheet.writingDraftResolutions.operative.label}</p>
                        <p className={`${typography.bodySmall} mt-2 flex gap-2`}>
                          <span className="text-numun-gold flex-shrink-0">•</span>
                          <span>{r.cheatsheet.writingDraftResolutions.operative.item}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-numun-beige border-2 border-numun-gold/30 rounded-2xl p-5">
                  <h4 className={`font-bold text-numun-green mb-3 ${fonts.itcBenguiat}`}>
                    {r.cheatsheet.writingDraftResolutions.amendmentsTitle}
                  </h4>
                  <ul className="space-y-2">
                    {r.cheatsheet.writingDraftResolutions.amendments.map((a, i) => (
                      <li key={i} className={`${typography.bodyNormal} flex gap-2`}>
                        <span className="text-numun-gold flex-shrink-0">→</span>
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CollapsibleSection>

            {/* Sample Preambulatory / Operative Phrases — flat lists (EN) or categorised guide (JP) */}
            {r.cheatsheet.phraseGuide ? (
              <CollapsibleSection title={r.cheatsheet.phraseGuide.title} isOpen={open.phraseGuide} onToggle={() => toggle("phraseGuide")}>
                <div className="mt-4 space-y-6">
                  {r.cheatsheet.phraseGuide.categories.map((cat, ci) => (
                    <div key={ci}>
                      <p className={`text-sm font-bold text-numun-green mb-3 ${fonts.cerebri}`}>{cat.categoryLabel}</p>
                      <div className={`${tokens.borderRadius["2xl"]} overflow-hidden`}>
                        <div className="grid gap-1" style={{ gridTemplateColumns: "max-content 1fr" }}>
                          {cat.phrases.map((p, pi) => (
                            <React.Fragment key={pi}>
                              <div className={`bg-numun-green text-white text-sm italic font-semibold px-4 py-2 flex items-center ${fonts.cerebri}`}>
                                {p.phrase}
                              </div>
                              <div className={`bg-numun-beige text-numun-green-darkest text-sm px-4 py-2 ${fonts.cerebri}`}>
                                {p.hint}
                              </div>
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CollapsibleSection>
            ) : (
              <>
                <CollapsibleSection title={r.cheatsheet.preambulatoryPhrases.title} isOpen={open.preambulatoryPhrases} onToggle={() => toggle("preambulatoryPhrases")}>
                  <div className="mt-4">
                    <p className={`${typography.bodyNormal} mb-6`}>{r.cheatsheet.preambulatoryPhrases.intro}</p>
                    <div className="flex flex-wrap gap-2">
                      {r.cheatsheet.preambulatoryPhrases.phrases.map((phrase, i) => (
                        <span
                          key={i}
                          className={`bg-numun-beige text-numun-green font-semibold italic px-3 py-1.5 rounded-lg text-sm ${fonts.cerebri}`}
                        >
                          {phrase}
                        </span>
                      ))}
                    </div>
                  </div>
                </CollapsibleSection>

                <CollapsibleSection title={r.cheatsheet.operativePhrases.title} isOpen={open.operativePhrases} onToggle={() => toggle("operativePhrases")}>
                  <div className="mt-4">
                    <p className={`${typography.bodyNormal} mb-6`}>{r.cheatsheet.operativePhrases.intro}</p>
                    <div className="flex flex-wrap gap-2">
                      {r.cheatsheet.operativePhrases.phrases.map((phrase, i) => (
                        <span
                          key={i}
                          className={`bg-numun-beige text-numun-green font-semibold underline px-3 py-1.5 rounded-lg text-sm ${fonts.cerebri}`}
                        >
                          {phrase}
                        </span>
                      ))}
                    </div>
                  </div>
                </CollapsibleSection>
              </>
            )}

            {/* Amendments */}
            <CollapsibleSection title={r.cheatsheet.amendments.title} isOpen={open.amendments} onToggle={() => toggle("amendments")}>
              <div className="mt-4">
                <div className="bg-numun-beige border-2 border-numun-gold/30 rounded-2xl p-5 mb-6">
                  <h4 className={`font-bold text-numun-green mb-3 ${fonts.itcBenguiat}`}>
                    {r.cheatsheet.amendments.purposeTitle}
                  </h4>
                  <ul className="space-y-2">
                    {r.cheatsheet.amendments.purposes.map((p, i) => (
                      <li key={i} className={`${typography.bodyNormal} flex gap-2`}>
                        <span className="text-numun-gold flex-shrink-0">→</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <h4 className={`text-lg font-bold text-numun-green mb-4 ${fonts.itcBenguiat}`}>
                  {r.cheatsheet.amendments.typeTitle}
                </h4>
                <motion.div
                  className="space-y-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={scrollAnimations.staggerContainer}
                >
                  {r.cheatsheet.amendments.types.map((type, i) => (
                    <motion.div
                      key={i}
                      variants={scrollAnimations.staggerItem}
                      className="bg-numun-beige border-2 border-numun-gold/30 rounded-2xl p-5"
                    >
                      <div className={`flex items-start ${spacing.gap.md}`}>
                        <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-numun-green text-white flex items-center justify-center font-bold text-sm ${fonts.cerebri}`}>
                          {i + 1}
                        </span>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <p className={`font-bold text-numun-green ${fonts.itcBenguiat}`}>{type.label}</p>
                            {type.forClause && (
                              <span className={`text-xs font-semibold text-numun-green bg-numun-green/10 px-2 py-0.5 rounded ${fonts.cerebri}`}>
                                {type.forClause}
                              </span>
                            )}
                          </div>
                          {type.desc && <p className={`${typography.bodyNormal} mb-2`}>{type.desc}</p>}
                          {type.phrase && (
                            <p className={`${typography.bodySmall} italic text-numun-green-darkest flex gap-2 mb-2`}>
                              <span className="text-numun-gold flex-shrink-0">→</span>
                              <span>{type.phrase}</span>
                            </p>
                          )}
                          {type.note && (
                            <p className={`${typography.bodySmall} flex gap-2 mb-2`}>
                              <span className="text-numun-gold flex-shrink-0">→</span>
                              <span>{type.note}</span>
                            </p>
                          )}
                          {type.steps && (
                            <ul className="mt-2 space-y-1">
                              {type.steps.map((step, j) => (
                                <li key={j} className={`${typography.bodySmall} flex gap-2`}>
                                  <span className="text-numun-gold flex-shrink-0">→</span>
                                  <span className={j === 1 ? "italic" : ""}>{step}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </CollapsibleSection>

            {/* Voting on the Resolution */}
            <CollapsibleSection title={r.cheatsheet.voting.title} isOpen={open.voting} onToggle={() => toggle("voting")}>
              <div className="mt-6">
                <div className="space-y-4">
                  {r.cheatsheet.voting.items.map((item, i) => (
                    <div key={i} className="bg-numun-beige border-2 border-numun-gold/30 rounded-2xl p-5">
                      <p className={`${typography.bodyNormal} flex gap-2`}>
                        <span className="text-numun-gold flex-shrink-0">→</span>
                        <span>{item.text}</span>
                      </p>
                      {item.subs && (
                        <ul className="mt-3 space-y-1 ml-6">
                          {item.subs.map((sub, j) => (
                            <li key={j} className={`${typography.bodySmall} flex gap-2`}>
                              <span className="text-numun-gold flex-shrink-0">•</span>
                              <span>{sub}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </CollapsibleSection>

            {/* Glossary */}
            <CollapsibleSection title={r.cheatsheet.glossary.title} isOpen={open.glossary} onToggle={() => toggle("glossary")}>
              <div className="mt-6">
                <div className={`${tokens.borderRadius["2xl"]} overflow-hidden`}>
                  <div className="grid gap-1" style={{ gridTemplateColumns: "1fr 2fr" }}>
                    {r.cheatsheet.glossary.terms.map((term, i) => (
                      <React.Fragment key={i}>
                        <div className={`bg-numun-green text-white text-sm font-semibold px-4 py-3 flex items-center ${fonts.cerebri}`}>
                          {term.word}
                        </div>
                        <div className={`bg-numun-beige text-numun-green-darkest text-sm px-4 py-3 ${fonts.cerebri}`}>
                          {term.definition}
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </CollapsibleSection>

            {/* Commonly-Used Phrases */}
            <CollapsibleSection title={r.cheatsheet.commonPhrases.title} isOpen={open.commonPhrases} onToggle={() => toggle("commonPhrases")}>
              <div className="mt-6">
                <div className={`${tokens.borderRadius["2xl"]} overflow-hidden`}>
                  <div className="grid gap-1" style={{ gridTemplateColumns: "1fr 1fr" }}>
                    <div className={`bg-numun-green text-white text-sm font-bold px-4 py-3 ${fonts.cerebri}`}>Phrase</div>
                    <div className={`bg-numun-green text-white text-sm font-bold px-4 py-3 ${fonts.cerebri}`}>Circumstance</div>
                    {r.cheatsheet.commonPhrases.phrases.map((item, i) => (
                      <React.Fragment key={i}>
                        <div className={`bg-numun-beige text-numun-green-darkest text-sm italic px-4 py-3 flex items-center ${fonts.cerebri}`}>
                          {item.phrase}
                        </div>
                        <div className={`bg-numun-beige text-numun-green-darkest text-sm px-4 py-3 ${fonts.cerebri}`}>
                          {item.circumstance}
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </CollapsibleSection>

          </div>
        </div>
      </section>
    </div>
  );
}
