/// <reference types="Cypress" />

describe('Validate the dropdown selections', () => {

    it('Select Option 1',()=>{

        const stub = cy.stub()

        cy.visit("/dropdown")
        cy.get("h3").contains("Dropdown List")
        cy.get("#dropdown").select("Option 1") //select can only be used on a Select html tag
        cy.get('#content>.example>select').select("Option 2") //traverse till the select tag


         })
        
    })
