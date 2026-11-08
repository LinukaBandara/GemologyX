"use client";

import { useMemo, useState } from "react";
import { Info, RotateCcw } from "lucide-react";
import { ToolShell } from "@/components/tool-shell";

const HUES = [
  { name: "Red", color: "#a51e3c", note: "Ruby and red spinel are familiar examples; hue alone does not establish identity." },
  { name: "Orange", color: "#d87528", note: "Orange can occur in sapphire, garnet, zircon and other gem materials." },
  { name: "Yellow", color: "#d7b33d", note: "Yellow sapphire, chrysoberyl and citrine illustrate different materials with yellow appearances." },
  { name: "Green", color: "#39856a", note: "Emerald, green tourmaline, peridot and tsavorite can all appear green." },
  { name: "Blue", color: "#356eaa", note: "Blue sapphire, aquamarine, tanzanite and spinel can show blue hues." },
  { name: "Violet", color: "#79538e", note: "Violet and purple appearances occur in sapphire, amethyst and spinel." },
  { name: "Purple", color: "#805078", note: "Purple is often used for hues between red and blue; terminology varies." },
  { name: "Pink", color: "#d77f9d", note: "Pink sapphire, tourmaline and spinel are common examples." },
];

function describeTone(value: number) {
  if (value <= 2) return "Very light";
  if (value <= 4) return "Light";
  if (value <= 6) return "Medium";
  if (value <= 8) return "Dark";
  return "Very dark";
}
function describeSaturation(value: number) {
  if (value <= 2) return "Grayish / brownish";
  if (value <= 4) return "Moderate";
  return "Strong / vivid";
}

export default function GemstoneColourReference() {
  const [hue, setHue] = useState("Blue");
  const [tone, setTone] = useState(5);
  const [saturation, setSaturation] = useState(4);
  const selected = HUES.find((item) => item.name === hue) ?? HUES[4];
  const swatch = useMemo(() => {
    const lightness = 88 - tone * 6.2;
    const saturationValue = 18 + saturation * 13;
    const hueDegrees: Record<string, number> = { Red: 348, Orange: 28, Yellow: 48, Green: 150, Blue: 210, Violet: 278, Purple: 310, Pink: 338 };
    return `hsl(${hueDegrees[hue] ?? 210} ${saturationValue}% ${lightness}%)`;
  }, [hue, tone, saturation]);

  function reset() {
    setHue("Blue");
    setTone(5);
    setSaturation(4);
  }

  return (
    <ToolShell
      title="Gemstone Colour Science"
      intro="Learn to describe a gemstone’s face-up colour through hue, tone and saturation — three useful concepts that help make visual observations more precise."
      note="This is an educational colour-description exercise, not a gem grading system. The sample swatch is illustrative and cannot reproduce a real gemstone, standardised viewing conditions or a laboratory colour assessment."
    >
      <div className="space-y-7">
        <section className="grid gap-5 md:grid-cols-[1fr_0.9fr] md:items-stretch">
          <div className="border border-border bg-background p-5 sm:p-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[var(--gold)]">01 · Hue</p>
            <h3 className="mt-2 font-serif text-xl text-foreground">What colour family do you see?</h3>
            <p className="mt-2 text-xs leading-5 text-muted">Hue describes the basic colour family perceived — such as red, blue or green. Some stones show modifying hues between these families.</p>
            <div className="mt-5 grid grid-cols-4 gap-2">
              {HUES.map((item) => (
                <button key={item.name} type="button" onClick={() => setHue(item.name)} aria-pressed={hue === item.name} className="flex min-h-16 flex-col items-center justify-center gap-1.5 border border-border px-1 py-2 text-[11px] text-foreground transition aria-pressed:border-[var(--gold)] aria-pressed:bg-[var(--gold-soft)]">
                  <span className="h-6 w-6 rounded-full border border-black/10" style={{ backgroundColor: item.color }} />
                  {item.name}
                </button>
              ))}
            </div>
            <p className="mt-4 text-xs leading-5 text-muted">{selected.note}</p>
          </div>

          <div className="flex min-h-[260px] flex-col border border-border bg-[var(--surface)] p-5 sm:p-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[var(--gold)]">Illustrative colour study</p>
            <div className="mt-4 flex flex-1 items-center justify-center border border-border bg-background p-5">
              <div className="flex h-36 w-36 items-center justify-center rounded-[42%] border-[8px] border-white/40 shadow-[0_18px_40px_rgba(20,20,20,0.16)] sm:h-40 sm:w-40" style={{ background: `radial-gradient(circle at 30% 24%, rgba(255,255,255,.9), transparent 22%), linear-gradient(145deg, rgba(255,255,255,.28), transparent 40%), ${swatch}` }}>
                <span className="h-14 w-14 rotate-45 border border-white/30 bg-white/10" />
              </div>
            </div>
            <p className="mt-3 text-center font-serif text-lg text-foreground">{hue} · {describeTone(tone)} · {describeSaturation(saturation)}</p>
            <p className="text-center text-[10px] leading-5 text-muted">A teaching illustration only — not a gemstone photograph or grading result.</p>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <div className="border border-border bg-background p-5 sm:p-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[var(--gold)]">02 · Tone</p>
            <h3 className="mt-2 font-serif text-xl text-foreground">How light or dark is it?</h3>
            <p className="mt-2 text-xs leading-5 text-muted">Tone describes relative lightness or darkness. It is distinct from hue: two blue stones can have very different tones.</p>
            <div className="mt-5 flex items-center justify-between text-[10px] text-muted"><span>Very light</span><span>Very dark</span></div>
            <input aria-label="Tone from 1 very light to 10 very dark" type="range" min="1" max="10" value={tone} onChange={(event) => setTone(Number(event.target.value))} className="mt-2 w-full accent-[var(--gold)]" />
            <div className="mt-3 flex items-center justify-between"><span className="text-xs text-muted">Selected tone</span><span className="font-serif text-2xl text-foreground">{tone}/10 · {describeTone(tone)}</span></div>
            <div className="mt-4 grid grid-cols-10 gap-1" aria-hidden="true">{Array.from({ length: 10 }, (_, index) => <span key={index} className="h-7 border border-black/5" style={{ backgroundColor: `hsl(210 42% ${94 - index * 8.5}%)` }} />)}</div>
          </div>
          <div className="border border-border bg-background p-5 sm:p-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[var(--gold)]">03 · Saturation</p>
            <h3 className="mt-2 font-serif text-xl text-foreground">How strong is the colour?</h3>
            <p className="mt-2 text-xs leading-5 text-muted">Saturation describes colour intensity or purity. Lower saturation often appears more grayish or brownish; higher saturation appears more vivid.</p>
            <div className="mt-5 flex items-center justify-between text-[10px] text-muted"><span>Muted</span><span>Vivid</span></div>
            <input aria-label="Saturation from 1 muted to 6 vivid" type="range" min="1" max="6" value={saturation} onChange={(event) => setSaturation(Number(event.target.value))} className="mt-2 w-full accent-[var(--gold)]" />
            <div className="mt-3 flex items-center justify-between"><span className="text-xs text-muted">Selected saturation</span><span className="font-serif text-2xl text-foreground">{saturation}/6</span></div>
            <div className="mt-4 grid grid-cols-6 gap-1" aria-hidden="true">{Array.from({ length: 6 }, (_, index) => <span key={index} className="h-7 border border-black/5" style={{ backgroundColor: `hsl(210 ${12 + index * 16}% 48%)` }} />)}</div>
          </div>
        </section>

        <section className="border-t border-border pt-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[var(--gold)]">Beyond the three dimensions</p>
          <h3 className="mt-2 font-serif text-2xl text-foreground">Other colour observations</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <article className="border border-border p-4"><h4 className="font-serif text-lg text-foreground">Pleochroism</h4><p className="mt-1 text-xs leading-5 text-muted">A change in perceived colour when an anisotropic gemstone is viewed in different crystallographic directions. It is assessed with suitable orientation and lighting.</p></article>
            <article className="border border-border p-4"><h4 className="font-serif text-lg text-foreground">Colour zoning</h4><p className="mt-1 text-xs leading-5 text-muted">Uneven distribution of colour within a gemstone. Zoning may appear as angular, curved or growth-related bands and can affect cutting decisions.</p></article>
            <article className="border border-border p-4"><h4 className="font-serif text-lg text-foreground">Colour distribution</h4><p className="mt-1 text-xs leading-5 text-muted">Observe whether colour is even across the face-up view, concentrated near the edges, or varies with orientation and lighting.</p></article>
            <article className="border border-border p-4"><h4 className="font-serif text-lg text-foreground">Lighting and environment</h4><p className="mt-1 text-xs leading-5 text-muted">Light source, background, surrounding colours, stone orientation and observer adaptation can change the appearance of a gem.</p></article>
          </div>
        </section>

        <section className="border border-[var(--gold)]/40 bg-[var(--gold-soft)] p-5 sm:p-6">
          <div className="flex items-start gap-3"><Info size={18} className="mt-0.5 shrink-0 text-[var(--gold)]" /><div><h3 className="font-serif text-lg text-foreground">A note on professional colour grading</h3><p className="mt-2 text-xs leading-6 text-muted">Gem laboratories and trade organisations may use different terminology, master stones, lighting environments and grading frameworks. There is no single universal numeric scale that can be applied to every coloured gemstone. A screen-based swatch cannot grade a stone or establish its value.</p></div></div>
        </section>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5">
          <p className="text-[10px] leading-5 text-muted">Current study: {hue} hue · tone {tone}/10 · saturation {saturation}/6.</p>
          <button type="button" onClick={reset} className="inline-flex min-h-11 items-center gap-2 border border-border px-4 text-xs font-semibold text-foreground hover:border-[var(--gold)]"><RotateCcw size={14} /> Reset study</button>
        </div>
      </div>
    </ToolShell>
  );
}
