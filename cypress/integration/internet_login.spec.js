/// <reference types="Cypress" />

describe('Validate the login page', () => {

    it('Login with correct credentials',()=>{
        cy.visit("/login")
        cy.get("#username").type("tomsmith")
        cy.get("#password").type("SuperSecretPassword!")
        cy.get(".fa.fa-2x.fa-sign-in").click()
        cy.get("h2").contains("Secure Area")
        cy.get(".icon-2x.icon-signout").click()
        cy.get(".flash.success").contains("You logged out of the secure area!")
 
        })
        
    })
