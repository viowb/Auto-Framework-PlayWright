import {test, expect} from '@playwright/test';


test('GetBy locators Playwright Test', async ({page}) => {
await page.goto('https://rahulshettyacademy.com/angularpractice/');
//getBy works best for select/check mthds, it is flaky with input/fill mthds
//await page.getByLabel('Name').fill('Violet');
//await page.getByLabel("Email").fill('violet@gmail.com');

await page.getByLabel("Check me out if you Love IceCreams!").check();
await page.getByLabel("Student").check();
await page.getByLabel("Gender").selectOption("Female");
await page.getByPlaceholder("Password").fill('T5yhhgdjsdkls;');
//await page.getByLabel('Date of Birth').fill('2024-05-30');
await page.getByRole("button", {name: 'Submit'}).click();
await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
await page.getByRole("link", {name : "Shop"}).click();
//await page.locator("app-card").nth(1).getByRole("button",).click();
//use chaining mtd as below
await page.locator("app-card").filter({hasText: 'Blackberry'}).getByRole("button").click(); 





});

//playwright special locators, getBy locators are more readable and easy to use
//getByLabel, getByPlaceholder, getByRole, getByText
//framework: locator css
//npx playwright test --ui (to open playwright test runner UI)
