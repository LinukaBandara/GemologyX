import { expect, test } from "@playwright/test";

function getMetaContent(html: string, name: string) {
  const tag = html.match(new RegExp("<meta\\b[^>]*name=\"" + name + "\"[^>]*>", "i"))?.[0];
  return tag?.match(/content=["']([^"']*)["']/i)?.[1] ?? "";
}

function getCanonical(html: string) {
  const tag = html.match(/<link\b[^>]*rel=["']canonical["'][^>]*>/i)?.[0];
  return tag?.match(/href=["']([^"']*)["']/i)?.[1] ?? "";
}

test("every published sitemap route has valid, unique, indexable metadata", async ({ request }) => {
  test.setTimeout(180_000);
  const sitemapResponse = await request.get("/sitemap.xml");
  expect(sitemapResponse.status()).toBe(200);

  const sitemap = await sitemapResponse.text();
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  expect(urls.length).toBeGreaterThan(100);
  expect(new Set(urls).size).toBe(urls.length);

  const failures: string[] = [];
  const seenTitles = new Map<string, string>();

  for (let index = 0; index < urls.length; index += 12) {
    const batch = await Promise.all(
      urls.slice(index, index + 12).map(async (url) => {
        const pathname = new URL(url).pathname || "/";
        const response = await request.get(pathname);
        if (!response.ok()) {
          return pathname + ": HTTP " + response.status();
        }

        const html = await response.text();
        const title = html.match(/<title>([^<]+)<\/title>/i)?.[1]?.trim() ?? "";
        const description = getMetaContent(html, "description");
        const canonical = getCanonical(html);
        const robots = getMetaContent(html, "robots");
        const xRobots = response.headers()["x-robots-tag"] ?? "";
        const hasOgImage = /<meta\\b[^>]*property="og:image"[^>]*>/i.test(html);
        const hasTwitterImage = /<meta\\b[^>]*name="twitter:image"[^>]*>/i.test(html);
        const expectedCanonical = "https://gemologyx.com" + (pathname === "/" ? "/" : pathname);
        const issues: string[] = [];

        if (!title) issues.push("missing title");
        if (!description) issues.push("missing meta description");
        if (!hasOgImage) issues.push("missing Open Graph image");
        if (!hasTwitterImage) issues.push("missing Twitter image");
        if (/\\|\\s*GemologyX\\s*\\|\\s*GemologyX/i.test(title)) issues.push("duplicated brand suffix");
        if (canonical !== expectedCanonical) issues.push("canonical mismatch (" + (canonical || "missing") + ")");
        if (/noindex/i.test(robots + " " + xRobots)) issues.push("published sitemap route is noindex");

        const normalizedTitle = title.toLocaleLowerCase();
        const previousPath = seenTitles.get(normalizedTitle);
        if (previousPath && previousPath !== pathname) {
          issues.push("duplicate title also used by " + previousPath);
        } else if (title) {
          seenTitles.set(normalizedTitle, pathname);
        }

        return issues.length ? pathname + ": " + issues.join(", ") : null;
      }),
    );

    failures.push(...batch.filter((failure): failure is string => failure !== null));
  }

  expect(failures, failures.join("\n")).toEqual([]);
});

test("internal search results are noindex and absent from the XML sitemap", async ({ request }) => {
  const response = await request.get("/search?q=sapphire");
  expect(response.status()).toBe(200);
  expect(getMetaContent(await response.text(), "robots")).toMatch(/noindex/i);

  const sitemap = await (await request.get("/sitemap.xml")).text();
  expect(sitemap).not.toContain("https://gemologyx.com/search");
});

test("editorial draft routes stay noindex and outside the XML sitemap", async ({ request }) => {
  const draftRoutes = ["/gemstones/sapphire", "/si/learn/blue-sapphire-care"];
  const sitemap = await (await request.get("/sitemap.xml")).text();

  for (const route of draftRoutes) {
    const response = await request.get(route);
    expect(response.status(), route).toBe(200);
    expect(response.headers()["x-robots-tag"] ?? "", route).toMatch(/noindex/i);
    expect(sitemap, route).not.toContain("https://gemologyx.com" + route);
  }
});
