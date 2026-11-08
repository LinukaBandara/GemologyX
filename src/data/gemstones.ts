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
    formation?: string;
    naturalVsSynthetic: string;
    treatments: string;
    inclusions: string;
    valueFactors: string[];
    certification: string;
    care: string;
    faqs?: { question: string; answer: string }[];
  };
  sources?: { label: string; url: string }[];
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
      formation:
        "Sapphire crystallizes as corundum in primary magmatic or metamorphic geological settings. Weathering and erosion can later release crystals from their host rocks and concentrate them in secondary deposits, including alluvial placers such as those found in Sri Lanka. The conditions and trace elements present during crystal growth influence its colour and inclusions.",
      naturalVsSynthetic:
        "Synthetic sapphire has the same chemical composition and crystal structure as natural sapphire but is grown in a laboratory. Common methods include flame fusion and flux growth; growth time depends on the method, and some flux-grown crystals can take many months or up to a year. Laboratory growth is distinct from the geological processes that form natural sapphire. Synthetic sapphire is common in industrial applications (such as watch crystals) as well as in some jewellery, and should always be disclosed as synthetic when sold. Distinguishing natural from synthetic material generally requires examination by a trained gemologist using magnification and, in some cases, advanced laboratory equipment — it is not reliably done by eye.",
      treatments:
        "Heat treatment is a common and generally accepted sapphire enhancement when accurately disclosed. GIA notes that many sapphires on the market have undergone treatment, but prevalence varies by source and material. Less common treatments include beryllium diffusion, which introduces colour-causing elements into corundum. Fracture filling is much less common in sapphire than in ruby and can substantially change durability. Treatment status affects value; read a laboratory report within its stated findings and scope.",
      inclusions:
        "Inclusions are internal features — such as mineral crystals, fingerprint-like fluid networks, or growth lines — that formed as the crystal grew. In sapphire, inclusions can help a gemologist distinguish natural from synthetic material and can sometimes support an origin opinion. Fine silk-like rutile inclusions, when abundant and properly oriented, can also produce the star effect seen in star sapphires.",
      valueFactors: ["Colour saturation and hue", "Clarity", "Cut quality and proportions", "Carat weight", "Treatment status", "Origin, where determinable"],
      certification:
        "A laboratory report from a recognized gemological laboratory typically documents a sapphire's identity, weight and measurements, colour, clarity characteristics, and treatment status, and may offer an origin opinion where the evidence supports one. Reports vary in scope and rigor between laboratories, so it is worth understanding which laboratory issued a given report and what that laboratory does and does not attempt to determine.",
      care:
        "Sapphire's hardness (9 on the Mohs scale) and lack of cleavage make it suitable for regular jewellery wear, though it can still chip under impact. GIA says ultrasonic and steam cleaning are usually safe for untreated, heat-treated and lattice-diffusion-treated sapphire. Fracture-filled, cavity-filled or dyed material should be cleaned only with a damp cloth. If treatment is unknown, ask a jeweller or gemological laboratory before using heat or vibration; warm soapy water is a gentle option for stones with compatible treatments.",
      faqs: [
        { question: "Does a blue colour prove that a sapphire came from Sri Lanka?", answer: "No. Sapphires from different localities can look similar, and Sri Lankan origin cannot be established from colour or a trade name alone. A laboratory may offer an origin opinion when evidence and service scope allow." },
        { question: "Can every sapphire be cleaned in an ultrasonic cleaner?", answer: "No. Fracture-filled stones and stones with vulnerable inclusions or other treatments may be damaged by vibration or heat. When treatment is unknown, use mild soap, lukewarm water and a soft brush, or ask a jeweller familiar with the stone." },
      ],
    },
    sources: [{ label: "GIA — Sapphire and Corundum", url: "https://www.gia.edu/sapphire/buyers-guide" }, { label: "GIA — Sapphire Quality Factors", url: "https://www.gia.edu/sapphire-quality-factor" }, { label: "GIA — Synthetic Gem Materials and Growth Methods", url: "https://www.gia.edu/gem-synthetic" }, { label: "GIA — Geology of Corundum and Emerald Gem Deposits", url: "https://www.gia.edu/gems-gemology/winter-2019-geology-of-corundum-and-emerald-gem-deposits" }, { label: "GIA — Sapphire Care and Cleaning", url: "https://www.gia.edu/sapphire-care-cleaning" }],
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
      formation:
        "Ruby forms as chromium-bearing corundum in geological environments where aluminium-rich rocks are exposed to suitable pressure, temperature, and chemistry. Weathering can release crystals into secondary alluvial deposits.",
      naturalVsSynthetic:
        "Synthetic ruby has been produced since the early 1900s, initially by flame-fusion methods, and is widely used in both jewellery and industrial applications. Reliably distinguishing natural from synthetic ruby generally requires a gemologist's examination under magnification, and sometimes advanced laboratory testing.",
      treatments:
        "GIA advises buyers to assume ruby has been heat-treated unless an identification report says otherwise. Lower-quality material may have surface-reaching fractures filled with high-lead-content glass to make it appear more transparent. This is a common but less durable treatment; glass can be affected by solvents and other chemicals. Ask for treatment disclosure and read any report within its stated findings and scope.",
      inclusions:
        "Natural ruby commonly contains rutile silk, mineral crystals, and healed fracture patterns that formed during growth. These inclusions can assist a gemologist in confirming natural origin and, in some cases, supporting a geographic origin opinion.",
      valueFactors: ["Colour saturation and hue", "Clarity", "Cut quality", "Carat weight", "Treatment status", "Origin, where determinable"],
      certification:
        "A report from a recognized gemological laboratory typically documents identity, weight, colour, clarity characteristics, and treatment status, including whether the stone has been heated or glass-filled, which materially affects value.",
      care:
        "Ruby's hardness (9 on the Mohs scale) and lack of cleavage make untreated and heat-treated material durable for regular wear. GIA says fracture-filled, cavity-filled or dyed material should be cleaned only with a damp cloth; warm soapy water is usually safe, and ultrasonic or steam cleaning is usually safe for untreated, heat-treated and lattice-diffusion-treated stones. If the treatment is unknown, check before cleaning or repairing the gem.",
      faqs: [
        { question: "Are ruby and sapphire the same mineral?", answer: "Both are varieties of corundum. Red corundum is called ruby; other corundum colours are generally called sapphire. Trace elements influence the colour." },
        { question: "Is a glass-filled ruby as durable as an untreated ruby?", answer: "No. Lead-glass filling can make a fractured ruby more vulnerable to heat, chemicals, abrasion and cleaning methods. Treatment disclosure and gentle care are essential." },
      ],
    },
    sources: [{ label: "GIA — Ruby Buyers Guide", url: "https://www.gia.edu/ruby/buyers-guide" }, { label: "GIA — The Royal Ruby", url: "https://www.gia.edu/royal-ruby" }, { label: "GIA — Ruby Care and Cleaning", url: "https://www.gia.edu/ruby-care-cleaning" }, { label: "GIA — Corundum", url: "https://www.gia.edu/gia-gem-corundum" }],
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
      formation:
        "Emerald forms when beryllium-bearing fluids or rocks interact with chromium- or vanadium-bearing host rocks. This unusual chemical combination helps explain why emerald deposits are comparatively uncommon.",
      naturalVsSynthetic:
        "Synthetic emerald, grown by flux or hydrothermal methods, has existed commercially since the mid-20th century. Distinguishing natural from synthetic emerald generally requires gemological examination, often aided by characteristic inclusion patterns that differ between natural and lab-grown material.",
      treatments:
        "Many natural emeralds undergo clarity enhancement by filling surface-reaching fractures with oils, waxes or resins. Filler type and amount vary, and fillers can be changed or mixed. A laboratory report may describe the degree of filling and, depending on the laboratory and service, may identify the filler type. Read the specific report for its findings and limits; do not assume it identifies every substance present.",
      inclusions:
        "Emerald is well known for visible inclusions, sometimes poetically called 'jardin' (French for garden). These inclusions are considered a normal characteristic of the material rather than automatically a defect, though excessive fracturing can affect durability.",
      valueFactors: ["Colour saturation and hue", "Clarity and degree of visible inclusions", "Cut quality", "Carat weight", "Treatment (oil/resin) extent", "Origin, where determinable"],
      certification:
        "A laboratory report may document emerald identity and the degree of clarity enhancement; some services also report a filler category or type. Reporting varies by laboratory and service, and filler materials can be mixed, altered or difficult to identify, so read the report's stated scope rather than assuming the filler is fully characterized.",
      care:
        "Emerald has a Mohs hardness of 7.5–8 and fair-to-good toughness, but existing fractures and fillers call for extra care. GIA warns that ultrasonic vibration can weaken fractured stones and hot steam can cause oil or unhardened resin to seep from fractures. Use warm soapy water with gentle cleaning; avoid ultrasonic and steam cleaners, heat, and harsh chemicals, especially when the treatment is unknown.",
      faqs: [
        { question: "Are visible inclusions unusual in emerald?", answer: "No. Emeralds commonly contain visible internal features, often called jardin. Their position and effect on transparency and durability matter; inclusions alone do not determine whether a stone is natural or valuable." },
        { question: "Can I use steam or ultrasonic cleaning on an emerald?", answer: "Avoid both. Heat and vibration can damage emeralds, especially when fractures contain oil or resin. Use mild soap, lukewarm water and a soft cloth, and ask a jeweller before cleaning a mounted stone." },
      ],
    },
    sources: [{ label: "GIA — Emerald Buyers Guide", url: "https://www.gia.edu/emerald/buyers-guide" }, { label: "GIA — Emerald Care and Cleaning", url: "https://www.gia.edu/emerald-care-cleaning" }, { label: "GIA — Emerald Report Filler Identification", url: "https://www.gia.edu/gia-news-press/gia-enhances-emerald-reports" }, { label: "GIA — Emerald", url: "https://www.gia.edu/emerald" }],
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
      formation:
        "Spinel crystallizes in a range of geological settings, including marble-related deposits and gem-bearing gravels. Its cubic crystal structure differs from the trigonal structure of corundum.",
      naturalVsSynthetic:
        "Synthetic spinel is inexpensive to produce and widely used in costume jewellery and as a diamond simulant in some contexts. It is generally straightforward for a gemologist to distinguish from natural spinel using standard gemological testing.",
      treatments:
        "Spinel is rarely treated, but heat treatment has been documented in natural material. Ask about any known enhancement and use an independent report when treatment status matters; it should not be inferred from appearance alone.",
      inclusions:
        "Natural spinel often contains octahedral mineral inclusions and can show fine needle-like inclusions in some material. These features assist gemologists in confirming natural origin.",
      valueFactors: ["Colour saturation and hue", "Clarity", "Cut quality", "Carat weight", "Rarity of colour (e.g., vivid blue)"],
      certification:
        "A laboratory report for spinel documents identity, weight, colour, and clarity, and confirms treatment status — most often confirming the stone is untreated.",
      care:
        "Spinel is durable enough for rings and other jewellery worn regularly. GIA describes warm soapy water as safe; fracture-filled material should be cleaned only with warm soapy water, and an unknown treatment or significant fracture is a reason to avoid ultrasonic cleaning until the stone has been assessed.",
      faqs: [
        { question: "Is spinel just another name for ruby?", answer: "No. Spinel is a separate mineral species. Some historic red stones once called ruby were later identified as spinel, but modern gemological identification distinguishes them." },
        { question: "Is spinel usually treated?", answer: "Much spinel is sold without treatment, but that should not be assumed for an individual stone. Request disclosure and an independent report when the distinction matters to your purchase." },
      ],
    },
    sources: [{ label: "GIA — Spinel Description", url: "https://www.gia.edu/spinel-description" }, { label: "GIA — Spinel Buyers Guide", url: "https://www.gia.edu/spinel/buyers-guide" }, { label: "GIA — Distinguishing Heated from Unheated Natural Spinels", url: "https://www.gia.edu/doc/distinguishing-heated-spinels-from-unheated-natural-spinels.pdf" }, { label: "GIA — Spinel", url: "https://www.gia.edu/spinel" }],
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
      formation:
        "Alexandrite is chromium-bearing chrysoberyl formed in unusual geological settings where beryllium-rich and chromium-rich materials meet. It is later recovered from host rocks or secondary gravels.",
      naturalVsSynthetic:
        "Synthetic colour-change corundum and synthetic alexandrite-like materials exist and are sometimes mistaken for natural alexandrite by non-specialists. Laboratory testing can reliably distinguish natural alexandrite chrysoberyl from synthetic substitutes.",
      treatments:
        "Alexandrite is rarely treated, but some stones may contain fractures or have undergone enhancement. Treatment status should be determined from appropriate gemological examination, not from the colour-change effect or an attractive appearance alone.",
      inclusions:
        "Inclusions in natural alexandrite can include fine needle-like or fingerprint-type features that help confirm natural origin and separate it from synthetic material.",
      valueFactors: ["Strength and completeness of the colour change", "Colour saturation in each lighting condition", "Clarity", "Cut quality", "Carat weight"],
      certification:
        "A laboratory report for alexandrite confirms species identity (chrysoberyl) and documents the colour change observed under standardized lighting, along with clarity and treatment status.",
      care:
        "Alexandrite is durable and suitable for rings and other mountings subject to regular wear. GIA says warm soapy water is safe; because fractures may be filled, only warm soapy water should be used on fracture-filled material. Ask about the stone's treatment before choosing ultrasonic or steam cleaning.",
      faqs: [
        { question: "Why does alexandrite change colour?", answer: "Its chromium-bearing chrysoberyl absorbs light in an unusual way. The balance of wavelengths in daylight and incandescent light makes the stone appear different colours; the effect is not simply pleochroism." },
        { question: "Can a laboratory confirm that a stone is alexandrite?", answer: "A gemological laboratory can identify the material and assess its colour change. Other gems and laboratory-grown materials can imitate the effect, so appearance alone is not conclusive." },
      ],
    },
    sources: [{ label: "GIA — Alexandrite Buyers Guide", url: "https://www.gia.edu/alexandrite/buyers-guide" }, { label: "GIA — Alexandrite Description", url: "https://www.gia.edu/alexandrite-description" }, { label: "GIA — Alexandrite", url: "https://www.gia.edu/alexandrite" }],
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
      formation:
        "Garnet species form in a variety of geological environments, especially metamorphic rocks. The host-rock chemistry helps determine which garnet species and colours develop.",
      naturalVsSynthetic:
        "Synthetic garnet analogues (such as YAG and GGG, used mainly in lasers and as diamond simulants) exist but are chemically and structurally distinct from natural garnet species, making them straightforward to distinguish with standard gemological testing.",
      treatments:
        "Garnets are not commonly treated, although fracture filling is used on rare occasions. Ask the seller about any known enhancement and do not assume treatment status from appearance alone.",
      inclusions:
        "Inclusion patterns vary significantly by garnet species; demantoid, for example, is well known for distinctive 'horsetail' inclusions that can support identification.",
      valueFactors: ["Species and colour rarity (e.g., demantoid, tsavorite)", "Colour saturation", "Clarity", "Cut quality", "Carat weight"],
      certification:
        "A laboratory report identifies the specific garnet species (not just 'garnet' generically), along with weight, colour, and clarity — species identification matters because value varies enormously between common red garnet and rare green varieties.",
      care:
        "Garnet hardness varies by species, roughly 6.5–7.5 on the Mohs scale, and GIA describes the group as having fair-to-good toughness. Warm soapy water is safe for cleaning; ultrasonic cleaning is usually safe except for stones with fractures, while steam cleaning is not recommended. Fracture-filled garnet should be cleaned only with warm soapy water, and the stone should be protected from hard blows.",
      faqs: [
        { question: "Is garnet one mineral species?", answer: "No. Garnet is a group of related silicate minerals. Species and varieties differ in composition, colour, properties and market value, so a report that names the species is more useful than a generic label." },
        { question: "Are all garnets red?", answer: "No. Garnets occur in red, orange, green, purple and other colours. Colour depends on the garnet species and its chemistry." },
      ],
    },
    sources: [{ label: "GIA — Garnet Buyers Guide", url: "https://www.gia.edu/garnet/buyers-guide" }, { label: "GIA — Garnet Care and Cleaning", url: "https://www.gia.edu/garnet-care-cleaning" }, { label: "GIA — Garnet", url: "https://www.gia.edu/garnet" }],
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
    commonTreatments: ["Heat treatment (some material)", "Irradiation (some pink or red material)"],
    description:
      "A complex borosilicate mineral known for an exceptionally wide colour range, including bi-colour and watermelon varieties.",
    detail: {
      whatIsIt:
        "Tourmaline is a group of borosilicate minerals with a complex, variable chemistry, which is part of why it displays one of the widest colour ranges of any gemstone. A single crystal can even show multiple colours (bi-colour or 'watermelon' tourmaline, with pink core and green rim, or vice versa).",
      colorNotes:
        "Named varieties include rubellite (red to pink-red), indicolite (blue), verdelite (green), and Paraiba tourmaline (a vivid, copper-bearing blue-green first found in Brazil, now also found in parts of Africa). Paraiba-type material commands a significant premium due to its distinctive, saturated neon-like colour.",
      origins:
        "Tourmaline is mined in Brazil, Mozambique, Nigeria, Afghanistan, and Madagascar, among other localities, with specific colour varieties often associated with particular regions.",
      formation:
        "Tourmaline commonly crystallizes in chemically evolved igneous rocks such as pegmatites, and also occurs in metamorphic settings. Its complex chemistry allows a broad range of colours.",
      naturalVsSynthetic:
        "Synthetic tourmaline is not commercially significant in the gem trade, so most identification concerns involve confirming the specific tourmaline variety and any treatment rather than a natural-vs-synthetic question.",
      treatments:
        "Some tourmaline is heat-treated to change colour, and some pink or red material is irradiated. GIA notes that irradiation-related colour can fade with heat or bright light; ask the seller about known treatments and follow care advice for the individual stone.",
      inclusions:
        "Tourmaline often contains long, thread-like inclusions and occasional fractures; heavily included material is sometimes stabilized, though this is less standard than emerald oiling.",
      valueFactors: ["Colour (with Paraiba-type material commanding the highest premiums)", "Clarity", "Cut quality", "Carat weight", "Origin, for named varieties like Paraiba"],
      certification:
        "A laboratory report on tourmaline documents variety (e.g., rubellite, Paraiba-type), colour, clarity, weight, and treatment status; for Paraiba-type material, chemical testing to confirm the characteristic copper content is often part of the report.",
      care:
        "Tourmaline measures 7–7.5 on the Mohs scale, but its toughness is rated fair. Warm soapy water is the recommended cleaning method; avoid ultrasonic and steam cleaners. Heat can damage tourmaline, sudden temperature changes can cause fractures, and irradiation-related colour may fade in heat or bright light.",
      faqs: [
        { question: "Does tourmaline occur in just one colour?", answer: "No. Tourmaline is a group of related mineral species found in a wide range of colours. A colour name by itself does not establish species, treatment or locality." },
        { question: "Is tourmaline safe for everyday jewellery?", answer: "Many tourmalines are suitable for regular wear, but hardness does not prevent chipping. Setting, fractures, treatment and how the jewellery is worn all affect durability." },
      ],
    },
    sources: [{ label: "GIA — Tourmaline Buyer's Guide and Care", url: "https://www.gia.edu/tourmaline/buyers-guide" }, { label: "GIA — Tourmaline Care and Cleaning", url: "https://www.gia.edu/tourmaline-care-cleaning" }, { label: "GIA — Tourmaline Description", url: "https://www.gia.edu/tourmaline-description" }],
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
      formation:
        "Aquamarine forms as iron-bearing beryl, commonly in granitic pegmatites where crystals can grow in open cavities. Geological conditions and trace iron influence its blue to blue-green colour.",
      naturalVsSynthetic:
        "Synthetic aquamarine exists but is not commercially significant in the market; most aquamarine sold is natural, with treatment status (heat) being the more relevant question for buyers.",
      treatments:
        "Heat treatment may be used to reduce greenish or yellowish undertones and produce a purer blue. Buyers should ask for clear written disclosure of known treatments and review any laboratory report; disclosure requirements and trade practices vary by market and jurisdiction.",
      inclusions:
        "Aquamarine typically forms with fewer visible inclusions than emerald, and eye-clean material is relatively common, which is part of why oiling or resin filling is rarely needed.",
      valueFactors: ["Colour saturation (deeper blue generally more valuable)", "Clarity", "Cut quality", "Carat weight"],
      certification:
        "A laboratory report on aquamarine documents identity, weight, colour, clarity, and treatment status (typically confirming heat treatment or its absence).",
      care:
        "Aquamarine measures 7.5–8 on the Mohs scale. For routine care, use lukewarm water, mild soap and a soft brush or cloth, after checking for damage or vulnerable settings. Ultrasonic or steam cleaning may be suitable for some stones but should be avoided when fractures, liquid inclusions, filling or other vulnerabilities are present; when uncertain, choose gentle hand cleaning and ask a jeweller.",
      faqs: [
        { question: "Is aquamarine related to emerald?", answer: "Yes. Both are varieties of beryl. Aquamarine is blue to blue-green, while emerald is green and coloured by chromium and/or vanadium." },
        { question: "Can I assume a blue aquamarine is untreated?", answer: "No. Heat treatment is used on some aquamarine to reduce greenish tones. Ask the seller to disclose known treatment and consult a report when it matters." },
      ],
    },
    sources: [{ label: "GIA — Aquamarine Buyer's Guide and Care", url: "https://www.gia.edu/aquamarine/buyers-guide" }, { label: "GIA — Aquamarine Care and Cleaning", url: "https://www.gia.edu/aquamarine-care-cleaning" }, { label: "GIA — Aquamarine", url: "https://www.gia.edu/gia-website/aquamarine" }],
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
      formation:
        "Topaz typically forms in fluorine-rich igneous environments, including cavities in granites and rhyolites. It may also be recovered from weathered deposits.",
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
        "Topaz measures 8 on the Mohs scale, but cleavage makes it vulnerable to breakage from sharp impacts or sudden temperature changes. Clean with warm soapy water; avoid steam and ultrasonic cleaners. Coated 'mystic' topaz should be cleaned only with mild soap because abrasive cleaners can wear away the surface coating.",
      faqs: [
        { question: "Is most blue topaz naturally blue?", answer: "Much of the blue topaz sold today has been treated from colourless or pale material. Treatment cannot reliably be determined from appearance alone, so ask for disclosure." },
        { question: "Why can a hard topaz still chip or split?", answer: "Mohs hardness describes resistance to scratching, not resistance to impact. Topaz has cleavage and can break when struck or exposed to stress in a vulnerable direction." },
      ],
    },
    sources: [{ label: "GIA — Topaz Buyer's Guide and Care", url: "https://www.gia.edu/gia-website/topaz/buyers-guide" }, { label: "GIA — Topaz Care and Cleaning", url: "https://www.gia.edu/topaz-care-cleaning" }],
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
      formation:
        "Moonstone is feldspar with closely intergrown layers of different feldspar compositions. Light scattering from these internal layers creates the characteristic floating sheen known as adularescence.",
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
        "Moonstone measures 6–6.5 on the Mohs scale and has poor toughness with two cleavage directions, so a hard blow can chip or break it. Warm soapy water is the recommended cleaning method; never use ultrasonic or steam cleaners. High heat or sudden temperature changes can also cause breaks, so protective settings and gentler wear are sensible for rings.",
      faqs: [
        { question: "What creates the glow in moonstone?", answer: "Light scattering within intergrown feldspar layers creates adularescence, the soft sheen that appears to move across the stone as it is tilted." },
        { question: "Is moonstone durable enough for a ring?", answer: "It can be worn in a ring with care, but its moderate hardness and cleavage make it more vulnerable to scratches and impact than sapphire. A protective setting and gentle wear help reduce damage." },
      ],
    },
    sources: [{ label: "GIA Moonstone Buyer's Guide", url: "https://www.gia.edu/moonstone/buyers-guide" }, { label: "GIA Moonstone Care and Cleaning", url: "https://www.gia.edu/moonstone-care-cleaning" }, { label: "GIA Moonstone: A Gem to Celebrate the Moon", url: "https://4cs.gia.edu/en-us/blog/moonstone-a-gem-to-celebrate-the-moon/" }, { label: "GIA Moonstone Description", url: "https://www.gia.edu/moonstone-description" }],
  },
];

export function getGemstoneBySlug(slug: string) {
  return gemstones.find((g) => g.slug === slug);
}
