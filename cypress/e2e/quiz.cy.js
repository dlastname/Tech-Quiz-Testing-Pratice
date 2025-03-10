describe('Tech Quiz End-to-End Test', () => {
    it('completes the quiz and displays the score', () => {
      cy.visit('/'); // Visit the home page
      cy.get('button').contains('Start').click(); // Start the quiz
      cy.get('.question').should('exist'); // Verify a question is displayed
  
      // Answer all questions
      for (let i = 0; i < 10; i++) {
        cy.get('input[type="radio"]').first().click(); // Select the first answer
        cy.get('button').contains('Next').click(); // Go to the next question
      }
  
      // Verify the quiz ends and the score is displayed
      cy.get('.score').should('exist');
      cy.get('button').contains('Start New Quiz').should('exist');
    });
  });