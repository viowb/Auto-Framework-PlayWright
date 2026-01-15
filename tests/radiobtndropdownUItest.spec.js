import { test, expect } from '@playwright/test';


test.only('static drop down/radio btn playwright test', async ({ page }) => {
  
  
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');
  
  const userName = page.locator('#username');
  const password = page.locator('#password');
  const signInBtn = page.locator('#signInBtn');
  await userName.fill('rahulshettyacademy');
  await password.fill('learning');
  await signInBtn.click(); 

  const dropwdown = page.locator('select.form-control');
  await expect(dropwdown).toBeEnabled();
  await dropwdown.selectOption({ value: 'consult' });
  await expect(dropwdown).toHaveValue('consult');
  console.log(await dropwdown.inputValue());
  



});

