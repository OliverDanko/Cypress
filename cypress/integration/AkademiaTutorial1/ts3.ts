
describe('Test set 1', () =>{
    
    it.only('SignUp', () => {
        var email = (Math.random() + 1).toString(36).substring(7).concat(Cypress.env("username"))
        cy.visit('https://courses.ultimateqa.com/')
        cy.get('a[href = "/users/sign_in"]').eq(0).click()
        cy.get('a[href="/users/sign_up"]').click()
        cy.get('[name="user[first_name]"]').type(Cypress.env("name"))
        cy.get('[name="user[last_name]"]').type(Cypress.env("surname"))
        cy.get('[name="user[email]"]').type(email)
        cy.get('[name="user[password]"]').type(Cypress.env("password"))
        cy.get('[name = "user[terms]"]').eq(1).click()
        cy.get('.g-recaptcha').click()
        cy.wait(10000)
        cy.request({
            method: 'POST',
            url: 'https://mailosaur.com/api/messages/search?server=32kznrvj',
            headers: {
                authorization: 'Basic ' + Buffer.from('hOB6i2qlC22IS3j6').toString('base64')
            },
            body: {
                    "sentTo": email,
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