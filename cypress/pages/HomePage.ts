export class HomePage {
  visit(): void {
    cy.visit('/');
    cy.get('body').should('be.visible');
  }

  search(productName: string): void {
    cy.intercept('GET', '**/search?q=*').as('productSearch');
    cy.get('#small-searchterms').clear().type(productName);
    cy.get('.search-box-button').click();
    cy.wait('@productSearch').its('response.statusCode').should('eq', 200);
  }

  openCart(): void {
    cy.get('.ico-cart').click();
    cy.url().should('include', '/cart');
  }
}
