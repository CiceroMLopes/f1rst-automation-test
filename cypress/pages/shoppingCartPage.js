class shoppingCartPage {
  goToCart() {
    cy.contains("View Cart").click();
  }

  validateProductInCart() {
    cy.get(".cart_description").should("be.visible");
    cy.get(".disabled").should("have.text", "1");
  }
}

module.exports = new shoppingCartPage();
