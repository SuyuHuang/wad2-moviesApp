import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom"    // CHANGED
import FavoriteMoviesPage from './pages/favoritesMoviesPage'
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage'
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingMovieCard from './pages/UpcomingPage';
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import GenrePage from "./pages/genres";
const App = () => {
  return (
    <BrowserRouter>
    <div className="jumbotron">
      <SiteHeader /> 
      <div className="container-fluid">
        <MoviesContextProvider>     {/* NEW  */}
        <GenresContextProvider>
        <Switch>
        <Route exact path="/reviews/form" component={AddMovieReviewPage} />
          <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
          <Route exact path="/movies/upcoming" component={UpcomingMovieCard} />
          <Route path="/reviews/:id" component={MovieReviewPage} />
          <Route path="/movies/:id" component={MoviePage} />
          <Route path="/genres/:name" component={GenrePage}/>
          <Route path="/" component={HomePage} />
          
          
          <Redirect from="*" to="/" />
        </Switch>
        </GenresContextProvider>
        </MoviesContextProvider>     {/* NEW */}
      </div>
    </div>
  </BrowserRouter>

  );
};

ReactDOM.render(<App />, document.getElementById("root"));