import type { Metadata } from "next";
import RefractiveIndexTool from "@/components/tools/refractive-index-tool";

export const metadata: Metadata = {
  title: "Gemstone Refractive Index Reference",
  description: "Search typical refractive-index ranges, birefringence and optical character for common gemstones.",
  alternates: { canonical: "/tools/refractive-index" },
};

export default function RefractiveIndexPage() {
  return <RefractiveIndexTool />;
}
