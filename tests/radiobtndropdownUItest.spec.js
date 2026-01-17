import { test, expect } from '@playwright/test';


test('static drop down/radio btn playwright test', async ({ page }) => {
  
  
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');
  
  const userName = page.locator('#username');
  const password = page.locator('#password');
  const signInBtn = page.locator('#signInBtn');
  await userName.fill('rahulshettyacademy');
  await password.fill('learning');
  await signInBtn.click(); 
//handle static drop down
  const dropwdown = page.locator('select.form-control');
  await expect(dropwdown).toBeEnabled();
  await dropwdown.selectOption({ value: 'consult' });
  await expect(dropwdown).toHaveValue('consult');
  console.log(await dropwdown.inputValue());
  //handle radio btn
  await page.locator('.radiotextsty'). last().click();
  //handle alert pop up
  await page.locator('#okayBtn').click();
  //assertion that the correct radio btn is checked
    await expect(page.locator('.radiotextsty'). last()).toBeChecked();
    console.log( await page.locator('.radiotextsty'). last().isChecked());
    //handle checkboxes and use assertions
    await page.locator('#terms').click();
    await expect( page.locator('#terms')).toBeChecked();
    await page.locator('#terms').uncheck();
    expect(await page.locator('#terms').isChecked()).toBeFalsy();
    //validate and click on blinking text to open new tab
    await expect(page.locator('a[href*="documents-request"]')).toHaveAttribute('class','blinkingText');
    const [newPage] = await Promise.all([
      page.waitForEvent('popup'),
      page.locator('a[href*="documents-request"]').click(),
    ]);
    //assertion for new tab
    await newPage.waitForLoadState();
    console.log(await newPage.title());
    await expect(newPage).toHaveTitle('RS Academy');  

    
})

