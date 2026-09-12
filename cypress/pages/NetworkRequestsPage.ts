export class NetworkRequestsPage {
  visit(): void {
    cy.openExample('/commands/network-requests', 'Network Requests');
  }

  requestComment(): void {
    cy.intercept('GET', '**/comments/*').as('getComment');
    cy.get('.network-btn').click();

    cy.wait('@getComment').then(({ response }) => {
      expect(response, 'GET response').to.exist;
      expect(response?.statusCode).to.be.oneOf([200, 304]);
      expect(response?.body).to.include.keys('id', 'name', 'email', 'body');
    });

    cy.get('.network-comment').should('not.be.empty');
  }

  createComment(): void {
    cy.intercept('POST', '**/comments').as('postComment');
    cy.get('.network-post').click();

    cy.wait('@postComment').then(({ request, response }) => {
      expect(request.body, 'POST request body').to.be.an('object');
      expect(response?.statusCode).to.eq(201);
      expect(response?.body).to.have.property('id');
    });

    cy.get('.network-post-comment').should('contain.text', 'POST successful');
  }
}
