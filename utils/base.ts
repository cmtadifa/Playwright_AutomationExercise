// test-options.ts
import { test as base } from '@playwright/test';
import { AuthenticationPage } from '../pages/Authentication.page';
import { CartPage } from '../pages/cart.page';
import { CheckoutPage } from '../pages/checkout.page';
import { ProductPage } from '../pages/product.page';
import { HomePage } from '../pages/home.page';
import userData from '../fixtures/userData.json';

export type TestOptions = {
  authPage: AuthenticationPage;
  authLogin: AuthenticationPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
  productPage: ProductPage;
  homePage: HomePage;
};

export const test = base.extend<TestOptions>({
  authPage: async ({ page }, use) => {
    const authPage = new AuthenticationPage(page);
    await use(authPage);
  },

  authLogin: async ({ authPage, homePage}, use) => {

    await homePage.accessPage();
    await homePage.clickNavLinks('Login');

    await authPage.enterLoginEmailField(userData.user1.email);
    await authPage.enterLoginPasswordField(userData.user1.password);
    await authPage.clickLoginButton();
    
    await homePage.expectNavLinkVisible('Logout');

    await use(authPage);
  },
  
  cartPage: async ({ page }, use) => {
    const cartPage = new CartPage(page);
    await use(cartPage);
  },
  
  checkoutPage: async ({ page }, use) => {
    const checkoutPage = new CheckoutPage(page);
    await use(checkoutPage);
  },
  
  productPage: async ({ page }, use) => {
    const productPage = new ProductPage(page);
    await use(productPage);
  },
  
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  }
  
  
});

export { expect } from '@playwright/test';