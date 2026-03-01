import {page,Locator} from '@playwright/test';
export class LoginPage
{
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly signInbutton: Locator;   
   
    constructor(page: Page) 
    {
        
        this.page = page;
        this.userName = page.locator("#userEmail");
        this.password = page.locator("#userPassword");
        this.signInbutton = page.locator("#login");


    }

    async goTo()
    {
        await this.page.goto("https://rahulshettyacademy.com/client");
    }

    async validLogin(username,password)
    {
        await this.userName.fill(username);
        await this.password.fill(password); 
        await this.signInbutton.click();
        await this.page.locator("[routerlink*='cart']").waitFor();

    }

}
module.exports = { LoginPage };
