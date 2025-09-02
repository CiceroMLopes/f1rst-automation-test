const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const HomePage = require("../../../pages/homePage");
const SearchPage = require("../../../pages/searchPage");
const ShoppingCartPage = require("../../../pages/shoppingCartPage");

Given("que o usuário está na página inicial", () => {
    HomePage.visit();
});

When("ele busca por {string}", (produto) => {
    HomePage.search(produto);
});

When("adiciona o primeiro produto ao carrinho", () => {
    SearchPage.addFirstProductToCart(0);
});

Then("o produto deve estar visível na tela de checkout", () => {
    ShoppingCartPage.goToCart();
    ShoppingCartPage.validateProductInCart();
});
