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
        const user = dataGenerator.fullname();
        const email = dataGenerator.validEmail();
        const bday = dataGenerator.randomBirthday();
        await authpage.enterRegNameField(user);
        await authpage.enterRegEmailField(email);
        await authpage.clickRegButton();
        await authpage.selectRegRadioBtn('Mr');
        await authpage.expectRegInfoName(user);
        await authpage.expectRegInfoEmail(email);
        await authpage.enterRegInfoPassword(userData.user2.password);
        await authpage.selectRegInfoDOBDays(bday.day);
        await authpage.selectRegInfoDOBMonths(bday.month);
        await authpage.selectRegInfoDOByears(bday.year);

        await page.pause();
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