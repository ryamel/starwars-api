import React from 'react';
import {Link, useParams} from 'react-router-dom';
import useMovieData from '../../hooks/useMovieData';

const Filmdetailspage = (props) => {
  let {id} = useParams();
  let data = useMovieData('https://swapi.dev/api/films/' + id);


  
  const results = () => {
    if ( data == null) {
      return <div>Loading...</div>
    } else {
      return (
        <>
          <div id="metdata-container">
            <div><b>Title</b> {data.title}</div>
            <div><b>Director</b> {data.director}</div>
            <div><b>Producer</b> {data.producer}</div>
            <div><b>Release Date</b> {data.release_date}</div>
          </div>
          <p><b>Characters</b></p>
          { data.characters.map((character, index) => 
              <div className='detail-listing' key={index}>
                <Link to={{ pathname: "/character/" + character.url.match(/\d+/g).join(''), state: {data: character} }}>
                  {character.name} 
                </Link>
              </div> 
            )
          }
          <p><b>Planets</b></p>
          { data.planets.map((planet, index) => 
              <div className='detail-listing' key={index}>
                <Link to={{ pathname: "/planet/" + planet.url.match(/\d+/g).join(''), state: {data: planet} }}>
                  {planet.name} 
                </Link>
              </div> 
            )
          }
          <p><b>Vehicles</b></p>
          { data.vehicles.map((vehicle, index) =>  
              <div className='detail-listing' key={index}>
                <Link to={{ pathname: "/vehicle/" + vehicle.url.match(/\d+/g).join(''), state: {data: vehicle} }}>
                  {vehicle.name} 
                </Link>
              </div> 
            )
          } 
        </>
      )
    }
  }



  return (
    <div className='page-container'> 
      <p><b>Film Details</b></p>
      { results() }
    </div>
  )
}

export default Filmdetailspage; 