/// <reference types="Cypress" />

describe('Validate the Add Remove elements page', () => {

    it('Add an element and find count',()=>{
        cy.visit("/add_remove_elements/")
        cy.get("#elements>.added-manually").should("be","invisible")
        cy.get(".example>button").contains("Add Element").click().click().click()
        cy.get("#elements>.added-manually").should("be","visible").should('have.length',3)
        cy.get("#elements>.added-manually").first().click()
        cy.get("#elements>.added-manually").should("be","visible").should('have.length',2)


         })
        
    })
