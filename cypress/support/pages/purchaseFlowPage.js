class PurchaseFlowPage {
  getElements() {
    return {
      pageTitle: '[data-test="title"]',
      inventoryItem: '[data-test="item-4-title-link"]',
      addToCartButton: '[data-test="add-to-cart"]',
      shoppingCartBadge: '[data-test="shopping-cart-badge"]',
      shoppingCartLink: '[data-test="shopping-cart-link"]',
      checkoutButton: '[data-test="checkout"]',
      firstnameField: '[data-test="firstName"]',
      lastnameField: '[data-test="lastName"]',
      zipCodeField: '[data-test="postalCode"]',
      continueCheckoutButton: '[data-test="continue"]',
      finishpurchaseButton: '[data-test="finish"]',
      backHomeButton: '[data-test="back-to-products"]',
    };
  }

  visit() {
    cy.visit(`${Cypress.env('baseUrl')}inventory.html`);
  }

  selectFirstProductItemList() {
    cy.get(this.getElements().inventoryItem).first().click();
  }

  addToCart() {
    cy.get(this.getElements().addToCartButton).click();
  }

  openTheCart() {
    cy.get(this.getElements().shoppingCartBadge).should('be.visible');
    cy.get(this.getElements().shoppingCartLink).click();
  }

  proceedToCheckout() {
    cy.get(this.getElements().checkoutButton).click();
  }

  typePersonalInformation(firstName, lastName, postalCode) {
    cy.log('olha: ', firstName);
    cy.get(this.getElements().firstnameField).type(firstName);
    cy.get(this.getElements().lastnameField).type(lastName);
    cy.get(this.getElements().zipCodeField).type(postalCode);
    cy.get(this.getElements().continueCheckoutButton).click();
  }

  finishPurchase() {
    cy.get(this.getElements().finishpurchaseButton).click();
  }

  backHomePage() {
    cy.get(this.getElements().backHomeButton).click();
  }
}
export default PurchaseFlowPage;
