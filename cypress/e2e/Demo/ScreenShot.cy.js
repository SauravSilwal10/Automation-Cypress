/// <reference types = "Cypress" />

describe ('Cypress ScreenShot', () => { 
    beforeEach(() =>{
      cy.visit('https://www.example.com')
    })
    it('Full page ScreenShot ',() => {
      cy.screenshot({overwrite : true})
      })
      it('Sinlge page ScreenShot ',() => {
        cy.get('h1').screenshot({overwrite : true})
        cy.get('h1').should('have.length',1)
        })

})