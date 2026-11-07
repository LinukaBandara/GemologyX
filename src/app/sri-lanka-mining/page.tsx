import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  FileCheck2,
  Gem,
  MapPin,
  Pickaxe,
  ShieldCheck,
  Waves,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sri Lanka Gemstone Mining: Regions, Methods & Responsible Practice",
  description:
    "Explore Sri Lanka's gem-mining heritage, major gem fields, traditional and mechanized methods, illam gravel, worker safety, environmental responsibility and official NGJA resources.",
  alternates: { canonical: "/sri-lanka-mining" },
};

const regions = [
  { name: "Ratnapura & Pelmadulla", area: "Sabaragamuwa", note: "A historic centre of Sri Lanka's gem trade and mining activity, including the wider Ratnapura gem fields." },
  { name: "Balangoda", area: "Sabaragamuwa", note: "Part of the wider gem-bearing region, with documented traditional and mechanized mining activity." },
  { name: "Eheliyagoda & Kuruwita", area: "Sabaragamuwa", note: "Established gem-producing localities within the traditional Ratnapura district fields." },
  { name: "Elahera", area: "Matale District", note: "An important gem-producing area beyond the south-western traditional fields." },
  { name: "Buttala & Okkampitiya", area: "Uva Province", note: "Gem-mining activity has also been documented around the upper Menik Ganga area." },
];

const methods = [
  { title: "Traditional pits and shafts", icon: Pickaxe, body: "Small-scale pit mining is closely associated with Sri Lanka's gem-mining heritage. Deposits, depth, ground conditions and water all vary by site; underground work carries serious hazards and requires competent oversight." },
  { title: "Tunnel workings", icon: ShieldCheck, body: "Some deposits are accessed through underground galleries. Ground stability, flooding, air quality and safe emergency access are critical concerns. This guide does not provide excavation instructions." },
  { title: "Alluvial and river-associated deposits", icon: Waves, body: "Water can transport and concentrate resistant mineral grains in sediment. Mining around waterways needs careful attention to riverbanks, sediment, habitats and site-specific permissions." },
  { title: "Mechanized operations", icon: FileCheck2, body: "Equipment may be used for certain deposits and operations. Mechanization can change the scale and footprint of disturbance; licensing and environmental conditions must be verified for each site." },
];

const imageCredits = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Gem_pit_shaft_seen_from_above%2C_Pelmadulla%2C_Sri_Lanka_%282026%29.jpg",
    alt: "Timber-lined shaft of an artisanal gem pit near Pelmadulla, viewed from above",
    title: "A traditional gem pit",
    caption: "A timber-lined shaft at an artisanal gem pit near Pelmadulla, Ratnapura District.",
    author: "Ilyes Makria / Joalys",
    file: "https://commons.wikimedia.org/wiki/File:Gem_pit_shaft_seen_from_above,_Pelmadulla,_Sri_Lanka_(2026).jpg",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Timbered_gallery_of_a_gem_pit%2C_Pelmadulla%2C_Sri_Lanka_%282026%29.jpg",
    alt: "Flooded timber-supported underground gallery at a gem pit near Pelmadulla",
    title: "Inside a mine gallery",
    caption: "A timber-supported gallery photographed at an artisanal gem pit near Pelmadulla.",
    author: "Ilyes Makria / Joalys",
    file: "https://commons.wikimedia.org/wiki/File:Timbered_gallery_of_a_gem_pit,_Pelmadulla,_Sri_Lanka_(2026).jpg",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/7/71/Hand-sorting_washed_gem_gravel%2C_Pelmadulla%2C_Sri_Lanka_%282026%29.jpg",
    alt: "Workers' hands sorting washed gem-bearing gravel near Pelmadulla",
    title: "Sorting gem-bearing gravel",
    caption: "Washed gem-bearing gravel being sorted by hand near Pelmadulla, Ratnapura District.",
    author: "Ilyes Makria / Joalys",
    file: "https://commons.wikimedia.org/wiki/File:Hand-sorting_washed_gem_gravel,_Pelmadulla,_Sri_Lanka_(2026).jpg",
  },
];

const officialSources = [
  { title: "NGJA — Gemstone mining industry", href: "https://ngja.gov.lk/gems/gemstone-mining-industry/", note: "Official background on Sri Lanka's gemstone mining sector and producing regions." },
  { title: "NGJA — Mining licence process", href: "https://ngja.gov.lk/business_services/minning-licence-process/", note: "Consult the authority's current published mining-licence procedure." },
  { title: "NGJA — Mining consultancy", href: "https://ngja.gov.lk/business_services/minning-consultancy/", note: "Official information about mining-related consultancy services." },
  { title: "NGJA — Export services procedure", href: "https://ngja.gov.lk/business_services/export-services-procedure/", note: "For readers following the wider mine-to-market chain." },
];

const researchSources = [
  { title: "Environmental effects of gemstone mining in Ratnapura", href: "https://journals.sjp.ac.lk/index.php/SLJRE/article/view/6355", note: "A Sri Lankan research paper examining impacts associated with selected mining methods and study locations." },
  { title: "Gem mining and the Kumbukkan Oya river environment", href: "https://journals.sjp.ac.lk/index.php/fesympo/article/view/7188", note: "Research discussing riverine environmental effects and rehabilitation considerations." },
  { title: "Sri Lanka: The Gem Island — GIA", href: "https://www.gia.edu/doc/Sri-Lanka-The-Gem-Island.pdf", note: "A gemological overview of Sri Lanka's deposits, mining and gem industry." },
];

const questions = [
  { q: "Where are Sri Lanka's best-known gem fields?", a: "The National Gem and Jewellery Authority identifies the Ratnapura district—including areas around Eheliyagoda, Kuruwita, Ratnapura, Pelmadulla, Balangoda, Kalawana and Rakwana—as a major traditional gem-producing region. Gem-bearing areas also extend to places such as Elahera and the Buttala–Okkampitiya area." },
  { q: "What does illam mean?", a: "Illam is the local term commonly used for gem-bearing gravel. It is a geological deposit rather than a gemstone species. Its composition and depth vary from place to place." },
  { q: "Can anyone begin mining on private land?", a: "Do not assume that land ownership alone authorizes mining. Requirements may apply to the activity and site. Check the current NGJA procedure and obtain confirmation from the relevant authorities before any work." },
  { q: "Can a gemstone's origin be confirmed by looking at it?", a: "Appearance alone cannot reliably prove geographic origin. Origin opinions require specialist gemological examination and depend on the available evidence." },
];

export default function SriLankaMiningPage() {
  return (
    <article className="gx-mining-page"><BreadcrumbJsonLd items={[{ name: "Home", url: "https://gemologyx.com" }, { name: "Sri Lanka Mining", url: "https://gemologyx.com/sri-lanka-mining" }]} />
      <div className="container-page max-w-6xl py-9 md:py-14">
        <nav className="luxury-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span>/</span><span>Sri Lanka Mining</span>
        </nav>

        <header className="gx-mining-intro">
          <div className="luxury-eyebrow"><span /> THE SRI LANKA FIELD GUIDE</div>
          <p className="gx-mining-overline">GEOLOGY · HERITAGE · RESPONSIBLE PRACTICE</p>
          <h1>Where the island&apos;s gemstones begin.</h1>
          <p className="gx-mining-lede">
            From the historic gem fields of Ratnapura to the deposits of Elahera and
            the Uva region, discover the landscapes, people, geology and questions
            behind Sri Lanka&apos;s gemstone-mining industry.
          </p>
          <div className="gx-mining-actions">
            <a className="luxury-button luxury-button-primary" href="#regions">Explore gem regions <ArrowRight size={16} /></a>
            <a className="luxury-button luxury-button-secondary" href="#official-resources">Official NGJA resources</a>
          </div>
          <div className="gx-mining-facts">
            <div><span>01</span><b>Gem fields</b><small>Key producing regions</small></div>
            <div><span>02</span><b>Mining methods</b><small>Traditional to mechanized</small></div>
            <div><span>03</span><b>Responsible practice</b><small>Safety and rehabilitation</small></div>
          </div>
        </header>

        <section className="gx-mining-section gx-mining-opening">
          <div>
            <p className="gx-mining-kicker">A LIVING INDUSTRY</p>
            <h2>A gem heritage shaped by geology and generations.</h2>
            <p>
              Sri Lanka&apos;s reputation for coloured gemstones is connected to ancient
              geological processes and a long-established network of miners, traders,
              cutters and jewellers. Mining is the first stage of a much wider journey:
              recovered material is sorted, traded, cut, sometimes treated, examined
              and eventually brought to market.
            </p>
            <p>
              The way a deposit is worked depends on its geology, depth, water conditions,
              land setting and applicable permissions. No single description can stand
              in for a site assessment.
            </p>
          </div>
          <aside className="gx-mining-note">
            <Gem size={22} />
            <span>GEMOLOGYX FIELD NOTE</span>
            <p>Gem-bearing gravel is commonly called <em>illam</em> in Sri Lanka. It is the host material from which gemstones may be recovered—not a gemstone itself.</p>
          </aside>
        </section>

        <section id="regions" className="gx-mining-section gx-mining-region-section">
          <div className="gx-mining-heading">
            <div><p className="gx-mining-kicker">THE ISLAND&apos;S GEM FIELDS</p><h2>Where gemstone mining takes place</h2></div>
            <p>Explore the best-known producing areas recognised in industry and geological references.</p>
          </div>
          <div className="gx-mining-regions">
            {regions.map((region, index) => (
              <div className="gx-mining-region" key={region.name}>
                <span className="gx-mining-region-number">0{index + 1}</span>
                <div><h3>{region.name}</h3><small><MapPin size={12} /> {region.area}</small><p>{region.note}</p></div>
              </div>
            ))}
          </div>
          <p className="gx-mining-source-line">Regional overview based on the <a href="https://ngja.gov.lk/gems/gemstone-mining-industry/" target="_blank" rel="noreferrer">National Gem and Jewellery Authority&apos;s industry information <ExternalLink size={12} /></a>.</p>
        </section>

        <section className="gx-mining-section">
          <div className="gx-mining-heading">
            <div><p className="gx-mining-kicker">A CLOSER LOOK</p><h2>Scenes from the gem fields</h2></div>
            <p>Documentary photographs from Pelmadulla, in the wider Ratnapura gem-producing region.</p>
          </div>
          <div className="gx-mining-gallery">
            {imageCredits.map((photo, index) => (
              <figure className="gx-mining-photo" key={photo.file}>
                <div className="gx-mining-photo-frame">
                  <Image src={photo.src} alt={photo.alt} fill unoptimized sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                  <span>0{index + 1}</span>
                </div>
                <figcaption><b>{photo.title}</b><p>{photo.caption}</p><small>Photo: {photo.author} · <a href={photo.file} target="_blank" rel="noreferrer">Image source & licence <ExternalLink size={11} /></a></small></figcaption>
              </figure>
            ))}
          </div>
          <p className="gx-mining-image-licence">
            Image licensing: all three photographs are published on Wikimedia Commons under
            Creative Commons Attribution–ShareAlike 4.0 International (CC BY-SA 4.0).
            They are shown without edits. Follow each image-source link for the original
            file record, attribution and licence terms.
          </p>
        </section>

        <section id="methods" className="gx-mining-section gx-mining-method-section">
          <div className="gx-mining-heading">
            <div><p className="gx-mining-kicker">HOW RECOVERY VARIES</p><h2>Four broad mining approaches</h2></div>
            <Link href="/sri-lanka-mining/methods">Read the methods guide <ArrowRight size={15} /></Link>
          </div>
          <div className="gx-mining-methods">
            {methods.map((method, index) => {
              const Icon = method.icon;
              return <div className="gx-mining-method" key={method.title}><span>0{index + 1}</span><Icon size={21} /><h3>{method.title}</h3><p>{method.body}</p></div>;
            })}
          </div>
        </section>

        <section className="gx-mining-section gx-mining-illam">
          <div><p className="gx-mining-kicker">UNDERSTANDING THE DEPOSIT</p><h2>What is illam?</h2></div>
          <div>
            <p>
              In Sri Lankan gem-mining terminology, <em>illam</em> refers to gem-bearing
              gravel. These deposits may occur in alluvial, eluvial or residual settings.
              Their composition reflects local geology and the processes that weather,
              move and concentrate mineral material over time.
            </p>
            <p>
              The presence of gravel does not guarantee that it contains gem-quality
              material. Deposit characteristics vary, and geological interpretation
              should be based on evidence from the relevant locality.
            </p>
            <a href="https://www.gia.edu/doc/Sri-Lanka-The-Gem-Island.pdf" target="_blank" rel="noreferrer">Explore GIA&apos;s Sri Lanka gem geology overview <ExternalLink size={14} /></a>
          </div>
        </section>

        <section className="gx-mining-section">
          <div className="gx-mining-heading"><div><p className="gx-mining-kicker">PEOPLE & RESPONSIBILITY</p><h2>Safety is part of the story</h2></div><ShieldCheck size={28} /></div>
          <div className="gx-mining-safety">
            <p>
              Mining can involve serious hazards, including unstable ground, water ingress,
              unsafe access, machinery and difficult emergency conditions. Personal
              protective equipment is only one layer of risk control; it cannot replace
              competent site assessment, safe systems of work and trained supervision.
            </p>
            <ul>
              <li>Are ground conditions and water-related risks assessed by competent people?</li>
              <li>Are safe access, exit and emergency arrangements in place?</li>
              <li>Are workers trained and able to communicate during an emergency?</li>
              <li>Are machinery movements and pedestrian areas managed safely?</li>
              <li>Are the required permissions and site-specific conditions confirmed?</li>
            </ul>
          </div>
          <p className="gx-mining-disclaimer">This is an educational awareness checklist, not a safety standard, mine inspection or instruction to enter an active mining site.</p>
        </section>

        <section className="gx-mining-section gx-mining-environment">
          <div><p className="gx-mining-kicker">LAND, WATER & REHABILITATION</p><h2>Mining responsibility continues after extraction.</h2></div>
          <div>
            <p>
              Research in Sri Lankan mining areas has examined issues such as exposed soil,
              erosion, sediment, water conditions, vegetation disturbance and riverbank
              changes. These are potential impacts reported in particular study settings;
              their severity should not be assumed to be the same at every mine.
            </p>
            <p>
              Rehabilitation needs to be planned for the actual site. Depending on the
              disturbance, it may involve stabilising land, managing drainage and spoil,
              restoring suitable vegetation and monitoring recovery over time. A single
              visible intervention does not prove that an ecosystem has fully recovered.
            </p>
            <Link href="/sri-lanka-mining/environment" className="luxury-button luxury-button-secondary">Explore environment & rehabilitation <ArrowRight size={15} /></Link>
          </div>
        </section>

        <section id="licensing" className="gx-mining-section gx-mining-licensing">
          <div><p className="gx-mining-kicker">BEFORE ANY MINING ACTIVITY</p><h2>Verify the current official process.</h2><p>Requirements depend on the proposed activity and location. Do not treat a general article as permission to mine.</p></div>
          <div className="gx-mining-licence-links">
            {officialSources.slice(0, 3).map((source) => <a key={source.href} href={source.href} target="_blank" rel="noreferrer"><span><b>{source.title}</b><small>{source.note}</small></span><ExternalLink size={16} /></a>)}
            <Link href="/sri-lanka-mining/licensing"><span><b>GemologyX licensing guide</b><small>Questions to verify before proceeding.</small></span><ArrowRight size={16} /></Link>
          </div>
        </section>

        <section className="gx-mining-section">
          <div className="gx-mining-heading"><div><p className="gx-mining-kicker">READ THE EVIDENCE</p><h2>Research & further reading</h2></div></div>
          <div className="gx-mining-research">
            {researchSources.map((source, index) => <a href={source.href} key={source.href} target="_blank" rel="noreferrer"><span>0{index + 1}</span><div><b>{source.title}</b><p>{source.note}</p></div><ExternalLink size={15} /></a>)}
          </div>
        </section>

        <section className="gx-mining-section gx-mining-faq">
          <div><p className="gx-mining-kicker">COMMON QUESTIONS</p><h2>Mining in Sri Lanka, explained.</h2></div>
          <div>{questions.map((item) => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div>
        </section>

        <section className="gx-mining-next">
          <div><p className="gx-mining-kicker">CONTINUE EXPLORING</p><h2>Follow the journey from mine to market.</h2><p>Discover Sri Lankan gemstone origins, sapphire science, reports and the wider trade.</p></div>
          <div>
            <Link href="/origins/sri-lanka">Sri Lanka gemstone origins <ArrowRight size={15} /></Link>
            <Link href="/learn/sapphire/what-is-ceylon-sapphire">Ceylon sapphire guide <ArrowRight size={15} /></Link>
            <Link href="/learn/gemstone-certification">Gemstone reports <ArrowRight size={15} /></Link>
            <Link href="/sri-lanka-trade-export">Trade & export guide <ArrowRight size={15} /></Link>
          </div>
        </section>

        <aside className="gx-mining-editorial-note">
          <b>Editorial note</b>
          <p>GemologyX provides general educational information. This page is not legal advice, a mine-safety standard, a site-specific environmental assessment or authorization to mine. Verify current requirements with NGJA and consult qualified professionals for site-specific decisions.</p>
        </aside>
      </div>
    </article>
  );
}
