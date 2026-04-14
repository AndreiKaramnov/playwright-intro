import {test, expect, Locator} from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  // const username = page.locator('[id="username"]')
  // const email = page.locator('[id="email"]')
  // const btn = page.locator('[title="Submit Button"]')
  //
  // await username.fill("1234")
  // await email.fill("ddsfsdf@mail.fa")
  // await expect(btn).toBeEnabled();
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  const link = page.getByRole('link', { name: 'Get started' });
  await link.click();

  await page.waitForTimeout(5000);

  // Expects page to have a heading with the name of Installation.
  const heading = page.getByRole('heading', { name: 'Installation' });
  await expect(heading).toBeVisible();
});

test('is GitHub button visible', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const github = page.locator('[aria-label="GitHub repository"]')
  await expect(github).toBeVisible();
})
test('is Discord button visible', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const discord = page.locator('[aria-label="Discord server"]')
  await expect(discord).toBeVisible();
})
test('is dark theme switcher button visible', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const toggleButton = page.locator('[aria-label="Switch between dark and light mode (currently system mode)"]')
  await expect(toggleButton).toBeVisible();
})
