
describe('Test set 1', () =>{
    
    it.only('SignUp', () => {
        cy.registration()
        cy.wait(10000)
        cy.request({
            method: 'POST',
            url: 'https://mailosaur.com/api/messages/search?server=32kznrvj',
            headers: {
                authorization: 'Basic ' + Buffer.from('hOB6i2qlC22IS3j6').toString('base64')
            },
            body: {
                    "sentTo": Cypress.env("username"),
                }
        }).then( task => {
            expect(task.body.items[0].subject).to.contain("Your Ultimate QA course details.")
            cy.wait(10000)
            cy.request({
                method: 'DELETE',
                url: 'https://mailosaur.com/api/messages/'.concat(task.body.items[0].id),
                headers: {
                    authorization: 'Basic ' + Buffer.from('hOB6i2qlC22IS3j6').toString('base64')
                },
            })
        })
    });
})