# Cypress Test Automation

Hello! This was a practice automation project using Cypress.

- To Prepare the environment please refer to the [Environment Setup Guide](#environment-setup-guide).

## Covered Test Cases

  <ul>
   <li>Validate login</li>
   <li>Validate add to cart</li>
   <li>Validate cart page</li>
  </ul>

## Environment Setup Guide

1. Download and Install nodeJS from https://nodejs.org/en/download/
2. Go to This PC → Properties → Advanced System Settings → Environment Variables → System Variables → Path
3. Click edit and check if nodeJS is available for the path variable
4. Open command prompt and run the following commmands and they should return a version number
   1. node --version
   2. npm --version
5. Download and Install Visual Studio Code
6. If package.json is not available run the following command
   npm -i init
7. Then install cypress by running the following command
   npm install cypress --save -dev
8. To open cypress use the following command
   npx cypress open
9. To run your test cases through command prompt use the following commands
   npx cypress run # this will run the program in headless mode
   npx cypress run --headed # this will run the program in headed mode
   npx cypress run --spec cypress/e2e/mytest.cy.js --headed # this will run the defined specification file
   npx cypress run --spec cypress/e2e/mytest.cy.js --headed --browser chrome # this will run the defined specification file in the defined browser
10. add "/// <reference types="Cypress" />" to the command.js file in support which allows us to leverage VS Code Intellisense for the autocompletion
11. To use Xpaths as locators in cypress we need to install a plugin (cypress-xpath) from https://github.com/cypress-io/cypress/tree/develop/npm/xpath
    after installation add
    "require('@cypress/xpath');
    /// <reference types="cypress-xpath" />" to the command.js file in support
