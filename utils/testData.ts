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

//first name
  firstname(): string {
    const fname = faker.person.firstName().toLowerCase();
    return fname;
  },

//last name
  lastname(): string {
    const lname = faker.person.lastName().toLowerCase();
    return lname;
  },

//full name
  fullName(): { full: string; first: string; last: string } {
    const first = faker.person.firstName().toLowerCase();
    const last = faker.person.lastName().toLowerCase();
    const full = `${first} ${last}`;
    return { full, first, last };
  },

//password
  password(): string {
    return faker.internet.password({ length: 10, pattern: /[A-Za-z0-9@$!%*?&]/ });
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
  },

//random birthday
  randomBirthday(): { day: number; month: string; year: number } {
  const day = faker.number.int({ min: 1, max: 31 });
  const month = faker.date.month();  // returns "January", "February", etc.
  const year = faker.number.int({ min: 1900, max: 2023 });
  
  return { day, month, year };
  },

//random company name
  companyName(): string {
    return faker.company.name();
  },

  address1(): string {
    return faker.location.streetAddress();
  },

  address2(): string {
    return faker.location.secondaryAddress();
  },

  zipcode(): string {
    return faker.location.zipCode();
  },

  state(): string {
    return faker.location.state();
  },

  city(): string {
    return faker.location.city();
  },

  mobile(): string {
    return faker.phone.number({ style: 'national' }); // 10-digit
  }

};
