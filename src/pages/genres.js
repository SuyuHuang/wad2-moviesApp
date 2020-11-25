import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToWatchListButton from '../components/buttons/addToWatchList';
import Genrevalue from '../components/movieDetails/index'
import { GenresContext } from '../../contexts/genresContext' 


const GenreListPage = (props) => {
  const context = useContext(MoviesContext);
  const movies = context.upcoming.filter((m) => {  // New
    return (              
    this.props.value);
  });
  
  return (
    <PageTemplate
      title="No. Movies"
      movies={movies}  /* Changed */
      action={(upcoming) => {
        return <AddToWatchListButton movie={upcoming} />;

        // {context.genres.map(genre => {
        //     return (
            //   <option key={genre.id} value={genre.id}>
            //     {genre.name}
            //   </option>
        //     );
        //   })}
          
      }}
    />
  );
};

export default GenreListPage;