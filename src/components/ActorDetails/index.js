import React from "react";

import "./ActorDetails.css";
import { Container, Header ,Divider} from 'semantic-ui-react'
import { List } from 'semantic-ui-react'

export default ({actor}) => {

  // const gernename=props.location.state.name;
  // console.log(props.location.state.knownfor)
  // console.log(gernename)
  // console.log(props)
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

