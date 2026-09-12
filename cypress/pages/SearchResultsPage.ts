export class SearchResultsPage {
  expectSearchHeading(): void {
    cy.get('h1').should('contain.text', 'Search');
  }

  expectProductVisible(productName: string): void {
    cy.get('.product-item')
      .contains('.product-title', productName, { matchCase: false })
      .should('be.visible');
  }

  expectResultsAvailable(): void {
    cy.get('.product-item').its('length').should('be.greaterThan', 0);
  }

  expectNoResults(): void {
    cy.get('.no-result').should('contain.text', 'No products were found');
  }

  addProductToCart(productName: string): void {
    cy.intercept('POST', '**/addproducttocart/**').as('addToCart');

    cy.get('.product-item')
      .filter(`:contains("${productName}")`)
      .first()
      .within(() => {
        cy.get('.product-box-add-to-cart-button').click();
      });

    cy.wait('@addToCart').its('response.statusCode').should('eq', 200);
    cy.get('.bar-notification.success').should('be.visible');
  }
}
