# GemologyX Learning Content Audit — First Pass

> Repository: `LinukaBandara/GemologyX`  
> Branch: `seo/technical-foundation`  
> Audited source baseline: `a37c81fccd9975c7aecee2980c0c845af3368aad`  
> Scope: all 109 learning page files in the current route inventory have now been inspected directly at source level (100 Sinhala routes and 9 English routes). This is a completed first-pass editorial triage, not a full gemological fact-check, analytics audit or search-intent validation.

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


## 7. Fourth review batch — 8 rough-stone and measurement pages

This batch directly reviewed 8 further Sinhala learning sources. Cumulative direct review is now **70 of 109 learning page files** (39 remain).

| Page | Initial decision | Direct-source finding / next action |
|---|---|---|
| `/si/learn/rough-blue-sapphire-value` | Keep + improve | Direct review completed. Sapphire-specific rough valuation is distinct from general rough buying. It explains uncertainty, inclusions, cutting yield and total costs. Add a worked hypothetical calculation and link to the general rough-stone hub. |
| `/si/learn/rough-yellow-sapphire-value` | Keep + improve | Yellow-sapphire-specific identity and cutting risk are useful. Expand beyond the short outline with a worked example, yellow sapphire vs topaz/citrine identification limits and sourced treatment notes. |
| `/si/learn/rough-sapphire-inclusions` | Keep + substantially improve | More detailed than many pages and appropriately warns that inclusions do not prove natural origin or treatment. Add labelled inclusion photographs/diagrams, safe loupe guidance and clearer distinctions between surface-reaching fractures and internal features. |
| `/si/learn/rough-gem-questions` | Merge / reposition | Its five buyer-question categories substantially overlap `buying-rough-gemstones`. Best as a printable question checklist embedded in or linked from the main rough-buying guide unless a distinct question-led intent is demonstrated. |
| `/si/learn/buying-rough-gemstones` | Keep as main rough-buying hub + improve | Clear buyer workflow covering identity, treatment, damage, yield, price and terms. Expand with a pre-purchase checklist, example written agreement and links to the specialist rough-value pages. |
| `/si/learn/buying-geuda` | Keep + substantially improve | Important Sri Lankan trade-specific topic; currently very short and mostly English. Expand in accessible Sinhala with geuda terminology, uncertainty, heating process overview, risks, costs, disclosure and authoritative technical references. Avoid implying a predictable heat result. |
| `/si/learn/carat-weight-guide` | Keep as main carat/size guide + improve | Useful distinction between weight, dimensions, cut depth and price-per-carat. Add a visual size-vs-weight comparison and calculator/example; do not imply a universal price curve. |
| `/si/learn/carat-vs-gram` | Merge / reposition | Conversion content substantially duplicates `carat-weight-guide`. Preserve a concise conversion table/tool within the main guide or make this a standalone converter only if it provides functional value beyond the text. |

### Rough-stone cluster decisions

- Keep the general rough-buying page as the central transaction guide and keep the sapphire-specific valuation/inclusion pages as specialist supporting resources.
- Consolidate the duplicate general rough-questions page into a printable checklist or distinct interactive resource; do not keep two near-identical explanatory articles.
- Keep geuda as a distinct Sri Lankan topic, but substantially expand and source it before treating it as a complete guide.
- Make rough-to-cut yield a connected topic across the general rough-buying guide, sapphire value pages and cutting-weight-loss page. Use one consistent worked hypothetical example, clearly labelled as illustrative rather than a promised yield.
- Carat conversion belongs in the main weight guide; a standalone converter is a better utility than another thin article.
- No content pages were modified, merged, redirected or deleted in this batch. Only the audit report was updated.


## 8. Fifth review batch — 8 Sri Lankan trade, origin and travel pages

This batch directly reviewed 8 source files (including a repeat verification of the export page previously reviewed in batch 2). The cumulative number of unique learning page files directly reviewed remains **77 of 109** (32 remain).

| Page | Initial decision | Direct-source finding / next action |
|---|---|---|
| `/si/learn/sri-lanka-gem-trade-intro` | Keep as Sri Lanka trade hub + substantially improve | Broad overview of mining, cutting, trading and export, but currently high-level. Add a sourced industry map/flow, mining regions, roles, licensing and export pathways; distinguish historical background from current rules. |
| `/si/learn/sri-lanka-dealer-types` | Keep + substantially improve | Trade-role taxonomy is useful, but most body copy is English and extremely brief. Rewrite in natural Sinhala and explain rough suppliers, cutters, brokers, exporters and retail jewellers neutrally, with examples of responsibilities and questions to ask. |
| `/si/learn/sri-lanka-gem-terms` | Keep + improve | Useful local terminology reference (geuda, rough, cut stones, Ceylon). Expand into a structured glossary with Sinhala/English terms, precise definitions, examples and cross-links to deeper guides. |
| `/si/learn/sri-lanka-buying-day-tips` | Keep + substantially improve | Practical local buying advice, but English-heavy and short. Add a step-by-step buyer visit plan, document checklist and safe transaction guidance. Any claims about locations, licensing or legal requirements need current official sourcing. |
| `/si/learn/sri-lankan-blue-sapphire` | Keep as Sri Lankan sapphire guide + improve | Useful distinction between trade label, origin opinion and quality/treatment. Add sourced geology/mining context and an annotated explanation of what origin reports can and cannot conclude. |
| `/si/learn/what-ceylon-means` | Reposition / merge carefully | Overlaps with the Sri Lankan blue sapphire page on “Ceylon” as a trade term and origin opinion. Preserve a concise terminology section or make it a distinct reference only if it deeply explains historical/trade usage and lab-origin language; avoid two thin pages answering the same question. |
| `/si/learn/travel-with-gemstones` | Keep + verify | Practical transport/security topic. Rewrite in fuller Sinhala and separate general packing/insurance advice from customs declaration rules; link to destination-country official sources because rules vary. |
| `/si/learn/export-documents-intro` | Keep + verify (repeat source confirmation) | General awareness page, not a legal checklist. Personal carriage and commercial export must be separated. Add current official Sri Lankan customs/NGJA sources and destination-country verification; do not state generic documents as universally mandatory. |

### Sri Lanka content cluster decisions

- Use `sri-lanka-gem-trade-intro` as the central industry hub, supported by specialist pages on mining, licensing, trade roles, buying, export and origin.
- Keep `sri-lanka-gem-terms` as a structured glossary, not another broad narrative article.
- Clarify the boundary between `sri-lankan-blue-sapphire` and `what-ceylon-means`; likely move the concise “what Ceylon means” explanation into the sapphire guide and retain a standalone page only if it has a genuinely distinct terminology/history scope.
- Rewrite English-heavy Sinhala routes in natural Sinhala while preserving established technical English terms in parentheses.
- Regulatory and customs content must carry official sources, jurisdiction, last-verified date and a clear non-legal-advice boundary. Avoid static claims that can become outdated.
- No content pages were changed, merged, redirected or deleted in this batch.


## 9. Sixth review batch — 8 care, evaluation and jewellery pages

This batch directly reviewed 8 additional unique Sinhala sources. Cumulative direct review is now **85 of 109 learning page files** (24 remain).

| Page | Initial decision | Direct-source finding / next action |
|---|---|---|
| `/si/learn/gemstone-care-general` | Keep as main care hub + improve | Broad cleaning, storage, wear and treatment-sensitive care overview. Add a stone-by-stone care matrix and cross-links to specialist care pages; clearly qualify any “safe default”. |
| `/si/learn/gemstone-cleaning-methods` | Keep + substantially improve | Useful focused cleaning method page with sensible cautions for emerald, opal, pearl, coral, turquoise and filled stones. Expand into a decision table by gem/treatment and cite reputable care guidance. |
| `/si/learn/gemstone-clarity-guide` | Keep + improve | Distinguishes coloured-stone clarity from diamond grading and notes durability implications. Add a visual glossary and clarify that coloured-stone clarity terminology is not one universal grading scale. |
| `/si/learn/gemstone-colour-guide` | Keep as colour hub + improve | Hue/tone/saturation and lighting are useful fundamentals. Add labelled visual examples, colour zoning and trade-term caveats; connect to sapphire-specific colour pages. |
| `/si/learn/gemstone-cut-shapes` | Keep + improve | Good distinction between shape and cut quality, plus cabochon and weight-retention notes. Add annotated diagrams for windowing, extinction, symmetry and common shapes. |
| `/si/learn/gemstone-inclusions-guide` | Keep as general inclusions hub + improve | Clear explanation that inclusions do not automatically mean fake and can affect durability. Add labelled examples and connect to the rough-sapphire inclusions page without duplicating its cutting-risk detail. |
| `/si/learn/gemstone-gift-buying` | Keep + improve | Distinct gift-selection intent, focused on lifestyle, budget, durability and returns. Add a simple recipient-use comparison and practical sizing/return examples. |
| `/si/learn/jewelry-with-gems-buying` | Keep + improve | Distinct finished-jewellery purchase intent covering stone, metal, setting and paperwork. Add a metal/setting checklist and clarify jewellery-specific quality checks. |

### Care and evaluation cluster decisions

- Keep `gemstone-care-general` as the parent care page and `gemstone-cleaning-methods` as the practical cleaning procedure guide. Their scopes should be explicit to prevent repeated generic cleaning paragraphs.
- Add a treatment-aware care matrix; never imply that one cleaning method is safe for every stone or setting.
- Keep general colour, clarity, cut and inclusions pages as foundational reference guides. They should explain concepts and link to specific gem pages rather than duplicate their valuation content.
- Keep gift buying and jewellery buying separate: one addresses choosing for a recipient/lifestyle; the other addresses the finished item, metal, setting and documentation.
- No page content was modified, merged, redirected or deleted in this batch.


## 10. Seventh review batch — 8 identification, comparison and sapphire pages

This batch directly reviewed 8 additional unique Sinhala source files. Cumulative direct review is now **93 of 109 learning page files** (16 remain).

| Page | Initial decision | Direct-source finding / next action |
|---|---|---|
| `/si/learn/ruby-vs-garnet` | Keep + improve | Clear species comparison and safe identification caveat. Add a concise property/comparison table and labelled examples; do not imply visual certainty. |
| `/si/learn/ruby-vs-spinel` | Keep + improve | Distinct high-value buyer confusion topic, but overlaps with the ruby-vs-garnet page and ruby/spinel introductions. Keep if it provides a fuller buyer comparison; otherwise combine both ruby look-alike comparisons into a single comparison resource with separate sections. |
| `/si/learn/sapphire-vs-tanzanite` | Keep + improve | Useful mineral identity and durability comparison. Add property table, care/setting implications and treatment disclosure. |
| `/si/learn/yellow-sapphire-vs-topaz` | Keep + improve | Useful yellow-stone confusion topic, also connected to citrine. Add a three-way comparison table and clarify naming/terminology in Sinhala. |
| `/si/learn/uv-light-gem-myths` | Keep + substantially improve | Important warning that fluorescence is not a definitive ID test. Current body is English-heavy and brief; rewrite in Sinhala, explain UV-A/UV-B safety and limitations, and avoid suggesting a phone UV torch is a reliable diagnostic tool. |
| `/si/learn/star-sapphire-guide` | Keep + improve | More detailed and practical than many introductions; covers asterism, cabochon cut and viewing. Add labelled diagrams/photos of star quality and sourced treatment/identification notes. |
| `/si/learn/synthetic-sapphire-guide` | Keep + improve | Correctly distinguishes lab-grown corundum from glass/CZ and natural sapphire. Expand growth methods, disclosure terminology and report-reading with reliable references. |
| `/si/learn/identify-sapphire` | Keep as sapphire identification hub + improve | Good caution against visual identification and home testing. Add a safe observation workflow, comparison table of common look-alikes and explanation of what professional testing evaluates. |

### Comparison and identification cluster decisions

- Keep comparison pages when the buyer intent is genuinely distinct, but strengthen them beyond repeated “these are different minerals” paragraphs with property, durability, treatment and buying tables.
- Review `ruby-vs-garnet` and `ruby-vs-spinel` together. A single strong “ruby look-alikes” comparison may serve users better than two very short pages; preserve separate URLs only if each has distinct search intent and enough unique depth.
- Add citrine to the yellow sapphire/topaz comparison because it is already named as a likely look-alike.
- Keep `identify-sapphire` as the main safety-first identification page and link from sapphire variety and comparison pages.
- Rewrite UV-light content for Sinhala readers and include appropriate UV safety guidance from authoritative sources.
- No page content was modified, merged, redirected or deleted in this batch.


## 11. Eighth review batch — 8 auction, laboratory, origin and jewellery pages

This batch directly reviewed 8 additional unique Sinhala source files. Cumulative direct review is now **101 of 109 learning page files** (8 remain).

| Page | Initial decision | Direct-source finding / next action |
|---|---|---|
| `/si/learn/buying-at-gem-auction` | Keep + substantially improve | Distinct auction purchase intent. Expand buyer premium/total-cost worked example, inspection and catalogue limitations, bidding discipline and auction-specific terms. Clarify that conditions vary by auction house and jurisdiction. |
| `/si/learn/gem-insurance-appraisal` | Keep + improve | Useful distinction between lab report, insurance appraisal, replacement value and resale price. Add a sample appraisal breakdown, update cadence and insurer-specific policy questions; do not state one universal valuation method. |
| `/si/learn/gem-labs-overview` | Keep as lab/report hub + improve | Correctly explains reports as scoped opinions, not guarantees, and avoids ranking labs. Add a neutral comparison of report types, verification workflow and scope/limitations. Avoid unsubstantiated lab rankings. |
| `/si/learn/gem-terms-glossary-si` | Keep + substantially improve | Distinct Sinhala terminology resource, but currently short. Expand into a searchable/structured glossary with consistent Sinhala/English terms, definitions, examples and links to relevant guides. |
| `/si/learn/origin-opinion-vs-guarantee` | Keep + improve | Important distinct explanation of origin opinions and their limitations. Link to the Ceylon/sapphire pages and lab overview; add a clearly labelled illustrative report wording example. |
| `/si/learn/pawn-and-resale-reality` | Keep + improve | Useful expectation-setting page separating retail, appraisal and resale/pawn values. Add a transparent hypothetical example and explain why offers vary; avoid unsupported percentage estimates. |
| `/si/learn/jewelry-setting-types` | Keep + improve | Practical prong/bezel and durability topic. Add setting diagrams and a stone-durability comparison, while avoiding blanket claims that one setting is always safe. |
| `/si/learn/ring-vs-pendant-durability` | Keep + improve | Distinct use-case guidance for daily rings vs pendants/earrings. Add a simple wear-risk matrix and link to setting types and care pages. |

### Lab, transaction and jewellery cluster decisions

- Use `gem-labs-overview` as the parent resource; `origin-opinion-vs-guarantee` explains one specific report limitation, while `gem-insurance-appraisal` covers a different valuation purpose.
- Keep pawn/resale expectations separate from insurance appraisal, but cross-link them to prevent confusion between replacement value and cash resale offers.
- Keep auction buying as a separate transaction channel with its own costs and terms.
- Keep jewellery setting and ring-vs-pendant pages distinct: one explains construction; the other explains wear context. Link them closely.
- Expand the Sinhala glossary and align its definitions with the site's English terms and gemstone data.
- No content pages were modified, merged, redirected or deleted in this batch.


## 12. Final review batch — remaining 8 learning pages

This final batch directly reviewed the 7 remaining Sinhala page files and the remaining English Ceylon sapphire page. **All 109 learning page files (100 Sinhala + 9 English) have now received a direct source-level first-pass review.**

| Page | Initial decision | Direct-source finding / next action |
|---|---|---|
| `/si/learn/blue-sapphire-lab-report` | Keep + improve | Useful sapphire-specific report reading, especially treatment wording and origin notes. Keep distinct from the general report guide only if it remains focused on sapphire report fields; add annotated illustrative examples and explain “no indications of heat” as bounded report language, not absolute proof. |
| `/si/learn/blue-sapphire-red-flags` | Keep + improve | Strong buyer-risk checklist with sensible caveat that one red flag alone does not prove fraud. Add printable checklist and link to general scam avoidance and sapphire buying pages. |
| `/si/learn/mohs-hardness-guide` | Keep as hardness hub + improve | Correctly distinguishes scratch resistance from toughness and includes approximate gem values. Add a sourced property table and visual explanation; label values as approximate and avoid implying hardness alone predicts durability. |
| `/si/learn/secondhand-jewelry-gems` | Keep + substantially improve | Useful pre-owned jewellery topic covering wear, documentation and resizing. Currently English-heavy; rewrite in accessible Sinhala and add an inspection checklist for settings, replaced stones, repairs and report matching. |
| `/si/learn/tourmaline-intro` | Keep + improve | Useful mineral-group and trade-name overview. Expand species/variety terminology (e.g. indicolite, rubellite, Paraíba) carefully, with sourced colour/treatment notes and no unsupported origin inference. |
| `/si/learn/turquoise-intro` | Keep + improve | Distinct stabilization/dye and care topic. Add natural/stabilized/reconstituted/imitation distinctions, disclosure wording and practical care table with references. |
| `/si/learn/zircon-intro` | Keep + improve | Important zircon vs cubic zirconia distinction. Expand natural zircon properties, heat-treatment colour changes, durability and safe care; include a clear comparison table. |
| `/learn/sapphire/what-is-ceylon-sapphire` | Keep + improve; align with Sinhala cluster | More detailed English treatment of “Ceylon” as geographic origin vs colour/trade shorthand, and lab origin opinions. Align terminology with `/si/learn/what-ceylon-means` and `/si/learn/sri-lankan-blue-sapphire`; clarify that origin reports are expert opinions with limits, not GPS-level certainty. |

### Final coverage and limitations

- Direct source-level first-pass coverage is complete for the current inventory: **109 / 109 learning page files**.
- This does not mean all 109 pages are publish-ready. It does not substitute for external fact-checking, current legal/regulatory verification, analytics/Search Console review, backlink checks, query-intent analysis, or testing the rendered pages.
- The route inventory counted 100 Sinhala learning page files and 9 English learning page files. This is a source-file count; dynamic routes/data-backed records are tracked separately in the route inventory.
- The most important consolidation candidates identified across the audit are:
  1. `/si/learn/rough-gem-questions` into `/si/learn/buying-rough-gemstones` as a practical checklist.
  2. `/si/learn/carat-vs-gram` into `/si/learn/carat-weight-guide`, or replace the separate article with a useful converter.
  3. Clarify or consolidate `/si/learn/what-ceylon-means`, `/si/learn/sri-lankan-blue-sapphire` and `/learn/sapphire/what-is-ceylon-sapphire` by language and distinct intent.
  4. Review `/si/learn/ruby-vs-garnet` and `/si/learn/ruby-vs-spinel` as one stronger ruby look-alikes comparison if independent intent is not demonstrated.
  5. Reposition `/si/learn/heated-sapphire-guide`, `/si/learn/natural-synthetic-imitation-gems` and `/si/learn/gem-lab-report-details` according to the overlap findings in sections 1–3.
- The strongest site-wide improvement themes are: deeper topic-specific content; natural Sinhala on Sinhala routes; cited technical claims; official sources for legal/export content; useful comparison/property tables; labelled diagrams and real educational visuals; safe practical workflows; and clear internal links between hubs and specialist guides.
- No learning page has been deleted, redirected, merged or rewritten as part of this audit. All changes in this audit series are documentation-only. Each merge/redirect still requires a separate decision based on rendered content, analytics, Search Console queries, backlinks and URL history.
