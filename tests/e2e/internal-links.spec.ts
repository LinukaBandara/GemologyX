import { expect, test } from "@playwright/test";

test("internal links across the published sitemap resolve", async ({ request }) => {
  test.setTimeout(180_000);

  const sitemapResponse = await request.get("/sitemap.xml");
  expect(sitemapResponse.status()).toBe(200);
  const sitemap = await sitemapResponse.text();
  const pages = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => new URL(match[1]).pathname || "/");
  const internalPaths = new Set<string>();

  for (let index = 0; index < pages.length; index += 12) {
    const batch = await Promise.all(
      pages.slice(index, index + 12).map(async (pathname) => {
        const response = await request.get(pathname);
        if (!response.ok()) return { pathname, html: "" };
        return { pathname, html: await response.text() };
      }),
    );

    for (const page of batch) {
      if (!page.html) continue;
      const hrefs = [...page.html.matchAll(/<a\b[^>]*href=["']([^"']+)["'][^>]*>/gi)].map((match) => match[1]);
      for (const href of hrefs) {
        try {
          const url = new URL(href.replace(/&amp;/g, "&"), "https://gemologyx.com");
          if (url.hostname === "gemologyx.com" && (url.protocol === "https:" || url.protocol === "http:")) {
            internalPaths.add(url.pathname || "/");
          }
        } catch {
          // Non-URL anchor values do not represent navigable internal destinations.
        }
      }
    }
  }

  const broken: string[] = [];
  const paths = [...internalPaths];
  for (let index = 0; index < paths.length; index += 12) {
    const batch = await Promise.all(
      paths.slice(index, index + 12).map(async (pathname) => {
        const response = await request.get(pathname);
        return response.ok() ? null : pathname + ": HTTP " + response.status();
      }),
    );
    broken.push(...batch.filter((failure): failure is string => failure !== null));
  }

  expect(broken, broken.join("\n")).toEqual([]);
});
