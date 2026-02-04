const {test,expect} = require("@playwright/test");

test("Popup validations test",async({page})=>
{
await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
//await page.goto ("https://www.jointinv.com/home");
//go back on browser to previous page
//await page.goBack();
//await page.goForward();

await page.locator("#hide-textbox").isHidden();
await page.locator("#displayed-text").isVisible();
//await page.pause();

//alert popup handling
page.on("dialog",dialog => dialog.accept());
   //await dialog.accept();
   //await dialog.dismiss();
    await page.locator("#confirmbtn").click();

    await page.locator("#mousehover").hover();
    await page.locator("a[href='#top']").click();

//frames handling switch to child frame on the main page or playwright can not interact with items inside the frame
const framePage = page.frameLocator("#courses-iframe");
await framePage.locator("a[href*='lifetime-access']:visible").click();
const text = await framePage.locator(".text h2").textContent();
console.log(text);

});

test("Screenshot & visual checks test",async({page})=>
{
await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
await page.locator("#hide-textbox").isHidden();
await page.locator("#displayed-text").isVisible();
//screenshot
await page.screenshot({path:"screenshot.png",fullPage:true});



});
//locator level screenshot
test("Locator screenshot test",async({page})=>
{
await page.goto("https://rahulshettyacademy.com/AutomationPractice/"); 
await page.locator('#displayed-text').screenshot({path:'locatorlevelscreenshot.png'});
await page.locator("#hide-textbox").isHidden();
await page.locator("#displayed-text").isVisible();
});

test("visual comparison test",async({page})=>
{
await page.goto("https://www.jointinv.com/home");
//visual comparison
await expect(page).toHaveScreenshot("homepage.png");
expect(await page.screenshot()).toMatchSnapshot("homepage.png");
});

