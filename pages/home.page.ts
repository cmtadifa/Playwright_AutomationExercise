import { Page, Locator } from '@playwright/test';

export class HomePage {

// constructor
  constructor(private readonly page: Page) {
    this.page = page;
    
  }

    async accessPage(): Promise<void> {
      await this.page.goto('/');
    }

    async selectNavLinks(linkText: string): Promise<void> {
      await this.page.click(`a:has-text("${linkText}")`);
    }

}


