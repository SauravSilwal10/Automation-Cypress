/// <reference types = "Cypress" />

describe ('Cypress E2E Testing Demo', () => { 
  beforeEach(() =>{
    cy.visit('https://www.example.com/')
  })
  afterEach(() =>{
    cy.log('Running')
  })
  
  it('Assert',() => {
    cy.url().should('contain', 'example.com')
  })  
 //Assert for Title
  it(' Title Assert',() => {
    cy.title().should('contain', 'Example Domain')
  })  
  // Element Assert
  it.only(' Assert Element',{retries:3},() => {
    cy.get('h1').should('be.visible')
    cy.wait(2000)
    cy.get('p').should('be.visible')
  }) 
  it('Reload and Logs',() => {
    cy.log('Before Log')
    cy.reload()
    cy.log('After Reloload')
  }) 
})