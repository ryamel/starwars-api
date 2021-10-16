import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import useApi from '../../hooks/useApi';

const Filmdetailspage = (props) => {
  let location = useLocation();

  let characters = useApi(location.state.characters);
  let planets = useApi(location.state.planets);
  let vehicles = useApi(location.state.vehicles);

  const metaData = () => {
    return (
      <div id="metdata-container">
        <div><b>Title</b> {location.state.title}</div>
        <div><b>Director</b> {location.state.director}</div>
        <div><b>Producer</b> {location.state.producer}</div>
        <div><b>Release Date</b> {location.state.release_date}</div>
      </div>
    )
  }

  if (characters == null || planets == null || vehicles == null) {
    return (
      <div className='page-container'>
        { metaData() }
        <div>Loading...</div>
      </div>
    )
  } else {
    return (
      <div className='page-container'>
        { metaData() }

        <p><b>Characters</b></p>
        {
          characters.map((character, index) => 
            <div className='detail-listing' key={index}>
              <Link to={{ pathname: "/character", state: {data: character} }}>
                {character.name} 
              </Link>
            </div> 
          )
        }

        <p><b>Planets</b></p>
        {
          planets.map((planet, index) => 
            <div className='detail-listing' key={index}>
              <Link to={{ pathname: "/planet", state: {data: planet} }}>
                {planet.name} 
              </Link>
            </div> 
          )
        }

        <p><b>Vehicles</b></p>
        {
          vehicles.map((vehicle, index) =>  
            <div className='detail-listing' key={index}>
              <Link to={{ pathname: "/vehicle", state: {data: vehicle} }}>
                {vehicle.name} 
              </Link>
            </div> 
          )
        }

      </div>
    )
  }
}

export default Filmdetailspage; 
