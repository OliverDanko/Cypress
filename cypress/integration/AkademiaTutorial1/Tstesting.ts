import {testClass} from '../../page_objects/testPO'
const startClass = new testClass

it('Testing TS', () => {
    cy.visit('reg')
    cy.openPage('hf')
    startClass.start().end('')

})

it('TC2', () => {
    cy.task('printme')
})