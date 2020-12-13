import React, { useEffect, createContext, useReducer } from "react";
import { getActors } from "../api/tmdb-api";

export const ActorContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    
    case "load":
      return { actors: action.payload.actors };
      
   
   
    default:
      return state;
  }
};

const ActorContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { actors: [] });



  useEffect(() => {
    getActors().then((actors) => {
    
      dispatch({ type: "load", payload: { actors:actors } });
    
      
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect((person_id)=>{
  //   getActor(person_id).then((actor)=>{
  //     dispatch({
  //       type:"load",payload:{actor} });
    
  //     });
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);

 

  return (
    <ActorContext.Provider
      value={{
        actors: state.actors
        
      }}
    >
      {props.children}
    </ActorContext.Provider>
  );
};

export default ActorContextProvider;