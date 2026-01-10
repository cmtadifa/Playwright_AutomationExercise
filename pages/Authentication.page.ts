import { Page, Locator, expect } from '@playwright/test';

export class AuthenticationPage {

//Locators class properties 
  private readonly logineAddress: Locator;
  private readonly loginPassword: Locator;
  private readonly loginBtn: Locator; 
  private readonly loginError: Locator;
  private readonly regNameField: Locator;
  private readonly regEmailField: Locator ;
  private readonly regBtn: Locator;
  private readonly regExistingEmailError: Locator;
  private readonly regInfoRadiobtnMale: Locator;
  private readonly regInfoRadiobtnFemale: Locator;
  private readonly regInfoNameField: Locator;
  private readonly  regInfoEmailField: Locator;
  private readonly regInfoPassField: Locator;
  private readonly regInfoDOBDays: Locator;
  private readonly regInfoDOBMonths: Locator;
  private readonly regInfoDOBYears: Locator;
  private readonly regInfoFnameField: Locator;
  private readonly regInfoLnameField: Locator;
  private readonly regInfocompanyField: Locator;
  private readonly regInfoAddress1Field: Locator
  private readonly regInfoAddress2Field: Locator;
  private readonly regInfoCountryField: Locator
  private readonly regInfoStateField: Locator;
  private readonly regInfoCityField: Locator
  private readonly regInfoZipcodeField: Locator;
  private readonly regInfoMobileNumberField: Locator;
  private readonly regInfoCreateAccountBtn: Locator;
  private readonly accCreated: Locator;



// constructor
  constructor(private readonly page: Page) {
    this.page = page;

    //Sign In Locators
    const loginForm = page.locator('form', { hasText: 'Login' });
    this.logineAddress = loginForm.getByRole('textbox', { name: 'Email Address' });
    this.loginPassword = loginForm.getByRole('textbox', { name: 'Password' });
    this.loginBtn = page.getByRole('button', { name: 'Login' });
    this.loginError = loginForm.getByText('Your email or password is incorrect!');
    
    //Register Locators
    const regForm = page.locator('form', { hasText: 'signup' });
    this.regNameField = regForm.getByRole('textbox', { name: 'Name' });
    this.regEmailField = regForm.getByRole('textbox', { name: 'Email Address' });
    this.regBtn = page.getByRole('button', { name: 'Signup' });
    this.regExistingEmailError = regForm.getByText('Email Address already exist!');
    this.regInfoRadiobtnMale = page.getByRole('radio', { name: 'Mr.' });
    this.regInfoRadiobtnFemale = page.getByRole('radio', { name: 'Mrs.' });
    this.regInfoNameField = page.getByRole('textbox', { name: 'Name *', exact: true });
    this.regInfoEmailField = page.getByRole('textbox', { name: 'Email *', exact: true });
    this.regInfoPassField = page.getByRole('textbox', { name: 'Password *', exact: true });
    this.regInfoDOBDays = page.locator('#days');
    this.regInfoDOBMonths = page.locator('#months');
    this.regInfoDOBYears = page.locator('#years');
    this.regInfoFnameField = page.getByRole('textbox', { name: 'First name *'});
    this.regInfoLnameField = page.getByRole('textbox', { name: 'Last name *'});
    this.regInfocompanyField = page.getByRole('textbox', { name: 'Company', exact: true});
    this.regInfoAddress1Field = page.getByRole('textbox', { name: 'Address *'});
    this.regInfoAddress2Field = page.getByRole('textbox', { name: 'Address 2'});
    this.regInfoCountryField = page.locator('#country');
    this.regInfoStateField = page.getByRole('textbox', { name: 'State *'});
    this.regInfoCityField = page.getByRole('textbox', { name: 'City * Zipcode *'});
    this.regInfoZipcodeField = page.locator('#zipcode');
    this.regInfoMobileNumberField = page.getByRole('textbox', { name: 'Mobile Number *'});
    this.regInfoCreateAccountBtn = page.getByRole('button', { name: 'Create Account' });
    this.accCreated = page.getByText('Account Created!');
  }


//function Methods
  async enterLoginEmailField(userName: string): Promise<void> {
    await this.logineAddress.fill(userName); 
  }

  async enterLoginPasswordField(password: string): Promise<void> {
    await this.loginPassword.fill(password); 
  }

  async clickLoginButton(): Promise<void> {
    await this.loginBtn.click();
  }

  async enterRegNameField(regName: string): Promise<void> {
    await this.regNameField.fill(regName); 
  }

  async enterRegEmailField(regEmail: string): Promise<void> {
    await this.regEmailField.fill(regEmail); 
  }

  async clickRegButton(): Promise<void> {
    await this.regBtn.click();
  }

  async selectRegRadioBtn(gender: string): Promise<void> {
    if (gender === 'Mr') {
      await this.regInfoRadiobtnMale.check();
    } else {
      await this.regInfoRadiobtnFemale.check();
    }
  }

  async enterRegInfoPassword(password: string): Promise<void> {
    await this.regInfoPassField.fill(password);
  }

  async selectRegInfoDOBDays(day: number): Promise<void> {
    await this.regInfoDOBDays.selectOption(day.toString());
  }

  async selectRegInfoDOBMonths(month: string): Promise<void> {
    await this.regInfoDOBMonths.selectOption(month);
  }

  async selectRegInfoDOByears(year: number): Promise<void> {
    await this.regInfoDOBYears.selectOption(year.toString());
  }

  async enterRegInfoFirstName(fname: string): Promise<void> {
    await this.regInfoFnameField.fill(fname);
  }

  async enterRegInfoLastName(lname: string): Promise<void> {
    await this.regInfoLnameField.fill(lname);
  }

  async enterRegInfoCompany(company: string): Promise<void> {
    await this.regInfocompanyField.fill(company);
  }

  async enterRegInfoAddress1(address1: string): Promise<void> {
    await this.regInfoAddress1Field.fill(address1);
  }

  async enterRegInfoAddress2(address2: string): Promise<void> {
    await this.regInfoAddress2Field.fill(address2);
  }

  async selectRegInfoCountry(country: number): Promise<void> {
    await this.regInfoCountryField.selectOption({index: country});
  }

  async enterRegInfoState(state: string): Promise<void> {
    await this.regInfoStateField.fill(state);
  }

  async enterRegInfoCity(city: string): Promise<void> {
    await this.regInfoCityField.fill(city);
  }

  async enterRegInfoZipcode(zipcode: string): Promise<void> {
    await this.regInfoZipcodeField.fill(zipcode);
  }

  async enterRegInfoMNumber(mNumber: string): Promise<void> {
    await this.regInfoMobileNumberField.fill(mNumber);
  }

  async clickCreateAccBtn(): Promise<void> {
    await this.regInfoCreateAccountBtn.click();
  }


//assertion Methods
  async expectLoginErrorVisible(): Promise<void> {
    await expect(this.loginError).toBeVisible();
    await expect(this.loginError).toHaveText('Your email or password is incorrect!');
  }

  async expectLoginError(errorMessage: string): Promise<void> {
    const validationMessage = await this.logineAddress.evaluate((el: HTMLInputElement) => el.validationMessage);
    if (errorMessage === "Invalid email") {
      expect(validationMessage).toContain("Please include an '@' in the email address.");
    } else if (errorMessage === "Empty email") {
      expect(validationMessage).toContain("Please fill out this field.");
    } else if (errorMessage === "Empty password"){
      const validationMessage = await this.loginPassword.evaluate((el: HTMLInputElement) => el.validationMessage);
      expect(validationMessage).toContain("Please fill out this field.");
    }
  }

  async expectRegInfoName(expectedName: string): Promise<void> {
    const nameValue = await this.regInfoNameField.inputValue();
    expect(nameValue).toBe(expectedName);
  }

  async expectRegInfoEmail(expectedEmail: string): Promise<void> {
    const emailValue = await this.regInfoEmailField.inputValue();
    expect(emailValue).toBe(expectedEmail);
  }

  async expectAccountCreated(): Promise<void> {
    await expect(this.accCreated).toBeVisible();
  }
  
  async expectRegisterError(errorMessage: string): Promise<void> {
    const validationMessage = await this.regEmailField.evaluate((el: HTMLInputElement) => el.validationMessage);
    if (errorMessage === "Invalid email") {
      expect(validationMessage).toContain("Please include an '@' in the email address.");
    } else if (errorMessage === "Empty email") {
      expect(validationMessage).toContain("Please fill out this field.");
    } else if (errorMessage === "Empty name") {
      const validationMessage = await this.regNameField.evaluate((el: HTMLInputElement) => el.validationMessage);
      expect(validationMessage).toContain("Please fill out this field.");
    }
  }

  async expectRegisterExistingEmailError(): Promise<void> {
    await expect(this.regExistingEmailError).toBeVisible();
    await expect(this.regExistingEmailError).toHaveText('Email Address already exist!');
  }
}
