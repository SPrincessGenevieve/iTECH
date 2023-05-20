let baseUrl = 'http://localhost:3001';

describe('Test 2', () => {
  it('Navigate to Pages', () => {
    // Open the login page
    cy.visit(baseUrl);

    // Check if navigation links exist and navigate
    cy.visit(`${baseUrl}/dashboard`);
    cy.url().should('include', '/dashboard'); // Verify navigation to the dashboard

    cy.visit(`${baseUrl}/enroll`);
    cy.url().should('include', '/enroll'); // Verify navigation to the enroll page

    cy.visit(`${baseUrl}/enrollees`);
    cy.url().should('include', '/enrollees'); // Verify navigation to the enrollees page
  });
});