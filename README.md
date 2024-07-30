<img src="./playwright-logo.svg" alt="Playwright" width="200"/>

## Typescript-Playwright 

This repository houses my Playwright test suite for my portfolio website. 
It ensures the functionality across different browsers.

### Table of Contents
- [Installation](#installation)
- [Project Structure](#project-structure)
- [How to Run Tests](#how-to-run-tests)

### Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/portfolio-website-playwright.git
    cd portfolio-website-playwright
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Install TypeScript and Playwright:**
    ```bash
        npm install --save-dev typescript @playwright/test
    ```

4. **Initialize TypeScript configuration:**
    ```bash
        npx tsc --init
    ```
---

### Project Structure

The project structure is organized as follows:
```
portfolio-website-playwright/
├── pages/
│   └── indexPom.ts
├── tests/
│   └── links.test.ts
│   └── ...
├── playwright.config.ts
├── tsconfig.json
└── package.json
```

- **`pages/`**:<br> 
This directory contains Page Object Models (POMs).<br> 
POMs are a design pattern in test automation that creates an object repository for web UI elements.<br>
This helps in reducing code duplication and improving test maintenance.

- **`indexPom.ts`**:<br> 
This file contains the POM for the index page of the portfolio website.<br>
It includes methods and properties that interact with the elements on the index page.

- **`tests/`**:<br>
This directory contains the test files.<br>
Each test file typically corresponds to a specific functionality or page of the website.

- **`links.test.ts`**:<br>
This file contains tests that verify the links on the portfolio website.<br>
It includes tests for checking the domain and subdomain.

- **`playwright.config.ts`**:<br>
This is the configuration file for Playwright.<br>
It includes settings such as the browsers to test against, test directory, timeout settings, and more.<br>
This file helps in customizing the Playwright test runner to suit the needs of the project.

- **`package.json`**:<br>
This file contains metadata about the project, including dependencies, scripts, and other configurations.<br>
It is essential for managing the project's dependencies and running scripts.

- **`tsconfig.json`**:<br>
This is the TypeScript configuration file.<br>
It includes compiler options and settings that control how TypeScript compiles the code.<br>
This file is essential for ensuring that TypeScript code is compiled correctly and efficiently.

---

### How to Run Tests

To run a specific test file, use the following command:

```bash
npx playwright test tests/links.test.ts --headed
```

To run all tests, use:
```bash
npm playwright test
```












