import type { Metadata } from "next";
import Tool from "@/components/tools/carat-to-gram-tool";

export const metadata: Metadata = {
  title: "Carat to Gram Converter",
  description: "Convert gemstone weight between carats and grams. One carat equals 0.2 grams.",
  alternates: { canonical: "/tools/carat-to-gram" },
};

export default function CaratToGramPage() {
  return <Tool />;
}
