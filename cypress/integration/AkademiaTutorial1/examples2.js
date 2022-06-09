/// <reference types="cypress" />

// it.only - spusti sa len ten test

// describe - test set

// it.skip - test sa nevykona

// before - vykona sa pred zaciatkom testov

// beforeEach - vykona sa pred kazdym jednym testom

// after - vykona sa po testoch

// afterEach - vykona sa po kazdom jednom teste

before(() => {
    cy.visit('https://www.demoblaze.com/')

})


describe('Test set 1', () =>{
    it('Akademia testing aplikacie1', () => {
    
    });
    
    it('Akademia testing aplikacie2', () => {
    
    });

});

describe('Test set 2', () =>{
    it('Akademia testing aplikacie1', () => {
    
    });
    
    it('Akademia testing aplikacie2', () => {
    
    });

});