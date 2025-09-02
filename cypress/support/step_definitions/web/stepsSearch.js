const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const HomePage = require("../../../pages/homePage");
const SearchPage = require("../../../pages/searchPage");

Given("que o usuário está na página inicial para busca", () => {
  HomePage.visit("/products");
});

When("ele busca pelo produto {string}", (produto) => {
  HomePage.search(produto);
});

Then("a lista de resultados deve conter {string}", (produto) => {
  SearchPage.validateResults(produto);
});
