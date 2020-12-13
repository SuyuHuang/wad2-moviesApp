import React, { useEffect, createContext, useReducer } from "react";
import { getActor } from "../api/tmdb-api";

export const ActorsContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    
    case "load":
      return { actor: action.payload.actor };
      
   
   
    default:
      return state;
  }
};

const ActorsContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { actor: [] });



  

  useEffect((person_id)=>{
    getActor(person_id).then((actor)=>{
      dispatch({
        type:"load",payload:{actor} });
    
      });
    }, []);

 

  return (
    <ActorsContext.Provider
      value={{
        actors: state.actors
        
      }}
    >
      {props.children}
    </ActorsContext.Provider>
  );
};

export default ActorsContextProvider;