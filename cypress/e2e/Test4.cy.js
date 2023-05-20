describe('Test 4', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3001/enroll');

    });
  
    it('should select options in all select elements in adding subjects', () => {

      cy.wait(2000); 

      cy.get('.year').click();
      cy.get('.year').within(() => {

        cy.contains('option').click({ force: true });
      });
    
      cy.get('.semester').click();
      cy.get('.semester').within(() => {
        cy.contains('option').click({ force: true });
      });

      cy.get('.subject').click();
      cy.get('.subject').within(() => {

        cy.contains('option').click({ force: true });
      });

      cy.get('.faculty').click();
      cy.get('.faculty').within(() => {

        cy.contains('option').click({ force: true });
      });

      cy.get('.sched').click();
      cy.get('.sched').within(() => {

        cy.contains('option').click({ force: true });
      });

    });
  });
  