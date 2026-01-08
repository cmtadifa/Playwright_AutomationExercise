import { test } from '@playwright/test';
import userData from '../../fixtures/userData.json';
import { HomePage } from '../../pages/home.page';
import { AuthenticationPage } from '../../pages/Authentication.page';
import { dataGenerator } from '../../utils/testData';

test.describe('User Registration', () => {

  let hpage: HomePage;
  let authpage: AuthenticationPage;

    test.beforeEach(async ({ page }) => {
        hpage = new HomePage(page);
        authpage = new AuthenticationPage(page);
        await hpage.accessPage();
        await hpage.clickNavLinks('Login');
      });


      test.only('Register with valid data', async ({page}) => {
        await authpage.enterRegNameField(dataGenerator.fullname());
        await authpage.enterRegEmailField(dataGenerator.validEmail());
        await authpage.clickRegButton();
      });

      test('Empty required fields', async () => {
        
      });

      test('Invalid email format', async () => {
       
      });

      test('Existing email already registered', async () => {
       
      });

      test('Login with empty password', async () => {
       
      });
});