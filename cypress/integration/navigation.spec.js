let movies;
const movieId = 497582; // Enola Holmes movie id
let reviews;

describe("Navigation", () => {
  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")
      .then((response) => {
        movies = response.results;
      });
    cy.request(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${Cypress.env(
        "TMDB_KEY"
      )}`
    )
      .its("body")
      .then((response) => {
        
        reviews = response.results;
      });
  });

  describe("From the home page", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.wait(10000)

    });
    it("should navigate to the movie details page and change browser URL", () => {
     
      cy.get(".card").eq(1).find("img").click();
      cy.url().should("include", `/movies/${movies[1].id}`);
      cy.get("h2").contains(movies[1].title);
    });
    it("should allow navigation from site header", () => {
     
      cy.get("nav").find("li").eq(2).find("a").click();
      cy.url().should("include", `/favorites`);
      
      cy.get("nav").find("li").eq(1).find("a").click();
      cy.url().should("not.include", `/favorites`);
      cy.get("h2").contains("No. Movies");
      cy.get("nav").find("li").eq(2).find("a").click();
      cy.get("nav.navbar-brand").find("a").click();
      cy.url().should("not.include", `/favorites`);
      cy.get("h2").contains("No. Movies");
    });
  });
  
  describe("From the Favorites page", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.wait(10000)
      cy.get(".card").eq(0).find("button").click();
      cy.get("nav").find("li").eq(2).find("a").click();
    });
    it("should navigate to the movies detail page and change the browser URL", () => {
      
      cy.get("ul").eq(0).within(() => {

        cy.get("li").eq(2).click();
        cy.wait(5000)
        cy.url().should("include", `/favorites`);
  
      });
    });
  });
  describe("The Go Back button", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.wait(10000)
      
    });
    it("should navigate from home page to movie details and back", () => {
      cy.get(".card").eq(1).find("img").click();
      cy.get("svg[data-icon=arrow-circle-left]").click();
      cy.url().should("not.include", `/movies`);
      
    });
    it("should navigate from favorites page to movie details and back", () => {

      cy.get(".card").eq(0).find("button").click();
      cy.get("nav").find("li").eq(2).find("a").click();
      cy.get(".card").eq(0).find("img").click();
      cy.get("svg[data-icon=arrow-circle-left]").click();
      
    });
  });

});