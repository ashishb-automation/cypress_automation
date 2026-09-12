export class ActionsPage {
  visit(): void {
    cy.openExample('/commands/actions', 'Actions');
  }

  enterEmail(email: string): void {
    cy.get('.action-email')
      .clear()
      .type(email)
      .should('have.value', email);
  }

  chooseAvailableOptions(): void {
    cy.get('.action-checkboxes [type="checkbox"]')
      .not('[disabled]')
      .first()
      .check()
      .should('be.checked');

    cy.get('.action-radios [type="radio"]')
      .not('[disabled]')
      .first()
      .check()
      .should('be.checked');
  }

  selectFruit(label: string, value: string): void {
    cy.get('.action-select')
      .select(label)
      .should('have.value', value);
  }

  submitCoupon(code: string): void {
    cy.get('.action-form').within(() => {
      cy.get('[type="text"]').clear().type(code);
      cy.root().submit();
    });

    cy.get('.action-form')
      .next()
      .should('contain.text', 'Your form has been submitted!');
  }
}
