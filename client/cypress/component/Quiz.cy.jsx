import React from 'react';
import Quiz from '../../client/src/components/Quiz'; // Adjust the path
import { mount } from 'cypress/react';

describe('Quiz Component', () => {
  it('renders the quiz component', () => {
    mount(<Quiz />);
    cy.get('.quiz-container').should('exist');
    cy.get('button').contains('Start').should('exist');
  });

  it('starts the quiz when the start button is clicked', () => {
    mount(<Quiz />);
    cy.get('button').contains('Start').click();
    cy.get('.question').should('exist');
  });

  it('allows answering a question and moving to the next question', () => {
    mount(<Quiz />);
    cy.get('button').contains('Start').click();
    cy.get('input[type="radio"]').first().click();
    cy.get('button').contains('Next').click();
    cy.get('.question').should('exist');
  });

  it('completes the quiz and displays the score', () => {
    mount(<Quiz />);
    cy.get('button').contains('Start').click();
    for (let i = 0; i < 10; i++) {
      cy.get('input[type="radio"]').first().click();
      cy.get('button').contains('Next').click();
    }
    cy.get('.score').should('exist');
  });

  it('restarts the quiz when the "Start New Quiz" button is clicked', () => {
    mount(<Quiz />);
    cy.get('button').contains('Start').click();
    for (let i = 0; i < 10; i++) {
      cy.get('input[type="radio"]').first().click();
      cy.get('button').contains('Next').click();
    }
    cy.get('button').contains('Start New Quiz').click();
    cy.get('.question').should('exist');
  });
});