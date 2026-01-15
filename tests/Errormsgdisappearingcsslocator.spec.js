const {test, expect} = require('@playwright/test');
const { error } = require('node:console');


test('Login Page error msg Playwright Test', async ({ page }) => {
  
  
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');
  
  const userName = page.locator('#username');
  const password = page.locator('#password');
  const signInBtn = page.locator('#signInBtn');
  await userName.fill('rahulshettyacademy');
  await password.fill('learnings');
  await signInBtn.click(); 

  console.log(await page.locator('[style*="block"]').textContent());
  await expect(page.locator('[style*="block"]')).toContainText('Incorrect username/password.');
  //erase error msg by clearing password field
 
  await password.fill("");
  await password.fill("learning");
  await signInBtn.click();
 
  //console.log(await page.locator(".card-body a").first().textContent());
  //console.log(await page.locator(".card-body a").nth(1).textContent());
  //console.log(await page.locator(".card-body a").nth(2).textContent());
  //console.log(await page.locator(".card-body a").last().textContent());

  
  //optimise the above codes with POM
  const cardTitles = page.locator(".card-body a");
  console.log(await cardTitles.first().textContent());
  console.log(await cardTitles.nth(1).textContent());
  console.log(await cardTitles.nth(2).textContent());
  console.log(await cardTitles.last().textContent());

  //grab cardTitles at once in an array
  const allTitles = await cardTitles.allTextContents();
  console.log(allTitles);

});