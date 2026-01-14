const {test, expect} = require('@playwright/test');
const { error } = require('node:console');


test.only('Login Page error msg Playwright Test', async ({ page }) => {
  

  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');
  
  const userName = page.locator('#username');
  const password = page.locator('#password');
  const signInBtn = page.locator('#signInBtn');
  await userName.fill('rahulshettyacademy');
  await password.fill('learnings');
  await signInBtn.click(); 

  console.log(await page.locator('[style*="block"]').textContent());
  await expect(page.locator('[style*="block"]')).toHaveText('Incorrect username/password.');

  await userName.fill("");
  await userName.fill("viowbank@gmail.com");
  await password.fill("");

  await password.fill("T5yhhgdjsdkls;");
  await signInBtn.click();
 

});