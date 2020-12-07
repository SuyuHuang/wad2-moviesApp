let movies;    // List of movies from TMDB

// Utility functions

const compare=(property,desc)=>{
  return function (a, b) {
      var value1 = a[property];
      var value2 = b[property];
      if(desc===true){         
          return value1 - value2;
      }else{
          return value2 - value1;
      }
  }
}

const filterBySortin = (movieList, sortFilter) =>
  movieList.sort(compare(sortFilter,false));

const filterByTitle = (movieList, string) =>
  movieList.filter((m) => m.title.toLowerCase().search(string) !== -1);

const filterByGenre = (movieList, genreId) =>
  movieList.filter((m) => m.genre_ids.includes(genreId));

describe("Home Page ", () => {
  before(() => {
    // Get movies from TMDB and store in movies variable.
    cy.request(
      `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")    // Take the body of HTTP response from TMDB
      .then((response) => {
        movies = response.results
      })
  })
  beforeEach(() => {
    cy.visit("/")
  });

  describe("Base tests", () => {
    it("displays page header", () => {
      cy.get("h2").contains("No. Movies");
      cy.get(".badge").contains(20);
  });
  describe("Filtering", () => {
    describe("By movie title" ,() => {
      it("should display movies with 'p ' in the title", () => {
        const searchString = 'p'
        const matchingMovies = filterByTitle(movies, searchString );
        cy.get("input").clear().type(searchString) ;
        cy.get(".card").should("have.length", matchingMovies.length);
        cy.get(".card").each(($card, index) => {
          cy.wrap($card)
          .find(".card-title")
          .should("have.text", matchingMovies[index].title);
        });
      })
      it("should display movies with 'o' in the title", () => {
        const searchString = "o";
        const matchingMovies = filterByTitle(movies, searchString);
        cy.get("input").clear().type(searchString);
        cy.get(".card").should("have.length", matchingMovies.length);
        cy.get(".card").each(($card, index) => {
          cy.wrap($card)
          .find(".card-title")
          .should("have.text", matchingMovies[index].title);
        })
      })
    })
    it("should display nothing when their are no mathches", () => {
      const searchString = "xyz";
      const matchingMovies = filterByTitle(movies, searchString);
      cy.get("input").clear().type(searchString);
      cy.get(".children").should("have.length", 0);
      
     
          
    })
    
  
    describe("By movie genre", () => {
      it("should display movies with the specified genre only", () => {
        const selectedGenreId = 35;
        const selectedGenreText = "Comedy";
        const matchingMovies = filterByGenre(movies, selectedGenreId);
        cy.get("select").eq(0).select(selectedGenreText); 
        cy.get(".card").should("have.length", matchingMovies.length);
        cy.get(".card").each(($card, index) => {
          cy.wrap($card)
            .find(".card-title")
            .should("have.text", matchingMovies[index].title);
        });      
      });
      it("should display movies with the speficied genre and text", () => {
        const searchString = 'f'
        const selectedGenreId = 35;
        const selectedGenreText = "Comedy";
        const matchingMovies = filterByGenre(filterByTitle(movies, searchString),selectedGenreId);
        cy.get("input").clear().type(searchString) ;
        cy.get("select").eq(0).select(selectedGenreText); 
        cy.get(".card").should("have.length", matchingMovies.length);
        cy.get(".card").each(($card, index) => {
          cy.wrap($card)
          .find(".card-title")
          .should("have.text", matchingMovies[index].title);
        });
      }
      
      )
   
  });
  describe("By the sortby option", () => {
    it("should display movies with the speficied sortby value", () => {
      const sortFilter = 'popularity'
      const matchingMovies = filterBySortin(movies,sortFilter);
      // cy.get("input").clear().type(searchString) ;
      cy.get("select").eq(1).select(sortFilter); 
      cy.get(".card").should("have.length", matchingMovies.length);
      cy.get(".card").each(($card, index) => {
        cy.wrap($card)
        .find(".card-title")
        .should("have.text", matchingMovies[index].title);
      });
    })

  })
  

  it("displays page header", () => {
    cy.get("h2").contains("No. Movies");
    cy.get(".badge").contains(20);
  })

});
})
})