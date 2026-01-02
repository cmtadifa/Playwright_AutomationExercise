import { Page, Locator } from '@playwright/test';

export class HomePage {

//Locators class properties 
  private readonly eAddress: Locator;


// constructor
  constructor(private readonly page: Page) {
    this.page = page;

    //Sign In Locators
    const loginForm = page.locator('form', { hasText: 'Login' });
    this.eAddress = loginForm.getByRole('textbox', { name: 'Email Address' });
  }

    async accessPage(): Promise<void> {
      await this.page.goto('/');
    }

    async selectNavLinks(linkText: string): Promise<void> {
      await this.page.click(`a:has-text("${linkText}")`);
    }

    async selectUsernameField(userName: string): Promise<void> {
      await this.eAddress.fill(userName); 
    }

}


