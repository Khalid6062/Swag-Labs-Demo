///<reference types="cypress"/>

describe('myTestSuite',()=>{

    it('Verify title of the page positive',()=>{

        cy.visit('https://www.nopcommerce.com/en/demo')
        cy.title().should('eq','Store Demo - nopCommerce')
    })

    it.only('Verify title of the page negative',()=>{

        cy.visit('https://www.nopcommerce.com/en/demo')
        cy.title().should('eq','Store Demo - nopCommerce')
        cy.title().should('always.have.been.calledOn','Store Demo - nopCommerce')
    })
})