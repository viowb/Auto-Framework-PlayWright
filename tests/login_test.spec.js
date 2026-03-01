import {test} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'

test('login test', async ({ page }) => {
 
    const loginPage = new LoginPage(page);

    await loginPage.goToLoginPage();
    await loginPage.login('viowbank@gmail.com', 'T5yhhgdjsdkls;');
    await loginPage.verifyLoginSuccess();


});