import { test, expect} from '@playwright/test';
import userData from '../../fixtures/userData.json';
import { HomePage } from '../../pages/home.page';
import { LoginPage } from '../../pages/login.page';

test.describe('User Login', () => {

  let hpage: HomePage;
  let lpage: LoginPage;

    test.beforeEach(async ({ page }) => {
        hpage = new HomePage(page);
        lpage = new LoginPage(page);
        await hpage.accessPage();
        await hpage.clickNavLinks('Login');
      });


      test('should login with valid credentials', async () => {
        await lpage.enterUsernameField(userData.user1.email);
        await lpage.enterPasswordField(userData.user1.password);
        await lpage.clickLoginButton();
        await hpage.expectNavLinkVisible('Logout');
      });

      test('Login with invalid password', async () => {
        await lpage.enterUsernameField(userData.user2.email);
        await lpage.enterPasswordField(userData.user2.password);
        await lpage.clickLoginButton();
        await lpage.expectLoginErrorVisible();
      });

      test('Login with invalid email', async () => {
        await lpage.enterUsernameField(userData.user3.email);
        await lpage.enterPasswordField(userData.user3.password);
        await lpage.clickLoginButton();
        await lpage.expectInvalidEmail();
      });

      // test('Login with empty email', async ({ page }) => {
      //   // test code here
      // });

      // test('Login with empty password', async ({ page }) => {
      //   // test code here
      // });

      // test('Login with both empty', async ({ page }) => {
      //   // test code here
      // });

      // test('Login multiple times with invalid account', async ({ page }) => {
      //   // test code here
      // });
});