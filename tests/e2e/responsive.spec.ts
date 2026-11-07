import { expect, test } from "@playwright/test";

const routes = [
  "/",
  "/gemstones",
  "/gemstones/sapphire",
  "/gemstones/ruby",
  "/gemstones/emerald",
  "/learn",
  "/sri-lanka",
  "/sri-lanka-mining",
  "/origins",
  "/equipment",
  "/tools",
  "/glossary",
  "/si/learn",
];

const viewports = [
  { name: "small-mobile-320", width: 320, height: 740 },
  { name: "mobile-375", width: 375, height: 812 },
  { name: "mobile-390", width: 390, height: 844 },
  { name: "mobile-430", width: 430, height: 932 },
  { name: "tablet-768", width: 768, height: 1024 },
  { name: "tablet-1024", width: 1024, height: 900 },
  { name: "desktop-1366", width: 1366, height: 900 },
  { name: "desktop-1920", width: 1920, height: 1080 },
];

for (const viewport of viewports) {
  test.describe(viewport.name, () => {
    test.use({ viewport: { width: viewport.width, height: viewport.height } });

    for (const route of routes) {
      test(`${route} loads without horizontal overflow or runtime errors`, async ({ page }) => {
        const pageErrors: string[] = [];
        page.on("pageerror", (error) => pageErrors.push(error.message));

        const response = await page.goto(route, { waitUntil: "domcontentloaded" });
        expect(response, `No document response for ${route}`).not.toBeNull();
        expect(response!.status(), `HTTP status for ${route}`).toBeLessThan(400);

        await page.locator("body").waitFor();
        await page.evaluate(() => document.fonts.ready);
        const dimensions = await page.evaluate(() => ({
          viewport: document.documentElement.clientWidth,
          document: document.documentElement.scrollWidth,
          body: document.body.scrollWidth,
        }));

        expect(
          dimensions.document,
          `${route} overflows horizontally at ${viewport.width}px: ${JSON.stringify(dimensions)}`,
        ).toBeLessThanOrEqual(dimensions.viewport + 1);
        expect(
          dimensions.body,
          `${route} body overflows horizontally at ${viewport.width}px: ${JSON.stringify(dimensions)}`,
        ).toBeLessThanOrEqual(dimensions.viewport + 1);
        expect(pageErrors, `Runtime errors on ${route}: ${pageErrors.join(" | ")}`).toEqual([]);
      });
    }
  });
}

test("homepage images that finished loading are not broken", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });
  const brokenImages = await page.locator("img").evaluateAll((images) =>
    images
      .filter((image) => image instanceof HTMLImageElement && image.complete && image.naturalWidth === 0)
      .map((image) => image.currentSrc || image.src),
  );
  expect(brokenImages, `Broken homepage images: ${brokenImages.join(", ")}`).toEqual([]);
});
