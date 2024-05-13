/// <reference types = "Cypress" />
describe ('Data Tables', () => { 
    beforeEach(() =>{
        cy.visit('https://practice-automation.com/tables/')
    })
    it('Table Testing ',() => {
cy.get('.wp-block-table').within(() =>{
    cy.get('td').eq(0).should('contain','Item')
    cy.get('td').eq(1).should('contain','Price')
      })
    })
})