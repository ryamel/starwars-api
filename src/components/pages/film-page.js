import React, {useState, useEffect} from 'react'
import axios from 'axios';
import FilmItem from '../film-item';
import './film-page.sass';

const Filmpage = () => {
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

  const results = () => {
    let filteredData = data.results.filter((result) => 
      result.title.toLowerCase().includes(search.toLowerCase()) || result.opening_crawl.toLowerCase().includes(search.toLowerCase())
    );
    return filteredData.map((filmData, index) => <FilmItem key={index} data={filmData} />)
  }

  return (
    <div className="page-container">
      <input 
        id="search-field"
        placeholder="Search"
        type='text'
        value={search}
        onChange={(e) => setSearch(e.target.value)} />
        {
          data == null ? <div>Loading...</div> : results()
        }
    </div>
  )
}

export default Filmpage;