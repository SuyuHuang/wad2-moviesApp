import React, { useState } from "react";
import Header from "../headerMovieList";
import MovieList from "../movieList";
import FilterControls from "../filterControls";




const MovieListPageTemplate = ({ movies, title, action }) =>  {


  
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const [sortFilter,setsortFilter]=useState("0");
  const [sortinFilter,setsortinFilter]=useState(false);
  const genre = Number(genreFilter)

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

  let displayedMovies = movies
    .filter(m => {
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter(m => {
      return  genre > 0
        ? m.genre_ids.includes(Number(genreFilter))
        : true;
    }
    )
    .sort(compare(sortFilter,sortinFilter))

  const handleChange = (type, value) => {

      if (type === "name") setNameFilter(value);
    else if(type==="genre") setGenreFilter(value);
    else if(type==="ASC"){   setsortinFilter(false)
  }
    else if(type==="DESC") {  
      setsortinFilter(true);

    }
    else { setsortFilter(value);

    }
  
    
  };

  return (
    <>
      <Header title={title} numMovies={displayedMovies.length} />
      <FilterControls onUserInput={handleChange} numMovies={displayedMovies.length}/>
      <MovieList
         action={action}
         movies={displayedMovies}
      ></MovieList>
    </>
  );
};

export default MovieListPageTemplate ;