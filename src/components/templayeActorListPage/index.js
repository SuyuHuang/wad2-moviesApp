import React from "react";
import Header from "../headerMovieList";
import ActorList from "../ActorList";


const ActorListPageTemplate = ({ actors, title, action }) =>  {
 
 
  let displayedActors = actors
    
   


  return (
    <>
      <Header title={title} numMovies={displayedActors.length} />
      
      <ActorList
         action={action}
         actors={displayedActors}
      ></ActorList>
    </>
  );
};

export default ActorListPageTemplate ;