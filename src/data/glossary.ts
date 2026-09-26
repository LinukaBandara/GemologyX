export interface GlossaryTerm {
  term: string;
  slug: string;
  definition: string;
}

export const glossaryTerms: GlossaryTerm[] = [
  { term: "Asterism", slug: "asterism", definition: "An optical effect producing a star-shaped pattern of light on a cabochon-cut gemstone, caused by light reflecting off aligned needle-like inclusions." },
  { term: "Cabochon", slug: "cabochon", definition: "A gemstone that has been shaped and polished into a smooth, rounded form rather than faceted." },
  { term: "Carat", slug: "carat", definition: "A unit of mass for gemstones and pearls, equal to exactly 0.2 grams." },
  { term: "Clarity", slug: "clarity", definition: "A measure of the presence and visibility of internal inclusions and external blemishes in a gemstone." },
  { term: "Corundum", slug: "corundum", definition: "The mineral species that includes both ruby and sapphire, composed of aluminium oxide." },
  { term: "Geuda", slug: "geuda", definition: "A milky, semi-translucent variety of corundum from Sri Lanka that can develop attractive blue colour after heat treatment." },
  { term: "Inclusion", slug: "inclusion", definition: "A internal feature within a gemstone, such as a mineral crystal or fluid pocket, formed during the stone's growth." },
  { term: "Luster", slug: "luster", definition: "The way a gemstone's surface reflects light, described using terms such as vitreous (glassy), adamantine, or pearly." },
  { term: "Mohs Scale", slug: "mohs-scale", definition: "A 1–10 relative scale of mineral hardness (scratch resistance) developed by Friedrich Mohs in 1812." },
  { term: "Padparadscha", slug: "padparadscha", definition: "A rare pink-orange variety of sapphire, named after the color of a lotus flower." },
  { term: "Pleochroism", slug: "pleochroism", definition: "The property of some gemstones to show different colours or shades when viewed from different crystallographic directions." },
  { term: "Refractive Index", slug: "refractive-index", definition: "A measure of how much a gemstone bends (refracts) light, used as a key identification property." },
  { term: "Synthetic", slug: "synthetic", definition: "A material with the same chemical composition and structure as its natural counterpart, but grown in a laboratory rather than formed geologically." },
  { term: "Treatment", slug: "treatment", definition: "Any process applied to a gemstone after mining to alter or improve its appearance, such as heating, fracture filling, or diffusion." },
];

export function getGlossaryTermBySlug(slug: string) {
  return glossaryTerms.find((t) => t.slug === slug);
}
