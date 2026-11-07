import type { Metadata } from "next";
import GemstoneColourReference from "@/components/tools/gemstone-colour-reference";

export const metadata: Metadata = {
  title: "Gemstone Colour Science Reference",
  description: "Learn gemstone hue, tone, saturation, pleochroism and colour zoning with an interactive educational colour study.",
  alternates: { canonical: "/tools/gemstone-colour" },
};

export default function GemstoneColourPage() {
  return <GemstoneColourReference />;
}
