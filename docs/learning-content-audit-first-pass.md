# GemologyX Learning Content Audit — First Pass

> Repository: `LinukaBandara/GemologyX`  
> Branch: `seo/technical-foundation`  
> Audited source baseline: `a37c81fccd9975c7aecee2980c0c845af3368aad`  
> Scope in this pass: 30 learning page files inspected directly (selected Sinhala clusters and English learning pages). This is a **partial content audit**, not a claim that all 109 pages have been reviewed.

## 1. Key findings from inspected pages

### A. Blue sapphire value cluster

| Page | Initial decision | Reason / action |
|---|---|---|
| `/si/learn/blue-sapphire-colour-quality` | Keep + improve | Distinct colour-evaluation intent; retain. Add clear visual examples/diagrams and sourced explanation of hue, tone, saturation and lighting. |
| `/si/learn/blue-sapphire-value-factors` | Keep | Broad value-factor overview is distinct. Make it the central value hub and link out to detailed supporting guides. |
| `/si/learn/blue-sapphire-price-per-carat` | Keep + improve | Distinct price-comparison/calculation intent. Keep cautious; add worked hypothetical examples, explain limits and avoid unsupported market price tables. |
| `/si/learn/rough-blue-sapphire-value` | Pending direct review | Its title suggests a possible relationship to broader rough-stone valuation content; inspect the full page before deciding. |

### B. Heat and treatment cluster

| Page | Initial decision | Reason / action |
|---|---|---|
| `/si/learn/heated-sapphire-guide` | Merge / reposition | Overlaps with the broader heat-treatment guide and heated-vs-unheated sapphire guide. Preserve sapphire-specific report/disclosure details in a focused section or clearly distinct sapphire guide. |
| `/si/learn/heated-vs-unheated-blue-sapphire` | Keep + improve | Specific buying comparison intent. Keep separate from general treatment theory; deepen report wording, limitations and transaction implications. |
| `/si/learn/heat-treatment-guide` | Keep as main treatment hub | General treatment explainer. Strengthen technical detail and link to gemstone-specific treatment guides. |
| `/si/learn/diffusion-treatment-guide` | Keep + improve | Distinct treatment process; add diffusion depth, surface/lattice distinction where applicable, identification limits and references. |
| `/si/learn/fracture-filling-guide` | Keep + improve | Distinct treatment and durability implications; distinguish fracture filling from lead-glass filling and other enhancement types carefully. |
| `/si/learn/heat-vs-diffusion-vs-filling` | Keep as comparison | Comparative intent is distinct; use a clear comparison table and link to the three detailed treatment pages. |
| `/si/learn/gemstone-treatment-disclosure` | Keep | Buyer/disclosure intent differs from technical treatment descriptions; add practical written-disclosure examples. |

### C. Buying and dealer guidance cluster

| Page | Initial decision | Reason / action |
|---|---|---|
| `/si/learn/gemstone-buying-checklist` | Keep | Broad transaction checklist; use as the main general buyer checklist. |
| `/si/learn/questions-to-ask-gem-dealer` | Keep + improve | Distinct question-led intent; add printable/usable question list and link to checklist. |
| `/si/learn/avoid-gemstone-scams` | Keep + improve | Risk/red-flag intent; keep evidence-based and avoid unsupported claims about named sellers. |
| `/si/learn/sri-lanka-buying-day-tips` | Keep + verify | Useful local context; verify any practical/legal claims and distinguish general advice from current rules. |
| `/si/learn/sri-lanka-dealer-types` | Keep + improve | Sri Lankan trade-structure explainer; clarify roles without stereotyping or implying every dealer follows one model. |
| `/si/learn/negotiate-gem-price` | Keep + improve | Negotiation intent is distinct; focus on comparing like-for-like evidence and ethical transaction practice. |
| `/si/learn/online-vs-local-gem-buying` | Keep | Channel comparison intent; add structured comparison and cross-link to photo-buying guidance. |
| `/si/learn/buying-gems-from-photos` | Keep + improve | Specific remote-purchase risk; expand image limitations, independent verification, payment and return terms. |

### D. Natural, synthetic and imitation cluster

| Page | Initial decision | Reason / action |
|---|---|---|
| `/si/learn/natural-vs-synthetic-gemstones` | Keep as main explainer | Covers natural, lab-grown and imitation distinctions. |
| `/si/learn/natural-synthetic-imitation-gems` | Merge / reposition | Strong overlap with the above page. Best converted into a concise terminology/reference page focused on synthetic, imitation and assembled terminology, or merged if it adds no distinct value. |

### E. Laboratory report and certification cluster

| Page | Initial decision | Reason / action |
|---|---|---|
| `/si/learn/how-to-read-gem-report` | Keep as main report guide | Broad report-reading intent; use as the central report hub. |
| `/si/learn/gem-lab-report-details` | Merge / reposition | Overlaps with the main report guide. Keep only if expanded into a distinct field-by-field reference with a clearly different intent. |
| `/si/learn/gem-certification-myths` | Keep + improve | Myth-busting intent is distinct; clarify report vs guarantee, lab scope and limits. |
| `/si/learn/fake-lab-reports` | Keep + improve | Fraud/verification intent is distinct; add a practical verification workflow and explain that a genuine report can still be mismatched to a different stone. |

### F. English learning pages inspected

| Page | Initial decision | Reason / action |
|---|---|---|
| `/learn/gemstone-care` | Keep + improve | Broad care guide; include treatment-sensitive caveats and avoid universal cleaning claims. |
| `/learn/gemstone-certification` | Keep + improve | Useful lab-scope explainer; link to report-reading and verification pages. |
| `/learn/heated-vs-unheated` | Keep + improve | Broad treatment comparison; make it distinct from sapphire-specific Sinhala content and add a clear comparison structure. |
| `/learn/how-to-read-a-gemstone-report` | Keep + improve | Core English report guide; consider adding annotated sample report elements. |
| `/learn/natural-vs-synthetic-gemstones` | Keep + improve | Core English explainer; include imitation and assembled materials without conflating them with synthetics. |
| `/learn/questions-to-ask-gem-dealer` | Keep + improve | Strong practical guide; add a downloadable/print-friendly checklist if useful. |
| `/learn/sapphire/sapphire-value-factors` | Keep + improve | Sapphire-specific English value intent; align facts and terminology with the Sinhala value hub. |
| `/learn/sapphire/what-is-ceylon-sapphire` | Pending direct review | Route identified; content not inspected in this pass. |
| `/learn` | Keep + improve | Learning index; improve taxonomy, language navigation and discovery of topic clusters. |

## 2. Layout observations

- Sinhala sample pages consistently import `ArticleLayout` and commonly use `QuickAnswer` and `PracticalChecklist`. This is a sound baseline, but repeated callouts alone do not establish content uniqueness.
- The English sample pages use a simpler article structure and do not consistently use quick-answer/checklist components. Align the experience where it improves usability, while preserving content-specific layouts.
- Add comparison tables for treatment comparisons and buying-channel comparisons.
- Add annotated sample report visuals to report guides; use clearly labelled illustrative examples, not fake real certificates.
- Add diagrams where a technical mechanism genuinely benefits from explanation.
- Add source notes and review dates to pages with changing regulatory, trade or market information.

## 3. Priority actions

1. Resolve the clear overlap pairs:
   - `heated-sapphire-guide` vs `heat-treatment-guide` vs `heated-vs-unheated-blue-sapphire`
   - `natural-vs-synthetic-gemstones` vs `natural-synthetic-imitation-gems`
   - `how-to-read-gem-report` vs `gem-lab-report-details`
2. Strengthen the main hubs rather than adding near-duplicate pages:
   - sapphire value hub
   - general treatment hub
   - natural/synthetic/imitations explainer
   - lab report guide
   - general buyer checklist
3. Add cross-links between supporting pages and their hubs. The inspected samples often had few or no explicit internal `href` links in the page source; verify whether navigation is provided elsewhere before treating this as a site-wide issue.
4. Continue the direct source review across the remaining Sinhala gemstone introductions, rough-stone, mining/trade, care, comparisons and tools pages.
5. After content decisions, create the exact proposed 180-item backlog with title, slug, language, page archetype, unique intent, required sources and internal-link targets.

## 4. Audit limitations

- File size, title, headings and component usage are structural signals, not proof of content quality.
- The recommendations above are initial editorial decisions based on the inspected source files. Any merge or redirect must wait until full content, search intent, backlinks, analytics and current indexing are checked.
- No pages were deleted, redirected, merged or rewritten in this audit pass.


## 5. Second review batch — 24 additional Sinhala pages

The following source files were inspected directly after the initial 30-page pass. This brings the cumulative direct review to **54 of 109 learning page files** (55 remain). These are editorial triage decisions, not final fact-check approvals.

| Page | Initial decision | Direct-source finding / next action |
|---|---|---|
| `/si/learn/alexandrite-intro` | Keep + substantially improve | Clear colour-change chrysoberyl intent and useful synthetic/look-alike warning. Very short; add colour-change explanation, lighting examples, species/variety distinctions, and sourced identification limits. |
| `/si/learn/amber-intro` | Keep + improve | Distinct organic gem material. Expand amber vs copal vs pressed/reconstructed amber and plastic/glass imitations; add safe care and evidence-backed identification limits. |
| `/si/learn/amethyst-intro` | Keep + improve | Useful quartz-family and heat-treatment overview. Verify Sinhala naming in title (currently “නීලකාන්ත”), expand colour/treatment/market terminology, and add sourced detail. |
| `/si/learn/aquamarine-intro` | Keep + improve | Beryl and sapphire comparison gives distinct buyer value. Verify Sinhala naming in title (currently “නීලවර්ණ”); add colour, clarity, treatment disclosure and illustrative comparison. |
| `/si/learn/birthstones-guide` | Keep + improve | Useful gift-selection intent. Lists are acknowledged as variable, but the page needs an attributed month-by-month table with named traditions/sources, alternatives and durability notes. |
| `/si/learn/blue-sapphire-buying-checklist` | Keep | Practical sapphire-specific transaction checklist distinct from the general buyer checklist. Improve with printable format, written terms, return policy and independent verification steps. |
| `/si/learn/blue-sapphire-care` | Keep + improve | Useful sapphire-specific care page. Clarify that cleaning safety depends on fractures, setting and treatments; provide a safe decision flow and avoid universal ultrasonic/steam advice. |
| `/si/learn/blue-sapphire-complete-guide` | Keep as hub + improve | Strong directory/hub structure linking specialist sapphire topics. Add concise topic summaries, clearer grouping and ensure every linked child page has substantive content; avoid duplicating the child guides. |
| `/si/learn/chrysoberyl-intro` | Keep + improve | Good mineral/variety distinction (ordinary chrysoberyl, alexandrite, cat’s-eye). Expand identification and optical effects; review breadcrumb/related-link hierarchy because it currently points first to alexandrite. |
| `/si/learn/citrine-intro` | Keep + improve | Distinct quartz/treatment and yellow-stone confusion intent. Expand natural vs heat-treated material and distinguish citrine from topaz/yellow sapphire with sourced examples. |
| `/si/learn/coral-intro` | Keep + verify | Organic material, dye and care are useful. Legal/conservation statements are jurisdiction-dependent; cite current official CITES and Sri Lankan sources before giving actionable import/export advice. |
| `/si/learn/cutting-weight-loss` | Keep + substantially improve | Valuable rough-to-cut yield topic, but most body text is English despite Sinhala route. Add a Sinhala worked hypothetical yield example, diagram, terminology and clear explanation of uncertainty/ownership agreements. |
| `/si/learn/diamond-basics` | Keep + improve | Distinct diamond 4Cs and lab-grown/simulant explanation. Expand cut vs shape, grading-report scope and a structured comparison of natural, lab-grown, CZ and moissanite. |
| `/si/learn/emerald-intro` | Keep + improve | Useful beryl, inclusions and oil/resin treatment overview. Add treatment degree/disclosure nuance, care cautions and a sourced emerald-vs-other-green-stones comparison. |
| `/si/learn/export-documents-intro` | Keep + verify | Useful general export-awareness page, but intentionally generic and English-heavy. Must link to current official customs/NGJA guidance and separate personal carriage from commercial export; do not present a generic document list as a legal requirement. |
| `/si/learn/fluorite-intro` | Keep + improve | Clear low-hardness/cleavage and care intent. Add mineral properties, common imitations/confusions and practical jewellery-setting guidance. |
| `/si/learn/garnet-intro` | Keep + improve | Correctly frames garnet as a mineral group with multiple colours/species. Add a species/colour table and explain ruby vs garnet identification limits. |
| `/si/learn/glass-vs-gemstone` | Keep + improve | Distinct imitation-awareness intent; importantly warns that home tests are unreliable/damaging. Add safe visual examples and avoid presenting bubbles or facet features as diagnostic proof. |
| `/si/learn/jade-intro` | Keep + improve | Jadeite/nephrite and treatment disclosure are useful. Expand Type A/B/C terminology carefully with lab-context caveats, plus a table of properties and treatment descriptions. |
| `/si/learn/kunzite-intro` | Keep + improve | Distinct light-sensitivity and cleavage care topic. Add sourced evidence and practical storage/wear advice; compare with morganite and pink sapphire without visual-ID claims. |
| `/si/learn/lapis-lazuli-intro` | Keep + improve | Correctly identifies lapis as a rock and mentions pyrite/calcite and treatments. Add composition/quality variation, treatment disclosure and care detail. |
| `/si/learn/moonstone-intro` | Keep + improve | Adularescence and durability provide a clear topic. Clarify moonstone vs trade use of “rainbow moonstone” and labradorite, with visual examples and sourcing. |
| `/si/learn/morganite-intro` | Keep + improve | Useful pink beryl and heat-treatment distinction. Expand colour/clarity, treatment disclosure and comparison with kunzite/pink sapphire. |
| `/si/learn/opal-intro` | Keep + improve | Good play-of-colour and care overview. Expand precious/common opal, doublet/triplet, hydrophane and stability distinctions with a comparison table. |

### Cross-cutting findings from this batch

- Most gemstone introductions are short, template-based pages with one quick answer, a small number of short sections, a checklist and misconceptions. This is a useful consistent entry point, but not yet a sufficiently deep reference for many topics.
- Several pages are predominantly English or mix English and Sinhala heavily despite being under `/si/` routes (notably rough cutting yield and export documents). Rewrite for natural, accessible Sinhala while retaining standard English gemological terms where useful.
- The pages inspected in this batch did not show source citations/references in the page body. Add trustworthy references for technical properties, treatment claims, trade terminology and legal/regulatory information.
- Reusable improvements should include property tables, comparison tables, labelled diagrams, safe-care notes and explicit “what a lab can/cannot determine” explanations where relevant. Do not add decorative visuals without explanatory value.
- Check title terminology and Sinhala gem names with a consistent editorial glossary; at least the Amethyst and Aquamarine titles need terminology review.
- Export and coral content must be treated as time-sensitive/legal-adjacent: use current official sources and date the review. Do not imply that general awareness text is legal advice.

### Next review batch

Continue with the remaining gemstone introductions and rough-stone pages, especially `rough-blue-sapphire-value`, `rough-yellow-sapphire-value`, `rough-sapphire-inclusions`, `rough-gem-questions`, `buying-rough-gemstones`, and `buying-geuda`. Then review Sri Lankan mining/trade, care, comparisons and utility pages. No merge, redirect, deletion or page rewrite is authorized by this audit alone.


## 6. Third review batch — 8 additional Sinhala gemstone pages

This batch directly reviewed 8 further page sources. Cumulative direct review is now **62 of 109 learning page files** (47 remain).

| Page | Initial decision | Direct-source finding / next action |
|---|---|---|
| `/si/learn/padparadscha-intro` | Keep + substantially improve | Distinct high-intent sapphire variety. The page correctly notes that colour boundaries and lab nomenclature may differ. Add attributed lab terminology, colour-range visuals and treatment/report caveats; do not imply a universal definition where sources differ. |
| `/si/learn/pearl-intro` | Keep + improve | Natural vs cultured vs imitation is useful. Expand freshwater/saltwater and common pearl types, nacre/coating quality, matching and care; distinguish “cultured” from “imitation” precisely. |
| `/si/learn/peridot-intro` | Keep + improve | Clear olivine identity and emerald comparison. Add property table, inclusions/colour discussion and practical care/setting advice. |
| `/si/learn/quartz-family-intro` | Keep as family hub + improve | Useful parent page for amethyst/citrine and other quartz varieties. Add a clear variety table and route users to individual guides without repeating their full content. |
| `/si/learn/ruby-intro` | Keep + improve | Useful red corundum, treatment and look-alike overview. Add ruby colour terminology, treatment categories, fracture/glass-filling disclosure and ruby-vs-spinel/garnet comparison with references. |
| `/si/learn/spinel-intro` | Keep + improve | Distinct mineral and ruby-confusion intent. Expand properties, colour range, treatments and a comparison table; historical anecdotes need a reliable source if retained. |
| `/si/learn/tanzanite-intro` | Keep + improve | Clear zoisite identity, heat treatment and durability. Add pleochroism, stability/care and origin-context detail with sources; avoid implying that every stone's treatment can be inferred visually. |
| `/si/learn/topaz-intro` | Keep + improve | Useful topaz vs sapphire and blue-topaz treatment intent. Explain irradiation/heat disclosure, cleavage vs hardness, colour-name trade terms and care with a property table. |

### Additional cross-cutting note

These eight pages retain the same concise ArticleLayout pattern and generally provide a useful entry-level answer, but most need deeper reference material before they can stand alone as authoritative guides. Prioritize comparison tables, diagrams, sourced property ranges, treatment notes and practical buyer/care examples. No page was modified beyond this audit document.
