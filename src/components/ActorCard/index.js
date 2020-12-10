import React from "react";
import { Link } from "react-router-dom";

import "../../globals/fontawesome";

import { Header, List } from 'semantic-ui-react'
const ActorCard = ({ actors }) => {


  return (
    <div className="col-sm-3">
      <div >
        <Link to={
          {
            pathname: `/actors/${actors.id}`,
            state: { knownfor: actors.known_form, id: actors.id }
          }
        }

        >

          <img
            className="card-img-tag center "
            class="ui medium circular"
            alt={actors.title}
            src={
              actors.profile_path
                ? `https://image.tmdb.org/t/p/w500/${actors.profile_path}`
                : "./film-poster-placeholder.png"
            }
          />
        </Link>
        <div className="card-body">
          <Header as='h2' icon textAlign='center' className="card-title">
            <Header.Content>{actors.name}</Header.Content>
          </Header>
          <List>
            <List.Item>
              <List.Header>  <i class="fire icon"></i>popularity</List.Header>{actors.popularity}
            </List.Item>
            <List.Item>
              <List.Header>  <i class="star icon"></i>Magnum opus</List.Header><Link to={
                {
                  pathname: `/movies/${actors.known_for[0].id}`,

                }
              }

              >
                {actors.known_for[0].original_title}

              </Link>
            </List.Item>
          </List>



        </div>
        {/* <div className="card-body"   class="ui medium circular">
          <h4 className="card-title " size='huge'>{actors.name}</h4>
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
        </div> */}
        <div >

        </div>
      </div>
    </div>
  );
};

export default ActorCard;