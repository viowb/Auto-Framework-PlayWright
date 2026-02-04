class CartPageObject {
  constructor(page) {
    this.page = page;
    this.checkoutButton = page.getByRole('button', { name: /checkout/i });
    this.placeOrderButton = page.locator(".btnn.action__submit");
    this.orderConfirmationText = page.locator(".hero-primary");
  }

  async checkout() {
    await this.checkoutButton.waitFor({ state: 'visible' });
    await this.checkoutButton.click();
  }

  async placeOrder() {
    await this.placeOrderButton.click();
  }

  async getOrderConfirmation() {
    return await this.orderConfirmationText.textContent();
  }
}

module.exports = { CartPageObject };
