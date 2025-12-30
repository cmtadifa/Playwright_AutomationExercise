import { test } from '@playwright/test';
import { homePage } from '../../pages/home.page';

test.describe('User Login', () => {
  test('should login with valid credentials', async ({ page }) => {
    // test code here
  });

  test('Login with invalid password', async ({ page }) => {
    // test code here
  });

  test('Login with invalid email', async ({ page }) => {
    // test code here
  });

  test('Login with empty email', async ({ page }) => {
    // test code here
  });

  test('Login with empty password', async ({ page }) => {
    // test code here
  });

  test('Login with both empty', async ({ page }) => {
    // test code here
  });

  test('Login multiple times with invalid account', async ({ page }) => {
    // test code here
  });
});