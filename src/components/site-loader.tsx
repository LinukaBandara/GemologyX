"use client";

import { useEffect, useState } from "react";

export function SiteLoader() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 950);
    return () => window.clearTimeout(timer);
  }, []);
  if (!visible) return null;
  return (
    <div className="site-loader" aria-hidden="true">
      <div className="loader-mark">
        <span className="loader-facet facet-a" />
        <span className="loader-facet facet-b" />
        <span className="loader-facet facet-c" />
        <span className="loader-facet facet-d" />
        <span className="loader-core" />
      </div>
      <div className="loader-word">GEMOLOGY<span>X</span></div>
      <div className="loader-line"><i /></div>
      <p>THE DIGITAL GUIDE TO GEMSTONES</p>
    </div>
  );
}