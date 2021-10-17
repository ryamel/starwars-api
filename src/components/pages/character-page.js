import React, {useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
let source;

const Characterpage = () => {
  const [character, setCharacter] = useState(null);
  let {id} = useParams();

  useEffect(() => {
    source = axios.CancelToken.source();

    axios.get('https://swapi.dev/api/people/' + id, {cancelToken: source.token})
    .then(res => setCharacter(res.data))
    .catch(err => console.log(err));
    
    return () => {
      source.cancel();
    }
  }, [id])


  const results = () => {
    if (character == null) {
      return <div>Loading...</div>
    } else {
      return (
        <>
          <div className="name-detail">{character.name}</div>
          <div className="attribute">Birth Year: {character.birth_year}</div>
          <div className="attribute">Eye color: {character.eye_color}</div>
          <div className="attribute">Gender: {character.gender}</div>
          <div className="attribute">Hair color: {character.hair_color}</div>
          <div className="attribute">Height (cm): {character.height}</div>
          <div className="attribute">Weight (kg): {character.mass}</div>
          <div className="attribute">Skin Color: {character.skin_color}</div>
        </>
      )
    }
  }

  return (
    <div className="page-container">
      <p><b>Character Details</b></p>
      { results() }
    </div>
  )
}

export default Characterpage;