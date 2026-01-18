import { Page, Locator, expect } from '@playwright/test';

export class CheckoutPage {

//Locators class properties 
  private readonly logineAddress: Locator;
  private readonly loginPassword: Locator;
  private readonly loginBtn: Locator; 
  private readonly loginError: Locator;
    


// constructor
  constructor(private readonly page: Page) {
    this.page = page;

    //Sign In Locators
    const loginForm = page.locator('form', { hasText: 'Login' });
    this.logineAddress = loginForm.getByRole('textbox', { name: 'Email Address' });
    this.loginPassword = loginForm.getByRole('textbox', { name: 'Password' });
    this.loginBtn = page.getByRole('button', { name: 'Login' });
    this.loginError = loginForm.getByText('Your email or password is incorrect!');

  }


//function Methods
  async enterLoginEmailField(userName: string): Promise<void> {
    await this.logineAddress.fill(userName); 
  }


//assertion Methods
  async expectLoginErrorVisible(): Promise<void> {
    await expect(this.loginError).toBeVisible();
    await expect(this.loginError).toHaveText('Your email or password is incorrect!');
  }

  
}
