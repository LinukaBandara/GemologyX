export interface Gemstone {
  slug: string;
  name: string;
  category: "Precious" | "Semi-Precious" | "Organic";
  mineralFamily: string;
  chemicalFormula?: string;
  hardness: string;
  crystalSystem?: string;
  colors: string[];
  transparency?: string;
  birthstoneMonth?: string;
  commonTreatments?: string[];
  description: string;
  /** Longer-form sections shown on the detail page. Optional — falls back to a generic template when absent. */
  detail?: {
    whatIsIt: string;
    colorNotes: string;
    origins: string;
    naturalVsSynthetic: string;
    treatments: string;
    inclusions: string;
    valueFactors: string[];
    certification: string;
    care: string;
  };
}

export const gemstones: Gemstone[] = [
  {
    slug: "sapphire",
    name: "Sapphire",
    category: "Precious",
    mineralFamily: "Corundum",
    chemicalFormula: "Al₂O₃ (aluminium oxide)",
    hardness: "9",
    crystalSystem: "Trigonal",
    colors: ["Blue", "Pink", "Yellow", "Padparadscha", "Green", "White", "Colour-changing"],
    transparency: "Transparent to translucent",
    birthstoneMonth: "September",
    commonTreatments: ["Heat treatment", "Beryllium diffusion (less common)", "Fracture filling (rare)"],
    description:
      "A variety of corundum prized for its hardness and range of colours beyond blue, closely associated with Sri Lankan (Ceylon) gem deposits.",
    detail: {
      whatIsIt:
        "Sapphire is the gem variety of the mineral corundum (aluminium oxide). While blue is the most familiar colour, corundum occurs in nearly every hue except red — red corundum is instead classified as ruby. Trace elements such as iron and titanium are responsible for sapphire's blue colour, while other trace elements produce pink, yellow, green, and the pink-orange combination known as padparadscha.",
      colorNotes:
        "Blue sapphire ranges from pale to intensely saturated, with mid-toned, vivid blues generally the most sought after. Pink sapphire grades into ruby as saturation increases, and the line between the two is a matter of laboratory and trade convention rather than a single fixed rule. Padparadscha is a distinct pink-orange combination that most gemological laboratories define narrowly. Colour-changing sapphire shifts hue depending on the light source, though this is less common than in alexandrite.",
      origins:
        "Sapphire is mined in a number of countries, including Sri Lanka, Madagascar, Myanmar, Kashmir (historically), and various sites in East Africa and Australia. Geographic origin can sometimes be determined by a gemological laboratory through trace-element and inclusion analysis, but this is a specialist laboratory determination — it is not something that can be reliably read from a stone's appearance alone.",
      naturalVsSynthetic:
        "Synthetic sapphire has the same chemical composition and crystal structure as natural sapphire but is grown in a laboratory, typically by flame-fusion or flux-growth methods, over a period of hours to weeks rather than geological time. Synthetic sapphire is common in industrial applications (such as watch crystals) as well as in some jewellery, and should always be disclosed as synthetic when sold. Distinguishing natural from synthetic material generally requires examination by a trained gemologist using magnification and, in some cases, advanced laboratory equipment — it is not reliably done by eye.",
      treatments:
        "The great majority of blue sapphire on the market today is heat-treated to improve colour and clarity, a practice with a long history in the trade and one that is generally accepted, provided it is disclosed. Less common treatments include beryllium diffusion, which can introduce colour (including padparadscha-like hues) into otherwise less desirable material, and fracture filling to improve apparent clarity. Treatment status has a material effect on value and should be stated on any accompanying laboratory report.",
      inclusions:
        "Inclusions are internal features — such as mineral crystals, fingerprint-like fluid networks, or growth lines — that formed as the crystal grew. In sapphire, inclusions can help a gemologist distinguish natural from synthetic material and can sometimes support an origin opinion. Fine silk-like rutile inclusions, when abundant and properly oriented, can also produce the star effect seen in star sapphires.",
      valueFactors: ["Colour saturation and hue", "Clarity", "Cut quality and proportions", "Carat weight", "Treatment status", "Origin, where determinable"],
      certification:
        "A laboratory report from a recognized gemological laboratory typically documents a sapphire's identity, weight and measurements, colour, clarity characteristics, and treatment status, and may offer an origin opinion where the evidence supports one. Reports vary in scope and rigor between laboratories, so it is worth understanding which laboratory issued a given report and what that laboratory does and does not attempt to determine.",
      care:
        "Sapphire's high hardness (9 on the Mohs scale) makes it well suited to everyday jewellery wear. It can still chip if struck at the wrong angle, and ultrasonic or steam cleaning should be avoided for stones that have been fracture-filled or otherwise treated in a way that could be affected by heat or vibration. Mild soap and warm water with a soft brush is a safe general-purpose cleaning method for untreated or heat-only-treated stones.",
    },
  },
  {
    slug: "ruby",
    name: "Ruby",
    category: "Precious",
    mineralFamily: "Corundum",
    chemicalFormula: "Al₂O₃ (aluminium oxide)",
    hardness: "9",
    crystalSystem: "Trigonal",
    colors: ["Red", "Pinkish red"],
    transparency: "Transparent to translucent",
    birthstoneMonth: "July",
    commonTreatments: ["Heat treatment", "Glass/lead-glass filling (lower grades)", "Diffusion (less common)"],
    description:
      "The red variety of corundum, coloured by trace chromium, valued for saturation and clarity.",
    detail: {
      whatIsIt:
        "Ruby is corundum (aluminium oxide) coloured red by trace amounts of chromium. Corundum in any colour other than red is classified as sapphire, which means ruby and sapphire share the same mineral identity and differ only in the colour-causing trace elements present during formation.",
      colorNotes:
        "The most prized ruby colour is often described as a vivid, slightly purplish red, sometimes marketed as 'pigeon's blood' — a trade term rather than a strict laboratory grade. Colour that leans too orange or too purple, or that is too dark or too light, is generally valued less than a saturated, evenly distributed red.",
      origins:
        "Historically important ruby sources include Myanmar (Burma), with additional significant production from Mozambique, Madagascar, and Thailand, among other localities. As with sapphire, an origin opinion requires laboratory analysis of trace elements and inclusions rather than visual assessment alone.",
      naturalVsSynthetic:
        "Synthetic ruby has been produced since the early 1900s, initially by flame-fusion methods, and is widely used in both jewellery and industrial applications. Reliably distinguishing natural from synthetic ruby generally requires a gemologist's examination under magnification, and sometimes advanced laboratory testing.",
      treatments:
        "Heat treatment to improve colour and clarity is standard practice for the majority of ruby on the market. Lower-clarity material is sometimes filled with lead glass to mask fractures and improve apparent transparency — a treatment that significantly affects durability and value and should always be disclosed.",
      inclusions:
        "Natural ruby commonly contains rutile silk, mineral crystals, and healed fracture patterns that formed during growth. These inclusions can assist a gemologist in confirming natural origin and, in some cases, supporting a geographic origin opinion.",
      valueFactors: ["Colour saturation and hue", "Clarity", "Cut quality", "Carat weight", "Treatment status", "Origin, where determinable"],
      certification:
        "A report from a recognized gemological laboratory typically documents identity, weight, colour, clarity characteristics, and treatment status, including whether the stone has been heated or glass-filled, which materially affects value.",
      care:
        "Ruby's hardness (9 on the Mohs scale) makes it durable for everyday wear, though glass-filled stones are considerably more fragile and should avoid ultrasonic cleaning, heat, and harsh chemicals. Untreated or heat-only-treated rubies can generally be cleaned with mild soap, warm water, and a soft brush.",
    },
  },
  {
    slug: "emerald",
    name: "Emerald",
    category: "Precious",
    mineralFamily: "Beryl",
    chemicalFormula: "Be₃Al₂(SiO₃)₆",
    hardness: "7.5–8",
    crystalSystem: "Hexagonal",
    colors: ["Green"],
    transparency: "Transparent to translucent",
    birthstoneMonth: "May",
    commonTreatments: ["Oiling (cedar oil or synthetic resin)", "Resin filling"],
    description:
      "A green variety of beryl coloured by chromium and/or vanadium, typically included and often treated with oil or resin.",
    detail: {
      whatIsIt:
        "Emerald is the green variety of the mineral beryl, coloured by trace chromium and/or vanadium. It belongs to the same mineral family as aquamarine, but the presence of these specific trace elements — and the resulting colour — is what distinguishes it.",
      colorNotes:
        "Fine emerald shows a vivid, saturated green, often with a slightly bluish or slightly yellowish undertone depending on origin and specific trace-element chemistry. Colour distribution can be uneven, and this unevenness is generally accepted as characteristic of the material rather than a flaw in itself.",
      origins:
        "Colombia is historically the most prominent emerald source, alongside significant production from Zambia and Brazil, among other countries. As with other coloured stones, an origin opinion requires laboratory analysis rather than visual judgment.",
      naturalVsSynthetic:
        "Synthetic emerald, grown by flux or hydrothermal methods, has existed commercially since the mid-20th century. Distinguishing natural from synthetic emerald generally requires gemological examination, often aided by characteristic inclusion patterns that differ between natural and lab-grown material.",
      treatments:
        "The great majority of natural emerald is treated with oil (traditionally cedar oil) or, increasingly, synthetic resin, to fill surface-reaching fractures and improve apparent clarity. This is a long-accepted trade practice, but the type and extent of filling materially affects value and should be disclosed on any accompanying report.",
      inclusions:
        "Emerald is well known for visible inclusions, sometimes poetically called 'jardin' (French for garden). These inclusions are considered a normal characteristic of the material rather than automatically a defect, though excessive fracturing can affect durability.",
      valueFactors: ["Colour saturation and hue", "Clarity and degree of visible inclusions", "Cut quality", "Carat weight", "Treatment (oil/resin) extent", "Origin, where determinable"],
      certification:
        "A laboratory report on emerald typically documents identity, weight, colour, clarity, and the type and extent of clarity enhancement (oiling or resin filling), since this has a significant effect on both value and appropriate care.",
      care:
        "Emerald's hardness (7.5–8) is moderate, but its typical inclusion of fractures makes it more prone to chipping and damage than harder, cleaner gemstones. Avoid ultrasonic cleaners, steam cleaning, and harsh chemicals, all of which can strip fracture-filling oil or resin; clean gently with mild soap and a soft cloth only.",
    },
  },
  {
    slug: "spinel",
    name: "Spinel",
    category: "Semi-Precious",
    mineralFamily: "Spinel group",
    chemicalFormula: "MgAl₂O₄",
    hardness: "7.5–8",
    crystalSystem: "Cubic",
    colors: ["Red", "Pink", "Blue", "Purple", "Orange"],
    transparency: "Transparent to translucent",
    birthstoneMonth: "August",
    commonTreatments: ["Typically untreated"],
    description:
      "A historically underrated gem often confused with ruby and sapphire, increasingly valued for its natural, typically untreated colour.",
    detail: {
      whatIsIt:
        "Spinel is a distinct mineral species (magnesium aluminium oxide) that crystallizes in the cubic system, unlike corundum's trigonal system. For centuries, red spinel was frequently mistaken for ruby — several famous 'ruby' gems in historical royal collections have since been identified as spinel.",
      colorNotes:
        "Spinel occurs across a wide colour range, with red and vivid 'cobalt' blue among the most highly regarded. Because natural, untreated spinel is relatively common compared to untreated ruby or sapphire of similar colour, it has become increasingly appreciated on its own terms rather than only as a ruby or sapphire substitute.",
      origins:
        "Notable spinel sources include Myanmar, Tanzania, Sri Lanka, and Tajikistan, among others. Origin determination follows the same laboratory-based approach used for other coloured gemstones.",
      naturalVsSynthetic:
        "Synthetic spinel is inexpensive to produce and widely used in costume jewellery and as a diamond simulant in some contexts. It is generally straightforward for a gemologist to distinguish from natural spinel using standard gemological testing.",
      treatments:
        "Most spinel on the market is untreated, which is part of its growing appeal. Where treatments do occur, they are less standardized than for ruby or sapphire, so treatment status should still be confirmed rather than assumed.",
      inclusions:
        "Natural spinel often contains octahedral mineral inclusions and can show fine needle-like inclusions in some material. These features assist gemologists in confirming natural origin.",
      valueFactors: ["Colour saturation and hue", "Clarity", "Cut quality", "Carat weight", "Rarity of colour (e.g., vivid blue)"],
      certification:
        "A laboratory report for spinel documents identity, weight, colour, and clarity, and confirms treatment status — most often confirming the stone is untreated.",
      care:
        "Spinel's hardness (7.5–8) and typically good clarity make it well suited to everyday wear. It can generally be cleaned with mild soap and warm water; as with any gemstone, ultrasonic cleaning is safest when the stone is confirmed untreated and free of significant fractures.",
    },
  },
  {
    slug: "alexandrite",
    name: "Alexandrite",
    category: "Precious",
    mineralFamily: "Chrysoberyl",
    chemicalFormula: "BeAl₂O₄",
    hardness: "8.5",
    crystalSystem: "Orthorhombic",
    colors: ["Green (daylight)", "Red/purple (incandescent light)"],
    transparency: "Transparent",
    birthstoneMonth: "June",
    commonTreatments: ["Typically untreated"],
    description:
      "A rare colour-change variety of chrysoberyl, prized for shifting hue under different lighting conditions.",
    detail: {
      whatIsIt:
        "Alexandrite is a colour-change variety of the mineral chrysoberyl, coloured by trace chromium. It is best known for the alexandrite effect: appearing green to bluish-green in daylight or fluorescent light, and red to purplish-red under incandescent light.",
      colorNotes:
        "The strength of the colour change varies by stone and is a major factor in value — a dramatic, complete shift between green and red commands a significant premium over a subtle or partial change.",
      origins:
        "Alexandrite was first discovered in Russia's Ural Mountains in the 19th century. Modern sources include Sri Lanka, Brazil, and East Africa, though fine material in larger sizes remains genuinely rare across all sources.",
      naturalVsSynthetic:
        "Synthetic colour-change corundum and synthetic alexandrite-like materials exist and are sometimes mistaken for natural alexandrite by non-specialists. Laboratory testing can reliably distinguish natural alexandrite chrysoberyl from synthetic substitutes.",
      treatments:
        "Natural alexandrite is generally untreated; its value rests heavily on natural colour-change quality rather than any color enhancement.",
      inclusions:
        "Inclusions in natural alexandrite can include fine needle-like or fingerprint-type features that help confirm natural origin and separate it from synthetic material.",
      valueFactors: ["Strength and completeness of the colour change", "Colour saturation in each lighting condition", "Clarity", "Cut quality", "Carat weight"],
      certification:
        "A laboratory report for alexandrite confirms species identity (chrysoberyl) and documents the colour change observed under standardized lighting, along with clarity and treatment status.",
      care:
        "Alexandrite's hardness (8.5) makes it durable for regular wear. It can typically be cleaned with mild soap and warm water; as with most gemstones, avoiding sudden temperature changes and harsh chemicals is good general practice.",
    },
  },
  {
    slug: "garnet",
    name: "Garnet",
    category: "Semi-Precious",
    mineralFamily: "Garnet group",
    chemicalFormula: "Varies by species (silicate group)",
    hardness: "6.5–7.5",
    crystalSystem: "Cubic",
    colors: ["Red", "Orange", "Green", "Purple"],
    transparency: "Transparent to translucent",
    birthstoneMonth: "January",
    commonTreatments: ["Typically untreated"],
    description:
      "A group of related silicate minerals occurring in many colours, from deep red pyrope to vivid green tsavorite.",
    detail: {
      whatIsIt:
        "Garnet is not a single mineral but a group of chemically related silicate minerals sharing a common crystal structure, including species such as pyrope, almandine, spessartine, grossular, and andradite. This is why garnet appears across such a wide colour range.",
      colorNotes:
        "Deep red is the most familiar garnet colour (pyrope and almandine), but the group also includes vivid green tsavorite and demantoid (both varieties of grossular and andradite respectively), orange spessartine, and colour-change varieties. Each named variety has its own typical colour range and value drivers.",
      origins:
        "Garnet is mined widely, with notable sources including Mozambique, Tanzania, Madagascar, India, and Namibia, among many others, varying by species and colour.",
      naturalVsSynthetic:
        "Synthetic garnet analogues (such as YAG and GGG, used mainly in lasers and as diamond simulants) exist but are chemically and structurally distinct from natural garnet species, making them straightforward to distinguish with standard gemological testing.",
      treatments:
        "The majority of garnet on the market is untreated, which is one of its practical advantages for buyers.",
      inclusions:
        "Inclusion patterns vary significantly by garnet species; demantoid, for example, is well known for distinctive 'horsetail' inclusions that can support identification.",
      valueFactors: ["Species and colour rarity (e.g., demantoid, tsavorite)", "Colour saturation", "Clarity", "Cut quality", "Carat weight"],
      certification:
        "A laboratory report identifies the specific garnet species (not just 'garnet' generically), along with weight, colour, and clarity — species identification matters because value varies enormously between common red garnet and rare green varieties.",
      care:
        "Most garnet species have good hardness (6.5–7.5) suitable for regular wear, though demantoid is somewhat softer and more fracture-prone. General cleaning with mild soap and warm water is appropriate for most untreated garnet.",
    },
  },
  {
    slug: "tourmaline",
    name: "Tourmaline",
    category: "Semi-Precious",
    mineralFamily: "Tourmaline group",
    chemicalFormula: "Complex borosilicate (varies by species)",
    hardness: "7–7.5",
    crystalSystem: "Trigonal",
    colors: ["Green", "Pink", "Blue (Paraiba)", "Bi-colour"],
    transparency: "Transparent to translucent",
    birthstoneMonth: "October",
    commonTreatments: ["Heat treatment (common)", "Irradiation (some pink/red material)"],
    description:
      "A complex borosilicate mineral known for an exceptionally wide colour range, including bi-colour and watermelon varieties.",
    detail: {
      whatIsIt:
        "Tourmaline is a group of borosilicate minerals with a complex, variable chemistry, which is part of why it displays one of the widest colour ranges of any gemstone. A single crystal can even show multiple colours (bi-colour or 'watermelon' tourmaline, with pink core and green rim, or vice versa).",
      colorNotes:
        "Named varieties include rubellite (red to pink-red), indicolite (blue), verdelite (green), and Paraiba tourmaline (a vivid, copper-bearing blue-green first found in Brazil, now also found in parts of Africa). Paraiba-type material commands a significant premium due to its distinctive, saturated neon-like colour.",
      origins:
        "Tourmaline is mined in Brazil, Mozambique, Nigeria, Afghanistan, and Madagascar, among other localities, with specific colour varieties often associated with particular regions.",
      naturalVsSynthetic:
        "Synthetic tourmaline is not commercially significant in the gem trade, so most identification concerns involve confirming the specific tourmaline variety and any treatment rather than a natural-vs-synthetic question.",
      treatments:
        "Heat treatment is common to improve colour in some tourmaline, particularly to lighten overly dark material. Irradiation is used on some pink and red material. Treatment status should be confirmed rather than assumed, particularly for vivid colours.",
      inclusions:
        "Tourmaline often contains long, thread-like inclusions and occasional fractures; heavily included material is sometimes stabilized, though this is less standard than emerald oiling.",
      valueFactors: ["Colour (with Paraiba-type material commanding the highest premiums)", "Clarity", "Cut quality", "Carat weight", "Origin, for named varieties like Paraiba"],
      certification:
        "A laboratory report on tourmaline documents variety (e.g., rubellite, Paraiba-type), colour, clarity, weight, and treatment status; for Paraiba-type material, chemical testing to confirm the characteristic copper content is often part of the report.",
      care:
        "Tourmaline's hardness (7–7.5) makes it reasonably durable for jewellery use. Clean with mild soap and warm water, and avoid extreme heat or sudden temperature changes.",
    },
  },
  {
    slug: "aquamarine",
    name: "Aquamarine",
    category: "Semi-Precious",
    mineralFamily: "Beryl",
    chemicalFormula: "Be₃Al₂(SiO₃)₆",
    hardness: "7.5–8",
    crystalSystem: "Hexagonal",
    colors: ["Light blue", "Blue-green"],
    transparency: "Transparent",
    birthstoneMonth: "March",
    commonTreatments: ["Heat treatment (common, to remove green/yellow tones)"],
    description:
      "A pale blue to blue-green variety of beryl, generally free of visible inclusions compared to emerald.",
    detail: {
      whatIsIt:
        "Aquamarine is the blue to blue-green variety of beryl, coloured by trace iron. It shares its mineral family with emerald but forms without the chromium or vanadium that gives emerald its green colour.",
      colorNotes:
        "Aquamarine ranges from very pale blue to a deeper, more saturated blue; more intense colour is generally valued more highly, and much aquamarine on the market has been heat-treated to shift a naturally slightly greenish tone toward a purer blue.",
      origins:
        "Brazil is a major historic and current source, alongside significant production from Nigeria, Madagascar, and Pakistan.",
      naturalVsSynthetic:
        "Synthetic aquamarine exists but is not commercially significant in the market; most aquamarine sold is natural, with treatment status (heat) being the more relevant question for buyers.",
      treatments:
        "Heat treatment to remove greenish or yellowish undertones and produce a purer blue is standard practice and widely accepted; it is generally considered permanent and does not require ongoing disclosure at the point of sale in the same way fracture filling does, though reputable sellers still disclose it.",
      inclusions:
        "Aquamarine typically forms with fewer visible inclusions than emerald, and eye-clean material is relatively common, which is part of why oiling or resin filling is rarely needed.",
      valueFactors: ["Colour saturation (deeper blue generally more valuable)", "Clarity", "Cut quality", "Carat weight"],
      certification:
        "A laboratory report on aquamarine documents identity, weight, colour, clarity, and treatment status (typically confirming heat treatment or its absence).",
      care:
        "Aquamarine's hardness (7.5–8) and typically good clarity make it well suited to everyday wear, and it can usually be cleaned safely with mild soap, warm water, and even ultrasonic cleaning when free of significant fractures.",
    },
  },
  {
    slug: "topaz",
    name: "Topaz",
    category: "Semi-Precious",
    mineralFamily: "Topaz",
    chemicalFormula: "Al₂SiO₄(F,OH)₂",
    hardness: "8",
    crystalSystem: "Orthorhombic",
    colors: ["Colourless", "Blue", "Yellow", "Pink", "Imperial orange"],
    transparency: "Transparent",
    birthstoneMonth: "November (and December, blue)",
    commonTreatments: ["Irradiation and heat (most blue topaz)", "Coating (some exotic colours, e.g. 'mystic' topaz)"],
    description:
      "A silicate mineral available in a wide colour range; most blue topaz on the market is treated.",
    detail: {
      whatIsIt:
        "Topaz is a silicate mineral that occurs naturally in a range of colours, though most naturally colourless topaz is transformed into the blue topaz commonly seen in jewellery through treatment.",
      colorNotes:
        "Natural, untreated topaz is most often colourless, pale blue, or sherry-brown to golden ('Imperial' topaz, the most highly prized natural colour). The vivid, saturated blue seen in most commercial jewellery ('London', 'Swiss', or 'sky' blue topaz) is achieved through irradiation and heat treatment of colourless material.",
      origins:
        "Brazil is a major source of Imperial topaz, while colourless material used as treatment feedstock, along with naturally blue material, comes from various sources including Nigeria, Pakistan, and Sri Lanka.",
      naturalVsSynthetic:
        "Synthetic topaz is not commercially significant; the more relevant distinction for buyers is treated versus untreated colour rather than natural versus synthetic.",
      treatments:
        "The great majority of blue topaz on the market has been irradiated and heat-treated from colourless starting material — this is standard, disclosed, and generally accepted practice, and the resulting colour is considered stable. Some novelty colours (such as 'mystic' topaz) are produced by a thin surface coating, which is less durable and can wear over time.",
      inclusions:
        "Topaz typically forms with good clarity, and eye-clean stones are common, particularly in treated blue material.",
      valueFactors: ["Colour (untreated Imperial topaz commands the highest premiums)", "Clarity", "Cut quality", "Carat weight", "Treatment status"],
      certification:
        "A laboratory report on topaz documents identity, colour, clarity, and treatment status — an important distinction for buyers who want a natural-colour stone rather than treated blue topaz.",
      care:
        "Topaz has good hardness (8) but a distinct cleavage plane, meaning it can split cleanly if struck at the wrong angle, more so than similarly hard gems without cleavage. Clean with mild soap and warm water and avoid sharp impacts; coated 'mystic' varieties should avoid abrasive cleaning that could wear the coating.",
    },
  },
  {
    slug: "moonstone",
    name: "Moonstone",
    category: "Semi-Precious",
    mineralFamily: "Feldspar",
    chemicalFormula: "(K,Na)AlSi₃O₈",
    hardness: "6–6.5",
    crystalSystem: "Monoclinic",
    colors: ["White", "Grey", "Peach", "Rainbow"],
    transparency: "Translucent to semi-transparent",
    birthstoneMonth: "June",
    commonTreatments: ["Typically untreated"],
    description:
      "A feldspar known for adularescence, a floating light effect caused by internal structural layering.",
    detail: {
      whatIsIt:
        "Moonstone is a variety of feldspar (specifically orthoclase or a related potassium-sodium feldspar) known for adularescence — a soft, billowing sheen of light that appears to float below the surface as the stone is turned.",
      colorNotes:
        "Base body colour ranges from colourless to white, grey, or peach, with the adularescent sheen typically appearing blue-white on finer material and less distinct on lower grades. 'Rainbow moonstone' is a related, often more colourless-bodied labradorite-feldspar material valued for a broader flash of colour.",
      origins:
        "India and Sri Lanka are significant sources of moonstone, with additional material from Myanmar, Madagascar, and Tanzania.",
      naturalVsSynthetic:
        "Synthetic moonstone equivalents are not commercially significant; the main identification question is usually distinguishing true moonstone from other feldspars or glass imitations, which a gemologist can generally do with standard testing.",
      treatments:
        "Moonstone is typically sold untreated, since its value comes specifically from the natural adularescence effect, which treatment does not meaningfully enhance.",
      inclusions:
        "Moonstone can show a characteristic internal 'centipede' stress-fracture pattern in some material, along with the structural layering responsible for adularescence itself.",
      valueFactors: ["Strength and colour of the adularescent sheen", "Body colour and transparency", "Cut quality (typically cabochon)", "Carat weight"],
      certification:
        "Given its lower average value, moonstone is less commonly submitted for formal laboratory reports than precious stones, though a gemologist can confirm identity and natural origin on request.",
      care:
        "Moonstone's moderate hardness (6–6.5) and internal stress features make it more prone to chipping or cracking than harder gems, so it suits pendants and earrings somewhat better than everyday rings. Clean gently with mild soap and a soft cloth; avoid ultrasonic cleaning.",
    },
  },
];

export function getGemstoneBySlug(slug: string) {
  return gemstones.find((g) => g.slug === slug);
}
