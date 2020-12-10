import React from "react";

import "./ActorDetails.css";
import { Container ,Divider} from 'semantic-ui-react'


export default ({actor}) => {


  return (
    <>


  <div>
  <Container textAlign='center'>{actor.name}</Container>
  <Container text>
    
      <h4>biography</h4>
      <Divider />
      <p>{actor.biography}</p>
      </Container>
      
      </div>
      
     
      
    </>
  );
};

