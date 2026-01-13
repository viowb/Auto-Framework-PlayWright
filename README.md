An end-to-end test automation framework built using Playwright for reliable, fast, and cross-browser testing of modern web applications.
Features

✅ End-to-End (E2E) testing using Playwright

🌐 Cross-browser testing (Chromium, Firefox, WebKit)

📱 Responsive & mobile viewport testing

🧪 Supports UI & API testing

⚡ Parallel test execution

📸 Screenshots & video on failure

📊 HTML test reports

🔁 CI/CD ready (GitHub Actions, Jenkins, etc.)

🧩 Scalable framework structure using Page Object Model (POM)


Tech Stack

Language: JavaScript / TypeScript

Test Framework: Playwright Test

Assertion Library: Playwright built-in expect

Package Manager: npm / yarn

Reporting: Playwright HTML Report

Project Structure
playwright-automation-framework/
│
├── tests/                  # Test specs
│   └── login.spec.ts
│
├── pages/                  # Page Object Models
│   └── login.page.ts
│
├── fixtures/               # Test data & fixtures
│
├── utils/                  # Helper utilities
│
├── playwright.config.ts    # Playwright configuration
├── package.json
├── README.md
└── reports/                # Test execution reports

📦 Installation
Prerequisites

Node.js (>= 16)

npm or yarn

Setup
git clone https://github.com/your-username/playwright-automation-framework.git
cd playwright-automation-framework
npm install

Install Playwright browsers:
npx playwright install

▶️ Running Tests

Run all tests:

npx playwright test


Run tests in headed mode:

npx playwright test --headed


Run tests in a specific browser:

npx playwright test --project=chromium


Run a specific test file:

npx playwright test tests/login.spec.ts

📊 Test Reports

After execution, open the HTML report:

npx playwright show-report


Reports include:

Test summary

Failure screenshots

Execution traces

Videos (if enabled)

🧩 Writing a Test (Example)
import { test, expect } from '@playwright/test';

test('User should login successfully', async ({ page }) => {
  await page.goto('https://example.com/login');
  await page.fill('#username', 'testuser');
  await page.fill('#password', 'password');
  await page.click('#login');

  await expect(page).toHaveURL(/dashboard/);
});

🧱 Page Object Model Example
export class LoginPage {
  constructor(private page) {}

  async login(username: string, password: string) {
    await this.page.fill('#username', username);
    await this.page.fill('#password', password);
    await this.page.click('#login');
  }
}

⚙️ Configuration

Key settings can be found in playwright.config.ts:

Base URL

Browsers

Timeouts

Retries

Reporters

Headless/Headed mode

🔁 CI/CD Integration

This framework can be easily integrated with:

GitHub Actions

Jenkins

GitLab CI

Azure DevOps

(Example GitHub Actions workflow can be added if needed.)

🤝 Contributing

Contributions are welcome!
Please:

Fork the repository

Create a feature branch

Commit your changes

Open a Pull Request

📄 License

This project is licensed under the MIT License.

📧 Contact

For questions or suggestions, feel free to open an issue or reach out.
