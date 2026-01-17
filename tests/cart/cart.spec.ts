import { test, expect } from '../../utils/base';

import userData from '../../fixtures/userData.json';

import { dataGenerator } from '../../utils/testData';


test.describe('Cart Scenario', () => {

//   const user =  dataGenerator.fullName();
//   const email = dataGenerator.validEmail();
//   const bday = dataGenerator.randomBirthday();
//   const randomCountry = Math.floor(Math.random() * 7);

    test.beforeEach(async ({ authLogin }) => {
       
      });


      test('Successfully added item to the cart', async ({page}) => {
        // Test steps to add item to cart
        // await authpage.registerNewUser(user, email, bday, userData.countries[randomCountry], userData.validPassword);
        // await authpage.expectAccountCreated();
      });
});