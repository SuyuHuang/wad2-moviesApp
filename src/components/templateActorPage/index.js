import React from "react";
import ActorHeader from '../headerActor'
import './actorPage.css'

import { List } from 'semantic-ui-react'

let sex
let source
const judge=((gender)=>{
  if(gender===1){
    sex='female'
    source='mars icon'

  }
  else{
    sex='male'
    source='venus icon'
  }
})
const TemplateActorPage = ({actor,children }) => {
  judge(actor.gender)
  return (
   
    <>
    
      <ActorHeader actors={actor} />
      <h1>{actor.adult}</h1>
      <div className="row">
        <div className="col-3" >
          <div  className="col-3" class="ui medium circular image">
          <img
          class="ui medium circular image"
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
           <List>
    <List.Item>
      <List.Header>  <i class="birthday cake icon"></i>Birthday</List.Header>{actor.birthday}
    </List.Item>
    <List.Item>
      <List.Header>  <i class="location arrow icon"></i>Place of Birth</List.Header>  {actor.place_of_birth}
    </List.Item>
    <List.Item>
     
      <List.Header>  <i class={source}></i>Gender</List.Header>  {sex}
    </List.Item>
    <List.Item>
      <List.Header>  <i class="circle icon"></i>Good At</List.Header>{actor.known_for_department}
    </List.Item>
    <List.Item>
      <List.Header>  <i class="coffee icon"></i>Other Name</List.Header>{actor.also_known_as}
    </List.Item>
  </List>
        </div>
        <div className="col-9">{children}</div>
       
      </div>
    </>
  );
};

export default TemplateActorPage;