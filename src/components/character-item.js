import React from 'react'

const CharacterItem = (props) => {
  return (
    <div className="item-container">
      <div className="name">{props.data.name}</div>
      <div className="attribute">Birth Year: {props.data.birth_year}</div>
      <div className="attribute">Eye color: {props.data.eye_color}</div>
      <div className="attribute">Gender: {props.data.gender}</div>
      <div className="attribute">Hair color: {props.data.hair_color}</div>
      <div className="attribute">Height: {props.data.height}</div>
      <div className="attribute">Weight: {props.data.mass} kg</div>
      <div className="attribute">Skin Color: {props.data.skin_color}</div>
    </div>
  )
}

export default CharacterItem;