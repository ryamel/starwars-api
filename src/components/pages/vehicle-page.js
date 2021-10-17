import React, {useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
let source;

const VehicleItem = (props) => {
  const [vehicle, setVehicle] = useState(null);
  let {id} = useParams();

  useEffect(() => {
    source = axios.CancelToken.source();

    axios.get('https://swapi.dev/api/vehicles/' + id, {cancelToken: source.token})
    .then(res => setVehicle(res.data))
    .catch(err => console.log(err));

    return () => {
      source.cancel();
    }
  }, [id])

  const results = () => {
    if (vehicle == null) {
      return <div>Loading...</div>
    } else {
      return (
        <>
          <div className="name-detail">{vehicle.name}</div>
          <div className="attribute">Cargo Capacity: {vehicle.cargo_capacity}</div>
          <div className="attribute">Consumables(km): {vehicle.consumables}</div>
          <div className="attribute">Cost In Credits: {vehicle.cost_in_credits}</div>
          <div className="attribute">Crew: {vehicle.crew}</div>
          <div className="attribute">Length(m): {vehicle.length}</div>
          <div className="attribute">Manufacturer: {vehicle.manufacturer}</div>
          <div className="attribute">Model: {vehicle.model}</div>
          <div className="attribute">Passengers: {vehicle.passengers}</div>
        </>
      )
    }
  }

  return (
    <div className="page-container">
      <p><b>Vehicle Details</b></p>
      { results() }
    </div>
  )
}

export default VehicleItem;