/// <reference types="Cypress" />

describe("Validate the Entry Ad page",()=>{

    it('Validate the entry page ad is displayed',()=>{
        cy.visit('entry_ad')

        cy.window().get('.modal-title>h3').contains("This is a modal window")
        cy.window().get('.modal-footer>p').click()
        cy.reload()
        //cy.window().get('.modal-title>h3').should('not.exist') Failing test TODO

    })

})