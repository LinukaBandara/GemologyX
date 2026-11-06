import type { Metadata } from "next";
import Tool from "@/components/tools/gemstone-size-tool";

export const metadata: Metadata = {
  title: "Gemstone Size Estimator",
  description: "Estimate approximate gemstone carat weight from dimensions and shape. Results are educational estimates, not appraisals.",
  alternates: { canonical: "/tools/gemstone-size" },
};

export default function GemstoneSizePage() {
  return <Tool />;
}
