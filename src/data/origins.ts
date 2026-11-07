export interface Origin {
  slug: string;
  name: string;
  summary: string;
  gemstones?: string[];
  image?: { src: string; alt: string; credit: string; source: string };
  sources: { label: string; url: string }[];
  detail?: {
    overview: string;
    geology: string;
    history: string;
    misconceptions: string;
  };
}

export const origins: Origin[] = [
  {
    slug: "sri-lanka",
    name: "Sri Lanka",
    summary: "A long-established gem-producing region, historically known as Ceylon.",,
    image: {"src":"https://commons.wikimedia.org/wiki/Special:FilePath/Sapphire_(gem_gravel_mine,_Ratnapura_area,_Sri_Lanka)_1_(34857678855).jpg","alt":"Blue sapphire crystal from gem gravels attributed to the Ratnapura area, Sri Lanka","credit":"James St. John · CC BY 2.0","source":"https://commons.wikimedia.org/wiki/File:Sapphire_(gem_gravel_mine,_Ratnapura_area,_Sri_Lanka)_1_(34857678855).jpg"}
    gemstones: ["Sapphire", "Ruby", "Alexandrite", "Spinel", "Garnet", "Tourmaline", "Cat's eye chrysoberyl"],
    detail: {
      overview:
        "Sri Lanka, historically known as Ceylon, has one of the longest continuous records of gemstone mining in the world. The island is best known for sapphire — including blue, yellow, and the pink-orange padparadscha variety — but also produces ruby, alexandrite, spinel, garnet, and other coloured gemstones. Much of the country's gem gravel is concentrated around Ratnapura and Balangoda in the southwest.",
      geology:
        "Sri Lanka's gem deposits are primarily secondary, meaning gems have eroded out of their original host rock over geological time and been redeposited in river gravels known as 'illam'. This alluvial setting is one reason artisanal, small-scale pit mining has remained viable and widespread alongside more mechanized operations.",
      history:
        "Sri Lanka's gem trade has documented roots stretching back over two thousand years, with historical accounts from travelers and traders referencing Ceylon gems for centuries. The country remains an important center for gem trading and lapidary work, alongside mining itself.",
      misconceptions:
        "It is a common misconception that a sapphire's fine quality or blue colour by itself proves Sri Lankan origin. Geographic origin is a laboratory determination based on trace-element and inclusion evidence, not something that can be read from a stone's appearance, and comparable material is also produced by other countries.",
    },
    sources: [
      { label: "National Gem and Jewellery Authority: Gemstone mining industry", url: "https://ngja.gov.lk/gems/gemstone-mining-industry/" },
      { label: "GIA: Sri Lanka, expedition to the Island of Jewels", url: "https://www.gia.edu/gems-gemology/fall-2014-sri-lanka-expedition-island-of-jewels" },
    ],
  },
  {
    slug: "madagascar",
    name: "Madagascar",
    summary: "A major modern source of sapphire, ruby and a wide range of coloured gemstones.",,
    image: {"src":"https://commons.wikimedia.org/wiki/Special:FilePath/Ilakaka-02.JPG","alt":"Gem prospectors at Ilakaka, Madagascar","credit":"Wayne77 · CC BY-SA 3.0","source":"https://commons.wikimedia.org/wiki/File:Ilakaka-02.JPG"}
    gemstones: ["Sapphire", "Ruby", "Tourmaline", "Garnet", "Aquamarine"],
    detail: {
      overview:
        "Madagascar has emerged since the 1990s as one of the world's most significant coloured gemstone sources, producing large volumes of sapphire (notably from the Ilakaka region), along with ruby, tourmaline, garnet, and other stones across multiple deposits.",
      geology:
        "Madagascar's gem deposits include both primary (in-place) sources and secondary alluvial gravels, reflecting the island's complex ancient geology, part of which shares a geological history with parts of East Africa and India from before continental drift separated them.",
      history:
        "While some Madagascar gem deposits were known earlier, the country's rise as a major supplier is comparatively recent, with the Ilakaka sapphire rush beginning in the late 1990s transforming the region into a globally significant source within a short period.",
      misconceptions:
        "Because Madagascar sapphire and ruby can closely resemble material from other origins in colour, buyers should not assume origin from appearance; a laboratory opinion is needed for a supportable origin claim.",
    },
    sources: [
      { label: "GIA: Ilakaka sapphire field report", url: "https://www.gia.edu/gia-news-research/sapphire-mines-ilakaka-madagascar-field-expedition" },
      { label: "GIA: Madagascar sapphire deposits and origin characteristics", url: "https://www.gia.edu/gems-gemology/winter-2019-blue-sapphire-geographic-origin-determination" },
    ],
  },
  {
    slug: "myanmar",
    name: "Myanmar",
    summary: "A historic source of ruby and jadeite, including the Mogok Valley.",,
    image: {"src":"https://commons.wikimedia.org/wiki/Special:FilePath/Mogok_Township.jpg","alt":"Mogok, a historic ruby and sapphire-producing region in Myanmar","credit":"JimmyWinMGK · Wikimedia Commons","source":"https://commons.wikimedia.org/wiki/File:Mogok_Township.jpg"}
    gemstones: ["Ruby", "Sapphire", "Spinel", "Jadeite"],
    detail: {
      overview:
        "Myanmar (Burma) is historically the world's most renowned source of fine ruby, particularly from the Mogok Valley, alongside sapphire, spinel, and jadeite. Mogok ruby has long been associated with an intense red colour sometimes described in the trade as 'pigeon's blood.'",
      geology:
        "Mogok's ruby and spinel occur in marble-hosted deposits, a geological setting that tends to produce the chromium-rich, fluorescent red colour Myanmar ruby is known for, distinct from the iron-rich basaltic settings found in some other ruby-producing regions.",
      history:
        "Gem mining in the Mogok Valley has documented history stretching back centuries, and Myanmar ruby has held a prominent position in gem markets and royal collections historically. Sourcing from Myanmar has periodically been affected by international sanctions and trade restrictions tied to the country's political situation, which buyers should be aware of when considering supply chain and legal import questions.",
      misconceptions:
        "Not all fine-coloured ruby is from Myanmar, and Myanmar-quality colour can occur in material from other origins — colour alone is not proof of origin, and current legal/import restrictions on Myanmar-origin gems vary by country and should be checked independently.",
    },
    sources: [
      { label: "GIA: The Rubies of Burma and the Mogok Stone Tract", url: "https://www.gia.edu/gems-gemology/winter-1983-ruby-mogok-keller" },
      { label: "GIA: Blue sapphires from Mogok, Myanmar", url: "https://www.gia.edu/gems-gemology/winter-2021-blue-sapphires-from-mogok-myanmar-gemological-review" },
    ],
  },
  {
    slug: "kashmir",
    name: "Kashmir",
    summary: "Source of a historic, now largely depleted sapphire deposit prized for its velvety blue colour.",,
    image: {"src":"https://commons.wikimedia.org/wiki/Special:FilePath/Corundum-256940.jpg","alt":"Sapphire crystal specimen","credit":"Wikimedia Commons · locality identified as Ratnapura, Sri Lanka","source":"https://commons.wikimedia.org/wiki/File:Corundum-256940.jpg"}
    gemstones: ["Sapphire"],
    detail: {
      overview:
        "Kashmir sapphire comes from a deposit in the Himalayan region discovered in the late 19th century, prized for a distinctive soft, velvety, intensely saturated blue often described in the trade as 'cornflower' blue. The original deposit was largely exhausted within a few decades of its discovery.",
      geology:
        "The Kashmir deposit's sapphire formed in a metamorphic setting at high altitude, and its scarcity today stems from the deposit's small size and remote, difficult-to-access location, rather than any inherent geological rarity of sapphire itself.",
      history:
        "Kashmir sapphire's brief major mining period (roughly the 1880s to 1930s) means genuine Kashmir-origin stones are now rare on the market and often carry significant premiums when accompanied by a laboratory origin report.",
      misconceptions:
        "Because 'Kashmir blue' has become a descriptive colour term in the trade, sellers sometimes use it loosely to describe sapphire from other origins with a similar colour. A colour description is not the same as a verified Kashmir origin, which requires laboratory confirmation.",
    },
    sources: [
      { label: "GIA: Historical reading list on Kashmir sapphires", url: "https://www.gia.edu/reading-list-kashmir-sapphires" },
      { label: "GIA: New sapphire material from Kashmir", url: "https://www.gia.edu/gems-gemology/spring-2024-gemnews-new-sapphire-material-from-kashmir" },
    ],
  },
  {
    slug: "colombia",
    name: "Colombia",
    summary: "The leading historical source of fine emerald, particularly from the Muzo and Chivor regions.",,
    image: {"src":"https://commons.wikimedia.org/wiki/Special:FilePath/Emerald_crystal_muzo_colombia.jpg","alt":"Emerald crystal from Muzo, Colombia","credit":"M.M. · CC BY-SA 3.0","source":"https://commons.wikimedia.org/wiki/File:Emerald_crystal_muzo_colombia.jpg"}
    gemstones: ["Emerald"],
    detail: {
      overview:
        "Colombia has been the world's most prominent source of fine emerald for centuries, with the Muzo and Chivor mining districts historically producing much of the material considered the benchmark for emerald colour and quality.",
      geology:
        "Colombian emerald forms in a distinctive sedimentary (rather than the more typical igneous or metamorphic) geological setting, involving hydrothermal fluids interacting with black shale — a formation process that differs from most other emerald sources worldwide.",
      history:
        "Emerald mining in Colombia predates European contact, with pre-Columbian cultures valuing the stone; Spanish colonization in the 16th century brought Colombian emerald into global trade, and the country has remained a leading source ever since.",
      misconceptions:
        "While Colombian emerald is often considered a benchmark for fine colour, quality varies considerably by individual stone, and fine emerald is also produced by Zambia, Brazil, and other countries — origin alone does not guarantee quality.",
    },
    sources: [
      { label: "GIA: Geology of corundum and emerald gem deposits", url: "https://www.gia.edu/gems-gemology/winter-2019-geology-of-corundum-and-emerald-gem-deposits" },
      { label: "GIA: Colombian emerald industry and geology", url: "https://www.gia.edu/gems-gemology/fall-2017-colombian-emerald-industry" },
    ],
  },
  {
    slug: "tanzania",
    name: "Tanzania",
    summary: "Source of tanzanite as well as ruby, sapphire, tsavorite garnet and spinel.",,
    image: {"src":"https://commons.wikimedia.org/wiki/Special:FilePath/Zoïsite_(Tanzanite).jpg","alt":"Rough and cut tanzanite from the Merelani Hills, Tanzania","credit":"Didier Descouens · CC BY 3.0","source":"https://commons.wikimedia.org/wiki/File:Zoïsite_(Tanzanite).jpg"}
    gemstones: ["Tanzanite", "Ruby", "Sapphire", "Tsavorite garnet", "Spinel"],
    detail: {
      overview:
        "Tanzania is the sole commercial source of tanzanite, a blue-to-violet variety of the mineral zoisite discovered near Mount Kilimanjaro in 1967, and also produces ruby, sapphire, tsavorite garnet, and spinel from various deposits.",
      geology:
        "Tanzanite occurs in a single, geologically limited deposit area (the Merelani Hills), which is part of why the material is considered finite in a more literal sense than most gemstones — no other significant tanzanite deposit has been found elsewhere in the world to date.",
      history:
        "Tanzanite entered the international market in the late 1960s and gained significant recognition after being marketed under its trade name by a major jewellery retailer in the following years, becoming one of the most commercially successful gemstone introductions of the 20th century.",
      misconceptions:
        "Because tanzanite comes from a single deposit area, origin claims are less contested than for widely distributed stones like sapphire — the more relevant buyer questions for tanzanite involve colour treatment (most tanzanite is heat-treated) rather than origin verification.",
    },
    sources: [
      { label: "GIA: Tanzanite description and Merelani source", url: "https://www.gia.edu/tanzanite-description" },
      { label: "GIA: Tanzanite birthstone history", url: "https://www.gia.edu/birthstones/december-birthstones" },
    ],
  },
  {
    slug: "mozambique",
    name: "Mozambique",
    summary: "A significant modern ruby-producing country, alongside other coloured gemstones.",,
    image: {"src":"https://commons.wikimedia.org/wiki/Special:FilePath/Montepuez_(4872098500).jpg","alt":"Landscape in the Montepuez area of Mozambique","credit":"Wikimedia Commons · see source file for licence","source":"https://commons.wikimedia.org/wiki/File:Montepuez_(4872098500).jpg"}
    gemstones: ["Ruby", "Sapphire", "Tourmaline", "Garnet"],
    detail: {
      overview:
        "Mozambique has become one of the world's most important ruby sources since major deposits were identified in the Montepuez region in the early 2010s, now supplying a substantial share of global ruby production alongside other coloured gemstones.",
      geology:
        "Mozambique's ruby deposits occur in a geological belt related to the same Mozambique orogenic belt associated with gem deposits in Madagascar and parts of East Africa, reflecting shared ancient geological history across the region.",
      history:
        "Mozambique's rise as a major ruby source is comparatively recent, dating primarily to the discovery and development of the Montepuez deposits starting around 2009, which significantly increased global ruby supply within a short period.",
      misconceptions:
        "Mozambique ruby quality spans a wide range from commercial to fine gem grade — origin alone does not indicate quality, and material from Mozambique can closely resemble ruby from Myanmar or other sources without laboratory testing.",
    },
    sources: [
      { label: "GIA: A decade of ruby from Mozambique", url: "https://www.gia.edu/gems-gemology/summer-2019-decade-of-ruby-from-mozambique" },
      { label: "GIA: Mozambique ruby discovery and geology", url: "https://www.gia.edu/doc/GG-SP15-Hsu-Mozambique.pdf" },
    ],
  },
  {
    slug: "brazil",
    name: "Brazil",
    summary: "A major source of aquamarine, tourmaline, topaz, and other coloured gemstones.",,
    image: {"src":"https://commons.wikimedia.org/wiki/Special:FilePath/Topaze_Brésil.jpg","alt":"Imperial topaz from Ouro Preto, Minas Gerais, Brazil","credit":"Wikimedia Commons · see source file for licence","source":"https://commons.wikimedia.org/wiki/File:Topaze_Brésil.jpg"}
    gemstones: ["Aquamarine", "Tourmaline", "Topaz", "Emerald", "Amethyst"],
    detail: {
      overview:
        "Brazil is one of the world's most prolific and diverse gemstone-producing countries, historically and currently supplying substantial quantities of aquamarine, tourmaline (including the copper-bearing Paraiba variety, first found there), Imperial topaz, emerald, and amethyst, among others.",
      geology:
        "Brazil's gemstone wealth stems from extensive pegmatite deposits, particularly in Minas Gerais state, which are geologically favorable for forming beryl-group minerals (aquamarine, emerald) and tourmaline in large, often well-formed crystals.",
      history:
        "Gemstone mining in Brazil has a long history dating back to colonial-era discoveries, and the country remains a major center for both mining and gemstone cutting, with Minas Gerais in particular closely associated with the gem trade.",
      misconceptions:
        "Not all copper-bearing blue-green tourmaline is 'Paraiba' in the strict trade sense — laboratory chemical analysis, not just colour or general Brazilian origin, is used to determine whether material meets the specific criteria associated with the Paraiba name.",
    },
    sources: [
      { label: "GIA: Paraíba tourmaline geographic origin determination", url: "https://www.gia.edu/gems-gemology/winter-2019-paraiba-tourmaline-geographic-origin-determination" },
      { label: "GIA: Pegmatite areas mined for gem minerals", url: "https://www.gia.edu/doc/summer-2025-gems-gemology-v2.pdf" },
    ],
  },
  {
    slug: "australia",
    name: "Australia",
    summary: "Known for sapphire and for its black and boulder opal fields.",,
    image: {"src":"https://commons.wikimedia.org/wiki/Special:FilePath/Opalenoire.jpg","alt":"Black opal from Lightning Ridge, New South Wales, Australia","credit":"Didier Descouens · see source file for licence","source":"https://commons.wikimedia.org/wiki/File:Opalenoire.jpg"}
    gemstones: ["Sapphire", "Opal"],
    detail: {
      overview:
        "Australia is a significant sapphire producer and a major source of precious opal, including black opal from Lightning Ridge and boulder opal from fields in Queensland.",
      geology:
        "Australian sapphire typically forms in basaltic volcanic settings, which tends to produce darker blue and green-blue tones compared to the metamorphic settings associated with some other sapphire sources. Australian opal forms in sedimentary rock through a slow silica deposition process in ancient groundwater basins.",
      history:
        "Opal mining in Australia dates back to the late 19th century, and the country has remained the dominant global source ever since; sapphire mining developed as a significant industry through the 20th century.",
      misconceptions:
        "Australian sapphire's typically darker tones are sometimes assumed to be lower quality by default, but darker, ink-blue sapphire is prized by some buyers specifically for that character — 'quality' in coloured stones is often about matching stone to preference rather than a single universal ranking.",
    },
    sources: [
      { label: "GIA: Australia opal fields expedition", url: "https://www.gia.edu/gia-news-research/australia-opal-fields-expedition" },
      { label: "GIA: Sapphire geographic origin determination", url: "https://www.gia.edu/gems-gemology/winter-2019-blue-sapphire-geographic-origin-determination" },
    ],
  },
];

export function getOriginBySlug(slug: string) {
  return origins.find((o) => o.slug === slug);
}
