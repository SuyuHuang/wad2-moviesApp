import React from "react";

import "./ActorDetails.css";

export default ({actor}) => {
 console.log(actor.also_known_as)
  // const gernename=props.location.state.name;
  // console.log(props.location.state.knownfor)
  // console.log(gernename)
  // console.log(props)
  return (
    <>
      <h1>{actor.name}</h1>
      <h4>biography</h4>
      <p>{actor.biography}</p>
      
      <ul className="list-group list-group-horizontal"> 
          
        <li key="ruh" className="list-group-item list-group-item-dark">
        Birthday
        </li>
        <li key="rut" className="list-group-item ">
          {actor.birthday}
        </li>
           
        <li key="bruh" className="list-group-item list-group-item-dark">
        Place of birth
        </li>
        <li key="brut" className="list-group-item ">
          {actor.place_of_birth}
        </li>
        <li key="rdh" className="list-group-item list-group-item-dark">
        gender
        </li>
        
        <li key="rdv" className="list-group-item ">
          {actor.gender}
        </li>
      

        
      </ul>
      <ul className="list-group list-group-horizontal">
      <li key="cruh" className="list-group-item list-group-item-dark">
        Other names
        </li>
        <li key="crut" className="list-group-item ">
          {actor.also_known_as}    
        </li>
<ul className="list-group list-group-horizontal">Q
        <li key="druh" className="list-group-item list-group-item-dark">
        The kind of moive that he is good at
        </li>
        <li key="drut" className="list-group-item ">
          {actor.known_for_department}    
        </li>
      </ul>
      </ul>
      
    </>
  );
};

