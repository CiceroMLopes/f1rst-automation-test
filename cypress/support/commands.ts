/// <reference types="cypress" />

const loginEmailInput = '[data-qa="login-email"]';
const loginPasswordInput = '[data-qa="login-password"]';
const loginButton = '[data-qa="login-button"]';
const loggedInText = 'Logged in as';


declare namespace Cypress {
    interface Chainable<Subject = any> {
      login(email: string, password: string): Chainable<void>;
    }
  }
  
  Cypress.Commands.add('login', (email: string, password: string) => {
    cy.visit('/login');
    cy.get(loginEmailInput).type(email);
    cy.get(loginPasswordInput).type(password, { log: false });
    cy.get(loginButton).click();
    cy.contains(loggedInText).should('be.visible');
  });
  