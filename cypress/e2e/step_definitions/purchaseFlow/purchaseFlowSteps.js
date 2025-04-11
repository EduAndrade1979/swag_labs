import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import PurchaseFlowPage from '../../../support/pages/purchaseFlowPage';
import LoginPage from '../../../support/pages/loginPage';
import Utils from '../../../support/utils';

const purchaseFlowPage = new PurchaseFlowPage();
const loginPage = new LoginPage();
const utils = new Utils();

Given('I am on the login page', () => {
  loginPage.visit();
});
When('I enter my username and password', () => {
  loginPage.typeLoginCredencials(
    Cypress.env('username'),
    Cypress.env('password')
  );
});
Then('I should be redirected to the product list page', () => {
  utils.verifyUrlPath('/inventory.html');
});
When('I select a product from the list', () => {
  purchaseFlowPage.selectFirstProductItemList();
});
When('I view the product details', () => {
  utils.verifyUrlPath('/inventory-item.html');
});
When('I add the product to the cart', () => {
  purchaseFlowPage.addToCart();
});
When('I open the cart', () => {
  purchaseFlowPage.openTheCart();
});
When('I proceed to checkout', () => {
  utils.verifyUrlPath('/cart.html');
  purchaseFlowPage.proceedToCheckout();
});
When('I enter my personal information', () => {
  utils.verifyUrlPath('/checkout-step-one.html');
  purchaseFlowPage.typePersonalInformation(
    Cypress.env('firstName'),
    Cypress.env('lastName'),
    Cypress.env('postalCode')
  );
});
When('I continue to the checkout overview and finish purchase', () => {
  utils.verifyUrlPath('/checkout-step-two.html');
  purchaseFlowPage.finishPurchase();
});
When('I finalize the purchase and return to products page', () => {
  utils.verifyUrlPath('/checkout-complete.html');
  purchaseFlowPage.backHomePage();
});

Then('I should be redirected to the inventory page', () => {
  utils.verifyUrlPath('/inventory.html');
});

When('I log out', () => {
  loginPage.logout();
});

Then('I should be redirected to the login page', () => {
  utils.verifyUrlPath('/');
});
