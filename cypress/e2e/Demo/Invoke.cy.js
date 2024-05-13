/// <reference types = "Cypress" />
describe ('Execute JavaScript code inside', () => { 
  it('Invoke Function ',() => {
   const fn = (a,b,c) => {
    return a+b+c
   }
   cy.wrap({sum:fn}).invoke('sum',2,5,10).should('be.greaterThan',10).and('be.lessThan',20) 
    })
})