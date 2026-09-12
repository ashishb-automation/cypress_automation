import { NetworkRequestsPage } from '../pages/NetworkRequestsPage';

describe('Network requests', () => {
  const networkPage = new NetworkRequestsPage();

  beforeEach(() => {
    networkPage.visit();
  });

  it('shows data returned by a GET request', () => {
    networkPage.requestComment();
  });

  it('confirms a successful POST request', () => {
    networkPage.createComment();
  });

  it('validates the comment API contract directly', () => {
    cy.request('GET', 'https://jsonplaceholder.cypress.io/comments/1').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.include.keys('id', 'postId', 'name', 'email', 'body');
      expect(response.body.id).to.eq(1);
      expect(response.body.email).to.be.a('string').and.not.be.empty;
    });
  });
});
