const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const LoginPage = require("../../../pages/loginPage");

Given("que o usuário está na página de login", () => {
  LoginPage.visit();
});

When("ele preenche o e-mail e senha válidos", () => {
  LoginPage.fillEmail("testef1rst2025@teste.com.br");
  LoginPage.fillPassword("Teste");
});

When("clica no botão de login", () => {
  LoginPage.submit();
});

Then("ele deve visualizar a tela inicial logado", () => {
  LoginPage.validateLogin();
});
