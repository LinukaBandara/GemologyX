import type { Metadata } from "next";
import GemstoneProportionsTool from "@/components/tools/gemstone-proportions-tool";

export const metadata: Metadata = {
  title: "Gemstone Proportion Calculator",
  description: "Calculate gemstone length-to-width ratio and depth percentage from measured dimensions.",
  alternates: { canonical: "/tools/gemstone-proportions" },
};

export default function GemstoneProportionsPage() {
  return <GemstoneProportionsTool />;
}
