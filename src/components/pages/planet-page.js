import React, {useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
let source;

const Planetpage = () => {
  const [planet, setPlanet] = useState(null);
  let {id} = useParams();

  useEffect(() => {
    source = axios.CancelToken.source();

    axios.get('https://swapi.dev/api/planets/' + id, {cancelToken: source.token})
    .then(res => setPlanet(res.data))
    .catch(err => console.log(err));

    return () => {
      source.cancel();
    }
  }, [id])

  const results = () => {
    if (planet == null) {
      return <div>Loading...</div>
    } else {
      return (
        <>
          <div className="name-detail">{planet.name}</div>
          <div className="attribute">Climate: {planet.climate}</div>
          <div className="attribute">Diameter(km): {planet.diameter}</div>
          <div className="attribute">Gravity: {planet.gravity}</div>
          <div className="attribute">Orbital Period: {planet.orbital_period}</div>
          <div className="attribute">Population: {planet.population}</div>
          <div className="attribute">Rotation Period(kg): {planet.rotation_period}</div>
          <div className="attribute">Terrain: {planet.terrain}</div>
        </>
      )
    }
  }

  return (
    <div className="page-container">
      <p><b>Planet Details</b></p>
      { results() }
    </div>
  )
}

export default Planetpage;