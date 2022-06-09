/// <reference types="cypress"/>

describe('Test set for academy', () => {
    it('Test_01', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('[src="http://automationpractice.com/img/logo.jpg"]')
        .should('be.visible')
        cy.get('#search_query_top')
        .click()
        .type('xxxxxxxxxxxxxxxxxxx')
        cy.submit
        cy.get('.button-search').click()
        cy.contains('No results were found for your search')
        cy.get('[src="http://automationpractice.com/img/logo.jpg"]').click()
        cy.get('a[href="http://automationpractice.com/index.php?id_category=3&controller=category"]')
        .should('be.visible')
    })


    it.only('Test_02', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.login').should('be.visible')
        .click()
        cy.get('#email').type(Cypress.env('username'))
        cy.get('#passwd').type(Cypress.env('password'))
        cy.get('#SubmitLogin').click()
        cy.get('.info-account')
        .should('be.visible')
        .should('contain.text', 'Welcome to your account. Here you can manage all of your personal information and orders.')
        cy.get('.shopping_cart').find("a").eq(0).click()
        cy.get('#center_column').should('be.visible')
        .should('contain', 'Payment')
        cy.get('.logout').click().should('not.exist')
    })

    it('Test_03', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('#search_query_top')
        .click()
        .type('top')
        cy.submit
        cy.get('.button-search').click()
        cy.get('.product_list').eq(0).find('img')
        .click()
        cy.get('#add_to_cart').find('.exclusive')
        .click({force: true})
        cy.get('.icon-chevron-right.right').eq(0).click({force: true})
    })

    it('Test_04', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.ajax_block_product').eq(0).find('img') 
        .click()
        cy.get('.page-product-heading').should('be.visible')

    })
})