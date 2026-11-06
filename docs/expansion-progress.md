# GemologyX Expansion Progress


## Current repository status — 6 November 2026

This current snapshot supersedes older counts elsewhere in the historical progress notes below. It is reconciled against the Git tree, data files, tracker and production sitemap through the current branch QA pass.

- App Router page source files: **161** (source-file count; not a URL count).
- Data-backed gemstone profiles: **39** (10 core + 15 first expansion + 7 second expansion + 7 third expansion).
- Origin records: **9**.
- Glossary terms: **50**.
- Treatment, buying, cut and formation guide records: **7 each** (28 total).
- XML sitemap URLs: **203** after excluding 76 routes marked Draft; `/search` is excluded. This count reflects publication index controls, not a quality-complete URL target.
- Readiness tracker rows: **281** (205 Inventory, 76 Draft), including `/search` and all 39 gemstone profiles.
- All 39 gemstone profiles are marked **Draft** pending source-by-source gemological verification and full visual/mobile/accessibility review. Formation content and at least one stone-specific FAQ are recorded for each profile.
- The `/si/learn` hub and its 13 curated Sri Lanka-focused Sinhala guides are marked **Draft** pending independent language and factual review. The remaining legacy Sinhala routes stay unchanged until Search Console/analytics and backlink evidence supports a scope decision.
- Draft sitemap exclusions and `X-Robots-Tag: noindex, follow` are synchronized through a 76-route manifest.
- Latest branch QA includes the responsive origin-profile fix, source-link correction, and local internal-link crawl. `npm run lint` and `npm run build` pass; the build generates 286 route outputs.

These counts measure source records and URL inventory only. They do not represent quality-complete pages, search indexing or approval to publish. Production deployment and live indexing remain unverified.

**Programme:** 1,000+ meaningful URLs
**Branch:** `content/complete-and-expand-1000`
**Baseline commit:** `74641d49d260aeb4807403c59250bd33719c6b8d`

**Canonical roadmap:** [`1000-page-completion-programme.md`](1000-page-completion-programme.md)

## Completed in the first implementation batch

- Added the 1,000-page completion programme and editorial/visual asset rules.
- Added a GemologyX gemstone mark at `public/gemologyx-mark.svg`.
- Added a dedicated Next.js app icon at `src/app/icon.svg`.
- Added a 1200×630 branded social preview at `public/gemologyx-social.svg`.
- Updated the shared site header and footer to use the same brand mark.
- Added favicon and social-preview metadata in the root layout.
- Expanded the glossary dataset from 14 to 30 entries, each with its own generated reference route.
- Updated the glossary browser so each entry links to its dedicated reference page and search covers definitions.
- Added a dedicated dynamic glossary-term page with canonical metadata, breadcrumbs, related terms and educational caveats; this closes the missing `/glossary/[slug]` route used by the browser.
- Expanded the glossary from 30 to 40 terms with ten additional gemological concepts.
- Expanded the glossary from 40 to 50 terms with ten more reference entries covering settings, cutting, optical effects and gem materials.
- Added five detailed gemstone records: andalusite, apatite, danburite, sphene (titanite) and benitoite.
- Added contextual related-gemstone links to gemstone profile pages, prioritising shared mineral family and then matching listed colours. The page labels this as discovery, not a reliable identification method.

## Completed in the navigation and core-hubs batch

- Added a Sri Lanka flagship hub that connects the existing origin, mining, licensing, trade/export and Sinhala local-knowledge pages.
- Added a concise FAQ hub that answers common identification, report, treatment, terminology and Sri Lanka research questions with links to deeper guides.
- Added a sources and citations guide describing evidence scope, changing information and the correction path.
- Added a human-readable site map covering the primary hubs and data-backed gemstone, origin and glossary entries.
- Updated the home entry cards, primary navigation and footer so visitors can reach the Sri Lanka hub, mining content, FAQ, sources and site map.
- Replaced the home page's decorative search field with a working query form and expanded live search to cover all gemstone records, origins, glossary definitions and selected learning guides. Results now link through to their entries.
- Replaced gemstone initials on directory cards with original abstract facet illustrations that are explicitly labelled as illustrations, not specimen photographs.
- Added a two-image, keyboard-navigable sapphire specimen gallery using Smithsonian NMNH photos explicitly marked CC0; recorded the source, locality caveat and license in `docs/assets/image-credits.md`.
- Removed a duplicate glossary dynamic route (`[term]`) that overlapped the richer `[slug]` route at the same URL; glossary entries continue to use `/glossary/{slug}`.

These are navigation and orientation improvements; they do not substitute for the remaining page-by-page factual, source, visual, accessibility and mobile reviews.

## Updated data counts

- Gemstone records: 25 (10 core + 15 expansion records).
- Origin records: 9.
- Glossary terms: 50.
- Sinhala learning page files: 105 (including `/si/learn`, the Ratnapura/Balangoda locality guide, mining/environment and licence guides, and cutting/training).
- English learning page files: 9.
- App Router page files: 143 (dynamic templates generate additional URLs).

The tracker now contains 224 route candidates including search. The sitemap contains 223 URLs after excluding search and expanding the gemstone, origin and glossary records. Against the 1,202-topic architecture, that is about 18.6% by route count; it is not a content-quality completion score or indexed-page count, and overstates topical coverage because it includes legacy Sinhala URLs outside the curated section and core/site routes. The remaining gap includes topic selection, source review, language-scope review, page-specific visuals and quality checks.

## English global guides improved in the first content batch

- Expanded the English gemstone-care guide with an interactive pre-cleaning checklist, GIA references and treatment/setting cautions.
- Expanded the English heated-versus-unheated guide with an interactive report-wording explorer and GIA references.
- The older Sinhala care and treatment guides remain live but are no longer presented as automatic counterparts in the English global guides or in the new Sinhala local section.

## English report literacy and Sri Lanka-specific Sinhala adaptation

- Reworked the English laboratory-report guide to remove an unsupported claim about treatment wording determining value and to explain identification, treatment, description, origin opinions and appraisals.
- Added an interactive report-field walkthrough to the English guide and GIA references.
- Refocused the existing Sinhala report-reading guide on Sri Lankan report issuers and buyer context, adding NGJA and Sri Lanka Customs links alongside a clearly marked GIA example.
- No English/Sinhala translation pair is claimed for this local guide; the English article remains a global reference.

## Dedicated Sinhala section for Sri Lanka

- Added a separate `/si/learn` hub with an original faceted gemstone illustration, a Sinhala topic filter and a curated list of thirteen Sri Lanka-specific guides: sapphire/Ceylon claims, Geuda, Ratnapura/Balangoda geology, mining/environment/licensing, Sri Lankan cutting/training, local trade/dealer roles, local terminology, buying, report reading and export procedures.
- Linked the section from the global Learn page, desktop/mobile navigation, footer and home-page entry cards.
- Replaced the global Learn page's list of dozens of generalized Sinhala translations with a short Sri Lanka-only Sinhala collection and a clear route to the dedicated hub.
- Refocused the Sinhala report-reading and export guides on Sri Lankan buyers, NGJA, Sri Lanka Customs and current local procedures. Added interactive report-field and export-preparation tools.
- Added NGJA and Customs official sources for local report and export context; legal/export pages direct readers to verify current instructions with the issuing authority.
- Kept old Sinhala URLs in place for now. Their language scope is being tracked before any decision about their future discoverability.
- Added `/si/learn/ratnapura-balangoda-gem-geology`, a Sinhala locality/geology guide with an interactive Ratnapura/Balangoda research selector and a conceptual residual/eluvial/alluvial profile. It links to NGJA and University of Peradeniya sources and explicitly avoids presenting research sampling as a complete locality map.
- Checks completed before the current batch: `npm run lint` clean; `npm run build` successful; all nine hub guide routes and the hub returned HTTP 200; sitemap XML contains 219 URLs; topic filter works with pointer and Space key; at a 390px phone viewport there was no horizontal overflow, unlabeled control or browser console error.
- Locality batch: lint and production build pass (227 generated pages); the locality guide and Sinhala hub returned HTTP 200; sitemap XML contained 220 URLs. Both selectors changed their selected state and visible guidance in the browser; phone-width visual review completed. Sinhala editorial/source review remains pending.
- The hub and local guides remain Draft because independent Sinhala editorial and local-source review have not yet happened.

## Remaining work

1. Continue reviewing and completing every existing route, including real page-specific visuals.
2. Extend properly licensed specimen photographs and original diagrams across the priority pages; the current CC0 sapphire gallery is only a first example.
3. Expand gemstone profiles and origins in evidence-led batches.
4. Grow the glossary from 50 toward its planned 80 useful entries.
5. Expand the English global reference and, separately, the Sinhala Sri Lanka-specific cluster; do not mass-translate English articles.
6. Add useful tools and reference resources.
7. Diagnose the current Vercel preview build failures before further preview QA; the latest branch deployments are reporting `ERROR` and build logs have not yet been retrieved.
8. Run lint, production build, route, sitemap, metadata, broken-link, accessibility and mobile checks on preview.

## Important

The redundant `/glossary/[term]` template file was removed because it overlapped the richer `/glossary/[slug]` template; the public glossary URL pattern remains `/glossary/{slug}`. No production deployment or merge was performed. The 1,000+ target is not permission to publish thin, duplicate or unsupported pages.

- Added /si/learn/sri-lanka-gem-mining-safety-environment, a source-linked Sinhala guide with an interactive responsibility explorer for environmental review, wash-water/silt, closure and rehabilitation, and public safety. It avoids operational instructions and notes that official requirements can change.

- Mining/environment batch: lint and production build pass (228 generated pages); both the new guide and /si/learn return HTTP 200; the sitemap contains 221 URLs and includes both new local pages. The responsibility explorer switched from environmental review to public safety and updated its guidance; the Sinhala hub filter returned this one guide. Phone-width layout was inspected; final overflow review and independent Sinhala/source review remain open.

- Cutting/training batch: added /si/learn/sri-lanka-gem-cutting-training with an interactive four-stage learning panel, a clearly labeled conceptual cutting SVG and NGJA/GJRTI links. It distinguishes local trade and training information from the existing general cut-shape and weight-loss pages. Independent Sinhala/source review and current course detail confirmation remain open.

- Sri Lanka trade batch: rebuilt `/si/learn/sri-lanka-gem-trade-intro` as a Sinhala-first local value-chain guide with an interactive, keyboard-operable conceptual diagram, and rewrote `/si/learn/sri-lanka-dealer-types` in Sinhala to explain supplier, dealer/exporter, broker, cutting/lab and retail roles. Both routes link to EDB/NGJA sources and expressly avoid treating a role or trade path as proof of a stone's origin, value or seller reliability. Lint and production build pass; both routes return HTTP 200 and are present in the 222-URL sitemap; the selector works by pointer and keyboard; the hub's trade filter shows both guides; 390px mobile layout inspected. Both remain Draft pending independent Sinhala and source review, and full accessibility review.

- Sri Lanka buyer-journey batch: rebuilt `/si/learn/sri-lanka-buying-day-tips` in Sinhala with a browser-only three-stage checklist (prepare, examine, record), original SVG checklist illustration, and official NGJA dealer-search, certificate-verification and laboratory links. It is explicitly separate from the generic gem-identification checklist and does not endorse a dealer or claim that a report proves value/quality. Lint and production build pass; route returns HTTP 200 and appears in the existing 222-URL sitemap; stage switching, checklist, progress and reset work by keyboard/pointer; 390px mobile layout inspected. Independent Sinhala/source review and full accessibility review remain open.

- Sri Lanka mining/licence batch: added `/si/learn/sri-lanka-mining-licence-basics`, a Sinhala guide to land-dependent questions and permissions to confirm with NGJA, with an interactive land-type explorer and original conceptual SVG. It distinguishes general mining licences from mechanical permits, avoids publishing fixed fees or timelines, and is explicit that it cannot determine eligibility or grant legal approval. The route returns HTTP 200 and appears in the 223-URL sitemap; all 13 curated guide routes return HTTP 200; the mining filter displays the safety/environment and licence guides; stage and land selectors work with pointer and keyboard; 390px mobile layout inspected; lint and production build pass (230 generated pages). Independent Sinhala/source review and full accessibility review remain open.

- English optics batch: added `/learn/refractive-index` as a substantive replacement for the Science placeholder. The article explains refractive index, Snell's law, gemological use and limitations; an original SVG ray model responds to a keyboard-operable slider. Linked official GIA laboratory-analysis sources. `npm run lint` and `npm run build` pass; production build generated 231 routes. Independent gemology/editorial and final responsive/accessibility review remain pending.
- English instrument batch: added `/learn/using-a-gem-loupe` with an original interactive four-area observation map and practical guidance on lens choice, lighting, surface-versus-interior observations, careful handling and limits. The English Science list now links to the page. GIA sources support the 10×/corrected-triplet, lighting, inclusion and grading claims. Lint passed; production build generated 232 routes; route returns HTTP 200 and appears in the 225-URL sitemap. Selector works by click and keyboard; desktop and 390px visual review passed with no overflow or console errors. Independent source/editorial and full accessibility review remain pending.
- English microscope batch: added `/learn/gemstone-microscope-guide` with an interactive five-mode illumination explorer and an original conceptual SVG. It explains darkfield, diffused, reflected, fiber-optic and polarized lighting, observation limits and when professional interpretation is needed. Linked GIA colored-stone analysis and inclusion sources. Lint and production build pass (233 generated routes); route returns HTTP 200 and appears in the 226-URL sitemap; search query “microscope” returns this guide; all five selectors respond by click/keyboard; desktop and 390px visual review passed with no overflow or console errors. Independent source/editorial and full accessibility review remain pending.
- English refractometer batch: added `/learn/gemstone-refractometer-guide` as an instrument-focused companion to the existing RI physics explainer. The interactive three-stage schematic explains optical contact, the critical-angle principle and scale interpretation; the guide covers instrument-dependent range, multiple readings, safety data sheets and the limits of one measurement. Linked GIA instrument, lab-analysis, biaxial reading and product-safety sources. Lint and production build pass (234 generated routes); route returns HTTP 200 and appears in the 227-URL sitemap; refractometer search returns this guide and the RI explainer; all three stages respond to click/keyboard; desktop and 390px visual review passed with no overflow or console errors. Independent source/editorial and full accessibility review remain pending.
- English polariscope batch: added `/learn/using-a-polariscope` with an interactive crossed-polarizer model, selectable idealized optical reactions and a 0°–360° sample rotation. The guide explains optic character, optic-axis dark views, anomalous double refraction, false aggregate reactions, applicability limits and safe device handling from GIA sources. Lint and production build pass (235 generated routes); route returns HTTP 200 and appears in the 228-URL sitemap; search query “polariscope” returns this guide; selector and 360° rotation respond to click/keyboard; desktop and 390px visual review passed with no overflow or console errors. Independent source/editorial and full accessibility review remain pending.

- English spectroscope batch: added `/learn/gemstone-spectroscope-guide` with a keyboard-operable interactive spectrum pattern explorer (broad band, narrow lines, no clear feature) and sourced limits on handheld versus electronic spectroscopy. Linked it from Science and search. GIA Winter 2024 Gems & Gemology sources and GIA colored-stone workflow linked. Lint passes; production build, route/search/sitemap checks and responsive visual review pending. Draft pending independent gemology/editorial and accessibility review.

- English spectroscope batch verified: lint and production build pass (236 generated routes); `/learn/gemstone-spectroscope-guide` and search return HTTP 200, the search result includes the guide, and the sitemap contains 229 URLs including this page. Desktop layout and switching to narrow-line mode were visually checked; complete mobile, keyboard and screen-reader review remains open. Independent gemology/editorial review remains pending.

- English specific-gravity batch: added `/learn/specific-gravity-guide` with an original hydrostatic-weighing schematic and an interactive same-unit SG calculator that validates inputs and labels its result as illustrative. GIA hydrostatic-method, current lab workflow and analytical-workflow sources linked. Added Science-list and search links. Lint passes; build, route/search/sitemap and responsive browser checks pending. Draft pending independent gemological/editorial and complete accessibility review.

- English specific-gravity batch verified: lint and production build pass (237 generated routes); `/learn/specific-gravity-guide` and search return HTTP 200, search finds the guide, and the page is in the 230-URL sitemap. Browser review confirmed the 6.00/4.00 example calculates SG 3.00 and an impossible water-above-air reading is rejected. Desktop layout checked. Mobile, complete keyboard/screen-reader accessibility and independent gemological/editorial review remain pending; page stays Draft.

- English dichroscope batch: added `/learn/dichroscope-guide` with an interactive paired-view illustration showing an idealized uniaxial example as its viewing direction changes. The guide covers orientation-dependent pleochroism, biaxial complexity, color zoning/path-length alternatives and tool limits, based on GIA sources. Added Science-list and search links. Lint passes; production build, route/search/sitemap, interaction and responsive checks pending. Draft pending independent gemological/editorial and accessibility review.

- English dichroscope batch verified: lint and production build pass (238 generated routes); `/learn/dichroscope-guide` and search return HTTP 200, the result includes the guide, and the page appears in the 231-URL sitemap. This turn's browser preview was disabled in Work settings, so layout at desktop/mobile widths, live slider interaction, console state and keyboard/screen-reader checks remain pending. The page remains Draft pending those reviews and independent gemology/editorial review.

- English UV batch: added `/learn/uv-fluorescence-guide` with an interactive longwave/shortwave/source-off learning visual and explicit UV-A/UV-C precautions. Explains fluorescence versus phosphorescence and avoids species-specific glow claims; links the GIA 2024 fluorescence review, laboratory workflow and UV lamp viewing-cabinet safety guide. Added English Science and search links. Lint passes; build, route/search/sitemap, responsive, keyboard and accessibility checks pending. Draft pending independent gemological/editorial review.

- English UV batch verified: lint and production build pass (239 generated routes); `/learn/uv-fluorescence-guide` and its ultraviolet search result return HTTP 200, and the sitemap includes it among 232 URLs. Browser preview was disabled this turn, so responsive visual, live control interaction, console, keyboard and screen-reader review remain pending. Independent gemological/editorial review pending; the page remains Draft.

- Mobile hardening across the nine English instrument/optics guides: added min-content guards to interactive two-panel explorers, clamped SVGs to their available width on narrow screens, enlarged range-control hit areas to 44px, and increased mobile navigation link target heights. `npm run lint` and `npm run build` pass (239 generated routes). This is source-level responsive work; visual and touch verification remains pending because Codex still reports Local browser use disabled in Work settings after the user indicated they would enable it.
- Follow-up mobile browser review is now available: inspected `/learn/uv-fluorescence-guide` at 390px and 320px; no horizontal overflow, menu expands with 44px navigation rows, and the UV mode controls update their selected state and accessible SVG description with pointer and Enter. Increased global header icon targets from 38px to 44px. Other eight hardened English instrument guides still need visual review; all nine remain pending full keyboard/screen-reader review and independent editorial checks.
- Roadmap updated per owner direction to prioritize broad topical coverage through coherent 20–50 topic cluster batches, using shared archetypes and batch-level automated checks plus representative-page review. Keyword research will be mapped to distinct topics, intent, market, sources and URLs when supplied; no search-volume assumptions added.
- English gemstone encyclopedia batch: added seven original, GIA-sourced profiles (morganite, kunzite, turquoise, lapis lazuli, amber, rose quartz and pearl), taking the dataset from 25 to 32. Rebuilt the shared gemstone profile as a premium responsive guide with distinct colour-matched original illustrations, quick-fact cards, section navigation, clear source links and an interactive comparison studio across all 32 profiles. The Morganite layout and comparison were visually checked at 320px and 390px; no horizontal page overflow; selector updated Aquamarine to Turquoise and refreshed the compared facts. Directory filtering returned one Pearl result from 32; all seven routes returned HTTP 200 and appear in the 239-URL sitemap. `npm run lint` and `npm run build` pass; build generated 246 routes. New profiles remain Draft pending independent gemology/editorial review. Real specimen photography for these profiles still needs asset-by-asset licensing and provenance review; current facets are clearly labeled original illustrations.
- English quartz/feldspar cluster: added seven sourced profile routes for ametrine, sunstone, chalcedony, agate, jasper, bloodstone and tiger’s-eye, taking the gemstone directory to 39 entries. Descriptions distinguish mineral species from family and trade names; treatment, locality, identity and care limits are explicit. All seven routes return HTTP 200 and appear in the 246-URL sitemap. `npm run lint` and `npm run build` pass (253 generated routes). Shared 320px responsive layout and the interactive comparison were verified in the preceding batch; these seven pages remain Draft until independent topic-specific and visual review. Current art is original illustration, not specimen photography.

- English gemstone treatment cluster: added an interactive hub and seven sourced guides (heat treatment, lattice diffusion, fracture filling, emerald oil/resin, irradiation, dyeing/impregnation, treatment disclosure). Added a touch-sized selector with a clearly labeled conceptual cutaway, material-specific care cautions, report/disclosure prompts, GIA source links, Learn and live-search links. Claims are qualified by material, lab methods and jurisdiction; the illustration is not presented as diagnostic. Lint passes. Production build and route generation are in progress; browser/mobile review and independent gemology/editorial review remain pending, so these pages are Draft.

- English gemstone buyer education cluster: added a visually distinct interactive Buyer’s Desk and seven practical guides covering online buying, price per carat, origin claims, lab report checks, listing photos, return/appraisal terms, and colored-gem value factors. The checklist is user-togglable and recalibrates for each topic; it avoids universal pricing claims and distinguishes reports, appraisals and seller statements. References GIA research and FTC consumer guidance with US scope identified where relevant. Routes added to Learn, live search, sitemap and readiness tracker. Pending clean lint/build and responsive visual review; pages remain Draft pending independent editorial review.

- English gemstone cut and light cluster: added an interactive Cut & Light Lab with a keyboard/touch range control that moves an illustrative light source, plus seven topic guides on cut anatomy, shape versus faceting style, windowing, extinction, cut-quality observations, facet styles and cutting tradeoffs. Includes GIA primary references and explicit limits for visual interpretation; adds routes to Learn, live search, sitemap and readiness tracker. Draft pending clean lint/build, responsive visual review and independent editorial review.

- English gemstone cut and light cluster build verified: the production build generated 277 routes; all seven cut topics and the interactive hub were prerendered. Treatment and buying hubs/detail routes also remain in the same successful build. Lint and diff checks passed; the contemporaneous sitemap contained 270 URLs. Responsive visual review remains pending; the pages remain Draft pending independent gemology/editorial review.

- English gemstone geology cluster: added an interactive geological cross-section with seven evidence-based paths and standalone guides covering formation environments, magmatic settings, pegmatites, hydrothermal fluids, metamorphism, alluvial/placer transport and primary/secondary deposits. Schematic is explicitly not to scale; articles distinguish crystal formation from where material is recovered, include GIA research, and avoid inferring origin from appearance. Routes are connected to Learn, live search, sitemap and readiness tracker. Build verified in the following batch; responsive visual review and independent editorial/geology review remain pending.

- Sri Lankan gem trade terminology batch: added independently written English and Sinhala companion pages with a bilingual interactive glossary, search, category filters, source links and practical buyer questions. Clarified roadmap scope: global reference remains English-first; Sinhala coverage is dedicated to Sri Lanka-specific content; no blanket translations. Linked both pages from Sri Lanka hub and search; added to readiness tracker. Draft pending lint/build, route checks, visual/mobile and accessibility review, and independent editorial review. NGJA 2020 circular is identified as historical context only.

- Sri Lankan gem trade terminology batch verified: `npm run lint`, `npm run build` and `git diff --check` pass. Build generated 286 routes. English and Sinhala companion routes both return HTTP 200; `/sitemap.xml` contains 279 URLs, and live search returns HTTP 200 with the new English glossary discoverable. Tracker now has 280 unique route candidates. Search/filter UI and source-linked entries are implemented; visual/mobile, full keyboard/screen-reader and independent editorial review remain pending, so both routes remain Draft.

- Gemstone visual-library batch: consolidated the sapphire zoom viewer into a reusable accessible specimen gallery and added licensed ruby and emerald photography to their matching profiles. Image creator/license/source and locality limits are recorded in `docs/assets/image-credits.md`; illustrations remain clearly labelled as illustrations. The three profiles remain Draft pending rendered mobile, keyboard and screen-reader review plus full content/source audit.

- Gemstone visual-library batch verified: lint and the 286-route production build pass; `/gemstones/sapphire`, `/gemstones/ruby` and `/gemstones/emerald` return HTTP 200 with their respective gallery markup, and both new local image assets are served. `git diff --check` passes. Three gallery routes now cover four sourced specimen images. Mobile screenshot, zoom-dialog keyboard focus/screen-reader review and full profile factual review remain open; the profiles stay Draft.

- Gemstone visual-library extension: added locally optimized, rights-checked amethyst-crystal and tourmaline display photos to their matching profiles. Captions separate the source record’s locality/context from general mineral claims; source and license records are in `docs/assets/image-credits.md`. Both pages are Draft pending rendered/mobile and accessibility review plus full content/source audit.

- Gemstone visual-library extension verified: `npm run lint`, `npm run build` and `git diff --check` pass; the production build generated 286 routes. All five profile pages (sapphire, ruby, emerald, amethyst, tourmaline) return HTTP 200 with the gallery, and both new optimized images return `image/jpeg` over the preview server. Six images across five profiles now have recorded sources and rights. Profiles remain Draft pending mobile visual, zoom-dialog keyboard/screen-reader and full content review.

- 390px mobile verification: used a same-origin 390px iframe viewport to avoid the headless browser's 500px minimum outer window. The five gemstone profiles and both Sri Lanka trade-term language routes have no horizontal overflow at a true 390px inner viewport. All five gallery controls open and close their zoom dialog; all gallery images load with zero broken images. Reviewed the amethyst profile screenshot; remaining profile-specific visual inspection and complete keyboard/screen-reader review are still open. Updated the route tracker accordingly. Temporary viewport probe removed after QA.

- 320px narrow-phone follow-up: all five gemstone profile routes and both English/Sinhala Sri Lanka trade-term routes report document width equal to the 305px content viewport at 320px inner width; no horizontal overflow. Together with the 390px check, responsive layout is verified at both narrow and common phone widths for this cluster. The full screenshot and assistive-technology review are still pending for pages not directly inspected. Removed the temporary probe.

- Sri Lankan sapphire and Ceylon terminology batch: strengthened two independently written Sinhala pages and the English Ceylon sapphire reference. The Sinhala Ceylon term guide now has an accessible, touch-friendly selector separating a seller's trade label, a colour description and a laboratory origin opinion. Added primary GIA and Sri Lanka EDB references, corrected tracker language so related Sinhala content is not misrepresented as a translation, and recorded independent gemology/editorial plus responsive visual review as pending. Draft only; no origin or value guarantees.

- Legacy Sinhala scope inventory: marked 91 existing Sinhala routes as pending audience/scope review in the route tracker. Preserved route status, URLs, sitemap and current discovery behavior; per the consolidation plan, decisions to de-index, redirect or merge await search/analytics and backlink evidence.

- Mobile browser review: /si/learn/what-ceylon-means inspected in the local browser at 390px (screenshot) and 320px. No horizontal overflow; the touch-sized claim selector changed selected state and explanatory copy at both sizes. Restored the normal viewport after review. Other affected routes still require page-specific visual and accessibility review.

- Geuda buyer guide: replaced the Inventory Sinhala route’s English filler with an independently written Sri Lanka-specific guide and an interactive four-stage buyer question studio. Added an original rough-stone illustration labelled as conceptual, linked GIA field research and buyer guidance, and clearly marked the NGJA source as a dated 2020 export procedure rather than current buying advice. Tracker now records it as Draft; independent gemology/Sinhala editorial review and responsive/accessibility review remain pending.

- Geuda buyer guide QA: npm run lint passed and production build generated 286 routes. The /si/learn/buying-geuda route returns HTTP 200. Local browser screenshot review at 390px and selector/content checks at 320px showed no horizontal overflow. Two separate transaction stages updated the selected state and buyer prompts; accessible names/pressed state are exposed. Full keyboard/assistive-technology and independent gemology/Sinhala editorial reviews remain pending; page remains Draft.

- Sinhala sapphire localization follow-up: mobile review showed the article callout still used the English ‘Quick Answer’ label. Localized it to Sinhala on both Ceylon and Sri Lankan blue sapphire pages, translated the related origin-opinion link label, and localized the blue sapphire checklist/misconception headings. Production build passed at 286 routes; the updated Sinhala labels were confirmed on both routes. `/si/learn/sri-lankan-blue-sapphire` has no horizontal overflow at 390px or 320px. Full assistive-technology review remains pending.

- Sinhala gem mining responsibility guide QA: checked current NGJA Gemstone Mining Industry, Mining Consultancy and Mining Licence Process pages against the guide's environmental review, washing-water/silt, rehabilitation and licence-context statements. Local browser review at 390px and 320px showed no overflow; safety-topic selector changed state and its public-safety guidance appeared; no console errors. Added a visible reviewed date and direct Sinhala mining-licence related link. npm run lint and the 286-route production build passed; the route returns HTTP 200. Independent regulatory/Sinhala editorial and full accessibility reviews remain pending; Draft status retained.

- Sinhala report-reading guide: expanded Sinhala localization for Sri Lankan buyers, added a direct NGJA certificate verification portal link and retained issuing-laboratory verification caveats. Checked NGJA laboratory centres, its certificate portal, Ratnapura Gem Tower, Sri Lanka Customs Gem Unit and GIA report examples. The interactive field walkthrough now uses Sinhala labels and examples; field tabs changed by pointer and keyboard. At 390px and 320px there was no horizontal overflow; browser console had no errors. npm run lint passed, production build generated 286 routes, and the route returns HTTP 200. Independent gemology/Sinhala editorial and full accessibility reviews remain pending; Draft status retained.

- Sinhala cutting and training guide expansion: checked current NGJA faceting context plus GJRTI certificate courses, national accreditation and Ratnapura center listings. Reframed the learning section as three clear pathways (short practical, NVQ cutting/polishing and precision cutting), added three visual pathway cards and a high-visibility official course-list link, and retained caveats for changing fees, intakes and eligibility. Desktop preview visually inspected; the existing four-stage journey selector changed to its training state. Phone-width visual review, independent Sinhala/editorial review and accessibility review remain pending; Draft retained.

- Sinhala export guide upgrade: cross-checked NGJA's export page, Sri Lanka Customs Gem Unit and the EDB export guidance. Added a three-scenario interactive explorer for commercial shipments, traveller-carried gems, and samples/returns/exhibitions, while preserving the five-point readiness checklist. Selected traveller scenario changed to its distinct advice in the local preview. NGJA's page includes a 2022 fee table, so the article makes no fee promises and directs readers to confirm their exact process. Phone-width visual and full accessibility review plus independent Sinhala/legal-source review remain pending; Draft retained.

- Rough-stone content batch (2026-11-06): strengthened the Sinhala cutting-weight/yield guide, yellow-sapphire rough value guide, blue-sapphire rough value guide and rough-sapphire inclusion guide; added a transparent hypothetical yield calculation, clearer treatment/origin limits, practical cutter and buyer questions, GIA references and relevant internal links. Added source links to the general rough-buying guide. The Learn index now links all available guides and no longer contains dormant ‘Coming soon’ content. Five related tracker entries remain Draft with Sinhala and factual review pending; rough-buying and cutting pages remain flagged for legacy language-scope review. No valuation or yield outcome is guaranteed.

- Sinhala gemstone-care batch (2026-11-06): expanded the general care hub with treatment/setting limits and safer handling; rewrote the cleaning guide in Sinhala with a stone-and-treatment caution list and linked GIA cleaning guidance; added treatment-specific sapphire care; rewrote the English-heavy ring-versus-pendant article in Sinhala around hardness, toughness, cleavage, settings and wear habits. Four tracker rows remain Draft with factual and Sinhala review pending.

- Gemstone profile content batch (2026-11-06): completed the shared profile template so it renders geological formation, inclusions/identification, treatment, value-factor lists, certification/report guidance, care, and cited further reading. Added concise formation sections across all 39 gemstone records and source links for the 10 core profiles plus the 15-profile first expansion set; later expansion sets already carried sources. Corrected Topaz and Moonstone references to current GIA pages. All profiles remain Draft pending source-by-source editorial verification and visual/mobile/accessibility review.

- FAQ content batch (2026-11-06): expanded six core answers into a 10-question guide covering treatment checks, laboratory-grown vs imitation materials, emerald care, online-buying checks, and how gemstone colour develops. Added direct links to the relevant guides; legal and local requirements remain directed to current official sources.

- Core gemstone profile FAQ batch (2026-11-06): added two stone-specific questions to each of the ten core profiles, covering identity, colour/origin interpretation, treatment and care. The shared profile layout now displays FAQs and exposes FAQ/source anchors in its page navigation. The other 29 profiles still need their own FAQ review; no generic FAQ filler was added.

- Expanded gemstone profile FAQ batch (2026-11-06): added one focused, stone-specific buyer or identification question to each of the remaining 29 gemstone profiles. Topics include organic gem materials, common look-alikes, optical effects, treatment disclosure and durability. Together with the core FAQ batch, all 39 gemstone profiles now render at least one relevant FAQ; source-by-source review remains pending.

- Gemstone comparator content batch (2026-11-06): added chemical composition and crystal system to the side-by-side reference, clarified that an unlisted treatment is unknown rather than absent, and explained that Mohs hardness does not measure toughness or impact resistance. Individual-stone identification and appraisal limits remain explicit.

- Tracker inventory correction (2026-11-06): restored Draft/review-pending states for previously completed report-literacy, carat, treatment and Sri Lanka locality/mining/terminology routes while preserving their URLs and keeping final independent reviews open.

- Profile-reference upgrade (2026-11-06): replaced general encyclopedia-only links on the first 15 expanded gemstone profiles with stone-specific GIA descriptions/buyer guides where available, and relevant GIA research or collection records where a dedicated overview was not available. Link validity and source-to-claim scope still need a full editorial audit.

- Profile citation cleanup (2026-11-06): changed two remaining preview-host GIA references (rose quartz and sunstone) to their stable public GIA URLs after verifying the canonical pages.

- Gemstone profile treatment/care batch (2026-11-06): reviewed tourmaline, aquamarine and topaz treatment/care wording against linked GIA buyer and care guides. Corrected tourmaline treatment prevalence language; clarified treatment-related fading and heat risk; limited aquamarine ultrasonic/steam guidance to stones without fractures or liquid inclusions; and added topaz cleavage, temperature and coating-specific cleaning cautions. Added direct care-guide references. Only these sections were reviewed; all three profiles remain Draft pending review of other factual claims, image rights, visual layout, mobile behavior and accessibility.

- Gemstone profile treatment/care batch (2026-11-06): reviewed peridot, opal and tanzanite treatment/care passages against direct GIA buyer, care and treatment references. Clarified peridot heating claims and heat/cleaning limits; updated opal treatments to match GIA's listed impregnation and surface treatments and added its safe-cleaning and crazing guidance; documented tanzanite's routine stable heat treatment, uncommon coating/filling, cleavage risks and cleaning limits. These remain partial reviews; all three profiles remain Draft pending verification of other claims, media rights and page QA.
