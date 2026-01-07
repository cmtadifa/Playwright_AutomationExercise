import { test } from '@playwright/test';
import userData from '../../fixtures/userData.json';
import { HomePage } from '../../pages/home.page';
import { AuthenticationPage } from '../../pages/Authentication.page';
import { dataGenerator } from '../../utils/testData';

test.describe('User Login', () => {

  let hpage: HomePage;
  let authpage: AuthenticationPage;

    test.beforeEach(async ({ page }) => {
        hpage = new HomePage(page);
        authpage = new AuthenticationPage(page);
        await hpage.accessPage();
        await hpage.clickNavLinks('Login');
      });


      test('should login with valid credentials', async () => {
        await authpage.enterLoginEmailField(userData.user1.email);
        await authpage.enterLoginPasswordField(userData.user1.password);
        await authpage.clickLoginButton();
        await hpage.expectNavLinkVisible('Logout');
      });

      test('Login with invalid password', async () => {
        await authpage.enterLoginEmailField(dataGenerator.validEmail());
        await authpage.enterLoginPasswordField(dataGenerator.nameWithNumber());
        await authpage.clickLoginButton();
        await authpage.expectLoginErrorVisible();
      });

      test.only('Login with invalid email', async () => {
        await authpage.enterLoginEmailField(dataGenerator.InvalidEmail());
        await authpage.enterLoginPasswordField(dataGenerator.nameWithNumber());
        await authpage.clickLoginButton();
        await authpage.expectLoginError("Invalid email");
      });

      test('Login with empty email', async () => {
        await authpage.enterLoginPasswordField(dataGenerator.nameWithNumber());
        await authpage.clickLoginButton();
        await authpage.expectLoginError("Empty email");
      });

      test('Login with empty password', async () => {
        await authpage.enterLoginEmailField(dataGenerator.validEmail());
        await authpage.clickLoginButton();
        await authpage.expectLoginError("Empty password");
      });
});