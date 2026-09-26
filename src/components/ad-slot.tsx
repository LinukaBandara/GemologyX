/**
 * Reserved ad placement. Renders an empty, properly-sized container with no fake ad content.
 * To go live: drop your AdSense (or other network) <ins>/<script> unit inside the
 * variant-specific branch below. Kept in one place so ad density is easy to audit.
 */
export function AdSlot({
  variant = "in-content",
}: {
  variant?: "leaderboard" | "in-content" | "sidebar" | "mobile" | "footer";
}) {
  const sizing: Record<string, string> = {
    leaderboard: "h-[90px] max-w-[728px]",
    "in-content": "h-[250px] max-w-[336px]",
    sidebar: "h-[600px] max-w-[300px]",
    mobile: "h-[100px] max-w-[320px]",
    footer: "h-[90px] max-w-[728px]",
  };

  return (
    <div
      className={`mx-auto my-8 flex w-full items-center justify-center rounded-md border border-dashed border-border bg-surface/60 text-[11px] uppercase tracking-wide text-muted ${sizing[variant]}`}
      aria-hidden="true"
      data-ad-slot={variant}
    >
      Reserved ad space
    </div>
  );
}
