import { expect, test } from "@playwright/test";

test("Main test", async ({ page }) => {
    await page.goto("/");
    const main = await page.$("main");
    expect(main).toBeTruthy();
});
