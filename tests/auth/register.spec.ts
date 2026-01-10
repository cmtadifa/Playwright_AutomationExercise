import { test } from '@playwright/test';
import userData from '../../fixtures/userData.json';
import { HomePage } from '../../pages/home.page';
import { AuthenticationPage } from '../../pages/Authentication.page';
import { dataGenerator } from '../../utils/testData';


test.describe('User Registration', () => {

  let hpage: HomePage;
  let authpage: AuthenticationPage;
  const user = dataGenerator.fullName();
  const email = dataGenerator.validEmail();
  const bday = dataGenerator.randomBirthday();
  const randomCountry = Math.floor(Math.random() * 7);

    test.beforeEach(async ({ page }) => {
        hpage = new HomePage(page);
        authpage = new AuthenticationPage(page);
        await hpage.accessPage();
        await hpage.clickNavLinks('Login');
        
      });


      test('Register with valid data', async ({page}) => {
        await authpage.enterRegNameField(user.full);
        await authpage.enterRegEmailField(email);
        await authpage.clickRegButton();
        await authpage.selectRegRadioBtn('Mr');
        await authpage.expectRegInfoName(user.full);
        await authpage.expectRegInfoEmail(email);
        await authpage.enterRegInfoPassword(userData.user2.password);
        await authpage.selectRegInfoDOBDays(bday.day);
        await authpage.selectRegInfoDOBMonths(bday.month);
        await authpage.selectRegInfoDOByears(bday.year);
        await authpage.enterRegInfoFirstName(user.first);
        await authpage.enterRegInfoLastName(user.last);
        await authpage.enterRegInfoCompany(dataGenerator.companyName());
        await authpage.enterRegInfoAddress1(dataGenerator.address1());
        await authpage.enterRegInfoAddress2(dataGenerator.address2());
        await authpage.selectRegInfoCountry(randomCountry);
        await authpage.enterRegInfoState(dataGenerator.state());
        await authpage.enterRegInfoCity(dataGenerator.city());
        await authpage.enterRegInfoZipcode(dataGenerator.zipcode());
        await authpage.enterRegInfoMNumber(dataGenerator.mobile());
        await authpage.clickCreateAccBtn();
        await authpage.expectAccountCreated();
      });

      test('Empty Front Register Name field', async () => {
        await authpage.enterRegEmailField(email);
        await authpage.clickRegButton();
        await authpage.expectRegisterError('Empty name');
      });

      test('Empty Front Register Email field', async () => {
        await authpage.enterRegNameField(user.full);
        await authpage.clickRegButton();
        await authpage.expectRegisterError('Empty email');
      });

      test('Invalid Front Register Email field', async () => {
        await authpage.enterRegNameField(user.full);
        await authpage.enterRegEmailField(dataGenerator.InvalidEmail());
        await authpage.clickRegButton();
        await authpage.expectRegisterError('Invalid email');
      });

      test('Existing email already registered', async () => {
        await authpage.enterRegNameField(userData.user1.Fname + ' ' + userData.user1.Lname);
        await authpage.enterRegEmailField(userData.user1.email);
        await authpage.clickRegButton();
        await authpage.expectRegisterExistingEmailError();
      });

      test('', async () => {
       
      });

      test('Login with empty password', async () => {
       
      });
});