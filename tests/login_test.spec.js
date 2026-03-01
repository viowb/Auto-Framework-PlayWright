import {test} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPageObject} from '../pages/DashboardPageObject';
import CheckoutPageObject from '../pages/CheckoutPageObject'; 
import { CartPageObject } from '../pages/CartPageObject';

test('Web Place order for Adidas product', async ({ page }) => {
  // Login page object usage
    const loginPage = new LoginPage(page);

    loginPage.goToLoginPage();
    loginPage.login('viowbank@gmail.com', 'T5yhhgdjsdkls;');
    loginPage.verifyLoginSuccess();


});