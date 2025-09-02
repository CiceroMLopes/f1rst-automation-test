const { Given, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("que envio um GET para a API do Trello", () => {
  cy.request("https://api.trello.com/1/actions/592f11060f95a3d3d46a987a").as("apiResponse");
});

Then("a resposta deve ter status 200", () => {
  cy.get("@apiResponse").its("status").should("eq", 200);
});

Then("deve exibir o campo name da estrutura list", () => {
  cy.get("@apiResponse").then((resp) => {
    const nome = resp.body.data.list.name;
    cy.log("Nome da lista: " + nome);
    expect(nome).to.be.a("string").and.not.be.empty;
  });
});
