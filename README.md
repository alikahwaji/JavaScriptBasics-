# JavaScript Basics Educational Repository

Welcome to the JavaScript Basics Repository! This repository is designed to help you learn JavaScript from the ground up, with clear, executable code examples demonstrating core concepts and best practices.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- A text editor like [VS Code](https://code.visualstudio.com/)

## Initial Setup

After cloning this repository, navigate into the directory and install dependencies (for linting/formatting):

```bash
npm install
```

## Structure

The repository is organized into modules covering various JavaScript topics:

1. **`01-variables-and-data-types/`**: `let`, `const`, primitive and reference types.
2. **`02-control-flow/`**: Conditionals and loops.
3. **`03-functions/`**: Scopes, closures, arrow functions.
4. **`04-arrays-and-objects/`**: Iteration, destructuring, spread syntax.
5. **`05-classes-and-prototypes/`**: Object-oriented programming in JS.
6. **`06-async-javascript/`**: Promises, async/await.
7. **`07-error-handling/`**: Handling exceptions gracefully.
8. **`08-modules/`**: Code split and organization.
9. **`09-hoisting/`**: Function hoisting, variable hoisting, and the Temporal Dead Zone (TDZ).
10. **`10-real-world-scenarios/`**: Practical, everyday programming challenges including form validation, shopping cart computing, data filtering, and DOM updates.
11. **`git-and-github-basics/`**: Beginner-friendly guides to version control, covering Git installation, local workflows (`add`/`commit`), GitHub collaboration (`push`/`pull`), and branching routines with visual diagrams.

## How to Run Examples

Each module contains JavaScript files that you can run directly using Node.js to see the output.

For example, to run the variables example:

```bash
node 01-variables-and-data-types/index.js
```

We recommend reading the comments in the code and observing the console output to understand what is happening.

## The Logger Utility

Throughout the codebase, you will see a custom logging utility imported from `utils/logger.js`. While it may look like an installed npm package, it is actually a local module built specifically for this repository.

Its main benefits in this codebase include:

- **Visual Clarity:** Formats console output with colors and clear boundaries, making it easier to distinguish different concepts and steps in the terminal.
- **Categorization:** Provides specific methods (`logger.section()`, `logger.step()`, `logger.info()`, `logger.warn()`) to logically group and highlight important information or common pitfalls.
- **Improved Learning Experience:** Separates the structured demonstration output from standard `console.log` calls, significantly improving the reading experience when you run the examples.

## Code Quality

This project enforces modern JavaScript best practices (ES6+) using ESLint and Prettier.

- Check code quality: `npm run lint`
- Format code: `npm run format`
