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
