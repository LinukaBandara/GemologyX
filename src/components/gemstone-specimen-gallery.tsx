"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, X } from "lucide-react";

type SpecimenImage = {
  src: string;
  alt: string;
  caption: string;
  credit: string;
  license: string;
  source: string;
};

const galleries: Record<string, { title: string; note: string; images: SpecimenImage[] }> = {
  sapphire: {
    title: "Sapphire crystals, up close",
    note: "These rough corundum crystals are from Montana, USA. Sapphire occurs in many colours; this collection illustrates natural crystal colour and form. It is not Sri Lankan material and does not demonstrate the origin of another stone.",
    images: [
      { src: "/images/gems/sapphire-crystals-montana-01.jpg", alt: "Rough blue, green and yellow sapphire crystals from Montana", caption: "A group of rough sapphire crystals (corundum) from the Missouri River deposit in Montana.", credit: "Smithsonian National Museum of Natural History · NMNH 177074", license: "CC0", source: "https://naturalhistory.si.edu/object/nmnhmineralsciences_14176990" },
      { src: "/images/gems/sapphire-crystals-montana-02.jpg", alt: "Closer view of rough sapphire crystals from Montana", caption: "A closer view of selected crystals from the same Montana collection.", credit: "Smithsonian National Museum of Natural History · NMNH 177074", license: "CC0", source: "https://naturalhistory.si.edu/object/nmnhmineralsciences_14176990" },
    ],
  },
  ruby: {
    title: "A ruby photograph, with its limits",
    note: "This Wikimedia Commons photograph is described by its contributor as a cut ruby with inclusions. It is an illustrative example only: a photograph cannot establish a particular stone’s identity, treatment, quality or origin.",
    images: [
      { src: "/images/gems/ruby-gem-inclusions.jpg", alt: "Faceted red gemstone with visible internal features, documented as a cut ruby photograph", caption: "Faceted red stone with visible internal features; the source record describes it as a cut ruby gemstone.", credit: "Humanfeather via Wikimedia Commons", license: "CC BY 3.0", source: "https://commons.wikimedia.org/wiki/File:Ruby_gem.JPG" },
    ],
  },
  emerald: {
    title: "Emerald in a faceted cut",
    note: "This open photograph shows a faceted green stone identified by the contributor as an emerald. It helps illustrate a cut and visible internal features; the image record does not document locality or treatment.",
    images: [
      { src: "/images/gems/emerald-cut-gem.jpg", alt: "Faceted green emerald photographed against a pale background", caption: "A faceted green stone described by the contributor as an emerald; no locality or treatment is recorded.", credit: "Gaumania via Wikimedia Commons", license: "CC0 1.0", source: "https://commons.wikimedia.org/wiki/File:Cut_Emerald.jpg" },
    ],
  },
  amethyst: {
    title: "Amethyst crystals",
    note: "This photograph shows an amethyst crystal group. The source record does not document a locality; it is used to illustrate crystal habit and colour, not to support a geographic-origin claim.",
    images: [
      { src: "/images/gems/amethyst-crystals.jpg", alt: "Cluster of purple amethyst crystals photographed close up", caption: "Amethyst crystals photographed by Lisa Ann Yount; the source record gives no locality.", credit: "Lisa Ann Yount via Wikimedia Commons", license: "CC0 1.0", source: "https://commons.wikimedia.org/wiki/File:Amethyst_crystals_close.jpg" },
    ],
  },
  tourmaline: {
    title: "Tourmaline on display",
    note: "The contributor describes this specimen as tourmaline from San Diego County, California, photographed at a county fair. That caption is the source record’s context, not a claim about any other tourmaline.",
    images: [
      { src: "/images/gems/tourmaline-san-diego.jpg", alt: "Tourmaline specimen photographed on display at a fair", caption: "Tourmaline from San Diego County, California, photographed on display at the San Diego County Fair, according to the source record.", credit: "Stickpen via Wikimedia Commons", license: "Public domain dedication", source: "https://commons.wikimedia.org/wiki/File:Tourmaline.jpg" },
    ],
  },
};

export function GemstoneSpecimenGallery({ slug, name }: { slug: string; name: string }) {
  const gallery = galleries[slug];
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!gallery || activeIndex === null) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight") setActiveIndex((current) => current === null ? null : (current + 1) % gallery.images.length);
      if (event.key === "ArrowLeft") setActiveIndex((current) => current === null ? null : (current + gallery.images.length - 1) % gallery.images.length);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, gallery]);

  if (!gallery) return null;

  return (
    <section className="mt-8 sm:mt-10" aria-labelledby={`${slug}-specimen-gallery-title`}>
      <div className="flex flex-wrap items-end justify-between gap-3 border-b border-border pb-4">
        <div>
          <p className="gx-eyebrow"><span /> SPECIMEN GALLERY</p>
          <h2 id={`${slug}-specimen-gallery-title`} className="mt-2 font-serif text-2xl font-semibold">{gallery.title}</h2>
        </div>
        <span className="rounded-full border border-border bg-white px-3 py-1.5 text-xs text-muted">{gallery.images.length} {gallery.images.length === 1 ? "image" : "images"} · {name}</span>
      </div>
      <p className="mt-4 max-w-3xl text-sm leading-6 text-muted">{gallery.note}</p>
      <div className={`mt-5 grid gap-4 ${gallery.images.length > 1 ? "sm:grid-cols-2" : "sm:grid-cols-[minmax(0,1fr)_minmax(220px,0.7fr)]"}`}>
        {gallery.images.map((image, index) => (
          <figure key={image.src} className="overflow-hidden rounded-2xl border border-border bg-white shadow-[0_10px_32px_rgba(15,28,46,0.05)]">
            <button type="button" onClick={() => setActiveIndex(index)} aria-label={`Enlarge image ${index + 1}: ${image.alt}`} className="group relative block aspect-[4/3] w-full overflow-hidden bg-[#f4f1eb] text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-accent">
              <Image src={image.src} alt={image.alt} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.025]" />
              <span className="absolute bottom-3 right-3 rounded-full bg-white/95 px-3 py-1.5 text-xs font-medium text-foreground shadow-sm">View larger</span>
            </button>
            <figcaption className="p-4">
              <p className="text-sm leading-6 text-foreground">{image.caption}</p>
              <p className="mt-2 text-xs leading-5 text-muted">{image.credit} · {image.license}</p>
            </figcaption>
          </figure>
        ))}
        {gallery.images.length === 1 && <aside className="flex flex-col justify-center rounded-2xl bg-[#173d52] p-6 text-white sm:p-8"><span className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-[#e6cc9f]">A careful look</span><p className="mt-3 font-serif text-xl leading-7">A specimen image can teach appearance. It cannot certify a gem.</p><a href={gallery.images[0].source} target="_blank" rel="noreferrer" className="mt-5 inline-flex min-h-11 items-center gap-2 self-start text-sm font-semibold text-white underline decoration-white/40 underline-offset-4">View original record <ExternalLink size={14} aria-hidden="true" /></a></aside>}
      </div>

      {activeIndex !== null && (
        <div role="dialog" aria-modal="true" aria-label={`${name} specimen image viewer`} className="fixed inset-0 z-[100] flex items-center justify-center bg-[#07111f]/95 p-4 md:p-10" onMouseDown={(event) => { if (event.target === event.currentTarget) setActiveIndex(null); }}>
          <button type="button" onClick={() => setActiveIndex(null)} aria-label="Close image viewer" className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"><X size={21} /></button>
          {gallery.images.length > 1 && <button type="button" onClick={() => setActiveIndex((activeIndex + gallery.images.length - 1) % gallery.images.length)} aria-label="Previous image" className="absolute left-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 md:left-8"><ChevronLeft size={24} /></button>}
          <div className="relative w-full max-w-5xl" onMouseDown={(event) => event.stopPropagation()}>
            <div className="relative aspect-[4/3] max-h-[75vh] w-full overflow-hidden rounded-xl bg-white/5"><Image src={gallery.images[activeIndex].src} alt={gallery.images[activeIndex].alt} fill sizes="90vw" className="object-contain" priority /></div>
            <div className="mt-4 flex flex-wrap items-start justify-between gap-3 text-white"><div><p className="text-sm leading-6">{gallery.images[activeIndex].caption}</p><p className="mt-1 text-xs text-white/65">{gallery.images[activeIndex].credit} · {gallery.images[activeIndex].license}{gallery.images.length > 1 ? " · Use arrow keys to browse" : ""}</p></div><a href={gallery.images[activeIndex].source} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-1 text-xs text-white/80 underline underline-offset-4">Source record <ExternalLink size={13} /></a><span className="text-xs text-white/60">{activeIndex + 1} / {gallery.images.length}</span></div>
          </div>
          {gallery.images.length > 1 && <button type="button" onClick={() => setActiveIndex((activeIndex + 1) % gallery.images.length)} aria-label="Next image" className="absolute right-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 md:right-8"><ChevronRight size={24} /></button>}
        </div>
      )}
    </section>
  );
}
