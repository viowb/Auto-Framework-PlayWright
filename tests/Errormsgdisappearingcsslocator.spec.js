const {test, expect} = require('@playwright/test');
const { error } = require('node:console');


test.only('Login Page error msg Playwright Test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');
  await page.locator('#username').fill('rahulshettyacademy');
  await page.locator('#password').fill('learnings');
  await page.locator('#signInBtn').click(); 

  console.log(await page.locator('[style*="block"]').textContent());
  await expect(page.locator('[style*="block"]')).toContainText('Incorrect username/password.');

   await userName.fill("");
  await userName.fill("viowbank@gmail.com");
  await password.fill("");

  await password.fill("T5yhhgdjsdkls;");
  await signInBtn.click();

});