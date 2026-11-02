export interface GlossaryTerm {
  term: string;
  slug: string;
  definition: string;
}

export const glossaryTerms: GlossaryTerm[] = [
  { term: "Asterism", slug: "asterism", definition: "An optical effect producing a star-shaped pattern of light on a cabochon-cut gemstone, caused by light reflecting from aligned needle-like inclusions." },
  { term: "Birefringence", slug: "birefringence", definition: "The numerical difference between the two principal refractive indices of an anisotropic gemstone. It can be measured with suitable gemological instruments and is useful in identification." },
  { term: "Brilliance", slug: "brilliance", definition: "The appearance of light returned from within and the surface of a faceted gemstone. It is influenced by cutting proportions, refractive index, transparency and viewing conditions." },
  { term: "Cabochon", slug: "cabochon", definition: "A gemstone fashioned with a smooth, rounded or domed top rather than a series of flat facets. This style is often used for opaque, translucent or optical-effect stones." },
  { term: "Carat", slug: "carat", definition: "A unit of gemstone mass equal to exactly 0.2 grams. Carat is a measure of weight, not a direct measurement of a stone's dimensions or visual size." },
  { term: "Chatoyancy", slug: "chatoyancy", definition: "A cat's-eye optical effect in which a narrow band of reflected light moves across a suitably cut gemstone, usually caused by parallel internal fibres, tubes or needle-like inclusions." },
  { term: "Cleavage", slug: "cleavage", definition: "A tendency of a mineral to break along specific crystallographic planes where atomic bonding is weaker. Cleavage can influence how a gemstone should be cut, set and handled." },
  { term: "Clarity", slug: "clarity", definition: "A description of the visibility and characteristics of internal inclusions and surface blemishes. Clarity terminology and grading systems vary by gemstone type and laboratory." },
  { term: "Colour Zoning", slug: "colour-zoning", definition: "A visible or microscopic variation in colour within a gemstone, often forming bands, angular zones or growth-related patterns. It may provide useful clues during professional examination." },
  { term: "Corundum", slug: "corundum", definition: "A mineral species composed of aluminium oxide (Al₂O₃). Ruby and sapphire are gem varieties of corundum; trace elements and colour are used in their trade classification." },
  { term: "Dispersion", slug: "dispersion", definition: "The separation of white light into spectral colours as it passes through a gemstone because different wavelengths are refracted by different amounts. It contributes to the flashes often called fire." },
  { term: "Doublet", slug: "doublet", definition: "An assembled gemstone made by joining two layers, which may include a thin natural or synthetic gem layer and a backing. A doublet is a composite construction and should be disclosed as such." },
  { term: "Facet", slug: "facet", definition: "A flat, polished surface cut into a gemstone. The arrangement, angles and proportions of facets influence light return, appearance and weight retention." },
  { term: "Fluorescence", slug: "fluorescence", definition: "Visible light emitted by some gemstones while they are exposed to ultraviolet or other higher-energy radiation. The effect stops or changes when the excitation source is removed." },
  { term: "Fracture", slug: "fracture", definition: "A break in a gemstone that does not follow a mineral's regular cleavage direction. Fractures may affect durability, clarity and the suitability of certain treatments." },
  { term: "Geuda", slug: "geuda", definition: "A Sri Lankan trade term used for certain milky or semi-translucent corundum rough. Some geuda material can develop blue colour through controlled heat treatment, but results vary by specimen." },
  { term: "Inclusion", slug: "inclusion", definition: "An internal feature within a gemstone, such as a mineral crystal, fluid inclusion, growth structure or healed fissure, formed during or after the stone's growth." },
  { term: "Lustre", slug: "lustre", definition: "The character of light reflected from a mineral or gemstone surface. Common descriptive terms include vitreous, adamantine, pearly, silky and resinous." },
  { term: "Mohs Scale", slug: "mohs-scale", definition: "A relative scale of scratch hardness from 1 to 10, based on which reference minerals can scratch others. It is ordinal rather than linear and does not measure toughness." },
  { term: "Optic Character", slug: "optic-character", definition: "A description of how a gemstone interacts with polarized light, commonly categorized as singly refractive, doubly refractive or aggregate, with additional optical details where relevant." },
  { term: "Padparadscha", slug: "padparadscha", definition: "A trade and gemological name for a pinkish-orange to orangey-pink sapphire. Exact colour boundaries and acceptance criteria can differ between laboratories." },
  { term: "Pleochroism", slug: "pleochroism", definition: "The property of an anisotropic gemstone to show different colours or colour intensities when viewed in different crystallographic directions under suitable lighting." },
  { term: "Refractive Index", slug: "refractive-index", definition: "A measure of how much light slows and bends when entering a material from air. Refractive-index readings are an important part of standard gem identification." },
  { term: "Specific Gravity", slug: "specific-gravity", definition: "The ratio of a material's density to the density of water at a specified reference condition. It is a useful physical property in gem testing when measured appropriately." },
  { term: "Strain", slug: "strain", definition: "Internal stress within a gemstone that can produce optical effects under polarized light. Strain patterns may help a gemologist understand crystal structure and growth history." },
  { term: "Synthetic Gemstone", slug: "synthetic", definition: "A laboratory-grown material with essentially the same chemical composition and crystal structure as its natural counterpart. It should be clearly distinguished from an imitation." },
  { term: "Toughness", slug: "toughness", definition: "A gemstone's resistance to breaking, chipping or fracturing. Toughness is different from hardness, which describes resistance to scratching." },
  { term: "Treatment", slug: "treatment", definition: "A process applied to a gemstone to alter its appearance or properties, such as heating, irradiation, diffusion, dyeing or fracture filling. Disclosure is important to informed buying." },
  { term: "Triplet", slug: "triplet", definition: "An assembled stone consisting of three joined layers, often with a thin gem layer protected by a transparent cap and supported by a backing. Its composite nature should be disclosed." },
  { term: "Zoning", slug: "zoning", definition: "A variation in colour, composition or growth features across different parts of a crystal. Zoning can be angular, curved or growth-related and may be observed during examination." },
];

export function getGlossaryTermBySlug(slug: string) {
  return glossaryTerms.find((t) => t.slug === slug);
}
