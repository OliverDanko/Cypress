/// <reference types="cypress" />

// cy.stub(object, method, replacer)

describe ( 'Test set 1', () => {
    it( 'TC 1', () => {
        const user = {
            getName: (arg) => {
              return arg
            },
          
            getPasswd: (arg) => {
              return arg
            }
        }


        cy.stub(user, 'getName').returns('oli')

        cy.spy(user, 'getPasswd')

        const name = user.getName('igor')

        const passwd = user.getPasswd('oli')


        expect(name).to.eq('oli')
        expect(user.getName).to.be.calledOnce
        expect(user.getName).not.to.be.calledTwice
        expect(user.getName).to.be.calledWith('igor')
        expect(user.getName).to.be.calledWithExactly('igor')
        expect(user.getName).to.be.calledOn(user)
        
        expect(passwd).to.eq('oli')
        expect(user.getPasswd).to.be.calledWith('oli')
        expect(user.getPasswd).to.have.returned('oli')
        expect(user.getPasswd).to.be.calledOnce
    })

    it( 'TC 2', () => {
        const login = {
            getEmail: (x) => {
                return x
            },
            getUserN: (x) => {
                const arr = [];
                for (let i = 0; i < x.length; i++) {
                    arr.push(x[i])
                }
                return arr
            }
        }

        cy.spy(login, 'getUserN').as('spyName')
        const names = ['sdf', 'ghj', 'sadasg']
        for (let i = 0; i < names.length; i++) {
            login.getUserN(names[i])
        }
        const user = login.getUserN('peto')
        console.log(user)
        cy.get('@spyName').its('callCount').should('eq', 4)
    })


})