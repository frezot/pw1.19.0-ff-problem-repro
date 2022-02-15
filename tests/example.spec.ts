import { test, expect, Page } from "@playwright/test";

test.beforeEach(async ({ page }) => {});

test.describe("Describe", () => {
  test("Simple snapshot-test", async ({ page }) => {
    await page.goto("https://demo.playwright.dev/todomvc");

    expect(await page.screenshot()).toMatchSnapshot("demo--screen.png");
  });
});
