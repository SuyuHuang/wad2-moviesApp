import React from "react";
import { Link } from "react-router-dom";
import "./ActorCard.css";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ActorCard = ({actors}) => {

  return (
    <div className="col-sm-3">
      <div className="card  bg-white">
      <Link to={`/actors/${actors.id}`}>
        <img
          className="card-img-tag center "
          alt={actors.title}
          src={
           actors.profile_path
              ? `https://image.tmdb.org/t/p/w500/${actors.profile_path}`
              : "./film-poster-placeholder.png"
          }
        />
        </Link>
        <div className="card-body">
          <h4 className="card-title ">{actors.name}</h4>
          <p>
            <FontAwesomeIcon icon={["fas", "calendar"]} />
            <span> {actors.birthday}</span>
          </p>
          <p>
            <FontAwesomeIcon icon={["fas", "star"]} />
            <span> {actors.place_of_birth}</span>
          </p>
        </div>
        <div className="card-footer">
          
        </div>
      </div>
    </div>
  );
};

export default ActorCard;