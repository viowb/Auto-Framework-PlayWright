import {Page, Locator} from '@playwright/test';

export class LoginPage
{
    constructor(page) 
    {
        this.page = page;
        this.page.username = page.locator("#userEmail");
        this.page.password = page.locator("#userPassword");
        this.page.signInbutton = page.locator("#login");
    }

    async goToLoginPage(){
        await this.page.goto("https://rahulshettyacademy.com/client");
    }
    
    async login(username, password){
        await this.page.username.fill(username);
        await this.page.password.fill(password); 
        await this.page.signInbutton.click();
        await this.page.locator("[routerlink*='cart']").waitFor();
    }

    async verifyLoginSuccess(){
        // Add verification logic here
    }
}

module.exports = { LoginPage };
