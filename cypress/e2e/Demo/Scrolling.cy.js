describe ('Scolling in Cypress', () => { 
      beforeEach(() =>{
        cy.visit('https://practice-automation.com/')
    })
    it('scolling ',() => {
     cy.get('footer').scrollIntoView()
      })
})