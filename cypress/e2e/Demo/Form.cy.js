    /// <reference types = "Cypress" />

    describe ('Forms , Buttons ,&  Checkbox', () => { 
    beforeEach(() =>{
      cy.visit('https://practice-automation.com/form-fields/')
    })
    it('Submit ',() => {
      // cy.get('[data-test="contact-form"]').should('be.visible')
      cy.getById('name').type('Messi')
      cy.contains('Water').click()
      cy.contains('Red').click()
      cy.get('#email').type('messi@gmail.com')
      cy.get('#message').type('This is message')
      cy.get('#submit-btn').click()  
      })
})
