import { test } from '../../utils/base';
import userData from '../../fixtures/userData.json';
import { dataGenerator } from '../../utils/testData';

test.describe('User Login', () => {


    test.beforeEach(async ({ homePage }) => {
        await homePage.accessPage();
        await homePage.clickNavLinks('Login');
      });


      test('should login with valid credentials', async ({ authPage, homePage }) => {
        await authPage.enterLoginEmailField(userData.user1.email);
        await authPage.enterLoginPasswordField(userData.user1.password);
        await authPage.clickLoginButton();
        await homePage.expectNavLinkVisible('Logout');
      });

      test('Login with invalid password', async ({ authPage }) => {
        await authPage.enterLoginEmailField(dataGenerator.validEmail());
        await authPage.enterLoginPasswordField(dataGenerator.nameWithNumber());
        await authPage.clickLoginButton();
        await authPage.expectLoginErrorVisible();
      });

      test('Login with invalid email', async ({ authPage }) => {
        await authPage.enterLoginEmailField(dataGenerator.InvalidEmail());
        await authPage.enterLoginPasswordField(dataGenerator.nameWithNumber());
        await authPage.clickLoginButton();
        await authPage.expectLoginError("Invalid email");
      });

      test('Login with empty email', async ({ authPage }) => {
        await authPage.enterLoginPasswordField(dataGenerator.nameWithNumber());
        await authPage.clickLoginButton();
        await authPage.expectLoginError("Empty email");
      });

      test('Login with empty password', async ({ authPage }) => {
        await authPage.enterLoginEmailField(dataGenerator.validEmail());
        await authPage.clickLoginButton();
        await authPage.expectLoginError("Empty password");
      });
});