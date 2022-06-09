/// <reference types="cypress" />

describe ('Test set 1', () => {
    it ('TC1', () => {
        cy.visit('https://www.demoblaze.com/')

        cy.setCookie('tokenp_', 'b2xpMTY1NDE0Ng==')

        cy.intercept('GET', 'https://api.demoblaze.com/entries').as('Entries')
        cy.wait('@Entries').its('state')
        .should('eq', 'Complete')
        cy.get('@Entries').then(code => {
            expect(code.response.statusCode)
            .to.eq(200)
        })

        const tasks  = ['Ssad', 'Tasd', 'Basd']
        const dict = {
            Name: 'Eric',
            Job: 'Free',
            Skills: 'JS'
        }
        
        let taskname = tasks
        let tasknames = Cypress._.map(tasks, '1')
        let dictionar = Cypress._.mapKeys(dict)
        console.log(taskname)
        console.log(tasknames)
        console.log(dictionar)
    })

})