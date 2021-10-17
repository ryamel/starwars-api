import React from 'react';
import './film-item.sass';
import {Link} from "react-router-dom";

const FilmItem = (props) => {
  // let uriIndex = props.data.url.substr(-2,1);
  return (
    <div className="film-container">
      <Link className="link" to={{pathname: "/details/" + props.data.url.match(/\d+/g).join('')}}>
        <div className="details-btn-link">More Info</div>
      </Link>
      <div><b>{props.data.title}</b></div>
      <div className="description">{props.data.opening_crawl}</div>
    </div>
  )
}


export default FilmItem;