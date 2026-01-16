import { test, expect } from '@playwright/test';
import { text } from 'node:stream/consumers';


test('child window playwright test', async ({ browser }) => {

const context = await browser.newContext();
const page = await context.newPage();
await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
//open in same tab by removing target attribute
const documentReqLink = page.locator('a[href*="documents-request"]');

//pararllel execution of code array
const [newPage] = await Promise.all([
context.waitForEvent('page'), documentReqLink.click(),
]);
//assertion for new tab
await expect(newPage).toHaveTitle('RS Academy');
const text = await newPage.locator('.im-para.red').textContent();
console.log(text);
//arraytext to split text 'Please email us at' //mentor@rahulshettyacademy.com //'with below template to receive response'
const arrayText = text.split("@");
const domain = arrayText[1].split(" ")[0];
console.log(domain); 

//flip back to parent window and enter domain name as username
const userName = page.locator('#username');
await page.locator('#username').fill(domain);
await page.pause();
console.log(await page.locator('#username').inputValue());
//difference twn textcontext vs inputvalue
//textcontent is to get the text inside any tag
//inputvalue is to get the value inside input field
});
