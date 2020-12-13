import React from "react";

import ActorList from "../ActorList";
import { Header ,Image} from 'semantic-ui-react'

const ActorListPageTemplate = ({ actors, title, action }) =>  {
 
 
  let displayedActors = actors
    
   


  return (
    <><Header as='h2'>
    <Image circular src='https://react.semantic-ui.com/images/avatar/large/patrick.png' />
    Actor No.{displayedActors.length}
  </Header>
      <Header title={title} numMovies={displayedActors.length} />
      
      <ActorList
         action={action}
         actors={displayedActors}
      ></ActorList>
    </>
  );
};

export default ActorListPageTemplate ;