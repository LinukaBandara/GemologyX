# GemologyX Content Architecture & Expansion Plan

> Planning baseline checked against `seo/technical-foundation` at commit `f319da29604a033dcd0162067478e7e07c93f8a8`. This is a roadmap, not a claim that the planned pages already exist.

## 1. Current URL baseline

The App Router tree contains 134 `page.tsx` files. Three are dynamic templates and therefore do not each represent a single final URL:

- `/gemstones/[slug]` — 20 gemstone records
- `/origins/[slug]` — 9 origin records
- `/glossary/[term]` — 14 glossary records

Other page files: 100 Sinhala learning pages, 9 English learning pages, 6 tools pages, 4 Sri Lanka mining pages, plus 15 other/static routes (including the three dynamic templates counted above in the 134).

Concrete URL estimate: 134 - 3 + 20 + 9 + 14 = **174**. Recheck after any data/route changes.

## 2. Expansion target

The agreed expansion target is **180 additional content records/pages**, bringing the planning target to approximately **354 concrete URLs** (174 baseline + 180 additions). This is a target, not a publishing quota. A page is only approved for publication when it has a distinct search intent, sufficient original value, reliable sourcing, and a suitable layout.

| Content group | Existing baseline | Planned additions | Target |
|---|---:|---:|---:|
| Gemstone profiles | 20 | 80 | 100 |
| Identification & testing | Existing coverage to audit | 15 | 15 new |
| Treatments & enhancement | Existing coverage to audit | 10 | 10 new |
| Mining & geology | Existing coverage to audit | 15 | 15 new |
| Buying, selling & valuation | Existing coverage to audit | 12 | 12 new |
| Rough gemstones & lapidary | Existing coverage to audit | 10 | 10 new |
| Certification & laboratories | Existing coverage to audit | 8 | 8 new |
| Sri Lankan gem industry & export | Existing coverage to audit | 12 | 12 new |
| Gemstone care & jewellery | Existing coverage to audit | 8 | 8 new |
| Interactive tools & reference resources | 6 tool page files currently | 10 | 10 new |

The 180 additions are planned content units. Whether a unit becomes a standalone URL, a data-driven profile, or a section merged into an existing page will be decided during the overlap audit. Do not inflate the URL count by creating near-duplicate pages.

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
- English and Sinhala pages count as separate URLs only when each is a genuinely useful, independently written page. Do not auto-create duplicate translations just to increase page count.
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

The technical SEO work is currently on PR #11 (`seo/technical-foundation`). Keep this content roadmap on that branch for review. Do not merge PR #11 or deploy changes without explicit approval.
