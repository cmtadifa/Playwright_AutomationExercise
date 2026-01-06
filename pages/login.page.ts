import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {

//Locators class properties 
  private readonly eAddress: Locator;
  private readonly password: Locator;
  private readonly btnLogin: Locator; 
  private readonly loginerror: Locator;


// constructor
  constructor(private readonly page: Page) {
    this.page = page;

    //Sign In Locators
    const loginForm = page.locator('form', { hasText: 'Login' });
    this.eAddress = loginForm.getByRole('textbox', { name: 'Email Address' });
    this.password = loginForm.getByRole('textbox', { name: 'Password' });
    this.btnLogin = page.getByRole('button', { name: 'Login' });
    this.loginerror = loginForm.getByText('Your email or password is incorrect!');
    
  }


//function Methods
  async enterUsernameField(userName: string): Promise<void> {
    await this.eAddress.fill(userName); 
  }

  async enterPasswordField(password: string): Promise<void> {
    await this.password.fill(password); 
  }

  async clickLoginButton(): Promise<void> {
    await this.btnLogin.click();
  }

//assertion Methods
  async expectLoginErrorVisible(): Promise<void> {
    await expect(this.loginerror).toBeVisible();
    await expect(this.loginerror).toHaveText('Your email or password is incorrect!');
  }

  async expectInvalidEmail(): Promise<void> {
    const validationMessage = await this.eAddress.evaluate((el: HTMLInputElement) => el.validationMessage);
    expect(validationMessage).toContain("Please include an '@' in the email address.");
  }


}


