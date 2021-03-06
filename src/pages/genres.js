import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'

import {MoviesContext} from '../contexts/moviesContext'
import AddToFavoritesButton from '../components/buttons/addToFavorites'


const GenreListPage = (props) => {
  const context = useContext(MoviesContext);
  const gernename=props.location.state.name;

  const movies = context.upcoming.filter((m)=>{
    

    return m.genre_ids.indexOf(props.location.state.id)>-1
  });
  
  
  return (
    
    <PageTemplate
    title={gernename+""}
      movies={movies}  /* Changed */
      action={(movie) => {
        return <AddToFavoritesButton movie={movie} />;
          
      }}
    />
    
  );
};

export default GenreListPage;