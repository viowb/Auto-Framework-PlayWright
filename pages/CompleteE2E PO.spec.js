const { test, expect } = require("@playwright/test");
const { LoginPage } = require("./LoginPage");
const { DashboardPageObject} = require("./DashboardPageObject");
const CheckoutPageObject = require('./CheckoutPageObject'); 
const { CartPageObject } = require("./CartPageObject");

test('Web Place order for Adidas product', async ({ page }) => {
  // Login page object usage
 const username = "viowbank@gmail.com";
 const password = "T5yhhgdjsdkls;";
 
  const loginPage = new LoginPage(page);
  await loginPage.goTo(); 
  await loginPage.validLogin(username,password);

//dashboard page object usage
  const dashboardPage = new DashboardPageObject(page);
  await dashboardPage.addProductToCart("adidas");
  await dashboardPage.goToCart();

//cart page object usage
  const cartPage = new CartPageObject(page);
  const productPresent = await cartPage.isProductInCart("adidas");
  expect(productPresent).toBeTruthy();
  await cartPage.checkout();
  

});