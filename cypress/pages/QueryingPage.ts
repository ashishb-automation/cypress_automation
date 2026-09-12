export class QueryingPage {
  visit(): void {
    cy.openExample('/commands/querying', 'Querying');
  }

  verifyElementLookup(): void {
    cy.get('#query-btn')
      .should('be.visible')
      .and('contain.text', 'Button');
  }

  verifyContentLookup(): void {
    cy.get('.query-list')
      .contains('bananas')
      .should('have.class', 'third');
  }

  verifyScopedFormLookup(): void {
    cy.get('.query-form').within(() => {
      cy.get('input:first').should('have.attr', 'placeholder', 'Email');
      cy.get('input:last').should('have.attr', 'placeholder', 'Password');
    });
  }
}
