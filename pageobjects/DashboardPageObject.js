class DashboardPageObject {

  constructor(page) {
    this.page = page;
    this.products = page.locator(".card-body");
    this.cart = page.locator("[routerlink*='cart']");
    this.checkoutButton = page.locator("button.btn.btn-primary:has-text('Checkout')");
  }

  // Get all product titles
  async getProductTitles() {
    return await this.products.locator("b").allTextContents();
  }

  // Add a specific product to cart
  async addProductToCart(productName) {
    const count = await this.products.count();

    for (let i = 0; i < count; i++) {
      const title = await this.products.nth(i).locator("b").textContent();

      if (title?.toLowerCase().includes(productName.toLowerCase())) {
        await this.products.nth(i).locator("text=Add To Cart").click();
        break;
      }
    }
  }

  async goToCart() {
    await this.cart.click();
  }

  async checkout() {
    await this.checkoutButton.click();
  }
}
 

module.exports = { DashboardPageObject };