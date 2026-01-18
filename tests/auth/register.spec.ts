import { test } from '../../utils/base';
import userData from '../../fixtures/userData.json';
import { dataGenerator } from '../../utils/testData';


test.describe('User Registration', () => {

  const user = dataGenerator.fullName();
  const email = dataGenerator.validEmail();
  const bday = dataGenerator.randomBirthday();
  const randomCountry = Math.floor(Math.random() * 7);

    test.beforeEach(async ({ homePage }) => {
        await homePage.accessPage();
        await homePage.clickNavLinks('Login');
        
      });


      test('Register with valid data', async ({authPage}) => {
        await authPage.enterRegNameField(user.full);
        await authPage.enterRegEmailField(email);
        await authPage.clickRegButton();
        await authPage.selectRegRadioBtn('Mr');
        await authPage.expectRegInfoName(user.full);
        await authPage.expectRegInfoEmail(email);
        await authPage.enterRegInfoPassword(userData.user2.password);
        await authPage.selectRegInfoDOBDays(bday.day);
        await authPage.selectRegInfoDOBMonths(bday.month);
        await authPage.selectRegInfoDOByears(bday.year);
        await authPage.enterRegInfoFirstName(user.first);
        await authPage.enterRegInfoLastName(user.last);
        await authPage.enterRegInfoCompany(dataGenerator.companyName());
        await authPage.enterRegInfoAddress1(dataGenerator.address1());
        await authPage.enterRegInfoAddress2(dataGenerator.address2());
        await authPage.selectRegInfoCountry(randomCountry);
        await authPage.enterRegInfoState(dataGenerator.state());
        await authPage.enterRegInfoCity(dataGenerator.city());
        await authPage.enterRegInfoZipcode(dataGenerator.zipcode());
        await authPage.enterRegInfoMNumber(dataGenerator.mobile());
        await authPage.clickCreateAccBtn();
        await authPage.expectAccountCreated();
      });

      test('Empty Front Register Name field', async ({authPage}) => {
        await authPage.enterRegEmailField(email);
        await authPage.clickRegButton();
        await authPage.expectRegisterError('Empty name');
      });

      test('Empty Front Register Email field', async ({authPage}) => {
        await authPage.enterRegNameField(user.full);
        await authPage.clickRegButton();
        await authPage.expectRegisterError('Empty email');
      });

      test('Invalid Front Register Email field', async ({authPage}) => {
        await authPage.enterRegNameField(user.full);
        await authPage.enterRegEmailField(dataGenerator.InvalidEmail());
        await authPage.clickRegButton();
        await authPage.expectRegisterError('Invalid email');
      });

      test('Existing email already registered', async ({authPage}) => {
        await authPage.enterRegNameField(userData.user1.Fname + ' ' + userData.user1.Lname);
        await authPage.enterRegEmailField(userData.user1.email);
        await authPage.clickRegButton();
        await authPage.expectRegisterExistingEmailError();
      });

      test('Empty Required Fields', async ({authPage}) => {
        await authPage.enterRegNameField(user.full);
        await authPage.enterRegEmailField(email);
        await authPage.clickRegButton();
        await authPage.clickCreateAccBtn();
        await authPage.expectRegisterError('Empty password');
        await authPage.enterRegInfoPassword(userData.user2.password);
        await authPage.clickCreateAccBtn();
        await authPage.expectRegisterError('Empty fname');
        await authPage.enterRegInfoFirstName(user.first);
        await authPage.clickCreateAccBtn();
        await authPage.expectRegisterError('Empty lname');
        await authPage.enterRegInfoLastName(user.last);
        await authPage.clickCreateAccBtn();
        await authPage.expectRegisterError('Empty address1');
        await authPage.enterRegInfoAddress1(dataGenerator.address1());
        await authPage.clickCreateAccBtn();
        await authPage.expectRegisterError('Empty state');
        await authPage.enterRegInfoState(dataGenerator.state());
        await authPage.clickCreateAccBtn();
        await authPage.expectRegisterError('Empty city');
        await authPage.enterRegInfoCity(dataGenerator.city());
        await authPage.clickCreateAccBtn();
        await authPage.expectRegisterError('Empty zipcode');
        await authPage.enterRegInfoZipcode(dataGenerator.zipcode());
        await authPage.clickCreateAccBtn();
        await authPage.expectRegisterError('Empty mobile');
      });
});