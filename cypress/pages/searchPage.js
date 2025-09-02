class SearchPage {
  validateResults(product) {
    cy.contains(product, { matchCase: false }).should("exist");
  }

  addFirstProductToCart(position) {
    cy.get("a.btn.btn-default.add-to-cart").eq(position).click();
    cy.get('.modal-title').should('have.text','Added!')
  }
}

module.exports = new SearchPage();
