import { Page, Locator } from '@playwright/test';

export class LoginPage {

//Locators class properties 
  private readonly eAddress: Locator;
  private readonly password: Locator;
  private readonly btnLogin: Locator; 

// constructor
  constructor(private readonly page: Page) {
    this.page = page;

    //Sign In Locators
    const loginForm = page.locator('form', { hasText: 'Login' });
    this.eAddress = loginForm.getByRole('textbox', { name: 'Email Address' });
    this.password = loginForm.getByRole('textbox', { name: 'Password' });
    this.btnLogin = page.getByRole('button', { name: 'Login' });
    
  }

    async enterUsernameField(userName: string): Promise<void> {
      await this.eAddress.fill(userName); 
    }

    async enterPasswordField(password: string): Promise<void> {
      await this.password.fill(password); 
    }

    async clickLoginButton(): Promise<void> {
      await this.btnLogin.click();
    }

}


