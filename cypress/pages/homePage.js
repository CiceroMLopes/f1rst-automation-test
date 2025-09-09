class HomePage {

   locators = {
    searchInput: "#search_product",
    searchButton: "#submit_search"
  };

  visit(path = "/products") {
    cy.visit(Cypress.config("baseUrl") + path);
  }

  search(produto) {
    cy.get(this.locators.searchInput).type(produto);
    cy.get(this.locators.searchButton).click();
  }
}

module.exports = new HomePage();