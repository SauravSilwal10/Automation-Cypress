/// <reference types = "Cypress" />
describe ('Cypress clear Input', () => { 
    beforeEach(() =>{
      cy.visit('https://practice-automation.com/form-fields/')
  })
  it('Clear Input ',() => {
    cy.get('#name').type('123345')
    cy.wait(2000)
    cy.get('#name').clear().type("Messi")
    })
})