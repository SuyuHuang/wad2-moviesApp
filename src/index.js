import React,{ Suspense }from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom"    // CHANGED
import FavoriteMoviesPage from './pages/favoritesMoviesPage'
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import ACtorPage from "./pages/Actorpage"
import MoviePage from './pages/movieDetailsPage'
import ActorDetailPage from './pages/ActorDetailsPage'
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingMovieCard from './pages/UpcomingPage';
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import ActorContextProvider from "./contexts/ActorContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import GenrePage from "./pages/genres";
import { FirebaseAppProvider } from 'reactfire' ;
import firebaseConfig from './firebaseSDK' ;
import Logout from './components/Signout'
import Login from './components/login'
import Signup from './pages/Signup'
import firebase from 'firebase/app'
import { useUser } from 'reactfire' ;
import { useFirebaseApp } from 'reactfire' ;
import LoginPage from './pages/Login'


const App = () => {

  const user = useUser();

  return (
    <BrowserRouter>
    <div className="jumbotron">
      <SiteHeader /> 
      <div className="container-fluid">
        <MoviesContextProvider>     {/* NEW  */}
        <GenresContextProvider>
          <ActorContextProvider>
        <Switch>
        <Route exact path="/reviews/form" component={AddMovieReviewPage} />
          <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
          <Route exact path="/movies/upcoming" component={UpcomingMovieCard} />
          <Route path="/reviews/:id" component={MovieReviewPage} />
          <Route path="/movies/:id" component={MoviePage} />
          <Route path="/genres/:name" component={GenrePage}/>
          <Route path="/actor/" component={ACtorPage}/>
          <Route path="/actors/:id" component={ActorDetailPage}/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/" component={HomePage} />
   
          
          
          <Redirect from="*" to="/" />
        </Switch>
        </ActorContextProvider>
        </GenresContextProvider>
        </MoviesContextProvider>     {/* NEW */}
      </div>
      
   
    </div>
  </BrowserRouter>
  

  );
  
};

ReactDOM.render(  < FirebaseAppProvider firebaseConfig = {firebaseConfig} >
  <Suspense fallback={<h3>Loading...</h3>}>
   <React.StrictMode><App />,</React.StrictMode>
    </Suspense>
  </FirebaseAppProvider> , document.getElementById("root"));