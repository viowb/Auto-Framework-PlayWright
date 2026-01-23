const { test, expect } = require('@playwright/test');
const { default: playwrightConfig } = require('../playwright.config');
//create an account and sign in
//print all card titles
//add items to cart
//verify the right item is in cart
//checkout with added coupon and card  details
//place the order and capture order id in a variable
//find order id in the order history tables
//verify the order id has all the info you entered earlier

test('E2E playwright Automation', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  const email = "viowbank@gmail.com";
  await page.locator('#userEmail').fill(email);
  await page.locator('#userPassword').fill('T5yhhgdjsdkls;');
  await page.locator('#login').click();
    // wait for products page to load
  await page.waitForLoadState('networkidle');
  const productName = 'adidas original';
  const products = page.locator('.card-body');
  await expect(products.nth(2)).toBeVisible();
  const count = await products.count();
    for (let i = 0; i < count; i++) {
    const product = products.nth(i);
    const title = await product.locator('b').textContent();
    if (title.trim().toLowerCase() === productName) {
      await product.locator('text=Add To Cart').click();
      break;
    }
}
    await page.locator("[routerlink$='/dashboard/cart']").click();
    await page.locator("h3:has-text('adidas original')").waitFor();
    const cartItem = page.locator("h3:has-text('adidas original')").isVisible();
    const bool = await cartItem;
    expect(bool).toBeTruthy();
    await page.locator("text=Checkout").click();
    //fill card details and place order
    
    // Wait for card input field to be visible before filling
    await page.locator("input.txt.text-validated").first().waitFor();
    await page.locator("input.txt.text-validated").first().fill("4542 9931 9292 2293");
   
      
   
   
    await page.locator(".user__name [type='text']").first().waitFor();
    expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
    await page.locator("[placeholder='Select Country']").pressSequentially("United");
    const dropdown = page.locator(".ta-results");
    await dropdown.waitFor();
    const optionsCount = await dropdown.locator("button").count();
    await page.locator(".ng-star-inserted.ta-item").nth(2).click();
    await page.locator(".btnn.action__submit").click();
    const orderConfirmation = await page.locator(".hero-primary").textContent();
    expect(orderConfirmation.trim()).toBe("Thankyou for the order.");
    //console.log("Order placed successfully");
    //await page.pause();
    console.log("Thankyou for the order.");
        await page.pause();

    

});