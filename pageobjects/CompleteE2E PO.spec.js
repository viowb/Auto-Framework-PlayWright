const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pageobjects/LoginPage");
const { DashboardPageObject} = require("../pageobjects/DashboardPageObject");
const CheckoutPageObject = require('../pageobjects/CheckoutPageObject'); 
const { CartPageObject } = require("../pageobjects/CartPageObject");

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