# GemologyX image provenance register

Last reviewed: 2026-11-08

This register separates assets with a recorded source/licence from assets whose origin or permission still needs confirmation. A filename, visual appearance or presence in the repository is not proof of copyright ownership.

## Recorded specimen photographs

| Local asset | Displayed credit | Licence recorded in gallery | Source record |
|---|---|---|---|
| `/images/gems/sapphire-crystals-montana-01.jpg` | Smithsonian National Museum of Natural History · NMNH 177074 | CC0 | [Smithsonian collection record](https://naturalhistory.si.edu/object/nmnhmineralsciences_14176990) |
| `/images/gems/sapphire-crystals-montana-02.jpg` | Smithsonian National Museum of Natural History · NMNH 177074 | CC0 | [Smithsonian collection record](https://naturalhistory.si.edu/object/nmnhmineralsciences_14176990) |
| `/images/gems/ruby-gem-inclusions.jpg` | Humanfeather via Wikimedia Commons | CC BY 3.0 | [Ruby gem file record](https://commons.wikimedia.org/wiki/File:Ruby_gem.JPG) |
| `/images/gems/emerald-cut-gem.jpg` | Gaumania via Wikimedia Commons | CC0 1.0 | [Cut emerald file record](https://commons.wikimedia.org/wiki/File:Cut_Emerald.jpg) |
| `/images/gems/amethyst-crystals.jpg` | Lisa Ann Yount via Wikimedia Commons | CC0 1.0 | [Amethyst crystals file record](https://commons.wikimedia.org/wiki/File:Amethyst_crystals_close.jpg) |
| `/images/gems/tourmaline-san-diego.jpg` | Stickpen via Wikimedia Commons | Public domain dedication | [Tourmaline file record](https://commons.wikimedia.org/wiki/File:Tourmaline.jpg) |

The gallery data displays these credits and licences and links to the original source records. Verify the licence and author against the live source record before redistributing the images outside this site.

## Origin-page photographs

Eleven remote origin photographs are declared in `src/data/origins.ts`. Each image record has alternative text, a named credit and an exact Wikimedia Commons file-page URL. This is a metadata audit; it does not establish that each remote image currently loads or that every credit has been rechecked against the live file page.

## Assets requiring owner/source confirmation

| Asset(s) | Current use / observation | Follow-up required |
|---|---|---|
| `/images/homepage/03_private_gem_atelier_inspection_setup_macro.png` | Homepage learning card | Confirm whether commissioned, generated, or supplied; record creator/source and usage rights. |
| `/images/homepage/04_gem_inspection_gemologist_examining_sapphire.png` | Homepage learning card | Confirm creator/source and usage rights. |
| `/images/homepage/05_gem_inspection_sapphire_in_tweezers.png` | Local homepage image collection | Confirm creator/source and usage rights; confirm whether currently used. |
| `/images/homepage/06_private_collector_viewing_exceptional_gemstone.png` | Local homepage image collection | Confirm creator/source and usage rights; confirm whether currently used. |
| `/images/homepage/Sri lanka.jpg` | Sri Lanka feature image | Confirm photographer/source, location context and usage rights. |
| `/images/homepage/gem report.jpg` | Gem report learning card | Confirm creator/source and usage rights. |
| `/images/suranga/blue-gem.svg`, `green-gem.svg`, `gold-gem.svg`, `pink-gem.svg`, `hero-gems.svg` | SVG wrappers containing embedded WebP image data; used in gemstone visuals | Confirm the underlying images were supplied for GemologyX use and document photographer/creator and permission. |
| `/images/gems/sapphire-hero.svg` | Original-looking decorative SVG used as a CSS hero background | Confirm in-house authorship or record the original source and licence. |

## Brand and framework assets

- `/gemologyx-mark.svg` and `/gemologyx-social.svg`: GemologyX brand assets; retain project ownership/source records.
- `/file.svg`, `/globe.svg`, `/next.svg`, `/vercel.svg`, `/window.svg`: starter/framework assets. Remove unused starter assets before launch or retain their upstream licence notices as required.

## Launch gate

- [x] Gallery image records expose credit, licence and source.
- [x] Origin image records expose alt text, credit and exact source-page fields.
- [ ] Confirm creator and usage rights for every asset in the owner/source-confirmation table.
- [ ] Check that displayed credits match each live source record.
- [ ] Check that local files are the same versions described by their source records.
- [ ] Remove unused starter assets and unused homepage image files.
