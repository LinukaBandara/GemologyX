# GemologyX Completion Roadmap

**Status:** Active working roadmap

**Branch:** `content/complete-and-expand-1000`

**Last updated:** 5 November 2026

**Source plan:** `GemologyX_Site_Structure_and_Page_Plan.pdf`
**Progress log:** [`expansion-progress.md`](expansion-progress.md)

This is the source of truth for completing GemologyX in reviewable batches. The PDF describes a 1,202-page topical architecture. Treat that as a library of useful page ideas, not a quota or a launch requirement. The aim is a visually rich, accurate, interactive global gemology reference in English, plus a distinct Sinhala section focused only on Sri Lankan gems, places, people, terminology, industry and reader needs.

## What “finished” means

A page is finished when it answers a distinct reader need, has accurate and original content, fits its language and audience scope, has a page-specific visual treatment, links into the wider library, works on mobile and with keyboard navigation, and passes release checks. Global reference topics are English-first. The dedicated Sinhala section is reserved for Sri Lanka-specific content; it is not a translated mirror of every English page. A route file alone does not count as a completed page.

The 1,202 figures in the source plan describe topic/page units. Count each distinct reader need once. Do not inflate topical coverage by counting a translation as a new topic or make a general Sinhala translation solely to mirror an English page. Track English global references and Sinhala Sri Lanka-only content separately. If the local evidence supports an English companion page, connect it as related content rather than implying a word-for-word pair.

## Current baseline

Counts below describe source routes and data, not verified content quality or search indexing.

- 161 App Router `page.tsx` source files (not a count of final URLs).
- Data-backed library: 39 gemstone records, 9 origin records, 50 glossary terms and 28 guide records across treatment, buying, cut and formation clusters.
- 237 readiness-tracker rows after the 6 November audit reconciled all 39 gemstone profiles.
- 279 sitemap URLs: 153 static routes plus 126 data-backed routes; `/search` is excluded and seven dynamic template files are not standalone URLs.
- The tracker counts route candidates, not quality-complete pages. All 39 gemstone profiles remain Draft pending source-by-source verification and visual/mobile/accessibility review.
- The previous implementation added branded mark, app icon and social preview; core hubs; a human-readable sitemap; working home/search flow; interactive filtering; abstract gemstone-card illustrations; and credited, zoomable specimen galleries for sapphire, ruby, emerald, amethyst and tourmaline (six images across five profiles).
- A duplicate glossary dynamic template was removed; the richer `/glossary/[slug]` template remains. The `/learn/using-a-gem-loupe`, `/learn/gemstone-microscope-guide`, `/learn/gemstone-refractometer-guide`, `/learn/using-a-polariscope`, `/learn/gemstone-spectroscope-guide`, `/learn/specific-gravity-guide`, `/learn/dichroscope-guide` and `/learn/uv-fluorescence-guide` English instrument guides add interactive original diagrams and GIA-sourced observation limits; all are under review.
- Existing filters and calculators already provide useful interaction. The comparison tool, guided learning flow and map below are proposed work, not existing features.

**Count-only estimate:** 279 sitemap URLs are about 23.2% of the PDF's 1,202 topical units. This route count does not show how many topics are quality-complete. It includes core/site routes and legacy Sinhala pages excluded from the curated Sri Lanka section, so it overstates unique topical coverage. Many routes still need scope-appropriate editorial and factual review, page-specific visuals or QA. The 100-page Phase 1 count is exceeded by raw routes, but we have not yet audited enough pages to claim 100 quality-complete units.

## Non-negotiable standards

1. Preserve existing URLs unless an overlap and performance audit supports a change. Keep global reference topics English-first. Maintain a dedicated Sinhala section for Sri Lanka-specific gems, places, people, terminology, industry and reader needs. Where useful for local readers, provide independently written English and Sinhala companions for the same Sri Lanka-specific topic; do not create blanket Sinhala translations of global English topics. Keep legacy Sinhala routes until indexing, analytics, backlink and content-scope review supports a decision.
2. Give each page one clear purpose. Merge keyword variants that answer the same question.
3. Cite technical and changing claims. Record jurisdiction and review date for regulation, export rules, prices, services and market information.
4. Never claim that a photo, colour, seller description or simple home test proves identity, treatment, quality or origin.
5. Use independently edited English for global reference coverage and natural, independently reviewed Sinhala for Sri Lanka-specific coverage. Do not bulk-translate global guides as a default publishing strategy.
6. Use real specimen photography only when the exact asset's license and provenance are recorded. Use original diagrams for processes and measurements. AI-generated visuals must never be presented as real specimens, test results, maps or documentary evidence.
7. Use visuals to teach: labelled inclusions, cut anatomy, treatment processes, comparison diagrams, locality maps with evidence, and properly captioned collection images.
8. Respect accessibility: semantic headings, descriptive alt text, keyboard operation, visible focus, reduced-motion support, contrast and clear mobile layouts.
9. Keep calculators and educational tools transparent about formulas, assumptions, uncertainty and professional-testing limits.
10. Do not deploy or merge without the owner's explicit approval. Finish reviewable work and preview QA first.

## Work status

### Done in the current branch

- [x] GemologyX mark, app icon and social preview are present and used in the shared site shell.
- [x] Main navigation and footer link the library's primary entry points.
- [x] Sri Lanka flagship hub connects origin, mining, licensing, trade/export and local learning content.
- [x] FAQ, sources guide and human-readable sitemap are present.
- [x] Home-page search submits a query; live search covers gemstone, origin, glossary and selected guide records.
- [x] Gemstone directory has category/search/sort controls and distinct abstract facet illustrations.
- [x] Sapphire profile has a two-image CC0 specimen gallery with zoom/keyboard controls and asset credits.
- [x] Duplicate glossary route template was removed while retaining the public glossary URL pattern.
- [x] Created a route-by-route tracker with language-scope, relationship and review fields in [`page-readiness-tracker.csv`](page-readiness-tracker.csv).
- [x] Expanded the English care and treatment-comparison guides with interactive tools and GIA references. Older Sinhala routes remain live but are not promoted as translations in the new local section.
- [x] Reworked the English report-reading guide and added an interactive report-field walkthrough. The existing Sinhala report guide is being refocused on Sri Lankan report services and buyer context rather than treated as its translation.
- [x] Added the dedicated `/si/learn` hub for a curated Sri Lanka-only Sinhala section, linked from the global Learn page, site navigation, footer and home page.
- [x] Reworked the Sinhala export guide for the Sri Lankan process, added an interactive preparation checklist and official NGJA, Sri Lanka Customs and EDB sources; independent editorial review remains open.

### Not yet complete

- [ ] Build and preview status are confirmed. The progress log records earlier Vercel preview errors; retrieve the logs and identify the current blocker.
- [ ] Every existing page is inventoried and reviewed for quality, overlap, citations, image rights, language, links, metadata and accessibility.
- [ ] The site's remaining gemstone pages have accurate, page-specific photographs or diagrams; the sapphire gallery is only a first example.
- [ ] Audit older generalized Sinhala routes for scope and decide whether to retain, localize, de-promote or retire them; do not add global Sinhala translations by default.
- [ ] Contact destination, author/reviewer identities and credentials, and policy text match the real site setup. Do not invent names, credentials, email addresses, analytics, advertising or legal claims.
- [ ] Preview, mobile, accessibility, link, metadata and sitemap checks pass.

## Roadmap: cluster batches for broad coverage

Build coverage in large, coherent subject clusters rather than finishing one URL at a time. Each batch should use the shared page archetype and visual system, cover a useful group of distinct reader needs, and receive one coordinated route, content, mobile and link review. Target 20–50 topic units per batch when the source plan supports it; split only when a cluster needs different expertise or evidence. English global pages and Sinhala Sri Lanka pages keep separate editorial scopes; connect related pages without manufacturing translation pairs.

When owner keyword research arrives, import it into a keyword-to-topic map before locking titles, slugs and metadata. Preserve the PDF's scope and existing URLs, merge keyword variants that answer the same need, and record search intent, target market and evidence/source needs. Continue preparing source-plan coverage while keyword research is pending; do not invent search-volume data.

### Phase 0 — Establish a trustworthy technical baseline

1. Retrieve the current preview deployment logs and determine whether the duplicate glossary route was part of the reported failure.
2. Resolve the remaining build/deployment blocker and make a clean preview build.
3. Recount concrete routes from the app tree and data arrays; verify all dynamic slugs are unique and every sitemap URL resolves.
4. Inventory all current page files and dynamic records. Recount from source at batch start, then assign each a status: `Inventory`, `Draft`, `Source review`, `Language review`, `Visuals`, `QA`, `Ready for preview`, `Approved`.
5. Track route language scope explicitly: `English global reference`, `Sinhala Sri Lanka section`, or `legacy Sinhala route pending scope review`, along with intent, archetype, sources/evidence, review date, visual/license, internal links, metadata, accessibility, mobile and status.

**Exit gate:** a successful preview build, a route inventory with no unresolved collisions, and a tracker that distinguishes a route from a complete page.

### Phase 1 — Finish the shared visual and interaction system

1. Review responsive typography, spacing, colour, cards, buttons, table styles, breadcrumbs, navigation and page width across mobile and desktop.
2. Extend the current GemologyX mark/wordmark system consistently: header, footer, app icon, social preview, browser metadata and any future learning assets.
3. Build shared components for photo galleries, captions/credits, diagrams, source notes, reviewed dates, compare tables, checklists, sticky article contents and language links.
4. Add clear loading, empty and no-result states to search and filter controls. Make search support the full intended index, not only a handpicked selection.
5. Audit keyboard, screen-reader labels, focus states, reduced motion, contrast, touch targets and mobile navigation.

**Exit gate:** shared components work for English global pages and the Sri Lanka-only Sinhala hub and articles on phone/tablet/desktop; visual patterns improve comprehension rather than decorate empty space.

### Phase 2 — Build the rights-safe visual library

1. List visual needs by page: specimen photo, locality/map, cut diagram, measurement chart, treatment diagram, inclusion image, or no image needed.
2. Prioritize the Sri Lanka hub, sapphire/corundum, major gemstone directory and high-use learning pages.
3. Source relevant gemstone photography from Pexels and Pixabay when the exact asset and its intended use fit their current license terms. Keep a record of the original asset page, creator, license, download date and local filename in `docs/assets/image-credits.md`; add captions and locality caveats where needed.
4. Use Pinterest as a visual-discovery and mood-board reference only. Do not download or publish a Pin unless the original copyright holder and a reuse license or permission can be independently verified.
5. Hugging Face gemstone image datasets may inform research or visual exploration, but inspect the dataset card, image provenance and rights for the individual source images before publishing them. A dataset-level license label alone is not sufficient proof that every embedded image is cleared for website reuse.
6. Use the Smithsonian Open Access or another reputable collection only when the individual asset is explicitly reusable. Record the source record, creator if listed, license, local filename, caption and locality caveat in `docs/assets/image-credits.md`.
7. Commission or create original vector diagrams for gem anatomy, testing workflows, carat/size differences, mining process and report reading.
8. Add a per-page gallery only where multiple images teach something. Use keyboard-accessible zoom, concise captions, image dimensions and accurate alt text.
9. Remove unused starter assets once confirmed unused; keep all GemologyX brand files.

**Exit gate:** every visual in the release batch has clear purpose, provenance, rights and correct caption; placeholders are not passed off as photos.

### Phase 3 — Audit and complete the existing core library

1. Review Home, About, editorial standards, contact, privacy, terms, disclaimer, glossary, FAQ, sources, sitemap and search.
2. Verify each page's content depth, source citations, metadata, canonical, internal links, images and clear limitations.
3. Replace broken/placeholder contact behavior after the owner provides a real destination or provider configuration.
4. Update privacy/terms only against actual analytics, ads, cookies, hosting and jurisdiction. Add consent controls only if the deployed stack requires them.
5. Add author/reviewer profiles only from real names, roles, relevant experience and credentials supplied or verified by the owner.
6. Make the sitemap and site search expose only intentional, working public routes.

**Exit gate:** no public page contains a dead form, placeholder legal text, fabricated contributor claims or broken navigation.

### Phase 4 — Sri Lanka flagship cluster

Complete and connect the Sri Lanka coverage before distributing effort equally across global countries:

1. Overview: gem history, geology, gem materials, terminology and how to use the hub.
2. Geology: gem-bearing gravels, alluvial formation and regional context with sourced maps/diagrams.
3. Regions: Ratnapura, Balangoda, Elahera, Rakwana, Pelmadulla, Monaragala and other localities only where reliable material supports a useful page.
4. Mining: methods, tools, washing/processing, safety, environmental impact, rehabilitation and community context. Do not provide unsafe operational instructions.
5. Regulation: licence and permission information linked to official sources, reviewed and dated; distinguish education from legal advice.
6. Trade: dealer roles, mine-to-market, cutting, laboratory work, export documentation and tourism/buying guidance.
7. Add a sourced interactive locality map with detail panels, language toggle and uncertainty labels.

**Batch order:** Sinhala hub and local market overview → report literacy, buyer context and local terminology → Ratnapura/Balangoda geology → methods/safety/environment → local regulation/export → cutting and trade. The Ratnapura/Balangoda guide is drafted at `/si/learn/ratnapura-balangoda-gem-geology`; source and Sinhala editorial reviews remain open. `/si/learn/sri-lanka-gem-mining-safety-environment` covers local environment and public-awareness responsibilities. `/si/learn/sri-lanka-mining-licence-basics` now explains land-dependent questions to confirm with NGJA, without fixed fees/deadlines or eligibility determinations; its new route returns HTTP 200 and appears in the 223-URL sitemap. `/si/learn/sri-lanka-gem-trade-intro` and `/si/learn/sri-lanka-dealer-types` have a sourced local value-chain overview and Sinhala-first role explanations. `/si/learn/sri-lanka-buying-day-tips` has official NGJA search/verification links and a browser-only interactive checklist. New and updated local guides remain Draft pending independent language/source review; full accessibility review is open. Add an English companion only where it serves a distinct global or visitor need.

**Exit gate:** the Sinhala section contains only Sri Lanka-specific topics, is navigable from a distinct entry point, and each claim has appropriate evidence. English related pages may support the same local cluster; maps must not imply unsupported boundaries or exact mine locations.

### Phase 5 — Gemstone encyclopedia and visual profiles

1. Audit current records and complete the 39 currently modeled profiles before growing the dataset further.
2. Use one profile schema: identity, mineral family, composition, formation, physical/optical properties, colour, localities, treatments, synthetics/imitation, identification limits, value factors, care, FAQs and sources.
3. Start with the major stones and Sri Lankan-relevant corundum: sapphire, ruby, spinel, chrysoberyl, garnet, tourmaline, zircon, beryl, quartz and other priority materials.
4. Add varieties only when they have distinct mineralogical, trade, identification or user-task value. Avoid near-duplicate pages for colour/name variants.
5. Build a side-by-side comparator for up to three gemstones: properties, durability/care, treatments and links to source profiles. Keep unknown or variable values explicit.
6. Add more CC0/commissioned specimen images and original cut/inclusion diagrams. Tag specimen image locality and treatment status only where the source verifies it.

**Exit gate:** every English profile has unique substance, a meaningful visual and reliable citations. Add Sinhala coverage only when a profile supports a distinct Sri Lankan context and belongs in the local section.

### Phase 6 — Gemology, identification, testing and treatments

1. Create a beginner learning path: mineral vs gem, properties, observation limits and when to use a lab.
2. Build test/instrument references for loupe, microscope, refractometer, polariscope, spectroscope, dichroscope, UV and specific-gravity methods.
3. For every tool/test, explain what it can indicate, what it cannot establish, common error sources, safety and when a laboratory is needed.
4. Expand inclusions with labelled, sourced specimen images and diagrams.
5. Strengthen treatment and synthetic guides: heat, diffusion, fracture filling, oil/resin, irradiation, laboratory-grown stones, simulants and assembled stones.
6. Add an interactive guided learning/identification flow that narrows educational possibilities but never claims a definitive ID from a photo or quiz.
7. Add a treatment comparison tool/table where evidence supports comparisons.

**Exit gate:** no tool or guide overstates home testing; technical claims are sourced; Sinhala tools appear in the local section only when they address a Sri Lankan gemology task.

### Phase 7 — Reports, buying, value, lapidary and practical tools

1. Improve lab/report literacy: report fields, report verification, origin opinions, treatment disclosure, appraisals and report limitations.
2. Build transparent buying checklists for loose gems, jewellery, rough material, auctions and online photos; do not publish unsupported live prices.
3. Expand lapidary coverage: cut anatomy, faceting/cabochon diagrams, orientation, yield, repairs and safety.
4. Improve existing calculators with visible assumptions and accessible validation.
5. Add interactive comparison, report-reading practice/quiz and downloadable checklists where useful.
6. Label financial estimates as estimates; avoid implying the tool appraises or predicts resale value.

**Exit gate:** each tool has an explanation, unit handling, error/empty states, accessible controls, clear limitations and related source pages.

### Phase 8 — Build a distinct Sinhala section for Sri Lanka

This phase runs alongside the global English reference work. Sinhala is a focused local editorial product, not a parallel translation of the entire English library.

1. Keep the global gemology reference library English-first.
2. Reserve the Sinhala hub at `/si/learn` for Sri Lankan gemstones, geology, localities, history, mining, environment, trade, local terminology, NGJA/Customs processes, and buying or report-reading needs in Sri Lanka.
3. Add Sinhala pages only when they have a clear Sri Lankan subject or reader context. Do not translate each international gem profile, treatment guide, or generic tool by default.
4. Keep older Sinhala routes and URLs live while auditing them; exclude general translated material from the new Sri Lanka hub and decide later whether it should remain discoverable, be localized, or be retired.
5. Keep the hub, navigation, filters, captions, interactive states and guidance in natural, independently reviewed Sinhala. Preserve necessary English gemological terms and explain them in Sinhala.
6. Link to a global English guide when it adds useful background, but label it as English and do not imply that it is a Sinhala edition.
7. Track page scope explicitly. Only pages with a reviewed local subject and accurate local evidence can be marked `Sinhala Sri Lanka section` and surfaced in that hub.

**Exit gate:** the dedicated Sinhala hub lists only Sri Lanka-specific pages; each listed page has reviewed Sinhala, local evidence, accurate sources and page-specific visuals or interaction. Generic English pages remain in the global library without an automatically generated translation.

### Phase 9 — Add the upgrades beyond the PDF

These are product enhancements, not requirements to add pages. Prioritize them after the reference content and shared components are stable.

1. **Gem comparison studio:** choose up to three stones and compare properties, durability, treatments, care and report guidance.
2. **Guided gem-learning flow:** interactive questions, examples and next steps with explicit uncertainty and no photo-based diagnosis.
3. **Sri Lanka locality map:** sourced places, region summaries, mining and trade links, Sinhala-first local labels with English context where useful, and confidence/context notes.
4. **Annotated specimen viewer:** zoom, arrows/labels, image source, locality, scale and comments about what a photo cannot prove.
5. **Short quizzes and learning paths:** explanations after answers, links to source pages and optional browser-only progress saving.
6. **Saved reading list:** store favorites locally without requiring user accounts; add account sync only if a real user need emerges.
7. **Interactive inclusion/treatment atlas:** compare verified examples by type with clear provenance and limitations.

**Exit gate:** each feature solves a user task, is accessible on mobile/keyboard, works without an account where possible and does not turn uncertainty into false certainty.

### Phase 10 — Grow by quality milestones

Use the PDF's staged milestones as qualified content units, counting a topic once even if it has two language URLs:

- **100 core units:** complete core hubs, priority Sri Lanka material, major gems, key identification/report guides and useful tools.
- **300 units:** deepen the Sri Lanka cluster, complete major gemstone profiles and add tested treatment, instrument and buying clusters.
- **660 units:** broaden countries, mining/environment, lapidary, laboratories, careers and education where source material exists.
- **1,000+ units:** continue only for distinct user needs with enough evidence, original writing and visuals. Add Sinhala when a topic belongs in the Sri Lankan local section.

The PDF's 1,202-page breakdown is the outer architecture: core site 12; gemstone encyclopedia 320; gemology/identification 90; testing/instruments 70; treatments/synthetics/origin 80; mining/environment 120; Sri Lanka 130; global countries 100; lapidary/cutting 70; certification/valuation/buying 90; technology/careers/education 60; tools/reference 60. Reconcile these totals against the content map before committing to the final number.

**Rule:** a quality gate can stop or merge a proposed page. Do not publish pages merely to reach a milestone.

### Phase 11 — Release, maintain and improve

1. For every batch, run lint, production build and route generation; check duplicate slugs, page errors, broken internal links and sitemap output.
2. Review metadata, canonical, language alternates, structured data (only where accurate), image rights/alt text, mobile layout, keyboard, contrast and performance.
3. Review every new or changed route in its intended language and scope; inspect the dedicated Sinhala section separately from the English global library.
4. Resolve Vercel preview errors and record the final build/deployment reference.
5. Get explicit owner approval before merge or production deployment.
6. After release, monitor Search Console/index coverage, analytics only if configured, corrections, broken links, page performance and content staleness.
7. Schedule review for changing legal, export, lab-service, price and market information; update sources and review dates when facts change.

**Definition of done:** approved global topics are visually specific, sourced and technically healthy in English; the separate Sinhala section contains only reviewed Sri Lankan topics; both experiences are interactive where useful, accessible, linked and maintained. The 1,202 target is not “done” until every selected topic has passed its applicable quality gates.

## Cluster-batch working template

Use this once per subject cluster, with one row per topic in its manifest:

- [ ] Select a coherent group of 20–50 distinct reader needs from the PDF and current route inventory.
- [ ] Map owner-supplied keywords to topics, intent, country/market and proposed URL; merge overlapping phrases before creating routes.
- [ ] Preserve existing public URLs, identify genuine gaps, and record scope as English global, Sinhala Sri Lanka-specific, or core utility.
- [ ] Gather reusable primary sources for shared facts and topic-specific sources for each claim; flag anything that needs a current check.
- [ ] Draft original page-specific content through the appropriate archetype; use data-driven templates for structure, never duplicate filler copy.
- [ ] Assign the right visual per topic (licensed specimen images, credited collection assets, or original explanatory diagrams).
- [ ] Add hub, sibling, glossary and tool links across the full cluster; add language links only for genuine counterparts.
- [ ] Generate metadata and canonicals from the approved topic map; keep keyword targeting natural and avoid unsupported structured data.
- [ ] Run automated link, route, sitemap, content-length, metadata and build checks across the whole batch; manually inspect representative pages from each archetype and every exception.
- [ ] Review responsive layouts, keyboard behavior, accessibility and visual quality at shared-component and representative-page level; track unresolved page-specific checks.
- [ ] Update the topic manifest, readiness tracker and `expansion-progress.md` together.

## Related planning documents

- [`content-architecture-plan.md`](content-architecture-plan.md) — page archetypes and editorial design notes; this roadmap owns phase order and milestone status.
- [`current-route-inventory.md`](current-route-inventory.md) — historical inventory; recount from source before a release.
- [`page-readiness-tracker.csv`](page-readiness-tracker.csv) — current route-by-route review queue; update statuses as batches are completed.
- [`content-consolidation-decisions.md`](content-consolidation-decisions.md) — URL overlap and preservation decisions.
- [`learning-content-audit-first-pass.md`](learning-content-audit-first-pass.md) — initial learning-page audit.
- [`assets/image-credits.md`](assets/image-credits.md) — photo and visual provenance.

- Latest active cluster: seven English treatment guides plus an interactive hub. Entries are in the readiness tracker as Draft pending production route validation, mobile visual review, and independent editorial review. Continue adding coherent topical batches; incorporate supplied keyword research when available.

- Current production work adds an interactive seven-topic gemstone treatment cluster and seven topic-specific buyer guides under a Buyer’s Desk hub. These are draft coverage additions, not quality-complete counts; confirm the refreshed sitemap and responsive review before promoting their readiness.


- Active clusters now include treatment/disclosure, purchase decisions and cut/light observation. The cut visual uses an original conceptual diagram with a moving light control and does not imply photorealistic performance or gem identification.
