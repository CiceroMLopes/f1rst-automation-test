class SearchPage {

  locators = {
    addToCartButton: "a.btn.btn-default.add-to-cart",
    modalTitle: ".modal-title"
  };


  validateResults(product) {
    cy.contains(product, { matchCase: false }).should("exist");
  }

  addFirstProductToCart(position) {
    cy.get(this.locators.addToCartButton).eq(position).click();
    cy.get(this.locators.modalTitle).should('have.text','Added!')
  }
}

module.exports = new SearchPage();
