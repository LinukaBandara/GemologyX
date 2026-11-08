import type { Metadata } from "next";
import SpecificGravityTool from "@/components/tools/specific-gravity-tool";

export const metadata: Metadata = {
  title: "Specific Gravity Calculator",
  description: "Calculate approximate gemstone specific gravity from mass in air and apparent mass in water using the hydrostatic method.",
  alternates: { canonical: "/tools/specific-gravity" },
};

export default function SpecificGravityPage() {
  return <SpecificGravityTool />;
}
