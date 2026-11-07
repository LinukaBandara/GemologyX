import type { Metadata } from "next";
import BirefringenceTool from "@/components/tools/birefringence-tool";

export const metadata: Metadata = {
  title: "Birefringence Calculator",
  description: "Calculate birefringence from the highest and lowest refractive-index readings.",
  alternates: { canonical: "/tools/birefringence" },
};

export default function BirefringencePage() {
  return <BirefringenceTool />;
}
