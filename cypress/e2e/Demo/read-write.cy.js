/// <reference types = "Cypress" />

describe ('Cypress Files', () => { 
    it('Read/Write into Json Files ',() => {
      cy.writeFile('test-data/data.json',{name:'Peter',email:'peter@email.com'})


      cy.readFile('test-data/data.json').then((user) =>{
        expect(user.name).to.equal('Peter')
        expect(user.email).to.equal('peter@email.com')
      })
      })
      it('Read/Write into Plain Files ',() => {
        cy.writeFile('test-data/plain.txt', 'Hello world ','ascii')
      })
})