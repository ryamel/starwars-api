import React from 'react'

const VehicleItem = (props) => {
  return (
    <div className="item-container">
      <div className="name">{props.data.name}</div>
      <div className="attribute">Cargo Capacity: {props.data.cargo_capacity}</div>
      <div className="attribute">Consumables: {props.data.consumables} km</div>
      <div className="attribute">Cost In Credits: {props.data.cost_in_credits}</div>
      <div className="attribute">Crew: {props.data.crew}</div>
      <div className="attribute">Length: {props.data.length} m</div>
      <div className="attribute">Manufacturer: {props.data.manufacturer}</div>
      <div className="attribute">Model: {props.data.model}</div>
      <div className="attribute">Passengers: {props.data.passengers}</div>
    </div>
  )
}

export default VehicleItem;