Cypress.Commands.add('getByTestData',(selector) =>{
    return cy.get(`[data-test=" ${selector}"]`)
})
Cypress.Commands.add('getByClass',(selector) =>{
    return cy.get(`.${selector}`)
})

Cypress.Commands.add('getById',(selector) =>{
    return cy.get(`#${selector}`)
})