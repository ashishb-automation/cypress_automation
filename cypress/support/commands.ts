import { HomePage } from '../pages/HomePage';

declare global {
  namespace Cypress {
    interface Chainable {
      searchForProduct(productName: string): Chainable<void>;
    }
  }
}

Cypress.Commands.add('searchForProduct', (productName: string) => {
  const homePage = new HomePage();
  homePage.visit();
  homePage.search(productName);
});

export {};
