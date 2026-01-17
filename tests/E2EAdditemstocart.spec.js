
//create an account and sign in
//print all card titles
//add items to cart
//verify the right item is in cart
//checkout with added coupon and card  details
//place the order and capture order id in a variable
//find order id in the order history tables
//verify the order id has all the info you entered earlier


//test('E2E sign in-print cardtitles Playwright Test', async ({ page }) => {
  
  //await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  //await page.locator('#userEmail').fill('viowbank@gmail.com');
  //await page.locator('#userPassword').fill('T5yhhgdjsdkls;');
  //await page.locator('#login').click();
  //await page.waitForLoadState('networkidle');
  //await page.locator(".card-body").first().waitFor();
  //const titles = await page.locator(".card-body").allTextContents();
  //console.log(await titles.first().textContent());
  //console.log(titles);       

//}); 
const { test, expect } = require('@playwright/test');

test.only('Add to Cart Playwright Test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');

  await page.locator('#userEmail').fill('viowbank@gmail.com');
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
  await expect(page.locator('[routerlink*="cart"]')).toBeVisible();

  await page.pause(); // debugging only
});

 
//});
  //select checkout page and verify items in cart

//test('Checkout Playwright Test', async ({ page }) => {
 // await page.goto('https://rahulshettyacademy.com/client/#/auth/login'); 


//});

  //select order history page and verify order id

//test('Order History Playwright Test', async ({ page }) => {
  //await page.goto('https://rahulshettyacademy.com/client/#/auth/login');

//});


