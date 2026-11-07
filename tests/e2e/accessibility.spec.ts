import { expect, test } from "@playwright/test";

test("specimen image viewer supports keyboard navigation and returns focus", async ({ page }) => {
  await page.goto("/gemstones/sapphire", { waitUntil: "domcontentloaded" });

  const openButton = page.getByRole("button", {
    name: "Enlarge image 1: Rough blue, green and yellow sapphire crystals from Montana",
  });
  await expect(openButton).toBeVisible();
  await openButton.click();

  const dialog = page.getByRole("dialog", { name: "Sapphire specimen image viewer" });
  const closeButton = dialog.getByRole("button", { name: "Close image viewer" });
  await expect(dialog).toBeVisible();
  await expect(closeButton).toBeFocused();
  await expect(dialog.getByText("1 / 2")).toBeVisible();

  await page.keyboard.press("ArrowRight");
  await expect(dialog.getByText("2 / 2")).toBeVisible();
  await expect(dialog.getByText("A closer view of selected crystals from the same Montana collection.")).toBeVisible();

  await page.keyboard.press("Shift+Tab");
  await expect(dialog.getByRole("button", { name: "Next image" })).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(closeButton).toBeFocused();

  await page.keyboard.press("Escape");
  await expect(dialog).toHaveCount(0);
  await expect(openButton).toBeFocused();
});

test("mobile navigation closes with Escape and exposes its expanded state", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/", { waitUntil: "domcontentloaded" });

  const menuButton = page.getByRole("button", { name: "Open navigation" });
  await menuButton.click();
  await expect(menuButton).toHaveAttribute("aria-expanded", "true");
  await expect(page.getByRole("navigation", { name: "Mobile navigation" })).toBeVisible();

  await page.keyboard.press("Escape");
  await expect(page.getByRole("navigation", { name: "Mobile navigation" })).toHaveCount(0);
  const closedMenuButton = page.getByRole("button", { name: "Open navigation" });
  await expect(closedMenuButton).toHaveAttribute("aria-expanded", "false");
  await expect(closedMenuButton).toBeFocused();
});

test("skip link is available to keyboard users", async ({ page }) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });
  await page.keyboard.press("Tab");
  const skipLink = page.getByRole("link", { name: "Skip to main content" });
  await expect(skipLink).toBeFocused();
  await expect(page.locator("main#main-content")).toHaveAttribute("tabindex", "-1");
});


test("theme toggle follows system preference and keeps the document theme in sync", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "dark" });
  await page.goto("/", { waitUntil: "domcontentloaded" });

  const toggle = page.getByRole("button", { name: "Switch to light theme" });
  await expect(toggle).toBeVisible();
  await expect(toggle).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");

  await toggle.click();
  const lightToggle = page.getByRole("button", { name: "Switch to dark theme" });
  await expect(lightToggle).toHaveAttribute("aria-pressed", "false");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
});
