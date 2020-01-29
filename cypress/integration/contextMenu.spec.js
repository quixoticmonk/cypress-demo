/// <reference types="Cypress" />

describe('Validate the context menu and alerts', () => {

    it('Select the box to invoke the alert',()=>{

        const stub = cy.stub()


        cy.visit("/context_menu")
        cy.get("h3").contains("Context Menu")
        cy.get(".message-container.message-attached.message-type-info.message-has-description").should("be","invisible")
        cy.get("#hot-spot").rightclick()
        cy.get(".message-container.message-attached.message-type-info.message-has-description").should("be","visible")
        cy.on("window:alert",stub).contains("You selected a context menu")


         })
        
    })
