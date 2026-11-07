import type { Metadata } from "next";
import MohsHardnessTool from "@/components/tools/mohs-hardness-tool";

export const metadata: Metadata = {
  title: "Mohs Hardness Reference",
  description: "Explore the ten reference minerals of the Mohs scratch-hardness scale and common gemstone examples.",
  alternates: { canonical: "/tools/mohs-hardness" },
};

export default function MohsHardnessPage() {
  return <MohsHardnessTool />;
}
