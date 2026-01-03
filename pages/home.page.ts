import { Page, Locator } from '@playwright/test';

export class HomePage {

//Locators class properties 
  private readonly eAddress: Locator;
  private readonly password: Locator;

// constructor
  constructor(private readonly page: Page) {
    this.page = page;

    //Sign In Locators
    const loginForm = page.locator('form', { hasText: 'Login' });
    this.eAddress = loginForm.getByRole('textbox', { name: 'Email Address' });
    this.password = loginForm.getByRole('textbox', { name: 'Password' });
  }

    async accessPage(): Promise<void> {
      await this.page.goto('/');
    }

    async selectNavLinks(linkText: string): Promise<void> {
      await this.page.click(`a:has-text("${linkText}")`);
    }

    async enterUsernameField(userName: string): Promise<void> {
      await this.eAddress.fill(userName); 
    }

    async enterPasswordField(password: string): Promise<void> {
      await this.password.fill(password); 
    }

}


