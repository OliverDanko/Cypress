/// <reference types="cypress" />

it('Akademia testing aplikacie', () => {
cy.visit('/kontakt')

// cy.get('.wpcf7-form-control wpcf7-text wpcf7-validates-as-required').click()

// cy.get('#modal-wrap')

// cy.get('[title = "Black"]')

// cy.get('#sf.variant').click()

cy.contains('REFERENCIE')

cy.get('#menu-item-1918').click()

// cy.click({force: true}) kliknut aj ked nieco nieje vidno
});