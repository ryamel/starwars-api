import React from 'react'

const PlanetItem = (props) => {
  return (
    <div className="item-container">
      <div className="name">{props.data.name}</div>
      <div className="attribute">Climate: {props.data.climate}</div>
      <div className="attribute">Diameter: {props.data.diameter} km</div>
      <div className="attribute">Gravity: {props.data.gravity}</div>
      <div className="attribute">Orbital Period: {props.data.orbital_period}</div>
      <div className="attribute">Population: {props.data.population}</div>
      <div className="attribute">Rotation Period: {props.data.rotation_period} kg</div>
      <div className="attribute">Terrain: {props.data.terrain}</div>
    </div>
  )
}

export default PlanetItem;