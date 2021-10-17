import {useEffect,useState} from 'react';
import axios from 'axios';
let source;

export default function useMovieData(uri) {
  const [data, setData] = useState(null);

  useEffect(() => {
    getMovieData(uri);

    async function getMovieData(uri) {
      source = axios.CancelToken.source();
      const res = await axios.get(uri, {cancelToken: source.token});
      let promises = [
        [], // characters
        [], // planets
        []  // vehicles
      ];

      // create array of promises for each (character, planet, vehicles)
      for (let i = 0; i < res.data.characters.length; i++) {
        promises[0].push(axios.get(res.data.characters[i], {cancelToken: source.token}));
      }
      for (let i = 0; i < res.data.planets.length; i++) {
        promises[1].push(axios.get(res.data.planets[i], {cancelToken: source.token}));
      }
      for (let i = 0; i < res.data.vehicles.length; i++) {
        promises[2].push(axios.get(res.data.vehicles[i], {cancelToken: source.token}));
      }

      // combine all promises
      const promise4all = Promise.all(
        promises.map((inarray) => {
          return Promise.all(inarray);
        })
      );

      // once all promises resolve, combine all data into single object
      promise4all.then(arr => {
        for (let i=0; i < arr[0].length; i++) {
          res.data.characters[i] = arr[0][i].data;
        }
        for (let i=0; i < arr[1].length; i++) {
          res.data.planets[i] = arr[1][i].data;
        }
        for (let i=0; i < arr[2].length; i++) {
          res.data.vehicles[i] = arr[2][i].data;
        }
        setData(res.data);
      });
    }
    return () => {
      source.cancel();
    }

  }, [uri])

  return data;
}