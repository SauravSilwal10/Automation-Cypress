/// <reference types = "Cypress" />
describe ('TC_001_Smoke_Test', () => { 
    beforeEach(() =>{
        cy.visit('https://demoblaze.com/index.html')
    })
    it('Homepage ',() => {
    cy.get('.nav-link').should('be.visible')
    cy.get('#cat').should('be.visible')
    cy.get('#fotcont').should('be.visible')
      })
    })