/// <reference types="Cypress" />

describe('Validate the ability to select the checkbox', () => {

    it('Validate the selected checkbox and uncheck it',()=>{

        cy.visit('/checkboxes')
        cy.get('input:checkbox').should('have.length',2)
        cy.get('#checkboxes > :nth-child(3)').click()
        cy.get('input:checkbox:checked').should('have.length',0) //jquery sequence to check count
        cy.get('#checkboxes > :nth-child(1)').click()
        cy.get('#checkboxes > :nth-child(3)').click()
        cy.get('input:checkbox:checked').should('have.length',2)
         })
        
    })
