import { Item } from "semantic-ui-react";

describe("Movie Details Page", () => {
    beforeEach(() => {
        cy.visit('./')
    });
    it ("should be able to add the film to the favourite page",()=>{
        cy.get(".card").eq(2).find("img").click();
    })
    it ("should be able to visit the favourite page while no film was added to favourite",()=>{
        cy.get("ul").eq(0).within(() => {

            cy.get("li").eq(2).click();
            cy.wait(5000)
            cy.url().should("include", `/favorites`);
      
          });
    })
    it ("should be unable to visit the favourite while unlogin",()=>{
        cy.wait(5000)
        cy.get(".card").eq(2).find("button").click();
        cy.get("ul").eq(0).within(() => {

            cy.get("li").eq(2).click();
      
          });
          cy.wait(5000)
            cy.url().should("not.include", `/favorites`);
    })
})