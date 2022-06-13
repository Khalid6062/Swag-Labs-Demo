const obj={
    foo(){}
}

const spy = cy.spy(obj,'foo').as('anyArgs')

obj.foo()

//assert against the spy directly 
expect(spy).to.be.called
cy.get('@anyArgs').should('always.have.been.calledOn')