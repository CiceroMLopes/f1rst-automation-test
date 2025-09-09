class shoppingCartPage {

   locators = {
    cartButton: "a[href='/view_cart'], .nav a:contains('View Cart')", // mais resiliente
    cartDescription: ".cart_description",
    productQuantity: ".disabled"
  };

  goToCart() {
    cy.contains("View Cart").click();
  }

  validateProductInCart() {
    cy.get(this.locators.cartDescription).should("be.visible");
    cy.get(this.locators.productQuantity).should("have.text", "1");
  }
}

module.exports = new shoppingCartPage();
