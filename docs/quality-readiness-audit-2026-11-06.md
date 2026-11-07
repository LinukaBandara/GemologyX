# GemologyX quality and readiness audit

Audit date: 2026-11-06  
Branch: `content/complete-and-expand-1000`  
Scope: repository/build checks and local production output. This is not a live-domain, Search Console, AdSense, or expert gemological review.

## Completed in this pass

- Fixed the missing commas in `src/data/gemstone-expansion.ts` that prevented parsing.
- Replaced internal `<a>` links with Next.js `Link` in the Sinhala cutting weight-loss article.
- Removed the visible “Reserved ad space” placeholders and their component from article and origin layouts. No advertising scripts or units were added.
- Reconciled `docs/page-readiness-tracker.csv` against the production sitemap. Added 44 previously untracked route rows with review-pending `Inventory` status. The tracker now has 281 rows (including the search experience, which is intentionally absent from XML sitemap).
- Updated the XML sitemap to omit rows explicitly marked `Draft`. It now emits 204 unique URLs, all of which have tracker rows. Draft labels and review fields were not promoted or altered.
- Added an `X-Robots-Tag: noindex, follow` response header to every route in the synchronized Draft route manifest. Draft pages remain accessible to readers and reviewers but are excluded from search indexing while marked Draft.
- Split four interactive tool pages into server metadata wrappers and client components, giving each tool a distinct title and description without changing its interface.
- Added self-canonical metadata to static App Router pages and the home page, and removed redundant brand suffixes from page titles so the shared title template does not repeat the brand.
- Added authoritative reference links to all nine origin profiles and rendered a “Sources and Further Reading” section. The tracker continues to show source-to-claim review pending; links alone do not complete factual review.
- Removed nine generic GIA encyclopedia landing-page links where a more specific source already existed, and replaced a GIA sphene article URL that returned 404 with the official Summer 2025 Micro-World PDF (article on page 190).
- Revised two overbroad origin descriptions (“longest-active” for Sri Lanka and “majority” of precious opal supply for Australia) to narrower wording supported by the selected source references. Added provenance notes for the site’s vector artwork.

## Verification

- `npm run lint`: passed.
- `npm run build`: passed; Next.js generated 286 route outputs.
- Local production crawl of the sitemap: 204 URLs, no duplicates, no request failures, no missing title tags, no missing meta descriptions, and no sitemap URL marked `noindex`.
- Checked Draft response headers and sitemap membership in production mode: Draft routes return `noindex, follow` and are absent from the sitemap; reviewed Inventory routes remain indexable by default.
- The four tool pages now have distinct titles and descriptions; the sitemap crawl found no duplicate page titles.
- After canonical updates, the production sitemap crawl found zero missing canonical tags, zero canonical mismatches, zero duplicate titles, and zero doubled `GemologyX` suffixes across its 204 URLs.
- Checked the nine origin reference links against the named official sources and confirmed the replacement sphene PDF contains the cited article. This is a source-link check, not a page-by-page verification of every origin claim.
- Checked 59 unique GIA source URLs in the 39-profile gemstone dataset. Replaced a confirmed 404 apatite PDF citation with two live, relevant GIA Gems & Gemology articles. Fifty-six URLs returned HTTP 200; one source returned 403 and one timed out through the automated client. Both were then confirmed accessible in browser-based source review. The replaced URL returned 404. Link availability does not establish that each source supports every claim.
- Reviewed treatment and care passages for sapphire, ruby and emerald against the specific GIA [sapphire care guide](https://www.gia.edu/sapphire-care-cleaning), [ruby treatment and care guidance](https://www.gia.edu/royal-ruby), [ruby care guide](https://www.gia.edu/ruby-care-cleaning), [emerald care guide](https://www.gia.edu/emerald-care-cleaning) and [emerald report filler guidance](https://www.gia.edu/gia-news-press/gia-enhances-emerald-reports). Removed unsourced broad prevalence phrasing and made cleaning advice more treatment-specific. This verifies only those sections; the three profiles and all other profiles remain pending full claim-level review.
- Reviewed treatment and care passages for spinel, alexandrite and garnet against the GIA [spinel buyer guide](https://www.gia.edu/spinel/buyers-guide), [research on heated natural spinel](https://www.gia.edu/doc/distinguishing-heated-spinels-from-unheated-natural-spinels.pdf), [alexandrite buyer guide](https://www.gia.edu/alexandrite/buyers-guide), [garnet buyer guide](https://www.gia.edu/garnet/buyers-guide) and [garnet care guide](https://www.gia.edu/garnet-care-cleaning). Clarified that treatment is rare rather than impossible for these materials and made cleaning guidance species- and fracture-aware. Other claims in these profiles still need source-to-claim review.
- Inspected the homepage at a 400 CSS-pixel responsive viewport. Header controls, hero copy, search, two-column highlights, and the two-column gemstone cards render within the viewport. Full mobile testing of other routes, keyboard flows, and assistive technology remains outstanding.
- Rendered the homepage, sapphire profile, treatment guide, and Sri Lanka origin profile at a 390-pixel phone viewport. The origin detail template initially lacked its own typography/layout rules and its gemstone tags overflowed horizontally; added dedicated responsive styling, tag wrapping and readable editorial section spacing. Rechecked the page after restarting the production server: tags wrap within the viewport and the content styling is restored. This is a targeted visual check, not full mobile/accessibility QA.
- `/robots.txt` responds and references `https://gemologyx.com/sitemap.xml`.
- A nonexistent local route returns 404. `/search?q=sapphire` responds; search metadata specifies `noindex,follow` and search is excluded from XML sitemap.
- Crawled all 204 sitemap pages in the local production build and checked 280 unique internal page/image destinations discovered in their rendered markup. All sitemap pages and internal destinations returned HTTP 200.
- `git diff --check`: passed after the gemstone source correction.

## Open issues and limits

- The tracker now records 205 `Inventory` rows and 76 `Draft` rows (281 total). The 44 inventory additions came from sitemap reconciliation. `Inventory` is not an approval state. No pages have been marked complete based on this audit.
- The 76 route manifest entries for `noindex` and sitemap exclusion must be kept synchronized with the tracker when editorial status changes. Build and crawler validation must confirm the manifest matches the tracker after each status change.
- Explicit canonical tags are now present and match the expected production URL for all 204 sitemap routes in the local production build. Live-domain canonical responses still need deployment verification.
- Sitemap route inclusion is not evidence of indexing, usefulness, or search performance. Production-domain responses and Search Console ownership/submission are unverified.
- Source-to-claim review of all gemstone profiles, origins, glossary entries, and guides is incomplete. Origin references were added and checked for relevance, but claim-by-claim validation remains pending. Do not represent the content inventory as fact-checked.
- Image source, creator, license, attribution, and AI-generated status have not been verified for every displayed image. Do not use images with unresolved rights in a monetized publication.
- The About and editorial pages do not identify the responsible owner/editor or explain actual AI use. The contact page cannot deliver messages. Terms say no legal entity or governing jurisdiction has been identified. These statements must be resolved with the owner; no identity, credentials, or legal facts were invented.
- Privacy text says analytics and advertising are not configured. Code inspection found no GA4 or AdSense tags and no consent-management integration. This is accurate to inspected source, but deployment tags/CDN configuration were not accessible.
- No `application/ld+json` structured data was found in the inspected source. Structured data validity, page speed/Core Web Vitals, mobile visual QA, keyboard behavior, and deployed image loading remain unverified.
- Build emits a Turbopack warning about `C:\Users\linuk\package-lock.json` outside this repository. The external file was left untouched; build succeeds.
- `npm audit` reported eight moderate findings all traced to vulnerable `minimatch@10.2.6` in the ESLint development toolchain. The upstream advisory lists 11.0.1 as patched; the available major downgrade/fix paths risk incompatibility. No force fix or dependency change was made. `unrs-resolver@1.12.2` is a transitive dev dependency with an install script; it was not approved or changed.

## AdSense readiness

**Not ready to apply based on current evidence.** The content review, image-rights audit, responsible-publisher/contact disclosures, deployed privacy/consent configuration, and production site behavior remain incomplete or unverified. No application was submitted and no account settings were changed. Google policy and readiness requirements must be rechecked against the live site before any application.

## Owner inputs needed to finish trust and measurement setup

1. Responsible publisher name and a working public contact channel.
2. Actual editorial/review process, contributor identities if publicly credited, and how AI assistance is used.
3. Applicable operating jurisdiction for a qualified privacy/terms review.
4. Deployment/domain status and access or evidence for Google Search Console verification.
5. GA4 Measurement ID and consent requirements for the actual visitor regions, if analytics is wanted.
6. Image ownership/license evidence for assets whose records are missing.

Do not apply for AdSense until the outstanding editorial, rights, privacy, and live-site checks are complete. Never click own ads, buy invalid traffic, or encourage ad clicks. Any future affiliate relationship must be real, relevant, approved, and disclosed.


## Follow-up tracker reconciliation

- Marked `/si/learn` Draft because its independent Sinhala editorial and factual review has not started, and added it to the noindex manifest. The hub and its 13 curated local guides now use the same `Curated Sinhala Sri Lanka section` language scope in the tracker.
- Left the remaining 103 legacy Sinhala routes in their prior states while scope, search performance and backlinks await review; existing project notes defer consolidation or de-indexing until Search Console/analytics evidence is available.
- Post-correction verification: the tracker and manifest both contain 76 Draft routes; lint and the production build pass (286 route outputs); the sitemap emits 203 URLs; `/si/learn` and Draft guides respond with `noindex, follow`; all 203 sitemap pages and 277 unique internal page/image destinations return HTTP 200.

- Reviewed GIA treatment/care guidance for tourmaline, aquamarine and topaz. The local copy now reflects GIA's stated cleaning cautions and treatment-related durability limits; the tracker records this as partial review only. This does not verify the remaining profile claims or approve these pages.

- Reviewed GIA treatment/care sources for peridot, opal and tanzanite and updated the profile copy and direct citations. The tracker records only partial review. The changed claims do not verify origins, formation, identification, values, imagery or the rest of each profile.

- Reviewed GIA treatment/care sources for jadeite, turquoise and zircon. Updated direct care references, improved jade category wording, and aligned cleaning and durability guidance with GIA. Tracker review is partial only; the pages remain Draft.

- Reviewed GIA treatment/care references for amethyst, iolite and lapis lazuli. Profile text and citations now reflect the specific cleaning methods, treatment notes and durability limits. Tracker records partial review only; pages remain Draft.

- Reviewed GIA treatment/care references for morganite, amber, nephrite and citrine. Updated the pages’ care guidance, treatment notes and direct source links. The reviews are partial and the routes remain Draft.

- Reviewed GIA treatment/care references for pearl, kunzite and ametrine. Updated treatment and cleaning language to distinguish material-specific limits. The tracker records partial review, not completion; routes remain Draft.

- Reviewed GIA treatment/care references for moonstone and sunstone. Updated durability wording, sunstone treatment context and direct care citations. Tracker records partial review only; visual and remaining claim review is outstanding.

## Follow-up audit — 2026-11-08

This follow-up records work present on `design/homepage-editorial-2026` at commit `e71b4042ad936ef0507a26fe6dad8a049779d9c5`. It does not retroactively change the scope or results of the 2026-11-06 local production audit above.

### Additional implementation verified in the current branch

- Added FAQPage JSON-LD to the FAQ page, generated from the rendered question data.
- Added BreadcrumbList JSON-LD to the dynamic gemstone, origin, glossary, buying, treatment, cut and formation page templates.
- Added BreadcrumbList JSON-LD to the Sri Lanka mining landing page and its licensing, methods and environment pages.
- Added page-specific Open Graph and Twitter metadata to the seven dynamic content templates (gemstones, origins, glossary, buying, treatment, cut and formation).
- Set an explicit Turbopack project root in `next.config.ts` to prevent Next.js from selecting the unrelated parent-directory lockfile as the project root.
- Corrected selected gemstone educational copy, including synthetic-growth timing and the distinction between primary sapphire formation and secondary alluvial deposits.

### Current CI status

The latest workflow for this branch (run `42410255116`, commit `e71b4042ad936ef0507a26fe6dad8a049779d9c5`) failed at the dependency-install step. ESLint, production build, Playwright and dependency audit steps were skipped. The workflow job confirms the failure occurs before these checks execute.

The known install error is a mismatch between `package.json` and the committed `package-lock.json`: the lockfile does not contain `@playwright/test@1.65.0`, `playwright@1.65.0` and `playwright-core@1.65.0`. The correct repair is to generate and commit the lockfile using npm on the project machine. Do not replace `npm ci` with `npm install` in CI or hand-edit a speculative lockfile.

### Remaining release blockers

- Re-run CI after the real lockfile is committed; no current-branch build or E2E pass is claimed by this follow-up.
- Run a fresh production sitemap crawl and structured-data validation against the current branch output.
- Complete claim-level source review for all gemstone profiles, origins, glossary entries and guides.
- Complete image provenance/licensing and full mobile, desktop, keyboard and assistive-technology checks.
- Resolve owner/editor attribution, contact delivery, legal jurisdiction and actual AI-use disclosures with the site owner; no personal or legal details have been invented.
- Verify live production metadata, canonical URLs, robots, sitemap, analytics/consent and image delivery after deployment.

The 2026-11-06 audit's local build and crawl results remain historical results for that audit scope, not proof that the newer branch has passed the same checks.

### Repository consistency checks — 2026-11-08

- Compared `docs/page-readiness-tracker.csv` with `src/data/draft-routes.ts`: all 76 Draft routes match exactly; no duplicate routes, missing manifest entries or extra manifest entries were found.
- Compared all 26 navigation and footer destinations in the shared header/footer against App Router page routes, including dynamic route patterns: no missing destinations were found.
- Added `npm run check:editorial-manifest` and `scripts/check-editorial-manifest.mjs`. CI now runs this consistency check after dependency installation and before ESLint, so future tracker/manifest drift is caught automatically.
- These checks validate repository consistency and route references; they do not establish editorial approval, search indexing or live deployment health.

### Accessibility and image-attribution follow-up — 2026-11-08

- Added a keyboard-visible skip link before the shared site header and gave the root content landmark the `main-content` target with `tabIndex={-1}`.
- Removed the homepage's nested `<main>` landmark; the homepage visual wrapper is now a `<div>` inside the root layout's single main landmark.
- Added Escape-key handling to close the shared mobile navigation. The existing menu button retains its accessible name, `aria-expanded` state and `aria-controls` relationship.
- Reviewed the 11 origin-page image records: each contains alternative text, a credit and a source field. Corrected the Jaipur gemstone-grinding photograph's credit and replaced its broad category link with the exact Commons file page. The file page identifies Gerd Eichmann as author and CC BY 4.0 as its licence; attribution is now explicit.
- The repository contains 25 image assets (including SVG brand/UI assets). This is an inventory count, not a claim that every local image has completed provenance, visual-quality, responsive-loading or assistive-technology review.
- Remaining accessibility work includes keyboard and screen-reader testing across templates, focus-order checks, contrast review, reduced-motion checks and manual testing at real mobile and desktop breakpoints.

### Gemstone reference coverage follow-up — 2026-11-08

- Reviewed all four gemstone data collections: **39 unique profiles**, each with a detailed profile and at least two HTTPS references (117 reference links in total).
- No duplicate gemstone slugs, missing detail blocks, empty source lists or non-HTTPS source URLs were found in the static data review.
- Andalusite previously had one reference, a GIA collection specimen record. Added a GIA research article on gem-quality Brazilian andalusite and an International Gem Society reference to improve coverage of gem properties and pleochroism.
- Sphene (titanite) previously had one GIA reference. Added an International Gem Society reference covering mineral properties and care. Tightened the care instructions to recommend a soft brush, mild detergent and warm water, and to avoid ultrasonic and steam cleaning.
- Chrysoberyl now has a dedicated reference covering its varieties and properties in addition to the existing GIA references.
- Added `scripts/check-gemstone-sources.mjs` and the `check:gemstone-sources` package script. CI runs this dependency-free check before `npm ci`; it checks profile detail blocks, minimum reference count, HTTPS URLs and duplicate slugs.
- This is a source-coverage and structure check, not a complete verification of every sentence or a live HTTP check of all 117 reference URLs. Claim-by-claim fact checking remains necessary.

### Interactive specimen imagery and keyboard accessibility — 2026-11-08

- Connected the existing credited specimen galleries to gemstone profile pages. The component was present in the repository but was not previously rendered by the profile template; the sapphire, ruby, emerald, amethyst and tourmaline profiles now expose their documented specimen images.
- Improved the image-viewer dialog: opening it moves focus to the close button; Tab and Shift+Tab remain within the dialog; Escape closes it; arrow keys change the displayed specimen; and closing returns focus to the image button that opened it.
- Added Playwright coverage for specimen viewer keyboard operation, mobile-navigation Escape handling and the keyboard skip link.
- Existing reduced-motion CSS preferences were confirmed in the global stylesheet. This is source inspection, not a full assistive-technology audit.
- Local specimen image records include source, credit and licence fields. Their attribution text is displayed in the gallery; the original source records remain linked from the viewer.
- Remaining work: run the new Playwright checks in a production build, verify the local image files and their licence records against the original source pages, and complete manual screen-reader/focus/contrast testing.
