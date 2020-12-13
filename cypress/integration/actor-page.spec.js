let actorId = null
let actor;
let reviews;
let actors
let sex;
const judge=((gender)=>{
  if(gender===1){
    sex='female'


  }
  else{
    sex='male'

  }
})
describe("Movie Details Page", () => {
  before(() => {


    cy.request(
      `https://api.themoviedb.org/3/person/popular?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&page=1`
    )
      .its("body")
      .then((response) => {
        return response.results[2].id;
      })
      .then((arbitraryMovieIdignored) => {
        actorId = arbitraryMovieIdignored
        return cy
          .request(
            `https://api.themoviedb.org/3/person/${actorId}?api_key=${Cypress.env(
              "TMDB_KEY"
            )}&language=en-US`
          )
          .its("body");
      })
      .then((actorDetails) => {
        actor = actorDetails;

        return actorDetails.id;
      })

    cy.request(
        `https://api.themoviedb.org/3/person/popular?api_key=${Cypress.env(
          "TMDB_KEY"
        )}&language=en-US&page=1`
    )
      .its("body")   
      .then((response) => {
       actors = response.results
      })
  });
  beforeEach(() => {
    cy.visit(`/actor`);
    cy.wait(10000)
    // cy.get(".actor").eq(2).find("img").click({force:true});

  });

  it("should display the actors,name and popularity",()=>{
    cy.get("h2").contains("Actor No.20");
    cy.get(".actor").eq(2).find("h2").contains(actor.name);
    cy.get(".actor").eq(2).find(".item").eq(0).contains(actor.popularity);
  })
  it("should display the details of the actor",()=>{
  cy.get(".actor").eq(2).find("img").click({force:true});
    cy.get(".actordetail")
      .within(() => {
        judge(actor.gender)
        cy.get(".header").eq(0).contains("Birthday");
        cy.get(".item").eq(0).contains(actor.birthday);
        cy.get(".header").eq(1).contains("Place of Birth");
        cy.get(".item").eq(1).contains(actor.place_of_birth);
        cy.get(".header").eq(2).contains("Gender");
        cy.get(".item").eq(2).contains(sex);
        cy.get(".header").eq(3).contains("Good At");
        cy.get(".item").eq(3).contains(actor.known_for_department);
        cy.get(".header").eq(4).contains("Other Name");
       
      })
      });
      it("should display the poster correctly", () => {
        cy.get(".actor").eq(2).find("img").click({force:true});
        cy.get("img")
          .should("have.attr", "src")
          .should("include", actor.profile_path);
      });
      it("should display the biography correctly", () => {
        cy.get(".actor").eq(2).find("img").click({force:true});
        cy.get("h4").contains("biography")
        cy.get(".biography").within(() => {
          cy.get('p').contains(actor.name)
          
      })

      });
})