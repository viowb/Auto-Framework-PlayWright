const { expect } = require('@playwright/test');

class CheckoutPageObject {
  constructor(page) {
    this.page = page;
  }

  async fillCardDetails(cardData) {
    const { number, month, year, cvv } = cardData;
    await this.page.locator('input[placeholder*="Card Number"]').fill(number);
    await this.page.locator('input[placeholder*="MM"]').fill(month);
    await this.page.locator('input[placeholder*="YY"]').fill(year);
    await this.page.locator('input[placeholder*="CVV"]').fill(cvv);
  }

  async selectCountry(countryName) {
    const countryInput = this.page.locator("[placeholder='Select Country']");
    await countryInput.waitFor();
    await countryInput.fill(countryName);

    const dropdown = this.page.locator(".ta-results");
    await dropdown.waitFor();
    await dropdown.locator('button', { hasText: countryName }).click();
  }

  async submitOrder() {
    await this.page.locator(".btnn.action__submit").click();
    const orderConfirmation = await this.page.locator(".hero-primary").textContent();
    expect(orderConfirmation.trim()).toBe("Thankyou for the order.");
  }

  async completeCheckout(cardData, countryName) {
    await this.fillCardDetails(cardData);
    await this.selectCountry(countryName);
    await this.submitOrder();
  }
}

module.exports = CheckoutPageObject;
