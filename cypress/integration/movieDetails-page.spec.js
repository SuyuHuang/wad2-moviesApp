let movieId = null
let movie;
let reviews;
let movies

const filterByGenre = (movieList, genreId) =>
  movieList.filter((m) => m.genre_ids.includes(genreId));
describe("Movie Details Page", () => {
  before(() => {



    
    cy.request(
      `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")
      .then((response) => {
        return response.results[2].id;
      })
      .then((arbitraryMovieIdignored) => {
        movieId = arbitraryMovieIdignored
        return cy
          .request(
            `https://api.themoviedb.org/3/movie/${movieId}?api_key=${Cypress.env(
              "TMDB_KEY"
            )}`
          )
          .its("body");
      })
      .then((movieDetails) => {
        movie = movieDetails;
        console.log(movie)
        return movieDetails.id;
      })
      cy.request(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${Cypress.env(
          "TMDB_KEY"
        )}&language=en-US&page=1`
      )
        .its("body")    // Take the body of HTTP response from TMDB
        .then((response) => {
          movies = response.results
        })
  });
  beforeEach(() => {
    cy.visit(`/`);
    cy.get(".card").eq(2).find("img").click();
  });

  it("should display movie title in the page header", () => {
    cy.get("h2").contains(movie.title);
  });
  
  it("should display the movie's details", () => {
    cy.get("h4").contains("Overview");
    cy.get("h4").next().contains(movie.overview);
    cy.get("ul")
      .eq(1)
      .within(() => {
        cy.get("li").eq(0).contains("Runtime");
        cy.get("li").eq(1).contains(movie.runtime);
        cy.get("li").eq(2).contains("Release Date");
        cy.get("li").eq(3).contains(movie.release_date);
      });
    })
    it("should display the Home icon with the correct URL value", () => {
        cy.get(".fa-home")
          .parent()
          .should("have.attr", "href")
          .should("include", movie.homepage);
      });
      it("should display the poster correctly", () => {
        cy.get(".movie")
          .should("have.attr", "src")
          .should("include", movie.poster_path);
      });
      
  it("should display the movie according to the genres clicked", () => {
    const selectedGenreId = 28;
     
        const matchingMovies = filterByGenre(movies, selectedGenreId)
    cy.get("h4").contains("Overview");
    cy.get("h4").next().contains(movie.overview);
    cy.get("ul")
      .eq(2)
      .within(() => {
        cy.get("li").eq(0).contains("Genres");
        cy.get("li").eq(1).click();
        
   
      });
      cy.get(".card").should("have.length", matchingMovies.length);
    })
      

});