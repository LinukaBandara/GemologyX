import type { Gemstone } from "@/data/gemstones";

/**
 * Editorial expansion set for GemologyX.
 * Keep claims cautious: treatments, origin and value should be confirmed for the
 * individual stone; a visual description is not a substitute for lab testing.
 */
export const expandedGemstones: Gemstone[] = [
  {
    slug: "peridot",
    name: "Peridot",
    category: "Semi-Precious",
    mineralFamily: "Olivine",
    chemicalFormula: "(Mg,Fe)₂SiO₄",
    hardness: "6.5–7",
    crystalSystem: "Orthorhombic",
    colors: ["Yellow-green", "Olive green", "Brownish green"],
    transparency: "Transparent to translucent",
    birthstoneMonth: "August",
    commonTreatments: ["Usually untreated; disclose any known enhancement"],
    description: "A naturally green olivine gemstone whose colour comes from iron within its crystal structure.",
    detail: {
      whatIsIt: "Peridot is the gem variety of olivine, a magnesium-iron silicate. Unlike many coloured gemstones, its green colour is intrinsic to the material rather than usually caused by trace-element impurities. It is found in some volcanic rocks and, rarely, in meteorites; gem-quality material is cut for jewellery.",
      colorNotes: "Peridot ranges from yellowish green to olive green and brownish green. The balance of yellow and green, saturation, transparency and the absence of distracting inclusions all influence appearance. Very dark or strongly brownish material is generally less visually lively than clean, well-coloured stones.",
      origins: "Gem-quality peridot has been reported from sources including Pakistan, Myanmar, China, Vietnam, the United States and the Red Sea region. Some localities are known for particular material, but geographic origin should not be assigned from colour alone; specialist laboratory testing may be needed.",
      naturalVsSynthetic: "Peridot is a natural mineral, and synthetic or imitation materials may be encountered in jewellery. Glass and other green stones can imitate its appearance. Confirming identity relies on gemological properties and, where needed, laboratory examination rather than a phone photograph.",
      treatments: "Peridot is commonly sold without treatment. Do not assume that every stone is untreated solely because treatment is uncommon; ask the seller to disclose any known enhancement and obtain a report for significant purchases.",
      inclusions: "Peridot may contain small dark mineral crystals, reflective inclusions or fractures. The visibility, position and effect of these features on transparency and durability matter more than simply counting inclusions.",
      valueFactors: ["Fresh, evenly distributed green colour", "Transparency and visible inclusions", "Cut, symmetry and brilliance", "Carat weight and face-up size", "Durability and any disclosed enhancement"],
      certification: "A report from a recognized gemological laboratory can identify the material and document relevant observations. For expensive stones, use an independent laboratory and check that the report number matches the document and stone.",
      care: "With hardness around 6.5–7 and possible cleavage or stress-related fractures, peridot needs reasonable care. Use lukewarm water, mild soap and a soft brush; avoid sudden temperature changes, steam and ultrasonic cleaning, especially for included or fractured stones."
    }
  },
  {
    slug: "opal",
    name: "Opal",
    category: "Semi-Precious",
    mineralFamily: "Hydrated silica (mineraloid)",
    chemicalFormula: "SiO₂·nH₂O (variable water content)",
    hardness: "5–6.5",
    colors: ["White", "Black", "Grey", "Orange", "Blue", "Multicolour play-of-colour"],
    transparency: "Opaque to transparent, depending on type",
    birthstoneMonth: "October",
    commonTreatments: ["Smoke or sugar-acid treatment for some opals", "Dyeing or impregnation in some material", "Doublets and triplets are assembled composites"],
    description: "A hydrated-silica gemstone prized either for its shifting play-of-colour or for attractive body colour and pattern.",
    detail: {
      whatIsIt: "Opal is hydrated silica rather than a crystalline mineral species. Precious opal can show play-of-colour: spectral flashes that change as the stone or light moves. Common opal does not show this effect and may still be valued for its body colour, pattern or ornamental use.",
      colorNotes: "The appearance depends on body tone, transparency, pattern, brightness and the range of colours visible. Black opal generally has a dark body tone that can make colour flashes stand out, while white, crystal, boulder and fire opals have different visual characteristics. Not every opal displays play-of-colour.",
      origins: "Australia is a major source of precious opal, with notable fields including Lightning Ridge, Coober Pedy and Queensland. Ethiopia and Mexico are also important sources for particular opal types. A locality claim should be supported by credible provenance or expert assessment rather than inferred from appearance alone.",
      naturalVsSynthetic: "Synthetic opal and imitation materials exist. Doublets and triplets combine a thin opal layer with backing or a transparent cap; they are constructed composites, not equivalent to a solid opal. Magnification, side-view inspection and professional testing can help distinguish these materials.",
      treatments: "Some opals may be smoked, dyed, impregnated or assembled as doublets or triplets. Treatments and construction should be clearly disclosed because they affect appearance, durability, care and value. Ask specifically whether the stone is solid, a doublet, a triplet, treated or synthetic.",
      inclusions: "Opal may contain potch, sand, host-rock matrix, crazing or fractures. In boulder opal, natural host rock may form part of the finished stone. Fine structural patterns create play-of-colour; cracks and dehydration-related damage can reduce durability.",
      valueFactors: ["Brightness and range of play-of-colour", "Pattern, coverage and body tone", "Transparency and colour distribution", "Size, shape and cut quality", "Solid opal versus assembled composite", "Treatment disclosure and condition"],
      certification: "For valuable opal, an independent report can document identification and whether the material is natural, synthetic, treated or assembled where the laboratory can determine this. Reports may not establish mine origin, so review the exact wording and scope.",
      care: "Opal is softer and more sensitive to impact than many crystalline gems. Avoid ultrasonic and steam cleaners, prolonged heat, harsh chemicals and sudden temperature changes. Clean gently with a soft damp cloth; doublets and triplets need particular care around prolonged soaking."
    }
  },
  {
    slug: "tanzanite",
    name: "Tanzanite",
    category: "Semi-Precious",
    mineralFamily: "Zoisite",
    chemicalFormula: "Ca₂Al₃(SiO₄)₃(OH)",
    hardness: "6–7",
    crystalSystem: "Orthorhombic",
    colors: ["Blue", "Violet-blue", "Blue-purple"],
    transparency: "Transparent",
    birthstoneMonth: "December",
    commonTreatments: ["Heat treatment is common"],
    description: "A blue-to-violet variety of zoisite known for pleochroism and its commercially significant source in Tanzania.",
    detail: {
      whatIsIt: "Tanzanite is the blue-to-violet gem variety of zoisite, first brought to broad commercial attention in the twentieth century. Its strong pleochroism means different body colours can be seen along different crystal directions. Most commercial material is heated to produce or improve the blue-violet appearance.",
      colorNotes: "Colour can range from lighter blue to deep violet-blue. Tone, saturation, colour uniformity, visible inclusions and the face-up balance of pleochroic colours all affect appearance. A stone's colour should be viewed under more than one lighting condition before purchase.",
      origins: "Commercial tanzanite is strongly associated with the Merelani mining area near Mount Kilimanjaro in northern Tanzania. This geographic association is well known, but a claim about a particular mine or parcel still needs reliable documentation rather than visual inference.",
      naturalVsSynthetic: "Natural tanzanite is zoisite. Blue glass and other blue gemstones can be used as imitations, and different materials can look similar in photographs. Identification should use gemological testing; a laboratory report is prudent for high-value purchases.",
      treatments: "Heating is widespread in the trade and can change brownish or other less desirable hues into blue-violet colours. Sellers should state known treatment information accurately. Do not interpret the presence of an attractive blue colour as proof that a stone is untreated.",
      inclusions: "Tanzanite can contain mineral inclusions, healed fractures and other internal features. Their type, visibility and location affect clarity and durability; a stone that looks clean face-up may still have a vulnerable fracture near an edge.",
      valueFactors: ["Blue-violet hue, saturation and tone", "Pleochroic colour balance", "Clarity and fracture placement", "Cut proportions and orientation", "Carat weight and face-up appearance", "Treatment disclosure and condition"],
      certification: "An independent laboratory report can confirm species identity and record treatment observations within the laboratory's capabilities. Origin claims and treatment conclusions should be read exactly as written, including any limitations.",
      care: "Tanzanite has moderate hardness and cleavage, so it can chip if struck. Prefer protective settings for rings, remove jewellery during manual work, and clean with mild soap, lukewarm water and a soft brush. Avoid ultrasonic and steam cleaning."
    }
  },
  {
    slug: "jadeite",
    name: "Jadeite Jade",
    category: "Semi-Precious",
    mineralFamily: "Pyroxene group",
    chemicalFormula: "NaAlSi₂O₆",
    hardness: "6.5–7",
    crystalSystem: "Monoclinic",
    colors: ["Green", "Lavender", "White", "Yellow", "Red", "Black"],
    transparency: "Opaque to translucent",
    description: "A jade material prized for its toughness, texture and colour; quality depends on more than green colour alone.",
    detail: {
      whatIsIt: "Jadeite is a pyroxene mineral and one of the two materials commonly called jade; the other is nephrite. Jadeite's interlocking granular structure contributes to its toughness. In the trade, the term jade can be used broadly, so buyers should confirm whether a piece is jadeite, nephrite or an imitation.",
      colorNotes: "Jadeite occurs in several colours, including green, lavender, white, yellow and red. For green material, hue, saturation, translucency, texture, evenness and surface polish are important. A vivid green appearance alone does not establish natural origin or indicate that a stone has not been treated.",
      origins: "Myanmar is a major source of gem-quality jadeite, with other occurrences known elsewhere. Provenance and responsible sourcing can be complicated; a seller's geographic claim should be supported by documentation where it matters to the purchase.",
      naturalVsSynthetic: "Jadeite may be confused with nephrite, quartz, serpentine, glass and other simulants. Gemological testing is needed to establish identity. Trade descriptions such as Type A, B or C jade are used in some markets to describe treatment categories, but terminology and documentation should be checked carefully.",
      treatments: "Jadeite can be bleached and polymer-impregnated, dyed, or subjected to combinations of treatments. These can materially affect stability and value. Ask the seller to specify treatment status and use a recognized laboratory report for important purchases; appearance alone cannot reliably establish treatment.",
      inclusions: "Natural jadeite commonly has a granular or fibrous-looking interlocking texture, with veins, mineral patches or colour variation. Texture and transparency influence appearance. Fractures, dye concentration and polymer-related indicators may require specialist examination.",
      valueFactors: ["Colour hue, saturation and evenness", "Translucency and texture", "Polish, carving or cabochon workmanship", "Size, condition and rarity of appearance", "Natural versus treated status", "Reliable identification and treatment report"],
      certification: "For high-value jadeite, obtain a report from a recognized gemological laboratory that identifies the material and states any detected bleaching, impregnation or dyeing. Confirm the report number directly with the issuing laboratory where possible.",
      care: "Jadeite is tough but can still crack or chip. Clean with mild soap and lukewarm water; avoid harsh chemicals, steam and ultrasonic cleaning, especially when treatment status is uncertain. Protect carved pieces and avoid hard impacts."
    }
  },
  {
    slug: "nephrite",
    name: "Nephrite Jade",
    category: "Semi-Precious",
    mineralFamily: "Amphibole group",
    chemicalFormula: "Complex calcium-magnesium-iron silicate (composition varies)",
    hardness: "6–6.5",
    crystalSystem: "Monoclinic",
    colors: ["Green", "White", "Cream", "Grey", "Brown", "Black"],
    transparency: "Opaque to translucent",
    description: "A tough jade material made of interlocking amphibole fibres, valued for carvings, beads and jewellery.",
    detail: {
      whatIsIt: "Nephrite is one of the two materials known as jade, the other being jadeite. It is composed mainly of interlocking amphibole-group fibres, a structure that gives it exceptional toughness. Nephrite is widely used for carvings, bangles, beads and ornamental objects.",
      colorNotes: "Nephrite commonly appears in shades of green, white, cream, grey, brown and black. Colour, translucency, evenness, texture, polish and craftsmanship shape its appeal. A very glossy finish or a saturated green colour does not by itself prove that a piece is natural or untreated.",
      origins: "Notable nephrite sources include regions of China, Canada, New Zealand, Russia and elsewhere. Historical and cultural importance varies by locality. Origin claims should be treated as separate from mineral identification and supported with credible provenance when relevant.",
      naturalVsSynthetic: "Nephrite can be confused with jadeite and with imitations such as serpentine, quartz, glass or other green materials. Because jadeite and nephrite differ in composition and physical properties, proper gemological testing is more reliable than visual assessment alone.",
      treatments: "Nephrite is often used without the same treatment patterns seen in some jadeite, but dyeing, impregnation, surface coatings and imitations can occur in the wider market. Ask for disclosure and independent testing when the value or cultural significance of a piece justifies it.",
      inclusions: "Nephrite's fibrous interlocking texture is characteristic and contributes to toughness. Natural colour variation, mineral patches and fractures may be present. Surface polish can conceal internal features, so examination may require magnification or laboratory methods.",
      valueFactors: ["Colour and colour distribution", "Translucency and texture", "Polish and workmanship", "Size, form and condition", "Material identification and any treatment", "Documented provenance for significant pieces"],
      certification: "A gemological report can distinguish nephrite from jadeite and common imitations and may comment on detectable treatments. Check what the report actually confirms; it may not independently prove a cultural history or exact mine source.",
      care: "Nephrite is tough but can be scratched or damaged by strong impacts. Clean with mild soap, water and a soft cloth. Avoid harsh chemicals, abrasive cleaners and ultrasonic cleaning when treatments or repairs are uncertain."
    }
  },
  {
    slug: "amethyst",
    name: "Amethyst",
    category: "Semi-Precious",
    mineralFamily: "Quartz",
    chemicalFormula: "SiO₂",
    hardness: "7",
    crystalSystem: "Trigonal",
    colors: ["Lilac", "Purple", "Violet", "Reddish purple"],
    transparency: "Transparent to translucent",
    birthstoneMonth: "February",
    commonTreatments: ["Heat treatment may alter colour; irradiation can also be relevant to quartz colour"],
    description: "The purple variety of quartz, valued for its range of violet hues and broad availability.",
    detail: {
      whatIsIt: "Amethyst is the purple variety of quartz. Its colour is associated with trace iron and natural irradiation effects within the crystal. It is widely used in faceted jewellery, beads, carvings and geodes, and is commonly available in a range of sizes.",
      colorNotes: "Amethyst ranges from pale lilac to deep violet and reddish purple. Saturation, tone, colour distribution, clarity and cut influence appearance. Strong colour concentrated at the tips of a crystal or uneven zoning may be visible in some material and should be considered when assessing a finished stone.",
      origins: "Important amethyst sources include Brazil, Uruguay, Zambia and other localities. Geodes and crystals from different deposits can have distinctive appearances, but a specific origin should not be assigned confidently from colour alone.",
      naturalVsSynthetic: "Synthetic amethyst exists and can be difficult for non-specialists to distinguish from natural quartz. Glass and other purple gems are also used as imitations. Inexpensive stones may not need a formal report, but for a high-value claim or unusual provenance, seek independent identification.",
      treatments: "Heat treatment can change amethyst's colour and may produce yellow, orange or greenish material sold under different trade names. Treatments and trade names can be confusing, so ask whether colour is natural and obtain disclosure in writing when it affects price.",
      inclusions: "Amethyst may show liquid inclusions, mineral crystals, healed fractures, colour zoning or growth features. These are not automatically defects; their effect depends on visibility, position, transparency and durability.",
      valueFactors: ["Purple hue and saturation", "Evenness of colour distribution", "Clarity and transparency", "Cut quality and proportions", "Carat weight and finished size", "Natural colour versus disclosed treatment"],
      certification: "A laboratory report can identify quartz and assess whether colour-related treatment indicators are present within the laboratory's capabilities. Report scope varies, so do not treat a simple identification report as a guarantee of mine origin.",
      care: "Quartz has hardness 7, but amethyst colour can fade with prolonged exposure to intense light or heat in some circumstances. Store away from strong direct sunlight, avoid sudden temperature changes and clean with mild soap, lukewarm water and a soft brush."
    }
  },
  {
    slug: "citrine",
    name: "Citrine",
    category: "Semi-Precious",
    mineralFamily: "Quartz",
    chemicalFormula: "SiO₂",
    hardness: "7",
    crystalSystem: "Trigonal",
    colors: ["Pale yellow", "Golden yellow", "Honey", "Yellow-orange", "Brownish orange"],
    transparency: "Transparent to translucent",
    birthstoneMonth: "November",
    commonTreatments: ["Heat-treated amethyst or smoky quartz is common in the market"],
    description: "Yellow to orange quartz; much commercial citrine is heat-treated material rather than naturally yellow quartz.",
    detail: {
      whatIsIt: "Citrine is the yellow-to-orange variety of quartz. Naturally coloured citrine exists, but a substantial amount of material sold commercially as citrine is produced by heating amethyst or smoky quartz. Natural and heat-treated material can look similar, so a seller's description should be clear.",
      colorNotes: "Colour ranges from pale yellow to golden, honey and brownish orange. The distribution of colour, transparency, cut and whether the colour is natural or treated are important. A very orange or reddish-orange appearance should not be taken as proof of natural citrine.",
      origins: "Natural citrine is found in several quartz-producing regions, while treated material may originate from amethyst or smoky quartz deposits elsewhere. Origin statements should be supported by documentation; visual colour is not enough to establish locality.",
      naturalVsSynthetic: "Natural citrine, heat-treated quartz and synthetic quartz are different categories. Some imitations use glass or other materials. Since natural and treated quartz may be visually alike, ask directly whether the colour is natural and consider a laboratory report if that distinction materially affects the price.",
      treatments: "Heating amethyst or smoky quartz is a common way to create citrine-like yellow-orange colour. The treatment is widely encountered but should not be misrepresented as natural colour. Coatings and imitations may also appear in jewellery, especially in novelty colours.",
      inclusions: "Citrine can contain veils, liquid inclusions, mineral crystals and colour zoning. The presence or absence of inclusions does not alone prove whether the colour is natural; treatment assessment may require specialist examination.",
      valueFactors: ["Colour hue, tone and saturation", "Transparency and clarity", "Cut quality and face-up appearance", "Carat weight", "Natural colour versus heat treatment", "Accurate disclosure and documentation"],
      certification: "For purchases where natural colour is important, request an independent laboratory report that addresses identity and treatment as far as the lab can determine. A seller's certificate should identify its issuer and scope clearly.",
      care: "Citrine has quartz hardness of 7. Clean with mild soap and warm water and a soft brush. Avoid prolonged strong heat and direct sunlight for extended periods, and protect the stone from hard impacts that could chip edges or corners."
    }
  },
  {
    slug: "zircon",
    name: "Zircon",
    category: "Semi-Precious",
    mineralFamily: "Zircon",
    chemicalFormula: "ZrSiO₄",
    hardness: "6–7.5 (varies with material)",
    crystalSystem: "Tetragonal",
    colors: ["Blue", "Colourless", "Yellow", "Orange", "Red", "Brown", "Green"],
    transparency: "Transparent to opaque",
    birthstoneMonth: "December",
    commonTreatments: ["Heat treatment is used for some colours"],
    description: "A natural zirconium silicate gemstone with strong brilliance and dispersion; it is not the same material as cubic zirconia.",
    detail: {
      whatIsIt: "Zircon is a natural mineral, zirconium silicate, prized as a gemstone for its brilliance and dispersion. It is often confused by name with cubic zirconia, which is a different laboratory-produced material commonly used as a diamond simulant. The distinction is important when buying or selling stones.",
      colorNotes: "Zircon occurs in a range of colours including blue, colourless, yellow, orange, red, brown and green. Blue zircon is often heat-treated, while other colours may be natural or treated depending on the material. High brilliance can be accompanied by facet doubling because of zircon's optical properties.",
      origins: "Gem zircon has been sourced from Sri Lanka, Cambodia, Myanmar, Tanzania and other localities. Sri Lanka is historically known for several zircon colours. A particular origin or treatment history should not be inferred from colour alone.",
      naturalVsSynthetic: "Natural zircon is ZrSiO₄. Cubic zirconia is a different synthetic compound and is not natural zircon. Glass and other materials may also imitate zircon. Accurate identification uses refractive, optical and other gemological properties; visual resemblance alone is insufficient.",
      treatments: "Heat treatment has long been used to produce or modify certain zircon colours, especially blue. Some treated colours may be unstable under particular conditions. Sellers should disclose known treatment and avoid describing treated blue zircon as naturally blue without evidence.",
      inclusions: "Zircon may contain mineral inclusions, healed fractures, growth zoning and internal features related to its geological history. Some zircon has experienced radiation damage over geological time, changing its physical properties; this can influence durability and appearance.",
      valueFactors: ["Colour and saturation", "Brilliance, dispersion and cut", "Clarity and condition", "Carat weight and size", "Treatment status and colour stability", "Clear distinction from cubic zirconia"],
      certification: "A recognized laboratory report can distinguish zircon from cubic zirconia and other simulants and may comment on treatment. For valuable stones, ensure the report identifies the mineral species rather than using the ambiguous word 'zircon' without context.",
      care: "Zircon can be brittle and may abrade or chip at facet edges despite its sparkle. Use a protective setting, avoid hard knocks, and clean gently with mild soap and lukewarm water. Avoid ultrasonic or steam cleaning for fractured or uncertain material."
    }
  },
  {
    slug: "iolite",
    name: "Iolite",
    category: "Semi-Precious",
    mineralFamily: "Cordierite",
    chemicalFormula: "(Mg,Fe)₂Al₄Si₅O₁₈",
    hardness: "7–7.5",
    crystalSystem: "Orthorhombic",
    colors: ["Violet-blue", "Blue", "Grey-blue", "Yellowish brown"],
    transparency: "Transparent to translucent",
    description: "A pleochroic cordierite gemstone that can show different blue, violet and grey tones depending on viewing direction.",
    detail: {
      whatIsIt: "Iolite is the gem variety of cordierite. It is strongly pleochroic, meaning its apparent colour can vary with the direction in which light travels through the crystal. This optical property makes cutting orientation particularly important for a lively face-up appearance.",
      colorNotes: "Iolite is commonly violet-blue to blue or grey-blue and may appear much lighter or more grey from another direction. Good cutting aims to show attractive colour face-up while managing pleochroism and extinction. Colour should be assessed in person under more than one lighting condition when possible.",
      origins: "Iolite has been found in localities including India, Sri Lanka, Madagascar, Brazil and other regions. Material from a given locality can vary, and an origin claim should be treated as a separate question from species identification.",
      naturalVsSynthetic: "Natural iolite may be confused with blue sapphire, tanzanite, spinel or glass. Synthetic and imitation materials can exist in the wider market. Gemological testing is needed to confirm cordierite rather than relying on hue alone.",
      treatments: "Iolite is generally sold without routine colour treatment, but individual stones should not be assumed untreated without disclosure. Ask the seller about known enhancements and use an independent report for a high-value or unusual stone.",
      inclusions: "Iolite can contain mineral inclusions, fractures and internal growth features. The position of fractures is important because the stone's cleavage and directional properties can influence cutting and durability.",
      valueFactors: ["Strength and attractiveness of violet-blue colour", "Face-up appearance and extinction", "Clarity and fracture placement", "Cut orientation and proportions", "Carat weight and finished size", "Reliable identification and treatment disclosure"],
      certification: "A laboratory report can confirm cordierite and document relevant observations. Reports may not establish geographic origin or treatment history unless specifically examined and stated.",
      care: "Iolite has good everyday hardness but can be damaged by sharp impact or along cleavage directions. Clean with mild soap, lukewarm water and a soft brush. Avoid ultrasonic and steam cleaning when fractures or treatment status are uncertain."
    }
  },
  {
    slug: "chrysoberyl",
    name: "Chrysoberyl",
    category: "Semi-Precious",
    mineralFamily: "Chrysoberyl",
    chemicalFormula: "BeAl₂O₄",
    hardness: "8.5",
    crystalSystem: "Orthorhombic",
    colors: ["Yellow", "Yellow-green", "Green", "Brownish green"],
    transparency: "Transparent to translucent",
    description: "A durable beryllium aluminium oxide gemstone; alexandrite and cat's-eye chrysoberyl are notable varieties or effects within the species.",
    detail: {
      whatIsIt: "Chrysoberyl is a distinct mineral species, beryllium aluminium oxide. It should not be confused with beryl, despite the similar names. Alexandrite is the colour-change variety of chrysoberyl, while cat's-eye chrysoberyl displays a sharp band of reflected light caused by aligned internal features.",
      colorNotes: "Ordinary chrysoberyl is commonly yellow, yellow-green, green or brownish green. Colour saturation, clarity, cut and optical effects shape its appearance. Cat's-eye stones are usually cut as cabochons so the eye can move across the curved surface; the sharpness and placement of the band are important.",
      origins: "Chrysoberyl and its varieties have been found in Sri Lanka, Brazil, Madagascar, Tanzania and other gem-producing regions. Alexandrite and cat's-eye material have distinct market considerations, but exact origin requires evidence beyond colour or optical appearance.",
      naturalVsSynthetic: "Synthetic chrysoberyl and synthetic alexandrite materials exist, and other stones can imitate cat's-eye effects. A trained gemologist can assess identity and growth features; laboratory testing is recommended when a stone is represented as rare alexandrite or fine cat's-eye chrysoberyl.",
      treatments: "Chrysoberyl is commonly traded without routine enhancement, but treatment claims should still be verified for individual stones. For alexandrite or cat's-eye material, ask for clear documentation of species, optical effect, treatment and any origin opinion.",
      inclusions: "Chrysoberyl may contain mineral crystals, fine needles or tube-like features. When suitably oriented, aligned inclusions can create chatoyancy, the cat's-eye effect. Inclusions can also affect clarity, durability and the quality of the optical effect.",
      valueFactors: ["Colour and saturation", "Clarity and transparency", "Cut quality or sharpness of cat's-eye", "Strength and quality of colour change in alexandrite", "Carat weight and rarity", "Treatment and laboratory documentation"],
      certification: "A report from a recognized laboratory can confirm chrysoberyl species and document colour-change or cat's-eye effects where present. For high-value alexandrite, confirm the report addresses natural versus synthetic origin and treatment to the extent the lab can determine.",
      care: "Chrysoberyl's hardness of about 8.5 makes it durable for jewellery. Clean with mild soap, warm water and a soft brush. Avoid hard impacts and use additional caution with stones that have significant fractures or specialised settings."
    }
  }
];
