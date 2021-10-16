import React from 'react';
import {useLocation} from 'react-router-dom';

const Planetpage = () => {
  let location = useLocation();
  let planet = location.state.data;

  return (
    <div className="page-container">
      <p><b>Planet Details</b></p>
      <div className="name-detail">{planet.name}</div>
      <div className="attribute">Climate: {planet.climate}</div>
      <div className="attribute">Diameter(km): {planet.diameter}</div>
      <div className="attribute">Gravity: {planet.gravity}</div>
      <div className="attribute">Orbital Period: {planet.orbital_period}</div>
      <div className="attribute">Population: {planet.population}</div>
      <div className="attribute">Rotation Period(kg): {planet.rotation_period}</div>
      <div className="attribute">Terrain: {planet.terrain}</div>
    </div>
  )
}

export default Planetpage;