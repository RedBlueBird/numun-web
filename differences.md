# Differences: Official Japanese ROP PDF vs. Current Implementation (jp.ts fullRop)

Compared pages 2–21 of `[2026] ROP - Japanese.pdf` against `src/locales/jp.ts` → `fullRop`.

---

## CRITICAL: Missing Rule — Rule 25「コーカス終了」

The PDF contains **Rule 25「コーカス終了」** (Caucus Termination) as the final rule of Section IV. It is **entirely absent** from the implementation. Because this rule is missing, every rule from Section V onward is **numbered one too low** in the implementation (e.g., implementation Rule 25 = PDF Rule 26, implementation Rule 42 = PDF Rule 43).

**PDF Rule 25 content:**
> コーカスの時間が終了した際、または議長が秩序回復や進行上の必要性を認めた際には、議長はコーカスの終了を宣言し、討論を**正式討論（formal debate）**に戻す。終了時点で作成中の文書（作業文書、草案など）は、議長の承認を得た後、次の適切な段階で紹介される。

---

## Section Titles

| Section | PDF Official Title | Current Implementation |
|---|---|---|
| II | `会議の運営` | `II. デレゲートの行動規範` ❌ |
| III | `討論` | `III. 討議の運営` ❌ |
| V | `文書` | `V. ワーキングペーパー、決議案、および修正案` ❌ |
| VIII | `討論の終了` | `VIII. 討議の終結` ❌ |
| I, IV, VI, VII | ✓ Correct | — |

---

## Rule-by-Rule Differences

### Rule 1「適用範囲」

**Title:** PDF `1．適用範囲` / Impl `規則1：適用範囲` (minor format difference)

**Body para 1:**
- PDF: 「本会議運営規則は、議長団の裁量およびアカデミックチームの指導のもと、特に定めのない限り、すべての委員会に適用される。これらの規則は、委員会における討論、投票、文書の取り扱いを統括し、円滑かつ秩序ある進行を保証することを目的とする。」
- Impl: 「議事規則は、アカデミックスチームの指導のもと、議長の裁量により別段の定めがある場合を除き、UNA-USA模擬国連連盟の枠組みのもとで運営されるすべての委員会に適用されます。…」

**Body para 2:**
- PDF: 「会議運営規則の施行においては、議長は手続きの円滑な運営および積極的な討論を確保するために、必要に応じて本規則を解釈・適用する権限を有する。」
- Impl paraphrases differently.

**Body para 3:**
- PDF: 「2026年名古屋大学模擬国連の各委員会における討論議題は以下の通りである：」
- Impl: 「名古屋大学模擬国連2026の各委員会のトピックは以下の通りです：」

**Committee names in scope list** — PDF uses full Japanese names, impl uses abbreviations:
| PDF | Impl `name` field |
|---|---|
| 国際連合安全保障理事会 | UNSC |
| 経済社会理事会 | ECOSOC |
| 世界保健機関 | WHO |
| 国際連合人権理事会 | UNHCR |
| 国際連合環境計画 | UNEP |

**Committee order in scope list** — PDF lists UNHCR (4th) before UNEP (5th). Implementation has them reversed (UNEP 4th, UNHCR 5th).

---

### Rule 2「役員および職務」

**Title:** PDF `役員および職務` / Impl `規則2：役員` ❌ (missing「および職務」)

**Intro text:** PDF has four detailed paragraphs explaining the roles of Chair, Co-Chairs, and Member of Academics. Impl has a single short sentence.

**PDF intro paragraphs:**
1. 各委員会には、議長（Chair）、副議長（Co-Chairs）、および**アカデミックチームのメンバー（Member of Academics）が配置される。**
2. **議長（Chair）**は、会議全体を主宰し、秩序の維持、公平かつ中立的な討論の進行を担う。
3. **副議長（Co-Chairs）**は議長を補佐し、必要に応じて議長の職務を代行する。
4. アカデミックチームのメンバーは、委員会と主催組織との橋渡し役を務める。
5. 各委員会の議長・副議長は以下の通りである：

**Officers table committee names** — PDF uses full Japanese names, impl uses English abbreviations:
| PDF | Impl |
|---|---|
| 国際連合安全保障理事会（上級） | UNSC（上級） |
| 経済社会理事会（中級） | ECOSOC（中級） |
| 世界保健機関（初級） | WHO（初級） |
| 国際連合人権理事会 | 国連人権理事会 ❌ (「連合」missing) |
| 国際連合環境計画 | 国連環境計画 ❌ (「連合」missing) |

---

### Rule 3「定足数」

**Title:** PDF `定足数` / Impl `規則3：定足数` (format only)

**Body — CRITICAL CONTENT ERROR:**
- PDF: 「定足数は、委員会全構成員の**3分の1以上**の出席をもって成立する。実質的事項（substantive matters）の投票を行う際には、**過半数**の出席が必要である。」
- Impl: 「委員会の定足数は、委員会構成員の**単純過半数**が出席していることとします。」

The quorum threshold is wrong. PDF says **1/3 of all members** (and a majority for substantive votes). The implementation says simple majority.

The impl also adds content not in the PDF (checking quorum via motion), and omits the substantive-matters clause.

---

### Rule 4「会議言語」

**Title:** PDF `会議言語` / Impl `規則4：討議言語` ❌

**Body — completely different structure:**
- PDF specifies that 3 committees operate in English and 2 in Japanese, then lists them:
  - **英語委員会（English Committees）:** 国際連合安全保障理事会、国際連合経済社会理事会、世界保健機関
  - **日本語委員会（Japanese Committees）:** 国際連合人権理事会、国際連合環境計画
- Impl presents generic `english[]` and `japanese[]` bullet arrays with generic statements ("Speeches may be delivered in English/Japanese") that do not appear in the PDF.

PDF also states: 「会議および休憩時間中のコーカス（caucus）では、各委員会に割り当てられた言語で討論および発言を行うものとする。休憩時間中においては、参加者は自由な言語で交流してよい。」 — this nuance (each committee has an assigned language; free language during breaks) is absent from the implementation.

---

### Rule 5「資格審査」

**Title:** PDF `資格審査` / Impl `規則5：資格` ❌ (missing「審査」)

**Body — completely different:**
- PDF: すべての代表の資格は会議開始前に主催者が承認。疑義は**アカデミック責任者（Head of Academics）**に書面で提出。代表が他の代表の資格を討論中に直接異議申し立てることは認められない。
- Impl: Describes delegation composition (1–2 delegates per member state). None of this appears in the PDF's Rule 5.

---

### Rule 6「態度および礼儀」

**Title:** PDF `態度および礼儀` / Impl `規則6：礼儀` ❌ (missing「態度および」)

**Body:**
- PDF: 「代表は、常に最高水準の礼節と外交的態度を保持しなければならない。議長は、これらの基準に反する行為を行った代表に対し、**注意または秩序回復命令（call to order）**を行う権限を有する。」
- Impl: Mentions personal attacks, discriminatory language, and delegates staying "in character" — none of which appear in the PDF's Rule 6.

---

### Rule 7「議長の権限」

**Title:** ✓ Matches (format difference only)

**Body — different content:**
- PDF: 「議長の決定は、**アカデミック責任者への正式な不服申し立て（appeal）**が認められない限り最終決定である。議長および副議長は、委員会運営に関して共同で権限を行使する。」
- Impl: Says a 2/3 majority of the committee can overturn. PDF says appeal goes to Head of Academics, not a committee vote. Impl does not mention co-chairs sharing authority jointly.

---

### Rule 8「議題」

**Title:** ✓ Matches

**Body:**
- PDF: 「議長団は、会議開始前に**暫定議題（provisional agenda）**を提示する。委員会は、開会後に単純多数決によって議題の順序を設定する。」
- Impl: Does not mention the provisional agenda presented by the dais before the meeting. Impl adds content about items proceeding until closure/tabling not in the PDF here.

---

### Rule 9「出席および点呼」

**Title:** PDF `出席および点呼` / Impl `規則9：出席` ❌ (missing「および点呼」)

**Body:**
- PDF: Explains **Present** vs **Present and Voting** distinction in detail, specifying that "Present and Voting" delegates cannot abstain on substantive matters.
- Impl: No mention of Present/Present and Voting distinction here (though impl mentions it elsewhere under voting rights). Impl adds "inform dais of planned absences" — not in PDF.

---

### Rule 10「品位および服装」

**Title:** PDF `品位および服装` / Impl `規則10：品位` ❌ (missing「および服装」)

**Body:**
- PDF: Specifies **西洋式ビジネスフォーマル（Western business formal）** by name. States non-compliant delegates may be refused entry by Chair's discretion.
- Impl: Says "appropriate business attire" generically. Adds electronic device rules that belong elsewhere (not in this rule in the PDF).

---

### Rule 11「公的文書」

**Title:** PDF `公的文書` / Impl `規則11：公式文書` ❌ (「公的」→「公式」)

**Body:**
- PDF: Explicitly names 作業文書（Working Papers）、決議案草稿（Draft Resolutions）、修正案（Amendments）. States the chair can stop distribution of incomplete, inappropriate, or incorrectly formatted documents.
- Impl: Generic language about committee name/topic labels on documents — not in the PDF.

---

### Rule 12「オブザーバー」

**Title:** ✓ Matches (format only)

**Body:**
- PDF: 「オブザーバーは、議長の裁量により討論への参加を許可されることがあるが、**実質的事項への投票権は持たない。**」(One sentence.)
- Impl: Adds NGO/IGO descriptions and prohibition on sponsoring resolutions — none of which appear in the PDF's Rule 12.

---

### Rule 13「技術利用および人工知能」

**Title:** PDF `技術利用および人工知能` / Impl `規則13：テクノロジーおよびAI` ❌

**Body — reversed framing:**
- PDF: Technology use is **permitted and encouraged by default**; the chair may restrict it only if it disrupts proceedings. Then lists AI prohibition items: 演説原稿、ポジションペーパー、「ポイント（Points）」の作成 / 作業文書・決議案草稿・修正案など実質的文書の作成。
- Impl: Frames all tech use as restricted to research only. Does not mention that tech is generally encouraged. Omits ポジションペーパー and Points from the AI prohibition list.

---

### Rule 14「演説」

**Title:** PDF `演説` / Impl `規則14：スピーチ` ❌

**Body:**
- PDF: 「発言時間の初期設定は**60秒**とし、変更を希望する場合は**動議（motion）**によって行う。」Also mentions raising a placard to be added to the list.
- Impl: No mention of the 60-second default speaking time or the placard procedure.

---

### Rule 15「譲渡」

**Title:** ✓ Matches (format only)

**Body:**
- PDF: Lists **3 yield types** only: 他の代表への譲渡（再譲渡不可）、質疑応答への譲渡、議長への譲渡。Notes re-yielding is not permitted.
- Impl: Lists **4 yield types** (adds "フロアへの譲渡" which is not in the PDF). Impl does not mention the prohibition on re-yielding (再譲渡不可).

---

### Rule 16「討論の関連性」

**Title:** PDF `討論の関連性` / Impl `規則16：関連性` ❌ (missing「討論の」)

**Body:**
- PDF: Chair issues a **秩序回復の指示（call to order）**.
- Impl: States the delegate "may be ruled out of order" and expelled — not in PDF.

---

### Rule 17「発言者名簿の閉鎖」

**Title:** PDF `発言者名簿の閉鎖` / Impl `規則17：発言者リストの締め切り` ❌ (「名簿」→「リスト」, 「閉鎖」→「締め切り」)

**Body:**
- PDF: States that once closed, debate ends when all speakers on the list have spoken.
- Impl: Says the list "may be reopened by a subsequent motion" — the PDF does not say this here (it's a separate Rule 18).

---

### Rule 18「発言者名簿の再開」

**Title:** PDF `発言者名簿の再開` / Impl `規則18：発言者リストの再開` ❌ (「名簿」→「リスト」)

**Body:**
- PDF: Requires a **賛成者（second）** and simple majority vote.
- Impl: No mention of a second being required.

---

### Rule 19「ポイント」

**Title:** ✓ Matches (format only)

**Circumstance text — all 5 entries differ from PDF:**

| Point | PDF (official) | Implementation |
|---|---|---|
| 個人的特権のポイント | 会議室の温度、騒音、聴取不能など、個人的な快適さまたは聴取可能性に関する問題を指摘する際に使用する。ただし、聴取不能に関する場合のみ発言を中断して挙げることができる。議長は即時にその有効性を判断し、投票は行わない。 | 個人的な快適さや音声の聞こえ方が参加に影響する場合。発言中のデレゲートを遮ることができます。（simplified, omits: chair rules immediately, no vote） |
| 議事規則違反のポイント | 議長または代表による手続上の誤りを指摘する場合に使用する。発言中の代表を中断することはできない。議長は即時に判断し、投票は不要である。 | Simplified; omits chair rules immediately, no vote |
| 議事的照会のポイント | 議事運営や動議の適格性に関して議長に質問する場合に使用する。議長は即時に判断し、投票は不要である。 | Simplified |
| 情報のポイント | 議長はやり取りを監視し、**人身攻撃的な発言（ad hominem statements）**に対しては制裁を課す権限を有する。 | Omits the ad hominem clause |
| 反論権 | 議長の裁量により、短い口頭での回答が許可されることがある。反論権の乱用は拒否の対象。議長は反論権の適切性を最終的に判断する権限を持つ。議長は、該当発言後に反論を希望するかどうかを直接確認することができる。 | Simplified; omits abuse clause, chair's discretion on timing |

---

### Rule 20「動議」

**Major structural difference.** The PDF has **21 official motions** with a specific set, order, and Japanese names. The implementation has **27 motions** with different names, order, and descriptions. Many implementation motions do not appear in the PDF.

**PDF official motion list (in order):**
1. 議題設定の動議
2. 発言者名簿開設の動議
3. 発言者名簿追加の動議
4. 発言時間変更の動議
5. 発言者名簿閉鎖の動議
6. 発言者名簿再開の動議
7. モデレーテッド・コーカスの動議
8. アンモデレーテッド・コーカスの動議
9. コーカス延長の動議
10. 議題保留の動議
11. 討論再開の動議
12. 決議案草稿提出の動議
13. 修正案提出の動議
14. 分割投票の動議
15. 討論終了（投票手続移行）の動議
16. 点呼投票の動議
17. 休会の動議
18. 散会の動議
19. 手続上の投票の動議
20. 再審議の動議
21. 議事規則の一時停止の動議

**Motions in implementation NOT in PDF:**
- 議長決定異議動議（this is Rule 41 in the PDF, not a motion in the motions table）
- 討議休会動議（PDF has「休会の動議」and「散会の動議」as separate entries）
- 休憩動議
- 非着席討議を開始する動議（PDF calls this「モデレーテッド・コーカスの動議」）
- 定足数確認動議
- 記録訂正動議
- ゲストスピーカー・特別プレゼンのための討議停止動議
- 院内分割動議（議長裁量）
- 拍手動議（議長裁量）

**Name differences** (same concept, different official name):
| PDF Official Name | Implementation Name |
|---|---|
| 議題設定の動議 | 議題設定動議 |
| 発言者名簿開設の動議 | 発言者リスト開設動議 |
| 発言者名簿追加の動議 | 発言者リスト追加動議 |
| 発言者名簿閉鎖の動議 | 発言者リスト締切動議 |
| 発言者名簿再開の動議 | 発言者リスト再開動議 |
| モデレーテッド・コーカスの動議 | 非着席討議を開始する動議 ❌ |
| アンモデレーテッド・コーカスの動議 | アンモデレーテッド・コーカス動議 |
| コーカス延長の動議 | コーカス延長動議 |
| 議題保留の動議 | トピック保留動議 ❌ |
| 討論再開の動議 | 討議再開動議 |
| 決議案草稿提出の動議 | 決議草案導入動議 ❌ |
| 修正案提出の動議 | 修正案導入動議 |
| 分割投票の動議 | 問題分割動議 ❌ |
| 討論終了（投票手続移行）の動議 | 討議終結動議（投票ブロック移行）|
| 点呼投票の動議 | ロールコール投票動議 ❌ |
| 再審議の動議 | 決議・採決再審議動議 |
| 議事規則の一時停止の動議 | 規則停止動議 |

Each motion in the PDF also has richer circumstance text (mentioning 賛成者 requirements, Chair's discretion, conditions) that the implementation summarizes or omits.

---

### Rule 21「動議およびポイントの優先順位」

**Title:** PDF `動議およびポイントの優先順位` / Impl `規則21：優先順位` ❌

**Structure — completely different:**
- PDF: A **table with 12 items** with 3 columns: 優先順位（高→低）/ 動議またはポイント名 / 投票要件 / 中断の可否
- Impl: A **simple numbered list with 31 items**

**PDF's 12-item precedence table:**
| # | Name | Vote Required | Can Interrupt |
|---|---|---|---|
| 1 | 個人的特権のポイント | 投票不要 | ○（聴取不能時のみ）|
| 2 | 議事規則違反のポイント | 投票不要 | × |
| 3 | 議事的照会のポイント | 投票不要 | × |
| 4 | モデレーテッド・コーカスの動議 | 単純多数 | × |
| 5 | アンモデレーテッド・コーカスの動議 | 単純多数 | × |
| 6 | コーカス延長の動議 | 単純多数 | × |
| 7 | 議題保留の動議 | 単純多数 | × |
| 8 | 討論再開の動議 | 単純多数 | × |
| 9 | 討論終了（投票手続移行）の動議 | 3分の2多数 | × |
| 10 | 点呼投票の動議 | 単純多数 | × |
| 11 | 再審議の動議 | 3分の2多数 | × |
| 12 | 議事規則の一時停止の動議 | 3分の2多数 | × |

The implementation's 31-item list contains many motions not on this official table and is in a completely different order.

---

### Rule 22「モデレーテッド・コーカス」

**Title:** ✓ Matches (format only)

**Body:**
- PDF: Proposer must state **(1) コーカスの目的（purpose）, (2) 全体の時間, (3) 各発言者の持ち時間**. Chair may reject, modify the time, or limit discussion focus (裁量あり). Speaking order is at Chair's discretion.
- Impl: Says proposer states total time, per-delegate time, and *topic* — but omits **purpose** (目的) as a required element. Impl does not mention Chair's discretion to reject/modify. Impl incorrectly adds yields-not-permitted detail (that belongs to a general debate rule, not here in the PDF).

---

### Rule 23「アンモデレーテッド・コーカス」

**Title:** ✓ Matches (format only)

**Body:**
- PDF: Proposer must state **目的（purpose）and 希望する時間（duration）**. Requires a **賛成者（second）**. Extension only via「コーカス延長の動議」.
- Impl: Says proposer states time only — omits **purpose**. No mention of a second required. No mention of extension rule.

---

### Rule 24「コーカス延長の動議」

**Title:** PDF `コーカス延長の動議` / Impl `規則24：コーカスの延長` ❌

**Body:**
- PDF: Requires a second. Chair may reject if: コーカスが非生産的、全体進行を著しく遅延、同一目的の延長が繰り返されている。Chair may also modify the extension time.
- Impl: States "コーカスは1回のみ延長可能" — **this constraint does not appear in the PDF**. Impl omits the second requirement and the chair's grounds for rejection.

---

### Rule 25「コーカス終了」— MISSING (see top of document)

---

### Rule 26 (PDF) / Rule 25 (Impl)「作業文書」

**Rule number:** PDF 26 / Impl 25 ❌ (off by 1 from here on)

**Title:** PDF `作業文書` / Impl `規則25：ワーキングペーパー` ❌

**Body:**
- PDF: 「これらの文書は、公式な地位を持たず（**have no official status**）、採択や署名者数の要件を必要としない。」Dais reviews for format, appropriateness, and **討論との関連性（relevance）**.
- Impl: Does not use「have no official status」. Says the dais checks format but not relevance. Adds「スポンサーや署名者は必要なく」— the PDF says it differently (採択や署名者数の要件を必要としない).

---

### Rule 27 (PDF) / Rule 26 (Impl)「決議草案」

**Rule number:** PDF 27 / Impl 26 ❌

**Title:** ✓ 決議草案 (matches, format differs)

**Body:**
- PDF: 「草案は、議長団の承認（approval by the Dais）を得た時点で正式な文書として登録され、さらに、議長が定める必要最小限のスポンサー数を満たさなければならない。」「草案は、現在討論中の議題に直接関係していなければならず、承認後は**討論および修正（debate and amendment）**の対象となる。」
- Impl: Describes the UN format (heading, preambulatory clauses, operative clauses) — **this formatting requirement does not appear in the PDF's Rule 27**. Impl omits the requirement that the draft must be directly related to the current topic under debate.

---

### Rule 28 (PDF) / Rule 27 (Impl)「修正案」

**Rule number:** PDF 28 / Impl 27 ❌

**Title:** ✓ 修正案 (matches)

**Unfriendly amendment description:**
- PDF: 「全てのスポンサーの同意を得られなかった修正案であり、**討論および投票**によって採否が決定される」
- Impl: 「決議草案に組み込むには**単純過半数の採決**が必要です。」(Impl specifies simple majority; PDF just says debate and vote.)

**further[] list in impl:** The three additional rules (amendments only modify operative clauses; no amendments to amendments; cannot reconsider after vote) do **not appear in the PDF's Rule 28**.

---

### Rule 29 (PDF) / Rule 28 (Impl)「合併および撤回」

**Rule number:** PDF 29 / Impl 28 ❌

**Title:** PDF `合併および撤回` / Impl `規則28：統合と撤回` ❌ (「合併」→「統合」)

**Body:**
- PDF: Withdrawal means a sponsor **withdraws their sponsorship** (撤回できる。ただし、撤回後も草案自体は引き続き他のスポンサーによって提出・維持される場合がある。)
- Impl: Says "the draft resolution or amendment may be withdrawn" entirely — omits the critical nuance that other sponsors can continue to maintain the resolution after one sponsor withdraws.

---

### Rule 30 (PDF) / Rule 29 (Impl)「投票ブロック」

**Rule number:** PDF 30 / Impl 29 ❌

**Body:**
- PDF: 「全ての出入りが禁止され、委員会室の**扉は閉鎖される**。いかなる交信、私語、または席の移動も禁止される。」
- Impl: Does not mention the door being locked. Impl references「規則33」which is wrong (the correct rule cross-reference should be Rule 34 in PDF numbering). Impl omits prohibition on communication and seat movement.

---

### Rule 31 (PDF) / Rule 30 (Impl)「投票権」

**Rule number:** PDF 31 / Impl 30 ❌

**Title:** PDF `投票権` / Impl `規則30：採決権` ❌ (「投票」→「採決」)

**Body:**
- PDF: 「**Present and Voting（出席かつ投票）**と宣言した代表は、棄権（abstain）できず、必ず「賛成（Yes）」または「反対（No）」のいずれかを選択しなければならない。」
- Impl: Does not include Present and Voting rule here (impl handles it separately under abstentions). Impl says "observers have no voting rights" — PDF says observers cannot vote on substantive matters (not a blanket prohibition).

---

### Rule 32 (PDF) / Rule 31 (Impl)「投票中の行動規範」

**Rule number:** PDF 32 / Impl 31 ❌

**Title:** PDF `投票中の行動規範` / Impl `規則31：採決中の行動` ❌

**Body:**
- PDF: 「規律違反が発生した場合、議長は当該代表の**票を無効とする権限**を有する。」
- Impl: Does not mention invalidating votes. Impl adds electronic device rule (not in this PDF rule).

---

### Rule 33 (PDF) / Rule 32 (Impl)「点呼投票」

**Rule number:** PDF 33 / Impl 32 ❌

**Title:** PDF `点呼投票` / Impl `規則32：ロールコール投票` ❌

Content is largely similar; format/number differences only.

---

### Rule 34 (PDF) / Rule 33 (Impl)「投票ブロック中の動議」

**Rule number:** PDF 34 / Impl 33 ❌

**Body:**
- PDF: 「投票順序や方法に直接関係するものに限られる。（例：「**質問分割の動議（Motion to Divide the Question）**」など）」— gives one example, open-ended.
- Impl: Lists 5 specific permissible motions — more prescriptive than the PDF.

---

### Rule 35 (PDF) / Rule 34 (Impl)「多数決要件」

**Rule number:** PDF 35 / Impl 34 ❌

**Title:** PDF `多数決要件` / Impl `規則34：過半数要件` ❌

**Body:**
- PDF defines: simple majority = 賛成が反対を上回る; 2/3 majority = 委員会の構成員の**3分の2以上が賛成**する場合。棄権は賛否の計算に含まれない。
- Impl: Adds which motions require which majority (suspension of rules, appeal to chair = 2/3) — this is not stated in the PDF's Rule 35. The PDF's 2/3 definition counts "all committee members" vs impl's "delegates present and voting."

---

### Rule 36 (PDF) / Rule 35 (Impl)「棄権および保留」

**Rule number:** PDF 36 / Impl 35 ❌

**Title:** PDF `棄権および保留` / Impl `規則35：棄権と保留` ❌ (「および」→「と」)

**Body:**
- PDF: On second call, delegates must choose **「賛成（Yes）」「反対（No）」または「棄権（Abstain）」** — they can still abstain on second call.
- Impl: Says on second call delegates must vote「賛成」or「反対」only — **omits the option to abstain on second call**.

---

### Rule 37 (PDF) / Rule 36 (Impl)「質問分割」

**Rule number:** PDF 37 / Impl 36 ❌

**Title:** PDF `質問分割` / Impl `規則36：問題の分割` ❌ (「質問」→「問題」)

**Body:**
- PDF: 「質問分割が可決された場合、委員会はまず各部分の採決を行い、その後、**採択された部分を統合して最終採決を行う。**」
- Impl: Omits the final combined vote procedure. Impl adds "各部分は独立して成立できるものでなければならない" — not in the PDF. Impl omits the second (賛成者) requirement.

---

### Rule 38 (PDF) / Rule 37 (Impl)「投票の再考」

**Rule number:** PDF 38 / Impl 37 ❌

**Title:** PDF `投票の再考` / Impl `規則37：再審議` ❌

**Body — significant differences:**
- PDF: (1) Motion can only be submitted by delegates who **voted in favour** (賛成した代表のみ). (2) Subject to **Chair's discretion** whether to accept. (3) Can only be submitted **once per topic**.
- Impl: None of these three conditions appear in the implementation.

---

### Rule 39 (PDF) / Rule 38 (Impl)「規則の一時停止」

**Rule number:** PDF 39 / Impl 38 ❌

**Title:** PDF `規則の一時停止` / Impl `規則38：規則の停止` ❌ (「一時停止」→「停止」)

**Body:**
- PDF: Suspended rules must not conflict with **国連憲章（UNA-USA Charter）または学術局長（Head of Academics）の指針**.
- Impl: Says rules "pertaining to delegation rights" cannot be suspended — this exception does not appear in the PDF.

---

### Rule 40 (PDF) / Rule 39 (Impl)「発言権の回復」

**Rule number:** PDF 40 / Impl 39 ❌

**Title:** PDF `発言権の回復` / Impl `規則39：反論権` ❌ (「発言権の回復」 is the official Japanese term, not「反論権」)

**Body:**
- PDF: Permitted reply is **30秒以内**の口頭発言. Abuse/frivolous requests will be rejected.
- Impl: No 30-second limit specified. No mention of abuse/frivolous request rejection.

---

### Rule 41 (PDF) / Rule 40 (Impl)「議長決定への異議」

**Rule number:** PDF 41 / Impl 40 ❌

**Title:** PDF `議長決定への異議` / Impl `規則40：議長への異議申し立て` ❌

**Body:**
- PDF: 「3分の2の**反対票**があった場合、議長の判断が**維持（sustained）**される。」 (If 2/3 vote against overturning → chair sustained.) Chair may explain reasoning before the vote.
- Impl: States "3分の2の多数が必要" (to overturn) — same logical outcome but different framing. Impl adds tie-goes-to-chair rule (not in PDF). Impl omits Chair's right to explain reasoning before the vote.

---

### Rule 42 (PDF) / Rule 41 (Impl)「討論の終結」— CRITICAL ERROR

**Rule number:** PDF 42 / Impl 41 ❌

**Title:** PDF `討論の終結` / Impl `規則41：討議の終結` ❌ (「討論」→「討議」)

**Body — CRITICAL majority requirement error:**
- PDF: 「この動議には**賛成者（second）が必要**であり、**3分の2の多数決**によって可決される。」
- Impl: 「**単純過半数**で可決された場合」

The closure of debate requires a **2/3 majority** in the PDF, but the implementation says **simple majority**. This is a substantive rules error.

Impl also adds the "two delegates against may speak before the vote" clause — this does not appear in the PDF's Rule 42.

---

### Rule 43 (PDF) / Rule 42 (Impl)「会期の閉会」

**Rule number:** PDF 43 / Impl 42 ❌

**Title:** PDF `会期の閉会` / Impl `規則42：休会` ❌ (「会期の閉会」 means permanent end; 「休会」means temporary recess)

**Body — fundamental concept error:**
- PDF: 「会期の閉会とは、**全ての委員会活動の終了**を意味する。…可決後、委員会のすべての議事は**正式に終了する**。」(Permanent end of all committee activity.)
- Impl: Describes a temporary suspension until the next session, with pending business preserved. This is the wrong concept entirely.

---

## Summary of Critical Errors

| # | Issue | Severity |
|---|---|---|
| 1 | Rule 25「コーカス終了」completely missing | Critical — shifts all numbering |
| 2 | Rule 42 closure of debate: **simple majority** in impl vs **2/3 majority** in PDF | Critical — wrong procedural rule |
| 3 | Rule 43 adjournment: impl describes temporary recess; PDF describes permanent end of session | Critical — wrong concept |
| 4 | Rule 3 quorum threshold: impl says **simple majority**; PDF says **1/3** | Critical |
| 5 | Rule 20 motions table: 27 motions with wrong names/order vs 21 official motions | Major |
| 6 | Rule 21 precedence: 31-item list vs 12-item table with vote requirements and interrupt columns | Major |
| 7 | All rule numbers from Section V onward are off by 1 | Major |
| 8 | Rule 40 Right of Reply (発言権の回復): missing 30-second time limit | Moderate |
| 9 | Rule 38 reconsideration: missing "only by those who voted yes", chair discretion, once-per-topic | Moderate |
| 10 | Rule 7 Chair's authority: appeal goes to Head of Academics, not 2/3 committee vote | Moderate |
| 11 | Section titles II, III, V, VIII all incorrect | Moderate |
| 12 | Rule 4 language: wrong structure — should list specific committees by language, not generic bullets | Moderate |
| 13 | Officers table: abbreviations (UNSC, WHO) vs full Japanese names | Moderate |
| 14 | Rule 2 title missing「および職務」; intro omits Member of Academics role | Minor–Moderate |
| 15 | Multiple rule titles use wrong Japanese terminology | Minor |

---

## Categorization by Fix Feasibility

### Category A — Simple jp.ts String Edits
> Only `jp.ts` needs to change. Types and rendering are unaffected. These are the easiest, lowest-risk fixes.

| Issue | What to change |
|---|---|
| Section titles II, III, V, VIII | Update `sectionTitle` values under `conduct`, `debate`, `workingPapersResolutions`, `closureOfDebate` |
| All rule titles with missing words or wrong terminology | String replacement in the respective `title` fields (Rules 2, 5, 6, 9, 10, 11, 13, 14, 16, 17, 18, 24, 29, 31, 32, 33, 35, 36, 37, 38, 39, 40, 41, 42, 43) |
| Rule 3 quorum body | Replace「単純過半数」with「3分の1以上」and add substantive-matters clause |
| Rule 7 Chair's authority | Change 2/3 committee vote → appeal to Head of Academics; add co-chairs sharing authority |
| Rule 8 agenda | Add provisional agenda paragraph; remove non-PDF content |
| Rule 12 observers | Trim to one sentence; remove NGO/IGO content not in PDF |
| Rule 14 speeches | Add 60-second default time and placard procedure |
| Rule 15 yields | Remove「フロアへの譲渡」(not in PDF); add re-yielding prohibition |
| Rule 16 relevance | Change expulsion to「秩序回復の指示」|
| Rule 17 speakers list closure | Remove reopening clause (belongs in Rule 18 only) |
| Rule 18 speakers list reopen | Add second (賛成者) requirement |
| Rule 22 moderated caucus | Change「topic」to「purpose」(目的); add chair's discretion to reject/modify |
| Rule 23 unmoderated caucus | Add purpose (目的) to proposer requirements; add second required; add extension rule reference |
| Rule 24 caucus extension | Remove fabricated "one extension only" constraint; add second; add chair's grounds for rejection |
| Rule 26 working papers | Correct official-status language; add relevance check |
| Rule 28 amendments (unfriendly) | Change specified simple majority → general "debate and vote"; remove the three `further[]` items not in PDF |
| Rule 29 merging/withdrawal | Add nuance that remaining sponsors can maintain the draft after one sponsor withdraws |
| Rule 30 voting bloc | Add door-closure sentence; remove incorrect rule cross-reference |
| Rule 34 motions during bloc | Simplify to match PDF's open-ended wording (one example) |
| Rule 35 majority requirements | Correct 2/3 definition (all committee members, not just present and voting) |
| Rule 36 abstentions | Fix second-call: delegates can still abstain on second call |
| Rule 37 division of question | Add final combined-vote procedure; add second requirement; remove non-PDF item |
| Rule 38 reconsideration | Add: only those who voted yes; chair discretion; once per topic |
| Rule 40 right of reply | Add 30-second limit; add abuse/frivolous rejection clause |
| Rule 41 appeal chair | Reframe 2/3 logic (sustain framing vs overturn framing); add chair's right to explain before vote; remove tie-goes-to-chair |
| Rule 42 closure of debate | Change 単純過半数 → 3分の2多数; add second requirement; remove non-PDF "two speakers against" clause |
| Rule 43 adjournment | Rewrite as permanent end of all committee activity (not temporary recess) |

---

### Category B — Content Overhaul (Same Type Structure)
> The TypeScript type is already correct; only the content values need significant replacement. More effort than Category A, but still no structural code changes.

| Issue | What to change |
|---|---|
| Rule 1 body text (scope) | Rewrite all three paragraphs in both `en.ts` and `jp.ts` to match PDF wording; swap committee order (UNHCR before UNEP); update committee name fields |
| Rule 2 intro text | Expand from one sentence to 5 paragraphs (Chair, Co-Chairs, Member of Academics roles) in both locales |
| Rule 4 language body | Replace generic bullet arrays with specific committee-to-language assignments (UNSC/ECOSOC/WHO → English; UNHCR/UNEP → Japanese); add break-time language freedom clause |
| Rule 5 credentials | Completely rewrite: change from delegation-composition text to credentials-approval + written-objection-to-Head-of-Academics text |
| Rule 6 courtesy | Rewrite to match PDF one-sentence rule; remove personal attacks / in-character content |
| Rule 9 attendance | Add Present/Present-and-Voting distinction; remove non-PDF absence-notice clause |
| Rule 10 decorum | Specify「西洋式ビジネスフォーマル」by name; remove electronic device content |
| Rule 11 official documents | Name specific document types; add chair's authority to stop distribution |
| Rule 13 technology/AI | Reverse framing (tech permitted by default, restricted only when disruptive); add ポジションペーパー and Points to AI prohibition list |
| Rule 19 points table | Rewrite all 5 circumstance descriptions to match full PDF text (chair rules immediately; no vote; ad hominem clause; abuse clause) |
| Rule 20 motions table | Replace 27-entry list with 21 official motions in PDF order with correct Japanese names and richer circumstance descriptions |
| Rule 27 draft resolutions | Remove UN formatting description (not in this rule in PDF); add topic-relevance requirement |

---

### Category C — Structural Code Changes
> Requires changes to `locales.ts` (type definition), both `en.ts`/`jp.ts` (content), **and** `page.tsx` (rendering). Highest effort and risk; test after each change.

| Issue | What to change | Complexity |
|---|---|---|
| **Rule 25 missing** (コーカス終了) | Add `caucusTermination: { title: string; body: string }` field to `fullRop.caucuses` in `locales.ts`; add content in both locales; add a new rendered rule block inside the Caucuses `CollapsibleSection` in `page.tsx` | Medium |
| **Rule 21 precedence table** | Change type from `{ title: string; intro: string; items: string[] }` to `{ title: string; items: Array<{ name: string; voteRequired: string; canInterrupt: string }> }` in `locales.ts`; rewrite to 12 items in both locales; replace `<ol>` list rendering with a 3-column grid table (`優先順位 / 投票要件 / 中断の可否`) in `page.tsx` | High |

---

### Category D — Cross-Locale Sync (en.ts + jp.ts, No Type Changes)
> Both locale files need updating, but types and rendering are unaffected. Medium effort.

| Issue | What to change |
|---|---|
| Officers table committee names | `en.ts`: keep abbreviations or use full English names; `jp.ts`: change to full Japanese names (国際連合安全保障理事会, 経済社会理事会, 世界保健機関, 国際連合人権理事会, 国際連合環境計画) |
| Rule 31 voting rights | Sync Present/Present-and-Voting content between the two locales consistently |

---

### Recommended Fix Order

1. **Start with Category A** — all are isolated `jp.ts` string changes with zero risk of breaking types or rendering. Fix all at once.
2. **Then Category D** — cross-locale text sync, still low risk.
3. **Then Category B** — requires careful content alignment between EN and JP; validate both locales compile after changes.
4. **Category C last** — Rule 25 first (smaller scope), then Rule 21 (table restructure). Run `npx tsc --noEmit` after each structural change.
