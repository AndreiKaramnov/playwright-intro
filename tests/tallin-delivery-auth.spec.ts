import {expect, test} from "@playwright/test";
import {faker} from "@faker-js/faker/locale/ar";
import {APP_URL, APP_USER, APP_PASSWORD} from "../env";

test.beforeEach(async ({page}) => {
    await page.goto(APP_URL);
    await page.waitForLoadState('networkidle');
});

    test('TD negative auth test', async ({page}) => {
        const username = page.locator('#username');
        const password = page.locator('#password');
        const signInButton = page.locator('[data-name="signIn-button"]');
        const errorPopup = page.locator('[data-name="authorizationError-popup"]');


        await username.fill(faker.internet.username());
        await password.fill(faker.internet.password());
        await signInButton.click();
        await expect(errorPopup).toBeVisible();
    });
    test('TD positive auth test', async ({page}) => {
        const username = page.locator('#username');
        const password = page.locator('#password');
        const signInButton = page.locator('[data-name="signIn-button"]');

        await username.fill(APP_USER);
        await password.fill(APP_PASSWORD);
        await expect(signInButton).toBeVisible();
        await signInButton.click();
        await expect(page).not.toHaveURL(/signin/);
        await expect(page.locator('[data-name="logout-button"]')).toBeVisible();
    });
