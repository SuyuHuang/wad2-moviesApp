import React from "react";
import {withRouter } from "react-router-dom";
import ActorDetails from "../components/ActorDetails";
import PageActorTemplate from "../components/templateActorPage";
import useActor from "../hooks/useActor";

const ActorPage = props => {
    
    const {id} = props.match.params;
  
    const [actor] = useActor(id)  // NEW
    

    
  
  return (
    <>
    {actor ? (
      <>
        <PageActorTemplate actor={actor}>
          <ActorDetails actor={actor} />
        </PageActorTemplate>
        <div className="row">
          <div className="col-12 ">
         
          </div>
        </div>
        
      </>
    ) : (
      <p>Waiting for movie details</p>
    )}
  </>
  );
    }

    export default withRouter(ActorPage);