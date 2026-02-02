const { test, expect } = require("@playwright/test");

test.describe.only("Web API 1 tests", () => {

  let token; // store token for all tests in this describe

  // beforeAll hook runs once before all tests in this describe
  test.beforeAll(async ({ request }) => {
    const loginResponse = await request.post(
      "https://rahulshettyacademy.com/api/ecom/auth/login",
      {
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          userEmail: "viowbank@gmail.com",
          userPassword: "T5yhhgdjsdkls;"
        }
      }
    );

    console.log("Login status:", loginResponse.status());
    const loginResponseBody = await loginResponse.json();
    console.log(loginResponseBody);

    expect(loginResponse.ok()).toBeTruthy();
    token = loginResponseBody.token;
    expect(token).toBeDefined();
  });

  // Your test must also be inside the describe block
  test("API - Get all products", async ({ request }) => {
    const response = await request.post(
      "https://rahulshettyacademy.com/api/ecom/product/get-all-products",
      {
        headers: {
          Authorization: token,
          "Content-Type": "application/json"
        }
      }
    );

    console.log("Products status:", response.status());

    const responseBody = await response.json();
    console.log(responseBody);

    expect(response.ok()).toBeTruthy();
    expect(responseBody.data.length).toBeGreaterThan(0);
  });

});
