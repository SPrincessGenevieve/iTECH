let baseUrl = 'http://localhost:3001';

describe('Test 3', () => {
  it('Logout', () => {
    // Open the application
    cy.visit(baseUrl);

    cy.visit(`${baseUrl}/`);
    cy.url().should('include', '/'); // Verify navigation to the dashboard
  });
});
