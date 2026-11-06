import type { Metadata } from "next";
import Tool from "@/components/tools/ring-size-tool";

export const metadata: Metadata = {
  title: "Ring Size Conversion Tool",
  description: "Compare common ring size systems and measurements with this GemologyX ring size reference.",
  alternates: { canonical: "/tools/ring-size" },
};

export default function RingSizePage() {
  return <Tool />;
}
