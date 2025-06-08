describe('Login with empty password', () => {
  it('should show required field error when password is empty', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').clear()
    cy.get('button[type="submit"]').click()

    cy.get('.oxd-input-group__message')
      .should('contain.text', 'Required')
  })
})