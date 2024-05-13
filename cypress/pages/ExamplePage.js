import cypress from "cypress"

class ExamplePage{
    openExamplePage(){
        cy.visit('/')
    }
    assertUrl(){
        const baseUrl = Cypress.config('baseUrl')
        cy.url().should('contain',`${baseUrl}`)
    }
}

export default ExamplePage 