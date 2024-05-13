/// <reference types = "Cypress" />

describe ('Cypress Hover and View Port', () => { 
    beforeEach(() =>{
      cy.visit('https://practice-automation.com/hover/')
    })
    it('Hover ',() => {
        //cy.viewport(600,600)
        cy.viewport('iphone-xr')
      cy.get('#mouse_over').trigger('mouseover')
      cy.get('#mouse_over').should('contain','You did it!')
      })
})