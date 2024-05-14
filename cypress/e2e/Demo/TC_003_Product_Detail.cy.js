describe ('TC_003_Product_Detail', () => { 
    beforeEach(() =>{
        cy.visit('https://demoblaze.com/index.html')
    })
    it('Product Detail ',() => {
        cy.get('a').contains('Nokia lumia 1520').click()
        cy.get('h2').should('contain','Nokia lumia 1520')

        cy.get('a').should('contain','Add to cart')


      })
    })