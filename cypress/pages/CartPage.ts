export class CartPage {
  expectProduct(productName: string): void {
    cy.get('.cart-item-row').contains('.product-name', productName).should('be.visible');
  }

  expectQuantity(quantity: number): void {
    cy.get('.qty-input').should('have.value', String(quantity));
  }

  removeProduct(): void {
    cy.get('.remove-btn').click();
    cy.get('.no-data').should('contain.text', 'Your Shopping Cart is empty');
  }
}
