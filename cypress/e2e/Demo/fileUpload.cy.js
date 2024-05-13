describe ('Cypress upload in Json', () => { 
    beforeEach(() =>{
      cy.visit('https://the-internet.herokuapp.com/upload')
  })
  it('upload in json ',() => {
    cy.get('#file-upload').selectFile('cypress/fixtures/example.json')
    cy.get('#file-submit').click()
    cy.get('h3').should('contain','File Uploaded!')
    })
})