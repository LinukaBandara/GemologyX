import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Gem, Scale, ScanEye, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "Gem Industry Tools & Equipment",
  description:
    "Explore the instruments, workshop tools and equipment used by gemmologists, gemstone dealers, cutters and jewellery professionals.",
  alternates: { canonical: "/equipment" },
};

const equipment = [
  {
    name: "10× jeweller’s loupe",
    group: "Inspection & handling",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a0/A_jeweller%27s_loupe.jpg",
    alt: "A folding jeweller’s loupe held open in a hand",
    description: "A compact magnifier used to examine facet junctions, surface features, inclusions and signs that deserve closer investigation.",
    use: "First-look inspection",
    credit: "Billjones94",
    source: "https://commons.wikimedia.org/wiki/File:A_jeweller%27s_loupe.jpg",
    license: "CC BY-SA 4.0",
  },
  {
    name: "Gemstone tweezers",
    group: "Inspection & handling",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/09/Tweezers_with_rose_cut_diamond_1.jpg",
    alt: "A rose-cut diamond held carefully between metal gemstone tweezers",
    description: "Fine-tipped tweezers help hold and orient small loose stones during inspection. Choose a suitable tip and handle gems gently to avoid slipping or damage.",
    use: "Stone handling",
    credit: "W.carter",
    source: "https://commons.wikimedia.org/wiki/File:Tweezers_with_rose_cut_diamond_1.jpg",
    license: "CC BY-SA 4.0",
  },
  {
    name: "Jeweller’s balance scale",
    group: "Measurement & weighing",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Modern_collapsible_balance_scale_for_jewellers_1.jpg",
    alt: "A traditional jeweller’s balance scale with metal pans and a fitted weight set",
    description: "A balance is used to compare mass. Modern gem businesses commonly use calibrated electronic balances with suitable readability and capacity for the stones being weighed.",
    use: "Mass measurement",
    credit: "W.carter",
    source: "https://commons.wikimedia.org/wiki/File:Modern_collapsible_balance_scale_for_jewellers_1.jpg",
    license: "CC BY-SA 4.0",
  },
  {
    name: "Gemstone refractometer",
    group: "Laboratory testing",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/50/Gemref604.jpg",
    alt: "A gemological refractometer used for gemstone refractive-index testing",
    description: "A gem refractometer is used to measure refractive index and, where applicable, help assess optical character. Readings depend on instrument range, contact technique and the stone’s accessible surface.",
    use: "Refractive-index testing",
    credit: "A.KRÜSS Optronic GmbH",
    source: "https://commons.wikimedia.org/wiki/File:Gemref604.jpg",
    license: "CC BY-SA 3.0 Germany",
  },
  {
    name: "Gemological microscope",
    group: "Laboratory testing",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Gemmological_microscopic_examination.jpg",
    alt: "A pink sapphire being examined with a gemological microscope",
    description: "Microscopic examination helps a trained observer study inclusions, growth features, surface-reaching fractures and other characteristics that may support an identification or treatment assessment.",
    use: "Inclusion examination",
    credit: "Sara Abey",
    source: "https://commons.wikimedia.org/wiki/File:Gemmological_microscopic_examination.jpg",
    license: "CC BY-SA 4.0",
  },
  {
    name: "Gem measurement caliper",
    group: "Measurement & weighing",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/76/Measuring_a_diamond_%281%29.JPG",
    alt: "A small diamond being measured with a jeweller’s caliper",
    description: "A gem caliper records dimensions such as length, width and depth. Careful, light contact helps avoid slipping or applying unnecessary pressure to a delicate stone.",
    use: "Dimensional measurement",
    credit: "Mauro Cateb",
    source: "https://commons.wikimedia.org/wiki/File:Measuring_a_diamond_(1).JPG",
    license: "CC BY-SA 3.0",
  },
  {
    name: "Jewellery torch & soldering setup",
    group: "Workshop & fabrication",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Jewellery_soldering_equipment.jpg",
    alt: "Jewellery workshop soldering equipment including a small torch and hand tools",
    description: "Jewellery torches are used by trained bench professionals for controlled heating and metalwork. Torch selection depends on the metal, task, fuel system and workshop safety setup.",
    use: "Bench fabrication",
    credit: "Mauro Cateb",
    source: "https://commons.wikimedia.org/wiki/File:Jewellery_soldering_equipment.jpg",
    license: "CC BY-SA 3.0",
  },
  {
    name: "Gem cutting & polishing lap",
    group: "Workshop & fabrication",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Gem_cutting_on_a_lap_wheel%2C_Gintota%2C_Sri_Lanka_%282026%29.jpg",
    alt: "A Sri Lankan gem cutter working a stone against a rotating lap wheel",
    description: "A lap wheel supports grinding and polishing stages in lapidary work. The lap, abrasive, speed and process are selected for the material and the stage of cutting.",
    use: "Lapidary cutting",
    credit: "Ilyes Makria / Joalys",
    source: "https://commons.wikimedia.org/wiki/File:Gem_cutting_on_a_lap_wheel,_Gintota,_Sri_Lanka_(2026).jpg",
    license: "CC BY-SA 4.0",
  },
  {
    name: "Dichroscope optical diagram",
    group: "Laboratory testing",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Dichroskop.png",
    alt: "Technical cross-section diagram of a dichroscope optical instrument",
    description: "A dichroscope presents two directional colour views side by side. It helps an examiner investigate pleochroism, but a diagram is shown here rather than a photograph of a modern handheld instrument.",
    use: "Pleochroism examination",
    credit: "Ra'ike",
    source: "https://commons.wikimedia.org/wiki/File:Dichroskop.png",
    license: "CC BY-SA 3.0",
  },
  {
    name: "UV examination lamp",
    group: "Laboratory testing",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/67/UV-lamp.jpg",
    alt: "A UV lamp emitting ultraviolet light during an examination",
    description: "A UV lamp is used to observe fluorescence responses under specified long-wave or short-wave ultraviolet illumination. The lamp shown is a general UV source, not a calibrated gem-testing model.",
    use: "Fluorescence observation",
    credit: "Tarvo Metspalu",
    source: "https://commons.wikimedia.org/wiki/File:UV-lamp.jpg",
    license: "CC BY-SA 3.0",
  },
  {
    name: "Direct-vision spectroscope",
    group: "Laboratory testing",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Direct_vision_spectroscope%2C_J._G._Hofmann%2C_Paris%2C_before_1871_-_Museu_da_Ci%C3%AAncia_da_Universidade_de_Coimbra_-_University_of_Coimbra_-_Coimbra%2C_Portugal_-_DSC09081.jpg",
    alt: "Historical direct-vision spectroscope on a museum display stand",
    description: "A spectroscope separates light into a spectrum so an examiner can study absorption features. This is a historical optical instrument displayed as a reference, not a current handheld gem spectroscope.",
    use: "Spectral examination",
    credit: "Daderot",
    source: "https://commons.wikimedia.org/wiki/File:Direct_vision_spectroscope,_J._G._Hofmann,_Paris,_before_1871_-_Museu_da_Ci%C3%AAncia_da_Universidade_de_Coimbra_-_University_of_Coimbra_-_Coimbra,_Portugal_-_DSC09081.jpg",
    license: "CC0 1.0",
  },
];

const referenceInstruments = [
  { name: "Polariscope", detail: "A key optical instrument for examining strain and optical character; a verified reusable image is still being sourced.", icon: ScanEye },
  { name: "Specific-gravity kit", detail: "A gem-suitable hydrostatic balance setup; unrelated industrial hydrostatic testers are deliberately not shown as gem equipment.", icon: Scale },
  { name: "Stone papers, trays & holders", detail: "Help organise, protect and handle loose gemstones during trade and examination.", icon: Wrench },
];

export default function EquipmentPage() {
  return (
    <main className="container-page py-9 md:py-14">
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-muted">
        <Link href="/tools" className="hover:text-accent">Tools & instruments</Link>
        <span>/</span>
        <span aria-current="page" className="text-foreground">Industry equipment</span>
      </nav>

      <header className="relative mt-7 overflow-hidden border-b border-border pb-9 md:mt-10 md:pb-12">
        <div className="gx-eyebrow"><span /> The working gem trade</div>
        <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">A visual field guide to the tools of the industry</p>
        <h1 className="mt-3 max-w-3xl font-serif text-4xl font-medium leading-[1.02] tracking-tight text-foreground md:text-6xl">
          The instruments<br className="hidden sm:block" /> behind every stone.
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-muted md:text-base">
          Explore the everyday equipment used to inspect, measure, handle, cut and work with gemstones.
          From a simple loupe to specialist laboratory instruments, each tool has a specific purpose and limitations.
        </p>
        <div className="mt-7 flex flex-wrap gap-5 text-xs text-muted">
          <span className="inline-flex items-center gap-2"><Gem size={15} className="text-[var(--gold)]" /> Gem trade essentials</span>
          <span className="inline-flex items-center gap-2"><Wrench size={15} className="text-[var(--gold)]" /> Workshop equipment</span>
          <span>Photographic references with credits</span>
        </div>
      </header>

      <section className="pt-9 md:pt-12" aria-labelledby="equipment-gallery">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Explore by photograph</p>
            <h2 id="equipment-gallery" className="mt-2 font-serif text-2xl font-medium text-foreground md:text-3xl">Tools of the trade</h2>
          </div>
          <p className="max-w-sm text-xs leading-5 text-muted">Select a category to understand what the equipment does and where it fits into professional work.</p>
        </div>

        <div className="gx-equipment-grid mt-6 grid gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
          {equipment.map((item, index) => (
            <article key={item.name} className="group flex min-w-0 flex-col border border-border bg-[var(--surface)]">
              <div className="relative aspect-[5/4] overflow-hidden bg-[#eee9e1]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                />
                <span className="absolute left-3 top-3 bg-[var(--surface)]/95 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-accent">{item.group}</span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--gold)]">0{index + 1} / Equipment</span>
                <h3 className="mt-2 font-serif text-xl font-medium text-foreground">{item.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-muted">{item.description}</p>
                <p className="mt-4 border-t border-border pt-3 text-[10px] font-medium uppercase tracking-[0.12em] text-muted">{item.use}</p>
                <p className="mt-3 text-[10px] leading-5 text-muted">
                  Image: {item.credit} · {item.license} · <a href={item.source} target="_blank" rel="noreferrer" className="underline decoration-[var(--gold)] underline-offset-2 hover:text-accent">Original image & licence</a>
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14 grid gap-6 border-y border-border py-9 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-12" aria-labelledby="fluorescence-example">
        <div className="relative aspect-[16/10] overflow-hidden bg-[#17151b]">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Fluorite_fluorescence.jpg"
            alt="Fluorite specimen photographed in visible light and under ultraviolet illumination"
            fill
            unoptimized
            sizes="(max-width: 768px) 100vw, 55vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">An example of observation</p>
          <h2 id="fluorescence-example" className="mt-2 font-serif text-2xl font-medium text-foreground md:text-3xl">Fluorescence under UV</h2>
          <p className="mt-3 text-sm leading-6 text-muted">This fluorite specimen shows visible colour zoning alongside its response under ultraviolet illumination. Fluorescence varies by material, trace elements, wavelength and specimen history; it is not a stand-alone identity test.</p>
          <p className="mt-4 text-[10px] leading-5 text-muted">Image: Masha Milshina · CC BY 4.0 · <a href="https://commons.wikimedia.org/wiki/File:Fluorite_fluorescence.jpg" target="_blank" rel="noreferrer" className="underline decoration-[var(--gold)] underline-offset-2 hover:text-accent">Original image & licence</a></p>
        </div>
      </section>

      <section className="mt-14 border-y border-border py-9 md:mt-16 md:py-11" aria-labelledby="lab-instruments">
        <div className="max-w-2xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Next photo collection</p>
          <h2 id="lab-instruments" className="mt-2 font-serif text-2xl font-medium text-foreground md:text-3xl">More instruments to document</h2>
          <p className="mt-3 text-sm leading-6 text-muted">We are expanding this section with the same photo-first approach. Each additional instrument will get its own real photograph, verified source credit and practical explanation before it is added to the main gallery.</p>
        </div>
        <div className="mt-6 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
          {referenceInstruments.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.name} className="flex gap-3 border-t border-border py-4">
                <span className="mt-0.5 text-[var(--gold)]"><Icon size={18} strokeWidth={1.5} /></span>
                <div>
                  <h3 className="font-serif text-base font-medium text-foreground">{item.name}</h3>
                  <p className="mt-1 text-xs leading-5 text-muted">{item.detail}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <aside className="mt-8 border border-border bg-[var(--surface)] p-5 md:p-7">
        <p className="font-serif text-xl font-medium text-foreground">Equipment is only as useful as the method behind it.</p>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-muted">This guide is educational, not a buying endorsement or a substitute for instrument manuals and professional training. Torch work, cutting machinery, chemicals and laboratory equipment require appropriate training and safety procedures.</p>
        <div className="mt-5 flex flex-wrap gap-4">
          <Link href="/tools" className="inline-flex min-h-11 items-center gap-2 text-xs font-semibold text-accent hover:underline"><ArrowLeft size={14} /> Back to calculators</Link>
          <Link href="/learn" className="inline-flex min-h-11 items-center gap-2 text-xs font-semibold text-accent hover:underline">Explore learning guides <ArrowUpRight size={14} /></Link>
        </div>
      </aside>
    </main>
  );
}
