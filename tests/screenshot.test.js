import { test, expect } from "@playwright/test";

test("Should render the button", async ({ page }) => {
  await page.goto("/");
  await page.waitForSelector("button");
  const screenshot = await page.screenshot({
    path: `screenshot/ss${page.viewportSize().width}.png`,
  });
  // expect(screenshot).toMatchSnapshot(`ss${page.viewportSize().width}.png`);
  await expect(page).toHaveScreenshot({ maxDiffPixels: 100 });
});
