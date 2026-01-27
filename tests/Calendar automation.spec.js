const   { test, expect } = require('@playwright/test');
//month selection
//year selection
//day selection validation

test.only('Calendar Validations test', async ({ page }) => 
{

    const monthNumber = "01";
    const dateToSelect = "27";
    const yearNumber = "2026";

await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
await page.waitForLoadState('domcontentloaded');

// Open date picker
await page.locator(".react-date-picker__inputGroup").click();

// Navigate to year selection, click 2ice to go to year view
await page.locator(".react-calendar__navigation__label").click();
await page.locator(".react-calendar__navigation__label").click();

// Select year
await page.getByText(yearNumber).click();

// Select month
await page.locator(".react-calendar__year-view__months__month").nth(parseInt(monthNumber)-1).click();

// Select day if needed
    const selectedDate = await page.locator(".react-date-picker__inputGroup__day").inputValue();
    expect(selectedDate).toBe(dateToSelect);

    //await page.pause();
    console.log("seledted date is: " + selectedDate);
}); 