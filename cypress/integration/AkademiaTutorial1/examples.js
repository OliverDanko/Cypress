/// <reference types="cypress" />

it('Akademia testing aplikacie', () => {
cy.visit('https://demoqa.com/');

// cy.get('.wpcf7-form-control wpcf7-text wpcf7-validates-as-required').click()

// cy.get('#modal-wrap')

// cy.get('[title = "Black"]')

// cy.get('#sf.variant').click()

cy.contains('Elements');

cy.get('.card-up').eq(0).click();

cy.get('#item-0').click();

cy.get('#userName').click().type('Oliver Danko');

// cy.click({force: true}) kliknut aj ked nieco nieje vidno
});