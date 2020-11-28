import React from "react";
import { Link } from "react-router-dom";
import "./ActorCard.css";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ActorCard = ({actors}) => {
  console.log(actors.known_for)

  return (
    <div className="col-sm-3">
      <div className="card  bg-white">
      <Link to={
              {
                pathname:`/actors/${actors.id}`,
                state:{knownfor:actors.known_form,id:actors.id}
              }
            }
                
              >       
    
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
            
           
            <span> {actors.popularity}</span>
          </p>
          <p>
            <FontAwesomeIcon icon={["fas", "star"]} />
            <span> 
           
              <Link to={
              {
                pathname:`/movies/${actors.known_for[0].id}`,
              
              }
            }
                
              >
             {actors.known_for[0].original_title}

              </Link>
            </span>
          </p>
        </div>
        <div className="card-footer">
          
        </div>
      </div>
    </div>
  );
};

export default ActorCard;