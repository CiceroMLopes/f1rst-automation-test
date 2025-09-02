class LoginPage {
    visit() {
      cy.visit("https://www.automationexercise.com/login");
    }
  
    fillEmail(email) {
      cy.get('[data-qa="login-email"]').type(email);
    }
  
    fillPassword(password) {
      cy.get('[data-qa="login-password"]').type(password);
    }
  
    submit() {
      cy.get('[data-qa="login-button"]').click();
    }
  
    validateLogin() {
      cy.contains("Logged in as").should("be.visible");
    }
  }
  
  module.exports = new LoginPage();
  