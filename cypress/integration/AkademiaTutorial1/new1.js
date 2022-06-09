import { recurse } from 'cypress-recurse'

it('gets 7', () => {
  recurse(
    () => cy.wrap(7),
    (n) => n === 7,
  ).should('equal', 7)
})

it('works for 4', () => {
  recurse(
    () => cy.wrap(4),
    (x) => {
      expect(x).to.equal(4)
    },
    ).should('equal', 4)
})
