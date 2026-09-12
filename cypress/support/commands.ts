declare global {
  namespace Cypress {
    interface Chainable {
      openExample(path: string, heading: string): Chainable<void>;
    }
  }
}

Cypress.Commands.add('openExample', (path: string, heading: string) => {
  cy.visit(path);
  cy.contains('h1', heading).should('be.visible');
  cy.location('pathname').should('eq', path);
});

export {};
