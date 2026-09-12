export class TraversalPage {
  visit(): void {
    cy.openExample('/commands/traversal', 'Traversal');
  }

  verifyActiveBreadcrumb(): void {
    cy.get('.traversal-breadcrumb')
      .children('.active')
      .should('have.length', 1)
      .and('contain.text', 'Data');
  }

  verifyExpectedListPosition(): void {
    cy.get('.traversal-list > li')
      .eq(1)
      .should('contain.text', 'siamese');
  }

  verifyActiveNavigationItem(): void {
    cy.get('.traversal-nav > li')
      .filter('.active')
      .should('have.length', 1)
      .and('contain.text', 'About');
  }

  verifySiblingTabs(): void {
    cy.get('.traversal-pills .active')
      .siblings()
      .should('have.length', 2);
  }
}
