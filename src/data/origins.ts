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
    summary: "A long-established gem-producing region, historically known as Ceylon.",
    image: {"src":"https://commons.wikimedia.org/wiki/Special:FilePath/Gem_pit_shaft_seen_from_above,_Pelmadulla,_Sri_Lanka_(2026).jpg","alt":"Timber-lined artisanal gem-mine shaft near Pelmadulla, Ratnapura District, Sri Lanka","credit":"Ilyes Makria / Joalys · CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Gem_pit_shaft_seen_from_above,_Pelmadulla,_Sri_Lanka_(2026).jpg"},
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
    summary: "A major modern source of sapphire, ruby and a wide range of coloured gemstones.",
    image: {"src":"https://commons.wikimedia.org/wiki/Special:FilePath/Ilakaka-02.JPG","alt":"Gem prospectors at Ilakaka, Madagascar","credit":"Wayne77 · CC BY-SA 3.0","source":"https://commons.wikimedia.org/wiki/File:Ilakaka-02.JPG"},
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
    summary: "A historic source of ruby and jadeite, including the Mogok Valley.",
    image: {"src":"https://commons.wikimedia.org/wiki/Special:FilePath/Mogok_Township.jpg","alt":"Mogok, a historic ruby and sapphire-producing region in Myanmar","credit":"JimmyWinMGK · CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Mogok_Township.jpg"},
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
    summary: "Source of a historic, now largely depleted sapphire deposit prized for its velvety blue colour.",
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
    summary: "The leading historical source of fine emerald, particularly from the Muzo and Chivor regions.",
    image: {"src":"https://commons.wikimedia.org/wiki/Special:FilePath/B%C3%A9ryl_var._%C3%A9meraude_sur_gangue_(Muzo_Mine_Boyaca_-_Colombie).jpg","alt":"Emerald-bearing beryl crystals in matrix from the Muzo Mine, Colombia","credit":"Géry PARENT · CC0 1.0","source":"https://commons.wikimedia.org/wiki/File:B%C3%A9ryl_var._%C3%A9meraude_sur_gangue_(Muzo_Mine_Boyaca_-_Colombie).jpg"},
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
    summary: "Source of tanzanite as well as ruby, sapphire, tsavorite garnet and spinel.",
    image: {"src":"https://commons.wikimedia.org/wiki/Special:FilePath/Preparing_to_go_down_the_mineshaft_to_search_for_Tanzanite.jpg","alt":"Miners preparing to descend a mineshaft in Tanzania in search of tanzanite","credit":"Africraigs · CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Preparing_to_go_down_the_mineshaft_to_search_for_Tanzanite.jpg"},
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
    summary: "A significant modern ruby-producing country, alongside other coloured gemstones.",
    image: {"src":"https://commons.wikimedia.org/wiki/Special:FilePath/Corindon_var._saphir_(44_mm)_(Mozambique)_1.JPG","alt":"Sapphire corundum crystals from Mozambique","credit":"Géry PARENT · CC BY-SA 3.0","source":"https://commons.wikimedia.org/wiki/File:Corindon_var._saphir_(44_mm)_(Mozambique)_1.JPG"},
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
    summary: "A major source of aquamarine, tourmaline, topaz, and other coloured gemstones.",
    image: {"src":"https://commons.wikimedia.org/wiki/Special:FilePath/Tourmaline-121182.jpg","alt":"Vivid pink rubellite tourmaline from the Santa Rosa Mine, Minas Gerais, Brazil","credit":"Géry PARENT · CC BY-SA 3.0","source":"https://commons.wikimedia.org/wiki/File:Tourmaline-121182.jpg"},
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
    summary: "Known for sapphire and for its black and boulder opal fields.",
    image: {"src":"https://commons.wikimedia.org/wiki/Special:FilePath/Smoko_in_the_mine.jpg","alt":"An opal miner taking a break inside a mine at Lightning Ridge, home of Australian black opal","credit":"Shane Aurousseau · CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Smoko_in_the_mine.jpg"},
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
  {
    slug: "thailand",
    name: "Thailand",
    summary: "A major global centre for ruby and sapphire trading, treatment and cutting, especially around Chanthaburi and Bangkok.",
    image: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Thai_Gem_Cutting.jpg", alt: "Thai commercial gemstone cutting and lapidary work", credit: "Joethon · Public domain", source: "https://commons.wikimedia.org/wiki/File:Thai_Gem_Cutting.jpg" },
    gemstones: ["Ruby", "Blue sapphire", "Yellow sapphire", "Spinel"],
    detail: {
      overview: "Thailand is internationally important not only for its own gemstone deposits but also as a trading, treatment and cutting centre. Chanthaburi has a long association with ruby and sapphire, while Bangkok is a major hub for the international coloured-stone trade.",
      geology: "Ruby and sapphire deposits in eastern Thailand are associated with basalt-related gem fields in provinces including Chanthaburi and Trat. The wider Thai-Cambodian border region has historically produced corundum, although production and mining activity have changed over time.",
      history: "Chanthaburi developed as a renowned gem market after ruby and sapphire discoveries in the region. Thai expertise in heat treatment, cutting and trading helped establish the country as a central meeting point for the global coloured-gem industry.",
      misconceptions: "A gemstone sold, cut or treated in Thailand is not necessarily mined there. Trade location, treatment location and geological origin are separate facts and should not be confused."
    },
    sources: [
      { label: "GIA: Gemstone geographic origin research", url: "https://www.gia.edu/gems-gemology" },
      { label: "Chanthaburi Gem Market background", url: "https://www.travelfish.org/sight_profile/thailand/eastern_thailand/chanthaburi/chanthaburi/1601" }
    ]
  },
  {
    slug: "zambia",
    name: "Zambia",
    summary: "One of the world's best-known emerald sources, particularly the Kafubu and Kagem mining district.",
    image: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Beryl-Quartz-279095.jpg", alt: "Emerald crystals in quartz matrix from the Kagem Emerald Mine, Zambia", credit: "Rob Lavinsky / iRocks.com · CC BY-SA 3.0", source: "https://commons.wikimedia.org/wiki/File:Beryl-Quartz-279095.jpg" },
    gemstones: ["Emerald", "Amethyst", "Aquamarine", "Tourmaline"],
    detail: {
      overview: "Zambia is a major modern source of emerald, with the Kafubu Emerald District and Kagem Emerald Mine among its best-known producing areas. Zambian emeralds are an important part of the international market.",
      geology: "The Kafubu emerald deposits occur in a complex metamorphic setting where beryllium-bearing fluids interacted with chromium- and vanadium-bearing rocks, creating conditions for emerald formation.",
      history: "Commercial emerald production in the Kafubu area expanded during the late twentieth century, and Zambia became one of the leading sources of emerald on the world market.",
      misconceptions: "Zambian emeralds are not automatically darker or better than emeralds from other origins. Colour, clarity, treatment, cut and individual quality vary substantially from stone to stone."
    },
    sources: [
      { label: "GIA: Emerald sources and geographic origin", url: "https://www.gia.edu/emerald" },
      { label: "Kagem Emerald Mine specimens", url: "https://commons.wikimedia.org/wiki/Category:Kagem_Emerald_Mine" }
    ]
  },
  {
    slug: "india",
    name: "India",
    summary: "A historic gemstone source and a major cutting, jewellery-making and trading centre, with Jaipur especially prominent.",
    image: { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Jaipur-Edelsteinschleiferei-01-2018-gje.jpg", alt: "Gemstone grinding in a workshop in Jaipur, India", credit: "Gerd Eichmann · CC BY 4.0", source: "https://commons.wikimedia.org/wiki/File:Jaipur-Edelsteinschleiferei-01-2018-gje.jpg" },
    gemstones: ["Ruby", "Sapphire", "Emerald", "Diamond", "Moonstone", "Garnet"],
    detail: {
      overview: "India has a long gemstone and jewellery history and remains a major centre for gemstone cutting, processing, jewellery manufacture and trade. Jaipur is especially well known for coloured-stone cutting and trading.",
      geology: "India has varied gem-bearing geological regions, including historic diamond fields and deposits of garnet, beryl varieties, corundum and other gemstones. Kashmir is a historic sapphire-producing region in the northwestern Himalaya.",
      history: "Gemstones have been part of Indian craft, adornment and trade for millennia. Jaipur developed into a major coloured-gem processing and trading centre, connecting rough stones with international jewellery markets.",
      misconceptions: "A gemstone cut or traded in Jaipur is not necessarily mined in India. Cutting centre, seller location and geological origin must be distinguished."
    },
    sources: [
      { label: "GIA: Gemstones and geographic origin resources", url: "https://www.gia.edu/gemstones" },
      { label: "Gemstone cutting in Jaipur", url: "https://commons.wikimedia.org/wiki/Category:Gemstone_cutting_in_Jaipur" }
    ]
  },
];

export function getOriginBySlug(slug: string) {
  return origins.find((o) => o.slug === slug);
}
