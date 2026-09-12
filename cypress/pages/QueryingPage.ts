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
      cy.get('input').should('have.length.at.least', 1);
      cy.get('button').should('have.length', 1).and('be.visible');
    });
  }
}
