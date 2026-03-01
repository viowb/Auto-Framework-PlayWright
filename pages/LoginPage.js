import {page,Locator} from '@playwright/test';
export class LoginPage
{
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly signInbutton: Locator;   
   
#constructor is a function that is called when an instance of the class is created. 
#It is used to initialize the properties of the class and set up any necessary configurations. 
#In this case, the constructor takes a Page object as an argument and initializes the locators for the username, password, and sign-in button on the login page.
    
    constructor(page: Page) 
    {
        
        this.page = page;
        this.userName = page.locator("#userEmail");
        this.password = page.locator("#userPassword");
        this.signInbutton = page.locator("#login");

    }

    #create the action methods
    async goToLoginPage(){
        await this.page.goto("https://rahulshettyacademy.com/client");
     

    }
    
    async Login(username,password){
        await this.userName.fill(username);
        await this.password.fill(password); 
        await this.signInbutton.click();
        await this.page.locator("[routerlink*='cart']").waitFor();

    }

});

module.exports = { LoginPage };
