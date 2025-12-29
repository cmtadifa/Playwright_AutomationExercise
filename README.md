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
- **JavaScript (ES6)**
- **Node.js**
- **GitHub Actions (CI/CD)**

---

## 📂 Project Structure

playwright-ecommerce-automation/
│
├── tests/ # Test specifications
│├── auth/ # Login & Registration tests
│├── product/ # Product-related tests
│├── cart/ # Cart functionality tests
│└── checkout/ # Checkout flow tests
│
├── pages/ # Page Object Model (POM)
├── fixtures/ # Test data (JSON)
├── utils/ # Helper and utility functions
│
├── playwright.config.js
├── package.json
├── .gitignore
└── README.md

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

### 2️⃣ Install Dependencies
```bash
npx playwright test

### 2️⃣ Install Dependencies
```bash
npx playwright test --ui

### 4️⃣ View HTML Report
```bash
npx playwright show-report

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

