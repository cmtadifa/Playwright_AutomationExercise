import { Page, Locator } from '@playwright/test';

export class HomePage {

//Locators class properties 


// constructor
  constructor(private readonly page: Page) {
    this.page = page;

    
  }

//Navbar Locators
private navBarItem(linkText: string): Locator {
  return this.page.getByRole('link', { name: linkText });
}

//function Methods
    async accessPage(): Promise<void> {
      await this.page.goto('/');
    }

    async clickNavLinks(linkText: string): Promise<void> {
      await this.navBarItem(linkText).click();
    }

    async checkNavLinkVisible(linkText: string): Promise<boolean> {
      return await this.navBarItem(linkText).isVisible();
    }

}


