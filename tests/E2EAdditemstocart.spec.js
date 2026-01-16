import { test, expect } from '@playwright/test';
//create an account and sign in
//print all card titles
//add items to cart
//verify the right item is in cart
//checkout with added coupon and card  details
//place the order and capture order id in a variable
//find order id in the order history tables
//verify the order id has all the info you entered earlier


test.only('E2E sign in-print cardtitles Playwright Test', async ({ page }) => {
  
  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  await page.locator('#userEmail').fill('viowbank@gmail.com');
  await page.locator('#userPassword').fill('T5yhhgdjsdkls;');
  await page.locator('#login').click();

  const cardTitles = page.locator(".card-body");
  console.log(await cardTitles.first().textContent());
  const titles = await page.locator(".card-body").allTextContents();
  console.log(titles);



});
  //select items and add to cart
test('Add to Cart Playwright Test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  await page.locator('#userEmail').fill('viowbank@gmail.com');
  await page.locator('#userPassword').fill('T5yhhgdjsdkls;');
  await page.locator('#login').click();
  const productName = 'adidas original';
  const cardTitles = page.locator(".card-body");
  console.log(await cardTitles.first().textContent());
  const titles = await page.locator(".card-body").allTextContents();
  console.log(titles);
  const count = await cardTitles.count();
  for(let i=0; i < count; ++i)
  {
    if(await cardTitles.nth(i).locator("b").textContent() === "adidas original")
    {
      await cardTitles.nth(i).locator("text=  Add To Cart").click();
      break; //to exit loop once item is found and added to cart
      
    }
  }
    //to see cart count updated
  await page.pause();

 
});
  //select checkout page and verify items in cart

//test('Checkout Playwright Test', async ({ page }) => {
 // await page.goto('https://rahulshettyacademy.com/client/#/auth/login'); 


//});

  //select order history page and verify order id

//test('Order History Playwright Test', async ({ page }) => {
  //await page.goto('https://rahulshettyacademy.com/client/#/auth/login');

//});


