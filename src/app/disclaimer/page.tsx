import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "GemologyX provides educational information and tools; it is not a substitute for professional gemological examination.",
};

export default function DisclaimerPage() {
  return (
    <div className="container-page max-w-2xl py-14">
      <h1 className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">Disclaimer</h1>
      <div className="prose-content mt-6 space-y-5 text-sm leading-relaxed text-foreground/90 md:text-base">
        <p>
          GemologyX provides educational information and tools. Calculator results are estimates
          and should not replace professional gemological examination or a laboratory report.
        </p>
        <p>
          Statements about gemstone identification, geographic origin, treatment status, and value
          reflect general gemological understanding and are not a substitute for examination by a
          qualified gemologist or a report from a recognized gemological laboratory. Origin and
          treatment status in particular often cannot be reliably determined without laboratory
          equipment.
        </p>
        <p>
          GemologyX is not a marketplace and does not broker, appraise, or guarantee the value of
          any specific gemstone.
        </p>
      </div>
    </div>
  );
}
