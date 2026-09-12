import { SearchResultsPage } from '../pages/SearchResultsPage';

interface ProductFixture {
  exactProduct: string;
  partialSearch: string;
  missingProduct: string;
}

describe('Product search', () => {
  const results = new SearchResultsPage();
  let products: ProductFixture;

  before(() => {
    cy.fixture<ProductFixture>('products').then((data) => {
      products = data;
    });
  });

  it('finds a product by name', () => {
    cy.searchForProduct(products.exactProduct);
    results.expectSearchHeading();
    results.expectProductVisible(products.exactProduct);
  });

  it('returns matching products for a broader search', () => {
    cy.searchForProduct(products.partialSearch);
    results.expectSearchHeading();
    results.expectResultsAvailable();
  });

  it('shows a clear message when no products match', () => {
    cy.searchForProduct(products.missingProduct);
    results.expectNoResults();
  });
});
