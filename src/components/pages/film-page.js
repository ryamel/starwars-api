import React, {useState, useEffect} from 'react'
import axios from 'axios';
import FilmItem from '../film-item';
import './film-page.sass';

const Datapage = () => {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState('');
  
  useEffect(() => {
    axios.get('https://swapi.dev/api/films/')
      .then(res => {
        console.log(res.data);
        setData(res.data);
      })
      .catch(err => console.log(err));
  }, [])

  if (data == null) {
    return (
      <div className="page-container">
      <input 
        id="search-field"
        placeholder="Search By Title"
        type='text'
        value={search}
        onChange={(e) => setSearch(e.target.value)} />
        <div>Loading...</div>
    </div>
    ); 
  } else {
    let filteredData = data.results.filter((result) => result.title.toLowerCase().includes(search.toLowerCase()));
    return (
      <div className="page-container">
        <input 
          id="search-field"
          placeholder="Search By Title"
          type='text'
          value={search}
          onChange={(e) => setSearch(e.target.value)} />
        { 
          filteredData.map((filmData, index) => <FilmItem index={index} data={filmData} />) 
        }
      </div>
    )
  }
}

export default Datapage;