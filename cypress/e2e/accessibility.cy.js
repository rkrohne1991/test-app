describe('The Home Page Accessibility', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.injectAxe()
  })

  it('Has no detectable a11y violations on load', () => {
    cy.checkA11y()
  })

})
