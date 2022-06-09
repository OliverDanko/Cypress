declare namespace Cypress {
    interface Chainable{
        openPage(name: string):Chainable<Element>
    }
}

declare namespace Cypress {
    interface Chainable{
        registration():Chainable<Element>
    }
}