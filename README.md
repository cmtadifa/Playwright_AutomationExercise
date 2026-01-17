# Playwright E-Commerce Automation Framework

## 📌 Project Overview
This repository contains an end-to-end automation testing framework built using **Playwright with JavaScript**.  
The project focuses on testing a real-world **e-commerce web application**, covering core user flows such as authentication, product browsing, cart management, and checkout.

This project is part of my **QA Automation Portfolio** and demonstrates best practices in UI automation, framework design, and CI/CD integration.

---

## 🌐 Application Under Test
**Website:** https://automationexercise.com/

---

## 🛠 Tech Stack
- **Playwright**
- **Typescript**
- **Node.js**
- **Jenkins (CI/CD)**

---
## 📂 Project Structure
```
playwright-ecommerce-automation/
├── tests/                  # Test specs
│   ├── auth/               # Login & Registration
│   │   ├── login.spec.ts
│   │   └── register.spec.ts
│   ├── product/
│   │   └── product.spec.ts
│   ├── cart/
│   │   └── cart.spec.ts
│   └── checkout/
│       └── checkout.spec.ts
│
├── pages/                  # Page Objects
│   ├── home.page.ts
│   ├── authentication.page.ts
│   ├── product.page.ts
│   ├── cart.page.ts
│   └── checkout.page.ts
│
├── fixtures/
│   └── userData.json
├── utils/
│   └── testData.ts
├── playwright.config.ts
├── package.json
├── .gitignore
└── README.md

```
---

## 🧪 Test Coverage
### ✅ Functional Testing
- User Registration
- User Login / Logout
- Product Listing & Search
- Add to Cart
- Update & Remove Cart Items
- Checkout & Order Confirmation

### ❌ Negative Scenarios
- Invalid login credentials
- Empty cart checkout
- Form validation errors

---

## 🧱 Framework Design
- **Page Object Model (POM)** for maintainability
- Reusable test utilities
- Externalized test data using fixtures
- Clean and scalable folder structure

---

## ▶️ How to Run the Tests

### 1️⃣ Install Dependencies
```bash
npm install
```

### 2️⃣ Install Playwright browsers
```bash
npx playwright install
```

### 3️⃣ Run tests
```bash
npx playwright test
```

### 4️⃣ Run tests in UI mode
```bash
npx playwright test --ui
```
### 5️⃣ View HTML report
```bash
npx playwright show-report
```

## 📸 Test Artifacts
- Screenshots on failure
- Video recordings for failed tests
- HTML execution reports

## 🔄 CI/CD Integration
This project uses GitHub Actions to automatically run tests on:
- Push to main
- Pull requests

## 👤 Author
Carlos Miguel D. Tadifa
QA Engineer | Automation & Manual Testing
