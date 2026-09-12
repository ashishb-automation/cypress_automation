import { CartPage } from '../pages/CartPage';
import { HomePage } from '../pages/HomePage';
import { SearchResultsPage } from '../pages/SearchResultsPage';

describe('Shopping cart', () => {
  const homePage = new HomePage();
  const results = new SearchResultsPage();
  const cart = new CartPage();
  const productName = 'Apple MacBook Pro';

  it('adds a searched product to the cart', () => {
    cy.searchForProduct(productName);
    results.addProductToCart(productName);

    homePage.openCart();
    cart.expectProduct(productName);
    cart.expectQuantity(1);
  });

  it('removes the product and shows an empty cart', () => {
    cy.searchForProduct(productName);
    results.addProductToCart(productName);

    homePage.openCart();
    cart.expectProduct(productName);
    cart.removeProduct();
  });
});
