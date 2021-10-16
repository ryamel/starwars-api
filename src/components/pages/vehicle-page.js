import React from 'react';
import {useLocation} from 'react-router-dom';

const VehicleItem = (props) => {
  let location = useLocation();
  let vehicle = location.state.data;
  console.log(location);

  return (
    <div className="page-container">
      <p><b>Vehicle Details</b></p>
      <div className="name-detail">{vehicle.name}</div>
      <div className="attribute">Cargo Capacity: {vehicle.cargo_capacity}</div>
      <div className="attribute">Consumables: {vehicle.consumables} km</div>
      <div className="attribute">Cost In Credits: {vehicle.cost_in_credits}</div>
      <div className="attribute">Crew: {vehicle.crew}</div>
      <div className="attribute">Length: {vehicle.length} m</div>
      <div className="attribute">Manufacturer: {vehicle.manufacturer}</div>
      <div className="attribute">Model: {vehicle.model}</div>
      <div className="attribute">Passengers: {vehicle.passengers}</div>
    </div>
  )
}

export default VehicleItem;