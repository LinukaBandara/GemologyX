import type { Metadata } from "next";
import Tool from "@/components/tools/birthstones-tool";

export const metadata: Metadata = {
  title: "Birthstone Calendar & Guide",
  description: "Explore traditional and modern birthstones by month with the GemologyX birthstone reference tool.",
  alternates: { canonical: "/tools/birthstones" },
};

export default function BirthstonesPage() {
  return <Tool />;
}
