

Cypress.Commands.add('visitLoginPage',()=>{
    cy.visit('https://www.saucedemo.com/')
})

Cypress.Commands.add('login', (username, password) => {
    cy.get('[placeholder="Username"]').clear().type(username);
    cy.get('[placeholder="Password"]').clear().type(password);
    cy.get('[data-test="login-button"]').click()
})

Cypress.Commands.add('emptyUsername',(password)=>{
    cy.get('[placeholder="Password"]').clear().type(password);
    cy.get('[data-test="login-button"]').click()
})

Cypress.Commands.add('logout', () => {
    cy.get('#react-burger-menu-btn').click({ force: true })
    cy.get('#logout_sidebar_link').click({force: true})
})

Cypress.Commands.add('emptyPassword',(userName)=>{
    cy.get('[placeholder="Username"]').clear().type(userName);
    cy.get('[data-test="login-button"]').click()
})
