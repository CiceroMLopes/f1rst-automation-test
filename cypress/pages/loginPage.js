class LoginPage {

   locators = {
    emailInput: '[data-qa="login-email"]',
    passwordInput: '[data-qa="login-password"]',
    loginButton: '[data-qa="login-button"]',
    loggedInMessage: "Logged in as"
  };

    visit() {
      cy.visit("https://www.automationexercise.com/login");
    }
  
    fillEmail(email) {
      cy.get(this.locators.emailInput).type(email);
    }
  
    fillPassword(password) {
      cy.get(this.locators.passwordInput).type(password);
    }
  
    submit() {
      cy.get(this.locators.loginButton).click();
    }
  
    validateLogin() {
      cy.contains(this.locators.loggedInMessage).should("be.visible");
    }
  }
  
  module.exports = new LoginPage();
  