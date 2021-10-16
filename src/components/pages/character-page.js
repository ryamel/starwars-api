import React from 'react';
import {useLocation} from 'react-router-dom';

const Characterpage = () => {
  let location = useLocation();
  let character = location.state.data;

  return (
    <div className="page-container">
      <p><b>Character Details</b></p>
      <div className="name-detail">{character.name}</div>
      <div className="attribute">Birth Year: {character.birth_year}</div>
      <div className="attribute">Eye color: {character.eye_color}</div>
      <div className="attribute">Gender: {character.gender}</div>
      <div className="attribute">Hair color: {character.hair_color}</div>
      <div className="attribute">Height: {character.height}</div>
      <div className="attribute">Weight: {character.mass} kg</div>
      <div className="attribute">Skin Color: {character.skin_color}</div>
    </div>
  )
}

export default Characterpage;