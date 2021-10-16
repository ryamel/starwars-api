import React from 'react';
import './film-item.sass';
import {Link} from "react-router-dom";

const FilmItem = (props) => {
  return (
    <div className="film-container">
      <Link 
        className="link" 
        to={{
          pathname: "/details",
          state: {
            characters: props.data.characters, 
            planets: props.data.planets, 
            vehicles: props.data.vehicles, 
            species: props.data.species, 
            starships: props.data.starships ,
            director: props.data.director,
            producer: props.data.producer,
            release_date: props.data.release_date,
            title: props.data.title
          }
        }}>
        <div className="details-btn-link">More Info</div>
      </Link>
      <div><b>{props.data.title}</b></div>
      <div className="description">{props.data.opening_crawl}</div>
    </div>
  )
}


export default FilmItem;