import { Page, Locator, expect } from '@playwright/test';

export class AuthenticationPage {

//Locators class properties 
  private readonly logineAddress: Locator;
  private readonly loginPassword: Locator;
  private readonly loginBtnLogin: Locator; 
  private readonly loginError: Locator;
  private readonly regNameField: Locator;
  private readonly regEmailField: Locator ;
  private readonly btnSignup: Locator;
  private readonly regError: Locator;


// constructor
  constructor(private readonly page: Page) {
    this.page = page;

    //Sign In Locators
    const loginForm = page.locator('form', { hasText: 'Login' });
    this.logineAddress = loginForm.getByRole('textbox', { name: 'Email Address' });
    this.loginPassword = loginForm.getByRole('textbox', { name: 'Password' });
    this.loginBtnLogin = page.getByRole('button', { name: 'Login' });
    this.loginError = loginForm.getByText('Your email or password is incorrect!');
    
    //Register Locators
    const regForm = page.locator('form', { hasText: 'signup' });
    this.regNameField = regForm.getByRole('textbox', { name: 'Name' });
    this.regEmailField = regForm.getByRole('textbox', { name: 'Email Address' });
    this.btnSignup = page.getByRole('button', { name: 'Signup' });
    this.regError = regForm.getByText('Email Address already exist!');
  }


//function Methods
  async enterLoginEmailField(userName: string): Promise<void> {
    await this.logineAddress.fill(userName); 
  }

  async enterLoginPasswordField(password: string): Promise<void> {
    await this.loginPassword.fill(password); 
  }

  async clickLoginButton(): Promise<void> {
    await this.loginBtnLogin.click();
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
}
