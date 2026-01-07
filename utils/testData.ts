import { faker } from '@faker-js/faker';

export const dataGenerator = {
//valid email
  validEmail(): string {
    const name = faker.internet.email().toLowerCase();
    return name;
  },
//Invalid email
  InvalidEmail(): string {
    const name = faker.internet.username().toLowerCase();
    return `${name}mail.com`;
  },

//name with number
  nameWithNumber(): string {
    const name = faker.internet.username().toLowerCase();
    const number = faker.number.int({ min: 100, max: 9999 });
    return `${name}${number}`;
  },

//name with special characters and numbers
  nameWithSymbols(): string {
    const name = faker.internet.username().toLowerCase();
    return `${name}._@#^-${faker.number.int(99)}`;
  }
};
