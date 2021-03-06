import React from "react";
import { Link } from "react-router-dom";
import "./movieCard.css";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MovieCard = ({movie, action}) => {

  return (
    <div className="col-sm-3">
      <div className="card  bg-white">
    
      <Link to={`/movies/${movie.id}`}>
        <img
          className="card-img-tag center "
          alt={movie.title}
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : "./film-poster-placeholder.png"
          }
        />
        </Link>
 
        <div className="card-body">
          <h4 className="card-title ">{movie.title}</h4>
          <p>
          
          <i class="calendar icon"></i>
            <span> {movie.release_date}</span>
          </p>
          <p>
            <FontAwesomeIcon icon={["fas", "star"]} />
            <span> {movie.vote_average}</span>
          </p>
          <p>
          <i class="gripfire icon"></i>
            <span className="popularity"> {movie.popularity}</span>
          </p>
          <p>
          <i class="frown icon"></i>
            <span> {movie.vote_count}</span>
          </p>
          

          
        </div>

        
        <div className="card-footer">
           {action(movie)}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;