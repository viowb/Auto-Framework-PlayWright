const { test, expect } = require('@playwright/test');
//create an account and sign in
//print all card titles
//add items to cart
//verify the right item is in cart
//checkout with added coupon and card  details
//place the order and capture order id in a variable
//find order id in the order history tables
//verify the order id has all the info you entered earlier


test('E2E sign in-print cardtitles Playwright Test', async ({ page }) => {
  
  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  await page.locator('#userEmail').fill('viowbank@gmail.com');
  await page.locator('#userPassword').fill('T5yhhgdjsdkls;');
  await page.locator('#login').click();
  await page.waitForLoadState('networkidle');
  await page.locator(".card-body").first().waitFor();
  const titles = await page.locator(".card-body").allTextContents();
  console.log(await page.locator(".card-body").first().textContent());
  console.log(titles);       

}); 


test('Add to Cart Playwright Test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  const email = "viowbank@gmail.com";
  await page.locator('#userEmail').fill(email);
  await page.locator('#userPassword').fill('T5yhhgdjsdkls;');
  await page.locator('#login').click();

  // wait for products page to load
  await page.waitForLoadState('networkidle');

  const productName = 'adidas original';
  const products = page.locator('.card-body');

  await expect(products.first()).toBeVisible();

  const count = await products.count();

  for (let i = 0; i < count; i++) {
    const product = products.nth(i);
    const title = await product.locator('b').textContent();

    if (title.trim().toLowerCase() === productName) {
      await product.locator('text=Add To Cart').click();
      break;
    }
  }
// optional: verify cart badge updated
  //await expect(page.locator('[routerlink*="cart"]')).toBeVisible();
  //await page.pause(); // debugging only
  await page.locator("[routerlink$='/dashboard/cart']").click();
  await page.locator("h3:has-text('adidas original')").waitFor();
  const cartItem = page.locator("h3:has-text('adidas original')").isVisible();
  const bool = await cartItem;
  expect(bool).toBeTruthy(); 
  //await page.pause();
  await page.locator("text=Checkout").click();

  // Payment page
  await page.getByRole('textbox').first().click();
  await page.getByRole('textbox').first().fill('4542 9931 9292 2293');
  await page.getByRole('combobox').first().selectOption('02');
  await page.getByRole('combobox').nth(1).selectOption('20');
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('567');
  await page.getByRole('textbox').nth(2).click();
  await page.getByRole('textbox').nth(2).fill('violet ');
  await page.getByRole('textbox').nth(2).press('CapsLock');
  await page.getByRole('textbox').nth(2).fill('violet B');
  await page.getByRole('textbox').nth(2).press('CapsLock');
  await page.locator('input[name="coupon"]').click();
  await page.locator('input[name="coupon"]').fill('rahulshettyacademy');
  await page.getByRole('button', { name: 'Apply Coupon' }).click();
  await page.waitForTimeout(3000);

 // Click Checkout
const checkoutBtn = page.getByRole('button', { name: /checkout/i });

await page.waitForLoadState("networkidle");

await page.locator(".btn.btn-primary").last().click();



// Type country and select from dropdown
const countryInput = page.locator("[placeholder*='Country']");
await countryInput.pressSequentially("United Kingdom");
await countryInput.press("ArrowDown");
await countryInput.press("Enter");

// Input fields use value, not text
await expect(
  page.locator(".user__name input").first()
).toHaveValue(email);

// Click submit
const submitBtn = page.locator(".action__submit");
await submitBtn.waitFor({ state: 'attached', timeout: 5000 });
await submitBtn.scrollIntoViewIfNeeded();
await page.waitForTimeout(1000);
await submitBtn.click({ force: true });
await page.waitForTimeout(2000);
await page.waitForLoadState("networkidle");
console.log("Current URL after submit:", await page.url());
await page.pause();

// Verify confirmation message

  
// Read order id after confirmation text appears






});
 
  

  
  //select order history page and verify order id
  //iterate through rows and find matching order id


//test('Order History Playwright Test', async ({ page }) => {
  //await page.goto('https://rahulshettyacademy.com/client/#/auth/login');

//});
