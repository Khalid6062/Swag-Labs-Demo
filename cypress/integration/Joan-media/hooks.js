//Hooks are from mocha


/*Order
    1-before -> Executed once, as soon as the first TS
    2-beforeEach -> Executed before EACH TS
    3-testExecution
    4-afterEach -> Executed after EACH TS
    5-after -> Executed once, as soon as the last TS
*/

describe('Hook demo', ()=>{

    before(()=>{
        cy.log('Before')
    })

    beforeEach(()=>{
        cy.log('Before Each')
    })

    it('TC #1',()=>{
        cy.log('TC #1')
    })

    it('TC #2',()=>{
        cy.log('TC #2')
    })

    it('TC #3',()=>{
        cy.log('TC #3')
    })

    it('TC #4',()=>{
        cy.log('TC #4')
    })

    afterEach(()=>{
        cy.log('After Each')
    })

    after(()=>{
        cy.log('After')
    })
})