const { test, expect } = require("@playwright/test");

test("Place order for Adidas product", async ({ page }) => {
  // Login (required for this site)
  await page.goto("https://rahulshettyacademy.com/client");
  const email = "viowbank@gmail.com";
  await page.locator("#userEmail").fill(email);
  await page.locator("#userPassword").fill("T5yhhgdjsdkls;"); 
  await page.locator("#login").click();

  await page.waitForLoadState("networkidle");

  // Add Adidas product to cart
  const products = page.locator(".card-body");
  const count = await products.count();
  

  for (let i = 0; i < count; i++) {
    const productName = await products.nth(i).locator("b").textContent();
    if (productName.toLowerCase().includes("adidas")) {
      await products.nth(i).locator("text=Add To Cart").click();
      break;
    }
  }

  // Go to cart
  await page.locator("[routerlink*='cart']").click();

  // Checkout
  await page.locator(".btn.btn-primary", { hasText: "Checkout" }).click();
  // Fill card details
  await page.locator(".input.txt").first().fill("4542 9931 9292 2293");
  await page.locator(".input.txt").nth(1).fill("02");
  await page.locator(".input.txt").nth(2).fill("26");
  await page.locator(".input.txt").nth(3).fill("557"); 
 
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
    //console.log("Thankyou for the order.");
         
    //click on order table and find order id
  await page.locator("button:has-text('Orders')").click();

 
  //click on orders and find the order you just placd and click button to view its details
  // Click on "Orders" button (find by text instead of nth index)
    
  await page.locator("button[routerlink*='myorder']").click();
 await page.locator("tbody").waitFor();
 // Click on "View Details" for the first order
    
    //iterate the table rows to find matching order id
    const rows = page.locator("tbody tr");
    await rows.first().waitFor({ timeout: 15000 });
    
    // Get the first order ID from the table
    const orderId = await rows.nth(0).locator("th").textContent();
    console.log("Order ID:", orderId?.trim());
    
    // Click "View Details" button for the first order
    await rows.nth(0).locator("button").first().click();

    //verify order id details
    const orderidDetails = await page.locator(".col-text").textContent();
    expect(orderidDetails?.includes(orderId?.trim())).toBeTruthy();

    await page.pause();
});
  