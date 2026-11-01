import type { ReactNode } from "react";

export default function SinhalaLayout({ children }: { children: ReactNode }) {
  // The root document remains English; this marks the Sinhala page content
  // with its correct language for browsers and assistive technologies.
  return <div lang="si">{children}</div>;
}
