import React from "react";
import ActorHeader from '../headerActor'
import './actorPage.css'



const TemplateActorPage = ({actor,children }) => {
  return (
   
    <>
    
      <ActorHeader actors={actor} />
      <h1>{actor.adult}</h1>
      <div className="row">
        <div className="col-3">
          <img
            src={
              actor.profile_path

                ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`

                // https://api.themoviedb.org/3/person/{actors.person_id}/images?api_key=6ee3e9a0aa44e4dc5951e0598bae1695
                : "./film-poster-placeholder.png"
            }
            className="actor"
            alt={actor.name}
          />
        </div>
        <div className="col-9">{children}</div>
        
      </div>
    </>
  );
};

export default TemplateActorPage;