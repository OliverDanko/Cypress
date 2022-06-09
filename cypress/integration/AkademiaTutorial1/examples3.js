/// <reference types="cypress" />

before(() => {
    cy.visit('https://www.demoblaze.com/')

})
    // eq(n) - nty objekt zo zoznamu, indexovanie ako v pythone
    // find('img') - specifikovanie vyhladania
    // {timeout:15000} ak neprejde, skusa x sekund
    // .last(), .last() - vytiahne posledny element
    // .prev(), .next() vytiahne element za, pred
    // .filter(card-block1) - vyfiltruje elementy, ktore obsahuju card-block1
    // .not(card-block1) - vyfiltruje elementy, ktore neobsahuju card-block1
    // .children() - podelementy
    // .parent() - naspat do parenta
    // .parent(#id) - naspat do #id

describe('Test set 1', () =>{
    it('Akademia testing aplikacie1', () => {
        cy.get('a[href="prod.html?idp_=1"] img')
        .should('be.visible')

        cy.get('a[href="prod.html?idp_=1"]')
        .last()
        .should('contain.text', 'Samsung galaxy s6', {timeout:15000})


        cy.contains('Samsung galaxy s6')
        .should('have.text', 'Samsung galaxy s6')

        cy.get('#cat').should('have.text', 'CATEGORIES')

        cy.get('.card-block')
        .eq(0)
        .children()
        .eq(1)
        .parent()
    });
    
    it('Akademia testing aplikacie2', () => {
        // cy.contains('Samsung galaxy s6').click()
        // cy.get('[src="imgs/galaxy_s6.jpg"]')
        // .should('be.visible')
    });

    // it.only('Over',() => {
    //     cy.visit('https://www.demoblaze.com/')

    //     cy.get('a[href="prod.html?idp_=1"] img').then( task => {
    //         expect(task[0]).to.contain('')
    //     })

    // })
});