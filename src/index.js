import React,{ lazy,Suspense }from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom"    // CHANGED
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import 'semantic-ui-css/semantic.min.css'
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import ActorContextProvider from "./contexts/ActorContext";
import { FirebaseAppProvider } from 'reactfire' ;
import firebaseConfig from './firebaseSDK' ;



// import FavoriteMoviesPage from './pages/favoritesMoviesPage'
// import HomePage from "./pages/homePage";
// import ACtorPage from "./pages/Actorpage"
// import MoviePage from './pages/movieDetailsPage'
// import ActorDetailPage from './pages/ActorDetailsPage'
// import MovieReviewPage from "./pages/movieReviewPage";
// import SiteHeader from './components/siteHeader'
// import UpcomingMovieCard from './pages/UpcomingPage';

// import AddMovieReviewPage from './pages/addMovieReviewPage'
// import GenrePage from "./pages/genres";

 
// import SignupPage from './pages/Signup'
 
 
// import LoginPage from './pages/Login'



const FavoriteMoviesPage = lazy(() => import("./pages/favoritesMoviesPage"));
const HomePage = lazy(() => import("./pages/homePage"));
const ACtorPage = lazy(() => import("./pages/Actorpage"));
const MoviePage = lazy(() => import("./pages/movieDetailsPage"));
const ActorDetailPage = lazy(() => import("./pages/ActorDetailsPage"));
const MovieReviewPage = lazy(() => import("./pages/movieReviewPage"));
const SiteHeader = lazy(() => import("./components/siteHeader"));
const UpcomingMovieCard = lazy(() => import("./pages/UpcomingPage"));
const GenrePage = lazy(() => import("./pages/genres"));
const AddMovieReviewPage = lazy(() => import("./pages/addMovieReviewPage"));
const SignupPage = lazy(() => import("./pages/Signup"));
const LoginPage = lazy(() => import("./pages/Login"));



const App = () => {

       

  return (
    // <Suspense fallback={<h1>Loading page....</h1>}>
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
          <Route path="/actor" component={ACtorPage}/>
          <Route path="/actors/:id" component={ActorDetailPage}/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/signup" component={SignupPage}/>

          <Route path="/" component={HomePage} />
   
          
          
          <Redirect from="*" to="/" />
        </Switch>
        
        </ActorContextProvider>
        </GenresContextProvider>
        </MoviesContextProvider>     {/* NEW */}
        
      </div>
      
   
    </div>
    
  </BrowserRouter>
  // </Suspense>

  );
  
};

ReactDOM.render(  <Suspense fallback={<h3>Loading...</h3>}>
  < FirebaseAppProvider firebaseConfig = {firebaseConfig} >
  
   <React.StrictMode><App />,</React.StrictMode>
   
  </FirebaseAppProvider> </Suspense> , document.getElementById("root"));