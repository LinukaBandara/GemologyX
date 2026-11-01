# GemologyX Learning Content Audit — First Pass

> Repository: `LinukaBandara/GemologyX`  
> Branch: `seo/technical-foundation`  
> Audited source baseline: `a37c81fccd9975c7aecee2980c0c845af3368aad`  
> Scope in this pass: 24 learning page files inspected directly (selected Sinhala clusters and English learning pages). This is a **partial content audit**, not a claim that all 109 pages have been reviewed.

## 1. Key findings from inspected pages

### A. Blue sapphire value cluster

| Page | Initial decision | Reason / action |
|---|---|---|
| `/si/learn/blue-sapphire-colour-quality` | Keep + improve | Distinct colour-evaluation intent; retain. Add clear visual examples/diagrams and sourced explanation of hue, tone, saturation and lighting. |
| `/si/learn/blue-sapphire-value-factors` | Keep | Broad value-factor overview is distinct. Make it the central value hub and link out to detailed supporting guides. |
| `/si/learn/blue-sapphire-price-per-carat` | Keep + improve | Distinct price-comparison/calculation intent. Keep cautious; add worked hypothetical examples, explain limits and avoid unsupported market price tables. |
| `/si/learn/rough-blue-sapphire-value` | Investigate overlap | Compare against rough gemstone valuation and cutting-yield content before deciding whether to retain as sapphire-specific or merge. |

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
