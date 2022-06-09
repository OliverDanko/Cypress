Cypress.Commands.add('openPage', (name) => {

    cy.setCookie('tokenp_', 'b2xpMTY1NDg0MA==').visit('https://www.demoblaze.com/')

})

import { commandTimings } from 'cypress-timings'
commandTimings()


Cypress.Commands.add('registration', () => {
    cy.visit('https://courses.ultimateqa.com/')
    cy.get('a[href = "/users/sign_in"]').eq(0).click()
    cy.get('a[href="/users/sign_up"]').click()
    cy.get('[name="user[first_name]"]').type(Cypress.env("name"))
    cy.get('[name="user[last_name]"]').type(Cypress.env("surname"))
    cy.get('[name="user[email]"]').type((Math.random() + 1).toString(36).substring(7).concat(Cypress.env("username")))
    cy.get('[name="user[password]"]').type(Cypress.env("password"))
    cy.get('[name = "user[terms]"]').eq(1).click()
    cy.get('.g-recaptcha').click()
})