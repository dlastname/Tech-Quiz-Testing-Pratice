# Tech Quiz Cypress Testing Practice

## Description

This project enhances a **Tech Quiz application** by integrating **Cypress** for comprehensive **component and end-to-end testing**. The application is built with the **MERN stack**, featuring a **React** front end, a **MongoDB** database, and an **Express.js/Node.js** server. Users can take a quiz of ten random tech-related questions and view their final score upon completion. The focus of this project is on ensuring reliability through automated testing.

A walkthrough video of the testing process can be found in the [Usage](#usage) section.

---

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Technologies Used](#technologies-used)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

---

## Features

- **Tech Quiz Application**
  - Users can start a quiz, answer 10 questions, and view their final score.
  - The quiz automatically moves to the next question after an answer is selected.
  - Users can restart the quiz after completing it.

- **Cypress Testing Suite**
  - **Component Testing**: Ensures that the Quiz component renders correctly and handles state updates properly.
  - **End-to-End Testing**: Simulates a user taking the quiz, verifying question transitions and score display.

---

## Installation

To install the necessary dependencies, run the following command:

```bash
npm install
```

This will install all required packages, including Cypress for testing.

---

## Usage

1. **Start the application** by running:
   ```bash
   npm run start
   ```
   The application will run at `http://localhost:3000` by default.

2. **Run Cypress tests** (see the [Testing](#testing) section for details).

### Walkthrough Video

For a demonstration of the testing process, watch the walkthrough video:

[![Watch the Walkthrough](https://img.youtube.com/vi/YOUR_VIDEO_ID/0.jpg)](https://drive.google.com/file/d/1mJcpfPPuuCNUcThciHrkiRuODGzwbYgl/view?usp=sharing)

---

## Testing

This project includes **both component and end-to-end (E2E) tests** using Cypress.

### Running the Tests

1. **Run all Cypress tests**:
   ```bash
   npm run test
   ```

2. **Run tests in the Cypress UI** (for visual debugging):
   ```bash
   npx cypress open
   ```

### Test Structure

- **Component Tests (`cypress/component/Quiz.cy.jsx`)**
  - Ensures the Quiz component renders correctly.
  - Verifies that questions are displayed properly.
  - Checks if user selections update the component state.

- **End-to-End Tests (`cypress/e2e/quiz.cy.js`)**
  - Simulates a full quiz session.
  - Ensures the quiz starts when the start button is clicked.
  - Verifies that selecting an answer advances to the next question.
  - Confirms that the final score is displayed after completing the quiz.
  - Tests that the quiz can be restarted.

---

## Technologies Used

- **React**: Front-end library for building the UI.
- **Node.js & Express.js**: Backend framework for handling API requests.
- **MongoDB**: NoSQL database for storing quiz questions.
- **Mongoose**: ODM for MongoDB.
- **Cypress**: Testing framework for component and end-to-end tests.
- **JavaScript**: Core programming language for development.

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for more details.

---

## Contributing

Contributions are welcome! Follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes.
4. Push your branch and submit a pull request.

For major changes, please open an issue first to discuss proposed updates.

---

## Questions

If you have any questions, feel free to reach out:

- **Email**: [dllorens28@gmail.com](mailto:dllorens28@gmail.com)
- **GitHub**: [dlastname](https://github.com/dlastname)

---

