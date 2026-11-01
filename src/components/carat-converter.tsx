"use client";

import { useState } from "react";

export function CaratConverter() {
  const [carats, setCarats] = useState("1");
  const [grams, setGrams] = useState("0.2");

  function updateCarats(value: string) {
    setCarats(value);
    if (value.trim() === "") {
      setGrams("");
      return;
    }
    const amount = Number(value);
    setGrams(Number.isFinite(amount) ? String(Number((amount * 0.2).toFixed(6))) : "");
  }

  function updateGrams(value: string) {
    setGrams(value);
    if (value.trim() === "") {
      setCarats("");
      return;
    }
    const amount = Number(value);
    setCarats(Number.isFinite(amount) ? String(Number((amount * 5).toFixed(6))) : "");
  }

  return (
    <section className="rounded-2xl border border-border bg-white p-5 md:p-6">
      <div className="gx-eyebrow"><span /> බර පරිවර්තකය</div>
      <h2 className="mt-3 font-serif text-xl font-semibold text-foreground">
        කැරට් ↔ ග්‍රෑම්
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        එක් අගයක් ඇතුළත් කළ විට අනෙක් ඒකකයට පරිවර්තනය වේ. 1 carat = 0.2 gram.
      </p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-foreground">
          කැරට් (ct)
          <input
            aria-label="කැරට්"
            type="number"
            min="0"
            step="any"
            inputMode="decimal"
            value={carats}
            onChange={(event) => updateCarats(event.target.value)}
            className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-base text-foreground outline-none transition focus:border-accent"
          />
        </label>
        <label className="block text-sm font-medium text-foreground">
          ග්‍රෑම් (g)
          <input
            aria-label="ග්‍රෑම්"
            type="number"
            min="0"
            step="any"
            inputMode="decimal"
            value={grams}
            onChange={(event) => updateGrams(event.target.value)}
            className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-base text-foreground outline-none transition focus:border-accent"
          />
        </label>
      </div>
      <p className="mt-4 text-xs leading-relaxed text-muted">
        මෙය බර ඒකක පරිවර්තනයක් පමණි. ගලේ ප්‍රමාණය, ගුණාත්මකභාවය හෝ මිල මෙයින් තීරණය නොවේ.
      </p>
    </section>
  );
}
