let url = 'http://localhost:3001';

describe('Test 1', () => {
  it('Login to Dashboard', () => {
    // Open URL
    cy.visit(url);

    cy.get('input#username').should('be.visible');
    cy.get('input#password').should('be.visible');
    cy.wait(1000); // Add a delay of 1 second
    cy.get('button.login').should('be.visible').click();
  });
});
