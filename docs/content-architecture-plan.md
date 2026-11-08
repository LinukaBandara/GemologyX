# GemologyX Content Architecture Notes

> The current delivery order, language scope, completion gates and milestones live in [`1000-page-completion-programme.md`](1000-page-completion-programme.md). This file keeps the reusable page archetypes and editorial constraints. Its original 174-URL baseline and 354-URL target below have been superseded.

## 1. Current URL baseline

The current branch contains 143 `page.tsx` files. Three are dynamic templates and therefore do not each represent a single final URL:

- `/gemstones/[slug]` — 25 gemstone records
- `/origins/[slug]` — 9 origin records
- `/glossary/[slug]` — 50 glossary records

The route files include 105 Sinhala learning pages (including the dedicated `/si/learn` Sri Lanka hub) and 9 English learning pages. The successful production build on 2026-11-05 generated a sitemap with 223 URLs after expanding data-backed entries and excluding `/search`.

These counts describe source routes and records, not content quality, language-scope review or indexed pages. The English library is global and English-first; the dedicated Sinhala section covers Sri Lanka-specific topics. Older Sinhala routes remain under scope review and are not automatically part of the local section.

## 2. Expansion target

The older 180-addition / 354-URL target is retired. Use the full staged architecture and quality gates in [`1000-page-completion-programme.md`](1000-page-completion-programme.md). The 1,202-page architecture is a ceiling, not a publishing quota. Count each reader need once; do not create a Sinhala translation of every English topic. Track each route's language scope and any older Sinhala page's inclusion status separately.

Existing pages must be audited before deciding whether a roadmap topic needs a new URL, data-backed record, interactive feature or a section in a stronger page. Do not inflate counts with near-duplicates or translations that have not been independently edited.

## 3. Page layout system

Use the existing `ArticleLayout` and `ToolShell` as foundations, not universal templates. Build/standardize these page archetypes:

1. **Gemstone profile** — identity, mineral family, formula, crystal system, hardness, optical properties, colour, inclusions, treatments, natural/synthetic distinction, origin evidence, value factors, care and references.
2. **Educational article** — clear answer near the top, logical sections, explanatory visuals, practical checklist, misconceptions/limitations, related guides and sources.
3. **Comparison guide** — comparable properties in a table, distinguishing features, common confusions, limits of visual identification and next steps.
4. **Mining/geology feature** — geological context, mining methods, locations/maps where verified, regulation, environmental considerations, evidence and sources.
5. **Buying/valuation guide** — factors affecting price, treatment disclosure, report checks, transaction risks, checklists and no unsupported price promises.
6. **Laboratory/certification reference** — report terminology, scope, verification steps, what a report can/cannot establish and laboratory source links.
7. **Interactive tool** — useful input/output, formula/method explanation, assumptions, limitations, accessible controls and related learning.
8. **Research/reference page** — structured data, definitions, tables, citations, date/context and explicit uncertainty.

## 4. Quality and publishing rules

- Audit existing pages for overlapping intent before adding a new URL.
- Prefer improving or consolidating an existing page over publishing a duplicate.
- Every page must answer a distinct user question or provide a distinct reference function.
- Do not generate thin pages by swapping gemstone names into identical generic copy.
- Clearly distinguish mineral facts, trade terminology, seller claims and laboratory conclusions.
- Do not claim that colour, appearance, a phone photo or a simple home test proves identity, treatment or geographic origin.
- For prices and legal/export guidance, show jurisdiction/date/context and link to authoritative sources; avoid unsupported fixed-price claims.
- Sinhala pages should use clear natural Sinhala while retaining necessary English gemological terms and explaining them.
- Global reference coverage is English-first. The dedicated Sinhala section must contain only Sri Lanka-specific content, independently written and reviewed for local readers. Do not treat translation coverage as a page-count goal.
- Include meaningful internal links, page-specific metadata, canonical URLs and accurate sitemap coverage.
- Add diagrams, photographs, tables and tools only when they materially improve understanding; avoid decorative filler.
- Record sources and review dates for claims that can change.

## 5. Delivery sequence

### Phase A — route and content inventory
List every current concrete URL and its page archetype. Review titles, metadata, content depth, internal links, language, repeated sections and overlapping search intent. Mark each page: Keep, Improve, Merge, Redirect, or Investigate.

### Phase B — design-system alignment
Define reusable components for profiles, comparisons, tables, image/diagram blocks, source notes, review metadata, checklists and tool explanations. Preserve the established brand styling unless a specific usability issue requires change.

### Phase C — content map
Assign each proposed addition a unique intent, working title, slug, language, archetype, target audience, required evidence and internal-link destinations. Resolve overlaps before implementation.

### Phase D — build in evidence-led batches
Prioritize the Sri Lankan gem industry, sapphire/corundum knowledge, identification and treatment disclosure, then expand the wider gem directory and tools. Validate each batch with lint, build, route/sitemap checks and content review.

### Phase E — publication and monitoring
Publish only completed pages. Verify rendered routes, metadata, canonical/hreflang where genuine translations exist, sitemap, internal links and Search Console indexing after deployment.

## 6. Repository safety

Work is tracked on `content/complete-and-expand-1000`. Follow [`1000-page-completion-programme.md`](1000-page-completion-programme.md) for batch order and release gates. Do not merge or deploy without the owner's explicit approval.
