import React, { useContext } from "react";
import {ActorContext} from '../contexts/ActorContext'
import TemplateActorPage from "../components/templayeActorListPage";
const ActorListPage = () => {
  const context = useContext(ActorContext);
  const actors = context.actors.filter((m) => {  // New
    console.log(m)
    return m;
  },
);

  return (
    <TemplateActorPage
      title="The actors"
      actors={actors}  /* Changed */
      
    />
  );
};

export default ActorListPage;