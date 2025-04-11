class utils {
  verifyUrlPath(expectedPath) {
    cy.location('pathname').should('eq', expectedPath);
  }
}
export default utils;
