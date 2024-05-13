/// <reference types = "Cypress" />
import ExamplePage  from "../../pages/ExamplePage"
describe ('Open and Assert Modal', () => { 
      beforeEach(() =>{
        const examplePage = new ExamplePage()
        examplePage.openExamplePage()
    })
    it('Submit ',() => {
      cy.get('#simpleModal').click()
      cy.get("#pum_popup_title_1318").should('be.visible' ) 
      cy.get('p').contains('Hi,  a simple modal.')	
      })
})