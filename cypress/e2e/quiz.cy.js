describe("Tech Quiz End-to-End Test", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:3001/");
  });
  it("completes the quiz and displays the score, then restarts", () => {
    cy.get("button").contains("Start").click();

    cy.get('[data-cy="question"]').should("exist");

    // Answer all questions
    for (let i = 0; i < 10; i++) {
      cy.get("button").contains("1").click();
    }

    // Make sure the quiz ends and the score is displayed
    cy.get(".alert-success").should("exist");
    cy.get("button").contains("Take New Quiz").should("exist");
  });
});
