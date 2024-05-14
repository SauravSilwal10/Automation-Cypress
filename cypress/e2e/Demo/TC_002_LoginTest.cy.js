/// <reference types = "Cypress" />
describe ('TC_002_LoginTest', () => { 
    beforeEach(() =>{
        cy.visit('https://demoblaze.com/index.html')
    })
    it('Login ',() => {
   cy.get('#login2').click()
   cy.get('#loginusername').type('test',{force:true})
   cy.get('#loginpassword').type('test',{force:true})
   cy.get('button').contains('Log in').click()
   cy.get('#nameofuser').should('contain','Welcome test')
   cy.get('a').contains('Log out').click()
   cy.get('#login2').should('contain','Log in')
      })
    })

    