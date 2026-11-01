# GemologyX Content Consolidation Decisions

> Repository: `LinukaBandara/GemologyX`  
> Branch: `seo/technical-foundation`  
> Basis: source-level first-pass review of all 109 learning page files, recorded in `docs/learning-content-audit-first-pass.md`.  
> Status: editorial decisions for the next implementation phase. This document does not authorize deleting URLs or shipping redirects without performance and URL-history checks.

## 1. Decision principles

1. Preserve a URL when it serves a distinct user task, audience, language or useful reference purpose.
2. Consolidate duplicate explanations into the strongest relevant hub; retain useful checklists, tables and examples as sections or tools.
3. Do not redirect a Sinhala page to an English page (or vice versa) merely because the subject overlaps. Preserve language parity and provide language links.
4. Before any redirect, inspect Google Search Console queries/pages, analytics, backlinks/referring domains, external references and current index status for both URLs.
5. If the source content has useful unique information, migrate it into the destination and verify the destination before redirecting the source.
6. Use permanent redirects only after the destination is live and tested. Keep a redirect map and test every old URL.
7. This is editorial triage, not a gemological fact-check. Technical, treatment, market and legal claims still need reliable sources.

## 2. Recommended consolidation matrix

| Source page | Preferred destination / treatment | Decision | Rationale and required migration |
|---|---|---|---|
| `/si/learn/rough-gem-questions` | `/si/learn/buying-rough-gemstones` | **Consolidate candidate** | Move unique questions into a printable pre-purchase checklist section. Keep a separate URL only if Search Console demonstrates distinct question-led demand and the page is expanded substantially. |
| `/si/learn/carat-vs-gram` | `/si/learn/carat-weight-guide` | **Consolidate candidate** | Move conversion explanation and examples into the main weight guide. Better long-term option: provide a functional carat/gram converter rather than a second thin article. |
| `/si/learn/what-ceylon-means` | `/si/learn/sri-lankan-blue-sapphire` | **Reposition first; conditional consolidation** | Move the concise definition and trade-name caveats into the sapphire guide. Retain a separate glossary/history page only if it provides distinct, sourced historical and terminology depth. Do not redirect the English page to Sinhala. |
| `/learn/sapphire/what-is-ceylon-sapphire` | English-language Ceylon sapphire guide | **Keep; align** | Preserve as the English counterpart. Align terminology and facts with the Sinhala pages, but do not collapse language routes. Add reciprocal language navigation where appropriate. |
| `/si/learn/ruby-vs-garnet` + `/si/learn/ruby-vs-spinel` | One expanded ruby look-alikes comparison | **Conditional consolidation** | Combine only if query data shows no distinct demand and the combined guide can give meaningful garnet and spinel sections, comparison tables and identification limitations. Otherwise keep separate, substantive comparisons. |
| `/si/learn/heated-sapphire-guide` | `/si/learn/heat-treatment-guide` plus `/si/learn/heated-vs-unheated-blue-sapphire` | **Reposition / likely consolidate** | General heat-treatment mechanism belongs in the treatment hub; sapphire-specific buyer/report implications belong in the sapphire comparison. Preserve unique details before considering a redirect. |
| `/si/learn/natural-synthetic-imitation-gems` | `/si/learn/natural-vs-synthetic-gemstones` | **Reposition / conditional consolidation** | Keep a concise terminology reference if it distinctly defines synthetic, imitation and assembled materials. Otherwise merge unique definitions into the main explainer. Do not conflate synthetics and simulants. |
| `/si/learn/gem-lab-report-details` | `/si/learn/how-to-read-gem-report` | **Reposition / conditional consolidation** | Main guide should own report-reading workflow. Retain a separate field-by-field reference only if it is genuinely comprehensive and independently useful. |
| `/si/learn/sri-lanka-dealer-types` | `/si/learn/sri-lanka-gem-trade-intro` | **Keep separate; strengthen relationship** | Dealer roles are a distinct reference within the wider industry overview. Expand both, link parent-to-child and avoid repeating the same introductory paragraphs. |
| `/si/learn/export-documents-intro` + `/si/learn/travel-with-gemstones` | Keep as separate guides with clear scope | **Keep separate** | Commercial export and personal travel/carriage are different tasks and may have different rules. Cite current official sources and distinguish jurisdiction-specific requirements. |
| `/si/learn/gemstone-care-general` + `/si/learn/gemstone-cleaning-methods` | Keep both, with explicit scopes | **Keep separate** | Care hub covers wear, storage and maintenance; cleaning guide covers methods and treatment-sensitive cautions. Avoid duplicated generic cleaning sections. |
| `/si/learn/gemstone-gift-buying` + `/si/learn/jewelry-with-gems-buying` | Keep both | **Keep separate** | Gift choice and lifestyle are distinct from finished-jewellery construction, metal, setting and documentation. |
| `/si/learn/gemstone-inclusions-guide` + `/si/learn/rough-sapphire-inclusions` | Keep both | **Keep separate** | General inclusions literacy differs from sapphire rough evaluation and cutting-risk implications. Link them without copying the same explanation. |
| `/si/learn/gem-labs-overview` + `/si/learn/origin-opinion-vs-guarantee` + `/si/learn/gem-insurance-appraisal` | Keep all three, clarify scopes | **Keep separate** | Lab overview explains report types and scope; origin page explains one report opinion; appraisal page explains insurance valuation. They answer different user tasks. |
| `/si/learn/carat-weight-guide` + `/si/learn/blue-sapphire-price-per-carat` | Keep both | **Keep separate** | Weight/conversion and sapphire price-per-carat are distinct intents. Cross-link and ensure the price page explains limitations of market estimates. |

## 3. Hub and supporting-page structure

### Rough gemstones
- Hub: `/si/learn/buying-rough-gemstones`
- Supporting: `rough-blue-sapphire-value`, `rough-yellow-sapphire-value`, `rough-sapphire-inclusions`, `cutting-weight-loss`, `buying-geuda`
- Convert `rough-gem-questions` into a checklist section/tool if query data does not justify a separate page.

### Treatment and disclosure
- Hub: `heat-treatment-guide`
- Supporting: `diffusion-treatment-guide`, `fracture-filling-guide`, `heat-vs-diffusion-vs-filling`, `gemstone-treatment-disclosure`, `heated-vs-unheated-blue-sapphire`
- Move general treatment theory out of `heated-sapphire-guide`; retain sapphire-specific information only where it adds unique buyer/report value.

### Reports and laboratories
- Hub: `how-to-read-gem-report`
- Supporting: `gem-labs-overview`, `gem-certification-myths`, `fake-lab-reports`, `blue-sapphire-lab-report`, `origin-opinion-vs-guarantee`, `gem-insurance-appraisal`
- Decide whether `gem-lab-report-details` is a real field reference or duplicate text before any consolidation.

### Sri Lankan sapphire and trade
- Industry hub: `sri-lanka-gem-trade-intro`
- Supporting: `sri-lanka-dealer-types`, `sri-lanka-gem-terms`, `sri-lanka-buying-day-tips`, `buying-geuda`, `sri-lankan-blue-sapphire`, `export-documents-intro`, `travel-with-gemstones`
- Keep English and Sinhala Ceylon sapphire pages in their own languages and align the facts and terminology.

## 4. Required checks before implementing redirects

For every proposed source/destination pair, record:

- GSC clicks, impressions, queries and average position for the last 3, 6 and 16 months.
- Analytics organic landing sessions and engagement, if analytics is configured and reliable.
- Referring domains/backlinks and external citations.
- Indexing/canonical status and sitemap inclusion.
- Existing internal links and navigation paths.
- Whether the destination fully contains the useful information from the source.
- Whether the route is linked externally or referenced in user-facing materials.

**Decision gate:** if a source page has meaningful distinct queries, backlinks or useful engagement, improve it rather than redirecting it. If data is unavailable, preserve the URL until the data can be checked.

## 5. Implementation sequence

1. Improve destination hubs and migrate unique useful material first.
2. Update internal links and breadcrumbs; retain all language-specific URLs.
3. Build and review the redirect map only for approved consolidations.
4. Add redirects in Next.js configuration only after the source and destination have been tested. The current `next.config.ts` contains no redirect rules.
5. Run lint and production build; test old and new URLs, canonical tags, sitemap and language navigation.
6. Monitor GSC indexing, clicks and 404s after release.

## 6. Explicit non-actions

- No page has been deleted, redirected, merged or rewritten by this document.
- No redirect has been implemented.
- No GSC, analytics or backlink metrics have been inferred or fabricated.
- No PR has been merged and no production deployment has been performed.

## 7. Next implementation priority

Start with the safest, highest-value work that does not require redirect approval:
1. Strengthen `/si/learn/buying-rough-gemstones` and incorporate the useful rough-question checklist.
2. Expand `/si/learn/carat-weight-guide` with the carat/gram conversion and a clear worked example; assess whether a small converter is worthwhile.
3. Improve `/si/learn/heat-treatment-guide` and its specialist links; separate general treatment theory from sapphire-specific buying guidance.
4. Improve `/si/learn/how-to-read-gem-report` and make its relationship to lab overview, origin opinion and sapphire report pages explicit.
5. Complete query/backlink checks before any redirects.


## 8. First safe implementation completed — rough gemstone buying cluster

Implemented on `seo/technical-foundation`:

- Expanded `/si/learn/buying-rough-gemstones` into the main in-depth buying guide, covering identity, treatments, visible condition, cutting uncertainty, total costs, written terms and a practical transaction checklist.
- Refocused `/si/learn/rough-gem-questions` as a concise question-led checklist for use during a dealer conversation, rather than a second copy of the full explanatory article.
- Added reciprocal navigation between the guide and checklist, plus contextual links to rough sapphire valuation, inclusions and cutting-yield resources.
- Updated the review date on both pages to 2026-11-02.

This resolves the immediate content overlap by differentiating the two user tasks, **not** by deleting or redirecting either URL. Both routes remain in place pending GSC, analytics and backlink review.

Implementation commits:
- Main guide: `6d1b0f94cad88ae83aef1e87bd048466396863c8`
- Checklist: `fc10a3ad853c8f171cfdabd2fd509d7ce0ed5f07`

Validation status:
- Updated files were fetched again from the branch and confirmed present.
- A local lint/production build has not been run in this environment; GitHub checks must complete before merge.
- PR #11 remains open and unmerged. No production deployment has been performed.


## 9. Second safe implementation completed — carat weight and unit conversion

Implemented on `seo/technical-foundation`:

- Expanded `/si/learn/carat-weight-guide` into the main educational guide covering carat vs gram, carat vs millimetre dimensions, density, cut, price-per-carat and buyer checks.
- Repositioned `/si/learn/carat-vs-gram` as a dedicated interactive conversion tool, including a two-way carat/gram converter, quick conversion table and formulas.
- Added reciprocal links so the guide explains the concepts and the tool performs the unit conversion.
- Used a clearly labelled hypothetical price example rather than presenting an unsupported market price.
- Updated review dates to 2026-11-02.

Both URLs remain live in the route tree; no redirect or deletion was made.

Implementation commits:
- Converter component: `bdf3b43fc49b8ebacdc4be28b78b6727504c3b08`
- Main guide: `039d12049a0f47dae95d1d698a877b64c9dcac34`
- Conversion tool page: `d88e642e475a4e0a0b13bc99a46f7fca042963e3`

Validation is pending GitHub Actions on the latest branch head. No local build has been run from this environment.


## 10. Third safe implementation completed — heat-treatment cluster

Implemented on `seo/technical-foundation`:

- Expanded `/si/learn/heat-treatment-guide` as the general heat-treatment hub: what the term means, possible effects, differences from diffusion/filling, natural vs treated terminology, report wording and buyer checks.
- Repositioned `/si/learn/heated-sapphire-guide` as a sapphire-specific treatment guide, focusing on corundum context, identity vs treatment, sapphire report interpretation and value considerations.
- Expanded `/si/learn/heated-vs-unheated-blue-sapphire` as a buyer comparison with a comparison table, report-language cautions and a practical purchase checklist.
- Added reciprocal contextual links between the three pages and specialist treatment/report resources.
- Kept all three URLs. The overlap is addressed through distinct scopes: general treatment education, sapphire-specific context and buyer comparison.
- Updated review dates to 2026-11-02.

Implementation commits:
- General heat-treatment hub: `4e85f908672bf4fc970cc7126b935ed3e8c9d7d9`
- Sapphire-specific guide: `79d0106c47e192bf2b5a96cecb93a3f5352d17d4`
- Heated/unheated comparison: `424e055ac22e991adab871e1ccd350fe6c7acec7`

Validation status: GitHub Actions and Vercel preview need to finish against the latest branch head. No local build has been run in this environment; no merge or production deployment has been performed.


## 11. Fourth safe implementation completed — lab reports and certification cluster

Implemented on `seo/technical-foundation`:

- `/si/learn/how-to-read-gem-report`: expanded as the main step-by-step workflow (verify number, identify the stone, match physical details, read treatment, interpret origin, understand limits).
- `/si/learn/gem-lab-report-details`: differentiated as a concise field-by-field reference rather than a second full walkthrough.
- `/si/learn/blue-sapphire-lab-report`: retained as the sapphire-specific report guide and refreshed review date/link to fake-report checks.
- `/si/learn/gem-labs-overview`: retained as a general lab/report overview; refreshed review date and linked the field reference and certificate myths.
- `/si/learn/gem-certification-myths`: expanded as a six-myth buyer education page, covering value, resale, natural vs treatment, lab identity, differing report scopes, and report-to-stone mismatch.
- `/si/learn/fake-lab-reports`: expanded into a practical verification and red-flag workflow, including what to do when a mismatch is found.

All six URLs remain. No redirect or deletion was made. Distinct page roles: general lab overview, report-reading workflow, field reference, sapphire-specific report reading, certificate myths, and fake/mismatched report safety.

Implementation commits:
- Main report walkthrough: `650738220f4578a8e2210c7e70e5b8a22156b3ea`
- Report field reference: `95e88a8b8d52c00c0b935b27cc8ab44ff0707d7f`
- Certificate myths: `caab05295544da15d2885a3e056a94f950eab23c`
- Fake/mismatched reports: `0b53298afdbd78b556b217ddaceee12b2836aee3`

Validation status: no local build run; latest GitHub CI and Vercel preview must be checked before merge. No merge or production deployment performed.


## 12. Fifth safe implementation completed — natural, synthetic, imitation and identification cluster

Implemented on `seo/technical-foundation`:

- `/si/learn/natural-vs-synthetic-gemstones`: expanded as the primary explanation of natural origin, laboratory-grown/synthetic material, imitation, treatment distinction, report interpretation and identification limits.
- `/si/learn/natural-synthetic-imitation-gems`: differentiated as a terminology reference covering natural, laboratory-grown/synthetic, imitation/simulant, treated and assembled/composite terms.
- `/si/learn/identify-sapphire`: expanded to separate the questions of material identity, natural/lab-grown origin and treatment; added safe-testing limits and report checks.
- `/si/learn/synthetic-sapphire-guide`: expanded as a sapphire-specific lab-grown buyer guide, with origin, material properties, price-context caveats and disclosure.
- `/si/learn/glass-vs-gemstone`: expanded around glass imitation clues, why clues are not proof, harmful home-test warnings and safer purchase checks.

All five URLs remain. No redirects or deletions were made. Pages have distinct roles rather than copying the same general explanation. Review dates updated to 2026-11-02.

Implementation commits:
- Natural vs synthetic overview: `abdf67cd44bb886ce757e24c293abcec88d31bd5`
- Terminology reference: `8c89bb3d0f274cc6d2446e8434e5be991c6ee4d9`
- Sapphire identification: `ac381405b03db99f61ea707164f100dd065d7a8b`
- Synthetic sapphire: `6f0a0272830a6fc5827b2cb7f266a75f9f670514`
- Glass vs gemstone: `7643b504339cea0e789dcf42e42c91060a3d0e2e`

Validation status:
- Source files were updated through the GitHub contents API. This is not a substitute for lint, TypeScript checking, a production build, rendered-page review or gemological fact-checking.
- Check GitHub Actions and Vercel preview at the latest PR head before merge.
- No merge or production deployment was performed.
