class HomePage {
  visit(path = "/products") {
    cy.visit(Cypress.config("baseUrl") + path);
  }

  search(produto) {
    cy.get("#search_product").type(produto);
    cy.get("#submit_search").click();
  }
}

module.exports = new HomePage();