const {test, expect} = require('@playwright/test');
const { error } = require('node:console');


test('Browser Context Playwright Test ', async ({browser}) => 
{

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
});

test('Page Playwright Test ', async ({page}) => 
{

     await page.goto("https://google.com");
});

test('Home Page Playwright Test', async ({ page }) => {
  await page.goto('https://www.jointinv.com/home');
   

  
});

test('Login Page Playwright Test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');
  await page.locator('#username').fill('viowbank@gmail.com');
  await page.locator('#password').fill('T5yhhgdjsdkls;');
  await page.locator('#signInBtn').click();
});