import { test, expect } from '@playwright/test';


  test('Webpage Auth Test Playwright Test', async ({ page }) => {

  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  await expect(page).toHaveTitle("Let's Shop");
  
  const userEmail = page.locator('#userEmail');
  const password = page.locator('#userPassword');
  const login = page.locator('#login');
  await userEmail.fill('viowbank@gmail.com');
  await password.fill('T5yhhgdjsdkls;');
  await login.click();

  console.log(await page.locator(".card-body").nth(0).textContent());
  console.log(await page.locator(".card-body").nth(1).textContent());
  console.log(await page.locator(".card-body").nth(2).textContent());

  //optimise with POM
  const cardTitles = page.locator(".card-body");
  console.log(await cardTitles.nth(0).textContent());
  console.log(await cardTitles.nth(1).textContent());
  console.log(await cardTitles.nth(2).textContent());

  //print in array
  const allTitles = await cardTitles.allTextContents();
  console.log(allTitles);

});