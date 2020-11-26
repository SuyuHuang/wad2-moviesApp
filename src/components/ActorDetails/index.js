import React from "react";

import "./ActorDetails.css";


export default ({ actor }) => {
  return (
    <>
      <h4>biography</h4>
      <p>{actor.biography}</p>
      <h1>name:</h1>
      <h2>{actor.name}</h2>
      <ul className="list-group list-group-horizontal">



          
          
        <li key="ruh" className="list-group-item list-group-item-dark">
        Good at Film
        </li>
        <li key="rut" className="list-group-item ">
          {actor.known_for_department}
        </li>
        <li key="rdh" className="list-group-item list-group-item-dark">
        gender
        </li>
        <li key="rdv" className="list-group-item ">
          {actor.gender}
        </li>
      

        
      </ul>
      
    </>
  );
};