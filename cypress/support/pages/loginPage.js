class LoginPage {
  getElements() {
    return {
      username: '#user-name',
      password: '#password',
      loginButton: '#login-button',
      errorMessage: '[data-test="error"]',
      burguerButtonMenu: '#react-burger-menu-btn',
      logoutSidebarLink: '[data-test="logout-sidebar-link"]',
    };
  }

  visit() {
    cy.visit(Cypress.env('baseUrl'));
  }

  logout() {
    cy.get(this.getElements().burguerButtonMenu).click();
    cy.get(this.getElements().logoutSidebarLink).click();
    cy.url().should('include', Cypress.env('baseUrl'));
  }

  typeLoginCredencials(username, password) {
    if (username) cy.get(this.getElements().username).clear().type(username);

    if (password) cy.get(this.getElements().password).clear().type(password);

    cy.get(this.getElements().loginButton).click();
  }

  verifyErrorMessage() {
    cy.get(this.getElements().errorMessage).should('be.visible');
  }
}
export default LoginPage;
