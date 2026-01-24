import {test, expect} from '@playwright/test';

test.only('GetBy locators Playwright Test', async ({page}) => {
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
await page.getByRole("link", {name: "Shop"}).click();






})