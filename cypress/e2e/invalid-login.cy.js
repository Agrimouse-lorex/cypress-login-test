describe('Invalid Login Test', () => {
  it('should show error message with wrong credentials', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get('input[name="username"]').type('WrongUser')
    cy.get('input[name="password"]').type('WrongPass123')
    cy.get('button[type="submit"]').click()

    cy.get('.oxd-alert-content-text')
      .should('contain.text', 'Invalid credentials')
  })
})