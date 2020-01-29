/// <reference types="Cypress" />

describe('Validating the dynamic loading..',()=>{

    beforeEach(()=>{
        cy.visit("/dynamic_loading")
    })

    it('Validate Example 1',()=>{
        cy.get("#content>.example").contains("Example 1: Element on page that is hidden").click()
        cy.get('button').click()
        cy.get('#finish > h4').contains("Hello World!").should("not.be.visible")
        cy.get('#loading > img',{timeout:10000}).should("not.be.visible")

        cy.get('#finish > h4').contains("Hello World!").should("be.visible")
    })


    
    it('Validate Example 1',()=>{
        cy.get("#content>.example").contains("Example 2: Element rendered after the fact").click()
        cy.get('button').click()
        cy.get('#finish > h4').should("not.exist")
        cy.get('#loading > img',{timeout:10000}).should("not.be.visible")

        cy.get('#finish > h4').contains("Hello World!").should("be.visible")
    })

})