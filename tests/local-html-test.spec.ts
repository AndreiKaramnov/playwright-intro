import {expect, test} from "@playwright/test";
import {faker} from "@faker-js/faker/locale/ar";
const path = require('path');

test.beforeEach(async ({page}) => {
    const filePath = `file://${path.resolve('html/dummy-order.html')}`
    await page.goto(filePath);
})

test('Basic button test', async ({ page }) => {
    const username = page.locator('#username')
    const email = page.getByPlaceholder('Enter your email')
    const btn = page.locator('button')
    const popup = page.locator('#popup-message')

    await expect(btn).toBeDisabled();
    await username.fill(faker.internet.username())
    await email.fill(faker.internet.email())
    await expect(btn).toBeEnabled();
    await btn.click()
    await expect(popup).toBeVisible();
    await expect(popup).toHaveText('OK')
});
test('Email field validation test', async ({ page }) => {
    const username = page.locator('#username')
    const email = page.getByPlaceholder('Enter your email')
    const btn = page.locator('button')

    const invalidEmailOptions = [
        '',
        'qwerty',
        'qwerty@qwerty',
        'qwerty.qwerty',
    ];
    const validEmailOption = faker.internet.email();

    await username.fill("user2");
    await expect(btn).toBeDisabled();
    for (const emailValue of invalidEmailOptions) {  //for (let i = 0, i<emailOptions.length, i++) {}
        await email.fill(emailValue);
        await expect(btn).toBeDisabled();
    }
    await email.fill(validEmailOption);
    await expect(btn).toBeEnabled();

})