import React from 'react';
import Quiz from '../../client/src/components/Quiz';
import { mount } from 'cypress/react';

describe('Quiz Component', () => {
  beforeEach(() => {
    cy.intercept({
        method: 'GET',
        url: '/api/questions/random'
      },
      {
        fixture: 'questions.json',
        statusCode: 200
      }
      ).as('getRandomQuestion')
    });

  it('shourld start the quiz when the start button is pressed', () => {
    mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();
    cy.get('[data-cy="question"]').should('be.visible');
    cy.get('h2').should('not.be.empty');
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
      cy.get('button').contains('1').click();
    }
    cy.get('.alert-success').should('exist');
  });

  it('restarts the quiz when the "New Quiz" button is clicked', () => {
    mount(<Quiz />);
    cy.get('button').contains('Start').click();
    for (let i = 0; i < 10; i++) {
      cy.get('button').contains('1').click();
    }
    cy.get('button').contains('Take New Quiz').click();
    cy.get('.question').should('exist');
  });
});