import React from "react";
import Actor from "../ActorCard";
import "./Actorlist.css";

const ActorsList = ({actors, action}) => {
  const ActorsCards = actors.map(m => (
    <Actor key={m.id} actors={m} />
  ));
  return <div className="row movies bg-info">{ActorsCards}</div>;
};

export default ActorsList;