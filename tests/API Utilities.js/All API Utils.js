const { expect } = require("@playwright/test");

class APIUtilities {

  constructor(apiContext, loginPayLoad) {
    this.apiContext = apiContext;
    this.loginPayLoad = loginPayLoad;
    this.token = null;
  }

  async getToken() {
    if (this.token) {
      return this.token; // reuse token
    }

    const loginResponse = await this.apiContext.post(
      "https://rahulshettyacademy.com/api/ecom/auth/login",
      {
        headers: {
          "Content-Type": "application/json"
        },
        data: this.loginPayLoad
      }
    );

    expect(loginResponse.ok()).toBeTruthy();

    const loginResponseJson = await loginResponse.json();
    this.token = loginResponseJson.token;

    return this.token;
  }

  async createOrder(orderPayLoad) {
    const token = await this.getToken(); // 🔥 await here

    const orderResponse = await this.apiContext.post(
      "https://rahulshettyacademy.com/api/ecom/order/create-order",
      {
        headers: {
          Authorization: token,
          "Content-Type": "application/json"
        },
        data: orderPayLoad
      }
    );

    expect(orderResponse.ok()).toBeTruthy();

    const orderResponseJson = await orderResponse.json();
    console.log("OrderResponseJson:", orderResponseJson);

    const orderId = orderResponseJson.orders[0];
    return orderId;
  }
}

module.exports = { APIUtilities };
