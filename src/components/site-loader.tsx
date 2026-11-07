"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function SiteLoader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => setShow(false), 700);
    return () => window.clearTimeout(timeout);
  }, []);

  if (!show) return null;

  return (
    <div className="site-loader gx-site-loader" aria-hidden="true">
      <Image
        src="/gemologyx-mark.svg"
        alt=""
        width={52}
        height={52}
        priority
        className="gx-loader-mark"
      />
      <span>GEMOLOGYX</span>
    </div>
  );
}
