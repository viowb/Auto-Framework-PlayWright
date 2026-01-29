const   { test, expect } = require('@playwright/test');
//month selection
//year selection
//day selection validation

test('Calendar Validations test', async ({ page }) => {

    const monthNumber = "01";
    const dateToSelect = "28";
    const yearNumber = "2026";

    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    await page.waitForLoadState('domcontentloaded');

    // Open date picker
    await page.locator(".react-date-picker__inputGroup").click();

    // Go to year view
    await page.locator(".react-calendar__navigation__label").click();
    await page.locator(".react-calendar__navigation__label").click();

    // Select year
    await page.getByText(yearNumber, { exact: true }).click();

    // Select month (0-based)
    await page
        .locator(".react-calendar__year-view__months__month")
        .nth(parseInt(monthNumber) - 1)
        .click();

    // ✅ Select day (STRICT-MODE SAFE)
    await page
        .locator('.react-calendar__month-view__days button')
        .filter({ hasText: dateToSelect })
        .first()
        .click();

    // Read inputs: [MM, DD, YYYY]
  // Get the date input value (YYYY-MM-DD)
const dateValue = await page
  .locator('.react-date-picker__inputGroup input[type="date"]')
  .inputValue();

// Split ISO date
const [year, month, day] = dateValue.split('-');

// Validate
expect(month).toBe(monthNumber);
expect(day).toBe(dateToSelect);
expect(year).toBe(yearNumber);

// Display formatted date
console.log(`Selected date: ${month}/${day}/${year}`);

});

